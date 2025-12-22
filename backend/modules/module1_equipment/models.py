# This file Created for Equipment ORM Model
# Location: backend/modules/module1_equipment/models.py

from sqlalchemy import Column, Integer, String, Float, Date, Text
from backend.core.database import Base

# ORM model for Equipment related Information
class Equipment(Base):
    __tablename__ = "equipment"

    id = Column(Integer, primary_key=True, index=True)
    # Step 1: Product Details
    name = Column(String, nullable=False)
    manufacturer_address = Column(Text, nullable=False)
    model_number = Column(String, nullable=False)
    serial_number = Column(String, nullable=False)
    quantity = Column(Integer, nullable=False)
    # Step 2: Technical Specification Documents (store as filenames or URLs)
    circuit_diagram = Column(String, nullable=True)
    pcb_gerber_files = Column(String, nullable=True)
    block_diagram = Column(String, nullable=True)
    component_list = Column(String, nullable=True)
    ratings_power_spec = Column(String, nullable=True)
    firmware_details = Column(String, nullable=True)
    # Step 3: Testing Requirements
    test_types = Column(String, nullable=True)  # e.g. "Pre-Compliance,Final"
    selected_tests = Column(Text, nullable=True)  # JSON string or comma-separated
    # Step 4: Testing Standards
    selected_standards = Column(Text, nullable=True)  # JSON string or comma-separated
    # Step 5: Lab selection and Review
    selected_lab = Column(String, nullable=True)
    # Submission status
    status = Column(String, default="submitted")
    # Additional fields
    supply_voltage = Column(String, nullable=True)
    operating_frequency = Column(String, nullable=True)
    current = Column(String, nullable=True)
    weight_kg = Column(Float, nullable=True)
    length_mm = Column(Float, nullable=True)
    width_mm = Column(Float, nullable=True)
    height_mm = Column(Float, nullable=True)
    power_ports = Column(String, nullable=True)
    signal_ports = Column(String, nullable=True)
    software_name = Column(String, nullable=True)
    software_version = Column(String, nullable=True)
    industry_type = Column(String, nullable=True)
    other_industry = Column(String, nullable=True)
    preferred_testing_date = Column(Date, nullable=True)
    additional_notes = Column(Text, nullable=True)

class CustomerDetails(Base):
    __tablename__ = "customer_details"
    id = Column(Integer, primary_key=True, index=True)
    organization = Column(String)
    industry = Column(Text)  # Store as comma-separated or JSON string
    contact_person = Column(String)
    preferable_dates = Column(String)
    designation = Column(String)
    mobile = Column(String)
    email = Column(String)
    address = Column(Text)
