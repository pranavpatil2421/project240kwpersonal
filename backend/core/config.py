# This file Created for Storing Configuration Variables
# Location: backend/core/config.py

import os
from functools import lru_cache

class Settings:
    # Application
    APP_NAME: str = "EUT Certification Platform"
    APP_ENV: str = os.getenv("APP_ENV", "dev")
    DEBUG: bool = os.getenv("DEBUG", "true").lower() == "true"

    # Server
    HOST: str = os.getenv("HOST", "127.0.0.1")
    PORT: int = int(os.getenv("PORT", 8000))

    # Database
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "sqlite:///database/app.db"
    )

    # CORS
    ALLOWED_ORIGINS: list[str] = os.getenv(
        "ALLOWED_ORIGINS",
        "*"
    ).split(",")

    # Logging
    LOG_LEVEL: str = os.getenv("LOG_LEVEL", "INFO")

# Cache settings instance
@lru_cache()
def get_settings() -> Settings:
    return Settings()
