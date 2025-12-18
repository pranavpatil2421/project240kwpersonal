# This file Created for Equipment Schemas
# Location: backend/modules/module1_equipment/schemas.py

from pydantic import BaseModel
from typing import Optional, List
from datetime import date

class EquipmentBase(BaseModel):
    # Step 1
    name: str
    manufacturer_address: str
    model_number: str
    serial_number: str
    quantity: int
    # Step 2
    circuit_diagram: Optional[str] = None
    pcb_gerber_files: Optional[str] = None
    block_diagram: Optional[str] = None
    component_list: Optional[str] = None
    ratings_power_spec: Optional[str] = None
    firmware_details: Optional[str] = None
    # Step 3
    test_types: Optional[str] = None
    selected_tests: Optional[str] = None
    # Step 4
    selected_standards: Optional[str] = None
    # Step 5
    selected_lab: Optional[str] = None
    # Additional
    supply_voltage: Optional[str] = None
    operating_frequency: Optional[str] = None
    current: Optional[str] = None
    weight_kg: Optional[float] = None
    length_mm: Optional[float] = None
    width_mm: Optional[float] = None
    height_mm: Optional[float] = None
    power_ports: Optional[str] = None
    signal_ports: Optional[str] = None
    software_name: Optional[str] = None
    software_version: Optional[str] = None
    industry_type: Optional[str] = None
    other_industry: Optional[str] = None
    preferred_testing_date: Optional[date] = None
    additional_notes: Optional[str] = None

class EquipmentCreate(EquipmentBase):
    pass

class EquipmentResponse(EquipmentBase):
    id: int
    status: str

    class Config:
        orm_mode = True
