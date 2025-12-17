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

settings= get_settings()
app = FastAPI(title=settings.APP_NAME, debug=settings.DEBUG)

# Resolve base directory safely
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Mount frontend as static files
app.mount(
    "/static",
    StaticFiles(directory=os.path.join(BASE_DIR, "frontend")),
    name="static",
)

# Serve home.html at root (/)
@app.get("/", include_in_schema=False)
def serve_home():
    return FileResponse(os.path.join("frontend", "home.html"))

# Create database tables
Base.metadata.create_all(bind=engine)

# Register routes
app.include_router(router)
