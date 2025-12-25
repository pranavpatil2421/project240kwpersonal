from sqlalchemy.orm import Session
from .models import ProductDetails
from .schemas import ProductDetailsCreate

def create_product_details(db: Session, payload: ProductDetailsCreate):
    record = ProductDetails(
        eut_name=payload.eutName,
        eut_quantity=payload.eutQuantity,
        manufacturer=payload.manufacturer,
        model_no=payload.modelNo,
# filepath: backend/services.py

from sqlalchemy.orm import Session
from .models import ProductDetails
from .schemas import ProductDetailsCreate

def create_product_details(db: Session, payload: ProductDetailsCreate):
    record = ProductDetails(
        eut_name=payload.eutName,
        eut_quantity=payload.eutQuantity,
        manufacturer=payload.manufacturer,
        model_no=payload.modelNo,