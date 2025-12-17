# This file Created for Equipment Service Functions
# Location: backend/modules/module1_equipment/services.py

from sqlalchemy.orm import Session
from .models import EquipmentInformation
from .schemas import EquipmentCreate

# Functions for CRUD operations
def create_equipment(db: Session, payload: EquipmentCreate):
    record = EquipmentInformation(**payload.dict())
    db.add(record)
    db.commit()
    db.refresh(record)
    return record

# Retrieve all equipment records
def get_all_equipment(db: Session):
    return db.query(EquipmentInformation).all()

# Retrieve equipment by ID
def get_equipment_by_id(db: Session, equipment_id: int):
    return db.query(EquipmentInformation).filter(
        EquipmentInformation.id == equipment_id
    ).first()
