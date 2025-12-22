# This file Created for Equipment Service Functions
# Location: backend/modules/module1_equipment/services.py

from sqlalchemy.orm import Session
from .models import Equipment, CustomerDetails
from .schemas import EquipmentCreate, CustomerDetailsCreate

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
