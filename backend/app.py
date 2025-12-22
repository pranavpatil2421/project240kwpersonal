# This file Created for FastAPI Application Setup
# Location: backend/app.py

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from backend.core.config import get_settings
from backend.modules.module1_equipment.routes import router
from fastapi.responses import FileResponse
from backend.core.database import Base, engine
from backend.modules.module1_equipment import models
import os

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

# Serve other pages directly (add more as needed)
@app.get("/page2", include_in_schema=False)
def serve_page2():
    return FileResponse(os.path.join(FRONTEND_DIR, "page2.html"))

@app.get("/page3", include_in_schema=False)
def serve_page3():
    return FileResponse(os.path.join(FRONTEND_DIR, "page3.html"))

@app.get("/testing-info", include_in_schema=False)
def serve_testing_info():
    return FileResponse(os.path.join(FRONTEND_DIR, "testing-info.html"))

@app.get("/eut-details", include_in_schema=False)
def serve_eut_details():
    return FileResponse(os.path.join(FRONTEND_DIR, "eut-details.html"))


# Register API routes
app.include_router(router)

# Create tables
Base.metadata.create_all(bind=engine)
