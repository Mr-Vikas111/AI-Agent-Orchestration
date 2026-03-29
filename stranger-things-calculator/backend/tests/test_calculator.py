import pytest
from fastapi.testclient import TestClient

from app.main import app
from app.services.calculator_service import CalculatorService

client = TestClient(app)


# --- CalculatorService unit tests ---

def test_service_add():
    assert CalculatorService.calculate("add", 3, 4) == 7

def test_service_subtract():
    assert CalculatorService.calculate("subtract", 10, 4) == 6

def test_service_multiply():
    assert CalculatorService.calculate("multiply", 3, 5) == 15

def test_service_divide():
    assert CalculatorService.calculate("divide", 10, 2) == 5

def test_service_modulo():
    assert CalculatorService.calculate("modulo", 10, 3) == 1

def test_service_power():
    assert CalculatorService.calculate("power", 2, 8) == 256

def test_service_divide_by_zero():
    with pytest.raises(ValueError, match="Division by zero is not allowed in the Upside Down"):
        CalculatorService.calculate("divide", 5, 0)

def test_service_modulo_by_zero():
    with pytest.raises(ValueError, match="Division by zero is not allowed in the Upside Down"):
        CalculatorService.calculate("modulo", 5, 0)

def test_service_unknown_operation():
    with pytest.raises(ValueError, match="Unknown operation: sqrt"):
        CalculatorService.calculate("sqrt", 5, 0)


# --- API endpoint tests ---

def test_api_add():
    response = client.post("/api/calculate", json={"operation": "add", "a": 3, "b": 4})
    assert response.status_code == 200
    data = response.json()
    assert data["result"] == 7
    assert data["operation"] == "add"

def test_api_subtract():
    response = client.post("/api/calculate", json={"operation": "subtract", "a": 10, "b": 4})
    assert response.status_code == 200
    assert response.json()["result"] == 6

def test_api_multiply():
    response = client.post("/api/calculate", json={"operation": "multiply", "a": 3, "b": 5})
    assert response.status_code == 200
    assert response.json()["result"] == 15

def test_api_divide():
    response = client.post("/api/calculate", json={"operation": "divide", "a": 10, "b": 2})
    assert response.status_code == 200
    assert response.json()["result"] == 5

def test_api_modulo():
    response = client.post("/api/calculate", json={"operation": "modulo", "a": 10, "b": 3})
    assert response.status_code == 200
    assert response.json()["result"] == 1

def test_api_power():
    response = client.post("/api/calculate", json={"operation": "power", "a": 2, "b": 8})
    assert response.status_code == 200
    assert response.json()["result"] == 256

def test_api_divide_by_zero():
    response = client.post("/api/calculate", json={"operation": "divide", "a": 5, "b": 0})
    assert response.status_code == 422
    assert "Division by zero" in response.json()["detail"]

def test_api_modulo_by_zero():
    response = client.post("/api/calculate", json={"operation": "modulo", "a": 5, "b": 0})
    assert response.status_code == 422
    assert "Division by zero" in response.json()["detail"]

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "alive"
    assert data["message"] == "The lights are on"
