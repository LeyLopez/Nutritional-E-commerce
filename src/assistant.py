from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class AssistantRequest(BaseModel):
    message: str
    session_id: Optional[str] = None
    user_id: Optional[str] = None

class AssistantResponse(BaseModel):
    reply: str
    session_id: Optional[str] = None
    source: str

@app.get("/")
async def root():
    return {"message": "Nutritional-ecommerce Assistant API (src)"}

@app.post("/assistant", response_model=AssistantResponse)
async def assistant(req: AssistantRequest):
    """Placeholder assistant endpoint.

    Replace the body with RAG + LLM logic later. For now it echoes the message and returns a placeholder reply.
    """
    reply = f"Echo: {req.message}. (Respuesta de ejemplo - integra RAG/LLM aquí)."
    return AssistantResponse(reply=reply, session_id=req.session_id, source="placeholder")
