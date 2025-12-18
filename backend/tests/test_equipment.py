import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

from fastapi.testclient import TestClient
from backend.app import app

client = TestClient(app)

def test_create_and_get_equipment():
    payload = {
        "name": "Test Device",
        "quantity": 1,
        "manufacturer_address": "123 Test St",
        "model_number": "T-1000",
        "serial_number": "SN123",
        "supply_voltage": "230V",
        "operating_frequency": "50Hz",
        "current": "2A",
        "weight_kg": 10.0,
        "length_mm": 100.0,
        "width_mm": 50.0,
        "height_mm": 30.0,
        "power_ports": "AC",
        "signal_ports": "USB",
        "software_name": "TestSoft",
        "software_version": "1.0",
        "industry_type": "Testing",
        "other_industry": None,
        "preferred_testing_date": None,
        "additional_notes": "None"
    }
    response = client.post("/api/module1/equipment", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Test Device"