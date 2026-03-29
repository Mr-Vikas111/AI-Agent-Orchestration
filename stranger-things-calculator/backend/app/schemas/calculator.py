from typing import Literal, Optional
from pydantic import BaseModel

VALID_OPERATIONS = Literal[
    "add", "subtract", "multiply", "divide", "modulo", "power",
    "sin", "cos", "tan", "sqrt", "log", "log10",
]


class CalculatorRequest(BaseModel):
    operation: VALID_OPERATIONS
    a: float
    b: Optional[float] = 0  # unary ops (sin/cos/tan/sqrt/log) only use `a`


class CalculatorResponse(BaseModel):
    result: float
    operation: str
    a: float
    b: float


class ErrorResponse(BaseModel):
    detail: str
