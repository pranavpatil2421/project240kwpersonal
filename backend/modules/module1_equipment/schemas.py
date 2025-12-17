# This file Created for Equipment Schemas
# Location: backend/modules/module1_equipment/schemas.py

from pydantic import BaseModel
from typing import Optional
from datetime import date

# Schema for Equipment Information
class EquipmentCreate(BaseModel):
    eut_name: str
    eut_quantity: int
    manufacturer_address: str
    model_no: str
    serial_no: str

    supply_voltage: str
    operating_frequency: Optional[str] = None
    current: str
    weight_kg: float

    length_mm: float
    width_mm: float
    height_mm: float

    power_ports: str
    signal_ports: str

    software_name: Optional[str] = None
    software_version: Optional[str] = None

    industry_type: str
    other_industry: Optional[str] = None

    preferred_testing_date: Optional[date] = None
    additional_notes: Optional[str] = None

# Schema for Equipment Response
class EquipmentResponse(EquipmentCreate):
    id: int

    class Config:
        from_attributes = True
