from typing import Literal
from pydantic import BaseModel

VALID_OPERATIONS = Literal["add", "subtract", "multiply", "divide", "modulo", "power"]


class CalculatorRequest(BaseModel):
    operation: VALID_OPERATIONS
    a: float
    b: float


class CalculatorResponse(BaseModel):
    result: float
    operation: str
    a: float
    b: float


class ErrorResponse(BaseModel):
    detail: str
