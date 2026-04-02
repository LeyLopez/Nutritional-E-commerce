"""Adaptador para Gemini vía LangChain."""
import os
from src.domain.schemas import Message
from src.infrastructure.model_factory import IModelAdapter


class LangChainGeminiAdapter(IModelAdapter):
    """Adaptador para Gemini usando LangChain (disponible para futuro)."""

    def __init__(self) -> None:
        api_key = os.getenv("GOOGLE_API_KEY")
        if not api_key:
            raise ValueError("GOOGLE_API_KEY no está configurada")
        self._api_key = api_key

    def complete(
        self,
        system_prompt: str,
        user_message: str,
        history: list[Message] | None = None,
    ) -> tuple[str, int | None]:
        raise NotImplementedError("LangChain adapter aún no implementado")
