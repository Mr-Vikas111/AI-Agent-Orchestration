from fastapi import APIRouter
from fastapi.responses import JSONResponse

from app.schemas.calculator import CalculatorRequest, CalculatorResponse, ErrorResponse
from app.services.calculator_service import CalculatorService

router = APIRouter()


@router.post(
    "/calculate",
    response_model=CalculatorResponse,
    responses={422: {"model": ErrorResponse}},
)
async def calculate(request: CalculatorRequest) -> CalculatorResponse:
    """Perform a calculation using the Stranger Things calculator service."""
    try:
        result = CalculatorService.calculate(request.operation, request.a, request.b)
        return CalculatorResponse(
            result=result,
            operation=request.operation,
            a=request.a,
            b=request.b,
        )
    except ValueError as exc:
        return JSONResponse(status_code=422, content={"detail": str(exc)})
