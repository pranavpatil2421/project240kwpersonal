# This file Created for Equipment Service Functions
# Location: backend/modules/module1_equipment/services.py

from sqlalchemy.orm import Session
from .models import Equipment
from .schemas import EquipmentCreate

# Functions for CRUD operations
def create_equipment(db: Session, payload: EquipmentCreate):
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
