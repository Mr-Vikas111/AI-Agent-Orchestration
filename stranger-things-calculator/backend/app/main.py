from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.calculator import router as calculator_router

app = FastAPI(
    title="Stranger Things Calculator",
    description="Math from the Upside Down",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(calculator_router, prefix="/api")


@app.get("/health")
async def health():
    return {"status": "alive", "message": "The lights are on"}
