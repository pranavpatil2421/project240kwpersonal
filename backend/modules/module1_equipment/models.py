# This file Created for Equipment ORM Model
# Location: backend/modules/module1_equipment/models.py

from sqlalchemy import Column, Integer, String, Float, Date, Text
from backend.core.database import Base

# ORM model for Equipment related Information
class EquipmentInformation(Base):
    __tablename__ = "module1_equipment_information"

    id = Column(Integer, primary_key=True, index=True)

    # Basic Equipment Information
    eut_name = Column(String, nullable=False)
    eut_quantity = Column(Integer, nullable=False)
    manufacturer_address = Column(Text, nullable=False)
    model_no = Column(String, nullable=False)
    serial_no = Column(String, nullable=False)

    # Technical Specifications
    supply_voltage = Column(String, nullable=False)
    operating_frequency = Column(String, nullable=True)
    current = Column(String, nullable=False)
    weight_kg = Column(Float, nullable=False)

    length_mm = Column(Float, nullable=False)
    width_mm = Column(Float, nullable=False)
    height_mm = Column(Float, nullable=False)

    # Connectivity & Interfaces
    power_ports = Column(String, nullable=False)
    signal_ports = Column(String, nullable=False)

    # Software Information
    software_name = Column(String, nullable=True)
    software_version = Column(String, nullable=True)

    # Industry / Application
    industry_type = Column(String, nullable=False)
    other_industry = Column(String, nullable=True)

    # Testing & Notes
    preferred_testing_date = Column(Date, nullable=True)
    additional_notes = Column(Text, nullable=True)
