from sqlalchemy import Column, Integer, String
from backend.core.database import Base

# models for m2p1 for product detail model
class ProductDetails(Base):
    __tablename__ = "product_details"
    id = Column(Integer, primary_key=True, index=True)
    eut_name = Column(String, nullable=False)
    eut_quantity = Column(String)
    manufacturer = Column(String)
    model_no = Column(String)
    serial_no = Column(String)
    supply_voltage = Column(String)
    operating_frequency = Column(String)
    current = Column(String)
    weight = Column(String)
    length = Column(String)
    width = Column(String)
    height = Column(String)
    power_ports = Column(String)
    signal_lines = Column(String)
    software_name = Column(String)
    software_version = Column(String)