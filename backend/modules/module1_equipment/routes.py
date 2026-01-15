# This file CONATINS ROUTES FOR MODULE 1 EQUIPMENT INFORMATION
# Location: backend/modules/module1_equipment/routes.py

from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from backend.core.database import get_db
from .schemas import EquipmentCreate, EquipmentResponse, CustomerDetailsCreate, CustomerDetailsResponse, TestingStandardsPayload, LabSelectionReviewCreate, LabSelectionReviewResponse, QuotationCreate, QuotationResponse
from .services import create_equipment, get_all_equipment, get_equipment_by_id, create_customer_details, get_customer_details, get_technical_documents, save_testing_standards, create_lab_selection_review, get_lab_selection_review_by_product, create_quotation
from fastapi.responses import FileResponse, JSONResponse
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_DIR = os.path.join(BASE_DIR, "newfrontend")

router = APIRouter(
    prefix="/api/equipment",
    tags=["Equipment"]
)

# Below is details of routes for module1
@router.post("", response_model=EquipmentResponse)
def create_equipment_api(payload: EquipmentCreate, db: Session = Depends(get_db)):
    return create_equipment(db, payload)

@router.get("", response_model=list[EquipmentResponse])
def list_equipment_api(db: Session = Depends(get_db)):
    return get_all_equipment(db)

@router.get("/{equipment_id}", response_model=EquipmentResponse)
def get_equipment_api(equipment_id: int, db: Session = Depends(get_db)):
    record = get_equipment_by_id(db, equipment_id)
    if not record:
        raise HTTPException(status_code=404, detail="Equipment not found")
    return record

@router.get("/testing-info", include_in_schema=False)
def serve_testing_info():
    return FileResponse(os.path.join(FRONTEND_DIR, "testing-info.html"))

@router.post("/customer-details", response_model=CustomerDetailsResponse)
def create_customer_details_api(payload: CustomerDetailsCreate, db: Session = Depends(get_db)):
    return create_customer_details(db, payload)

@router.get("/customer-details", response_model=list[CustomerDetailsResponse])
def list_customer_details_api(db: Session = Depends(get_db)):
    return get_customer_details(db)

@router.get("/technical-documents", response_model=CustomerDetailsResponse)
def upload_page(db: Session = Depends(get_db)):
    return get_technical_documents(db)


@router.post("/save")
def save(payload: TestingStandardsPayload, db: Session = Depends(get_db)):
    record = save_testing_standards(db, payload)
    return {"status": "success", "id": record.id}

@router.get("/testingstanders4", include_in_schema=False)
def serve_testing_standards4():
    return FileResponse(os.path.join(FRONTEND_DIR, "testingstanders4.html"))

@router.post("/lab-selection-review", response_model=LabSelectionReviewResponse)
def post_lab_selection_review(payload: LabSelectionReviewCreate, db: Session = Depends(get_db)):
    if not payload.product_id:
        raise HTTPException(status_code=400, detail="Product ID missing")
    record = create_lab_selection_review(db, payload)
    return LabSelectionReviewResponse(
        id=record.id,
        product_id=record.product_id,
        selected_labs=record.selected_labs.split(",") if record.selected_labs else [],
        customer_review=record.customer_review,
        status=record.status
    )

@router.get("/lab-selection-review/{product_id}", response_model=LabSelectionReviewResponse)
def get_lab_selection_review(product_id: str, db: Session = Depends(get_db)):
    record = get_lab_selection_review_by_product(db, product_id)
    if not record:
        raise HTTPException(status_code=404, detail="Not found")
    return LabSelectionReviewResponse(
        id=record.id,
        product_id=record.product_id,
        selected_labs=record.selected_labs.split(",") if record.selected_labs else [],
        customer_review=record.customer_review,
        status=record.status
    )

@router.get("/go-to-next-page", include_in_schema=False)
def go_to_next_page():
    return FileResponse(os.path.join(FRONTEND_DIR, "testingstandards4.html"))

@router.post("/quotation/", response_model=QuotationResponse)
def create_quotation_api(payload: QuotationCreate, db: Session = Depends(get_db)):
    record = create_quotation(db, payload)
    return QuotationResponse(
        quotation_id=record.id,
        estimated_time=record.estimated_time,
        estimated_price=record.estimated_price
    )

