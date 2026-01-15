# This file Created for FastAPI Application Setup
# Location: backend/app.py

from fastapi import FastAPI, UploadFile, File, APIRouter, Request
from fastapi.staticfiles import StaticFiles
from backend.core.config import get_settings
from backend.modules.module1_equipment.routes import router
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse
from backend.core.database import Base, engine
from backend.modules.module1_equipment import models
from backend.modules.module1_equipment.services import save_uploaded_files
import os
import shutil

settings = get_settings()
app = FastAPI(title=settings.APP_NAME, debug=settings.DEBUG)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_DIR = os.path.join(BASE_DIR, "newfrontend")

# Serve all static files (including HTML, JS, CSS, images, etc.)
app.mount("/static", StaticFiles(directory=FRONTEND_DIR), name="static")

# Serve index.html at root
@app.get("/", include_in_schema=False)
def serve_index():
    return FileResponse(os.path.join(FRONTEND_DIR, "index.html"))

@app.get("/testing-info", include_in_schema=False)
def serve_testing_info():
    return FileResponse(os.path.join(FRONTEND_DIR, "testing-info.html"))

@app.get("/eut-details", include_in_schema=False)
def serve_eut_details():
    return FileResponse(os.path.join(FRONTEND_DIR, "eut-details.html"))

@app.get("/technical-documents", include_in_schema=False)
def serve_technical_documents():
    return FileResponse(os.path.join(FRONTEND_DIR, "technical_documents.html"))

@app.get("/paragpage", include_in_schema=False)
def serve_empty_page():
    return FileResponse(os.path.join(FRONTEND_DIR, "paragpage.html"))

@app.get("/testingstandards4", include_in_schema=False)
def serve_testing_standards4():
    return FileResponse(os.path.join(FRONTEND_DIR, "testingstandards4.html"))

@app.get("/quotation", include_in_schema=False)
def serve_quotation():
    return FileResponse(os.path.join(FRONTEND_DIR, "quotation.html"))

@app.get("/quotation-success.html", include_in_schema=False)
def serve_quotation_success():
    return FileResponse(os.path.join(FRONTEND_DIR, "quotation-success.html"))

@app.post("/upload")
async def upload_files(request: Request):
    form = await request.form()
    files = save_uploaded_files(form)
    return JSONResponse({"message": f"Uploaded: {', '.join(files)}"})

# Register API routes
app.include_router(router)

# Create tables
Base.metadata.create_all(bind=engine)


