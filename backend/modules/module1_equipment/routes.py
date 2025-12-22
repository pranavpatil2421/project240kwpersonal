# This file CONATINS ROUTES FOR MODULE 1 EQUIPMENT INFORMATION
# Location: backend/modules/module1_equipment/routes.py

from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from backend.core.database import get_db
from .schemas import EquipmentCreate, EquipmentResponse, CustomerDetailsCreate, CustomerDetailsResponse
from .services import create_equipment, get_all_equipment, get_equipment_by_id, create_customer_details, get_customer_details
from fastapi.responses import FileResponse, JSONResponse
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_DIR = os.path.join(BASE_DIR, "newfrontend")

router = APIRouter(
    prefix="/api/equipment",
    tags=["Equipment"]
)

@router.post("", response_model=EquipmentResponse)
def create_equipment_api(payload: EquipmentCreate, db: Session = Depends(get_db)):
    return create_equipment(db, payload)

@router.get("", response_model=list[EquipmentResponse])
def list_equipment_api(db: Session = Depends(get_db)):
    return get_all_equipment(db)

'''
@router.get("/eut-details", include_in_schema=False)
def serve_eut_details():
    return FileResponse(os.path.join(FRONTEND_DIR, "eut-details.html"))
'''

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
