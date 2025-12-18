# This file CONATINS ROUTES FOR MODULE 1 EQUIPMENT INFORMATION
# Location: backend/modules/module1_equipment/routes.py

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.core.database import get_db
from .schemas import EquipmentCreate, EquipmentResponse
from .services import create_equipment, get_all_equipment, get_equipment_by_id

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

@router.get("/{equipment_id}", response_model=EquipmentResponse)
def get_equipment_api(equipment_id: int, db: Session = Depends(get_db)):
    record = get_equipment_by_id(db, equipment_id)
    if not record:
        raise HTTPException(status_code=404, detail="Equipment not found")
    return record
