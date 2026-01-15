import os
from fastapi import APIRouter, Request, status
from fastapi.responses import FileResponse, JSONResponse

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_DIR = os.path.join(BASE_DIR, "newfrontend/module2_design_v&v/html")

router = APIRouter()

@router.get("/", include_in_schema=False)
def serve_home():
    # Serve the design page as the home page
    return FileResponse(os.path.join(FRONTEND_DIR, "design.html"))

@router.get("/design", include_in_schema=False)
def serve_design():
    return FileResponse(os.path.join(FRONTEND_DIR, "design.html"))

@router.get("/product-details.html", include_in_schema=False)
def serve_product_details():
    return FileResponse(os.path.join(FRONTEND_DIR, "product-details.html"))

@router.post("/api/product-details")
async def save_product_details(request: Request):
    data = await request.json()
    # Here you would save to the database; for now, just echo back
    return JSONResponse(content={"message": "Product details saved!", "data": data}, status_code=status.HTTP_201_CREATED)