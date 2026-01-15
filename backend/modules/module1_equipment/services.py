# This file Created for Equipment Service Functions
# Location: backend/modules/module1_equipment/services.py

from sqlalchemy.orm import Session
from .models import Equipment, CustomerDetails, TestingStandards, LabSelectionReview, Quotation
from .schemas import EquipmentCreate, CustomerDetailsCreate, LabSelectionReviewCreate, QuotationCreate
import os

# Functions for CRUD operations
def create_equipment(db: Session, payload: EquipmentCreate):
    print("Received payload:", payload.dict())
    equipment = Equipment(**payload.dict())
    db.add(equipment)
    db.commit()
    db.refresh(equipment)
    return equipment

# Retrieve all equipment records
def get_all_equipment(db: Session):
    return db.query(Equipment).all()

# Retrieve equipment by ID
def get_equipment_by_id(db: Session, equipment_id: int):
    return db.query(Equipment).filter(Equipment.id == equipment_id).first()

# Creating customer Details
def create_customer_details(db: Session, payload: CustomerDetailsCreate):
    record = CustomerDetails(
        organization=payload.organization,
        industry=",".join(payload.industry) if payload.industry else "",
        contact_person=payload.contact_person,
        preferable_dates=payload.preferable_dates,
        designation=payload.designation,
        mobile=payload.mobile,
        email=payload.email,
        address=payload.address
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    # Convert industry string to list for response
    return {
        "id": record.id,
        "organization": record.organization,
        "industry": record.industry.split(",") if record.industry else [],
        "contact_person": record.contact_person,
        "preferable_dates": record.preferable_dates,
        "designation": record.designation,
        "mobile": record.mobile,
        "email": record.email,
        "address": record.address
    }

def get_customer_details(db: Session):
    records = db.query(CustomerDetails).all()
    return [
        {
            "id": r.id,
            "organization": r.organization,
            "industry": r.industry.split(",") if r.industry else [],
            "contact_person": r.contact_person,
            "preferable_dates": r.preferable_dates,
            "designation": r.designation,
            "mobile": r.mobile,
            "email": r.email,
            "address": r.address
        }
        for r in records
    ]

def get_technical_documents(db: Session):
    # Placeholder for retrieving technical document
    pass

def save_uploaded_files(form, upload_dir="uploads"):

    #Save uploaded files from a Starlette FormData object.

    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)
    files = []
    for key in form:
        upload = form[key]
        filename = os.path.join(upload_dir, upload.filename)
        contents = upload.file.read() if hasattr(upload, "file") else upload.read()
        with open(filename, "wb") as f:
            f.write(contents)
        files.append(upload.filename)
    return files

def save_testing_standards(db, payload):
    record = TestingStandards(
        regions=", ".join(payload.regions),
        recommended_standards=", ".join(payload.recommended),
        preferred_standards=", ".join(payload.preferred),
    )

    db.add(record)
    db.commit()
    db.refresh(record)
    return record

def create_lab_selection_review(db: Session, payload: LabSelectionReviewCreate):
    record = LabSelectionReview(
        product_id=payload.product_id,
        selected_labs=",".join(payload.selected_labs),
        customer_review=payload.customer_review,
        status=payload.status
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record

def get_lab_selection_review_by_product(db: Session, product_id: str):
    return db.query(LabSelectionReview).filter(LabSelectionReview.product_id == product_id).first()

def create_quotation(db: Session, payload: QuotationCreate):
    record = Quotation(
        eut_name=payload.eut_name,
        state=payload.state,
        city=payload.city,
        selected_labs=",".join(payload.selected_labs),
        testing_requirements=payload.testing_requirements,
        testing_standards=payload.testing_standards,
        estimated_time="24–48 hrs",  # You can add logic for AI estimation here
        estimated_price="$400"       # You can add logic for AI estimation here
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record