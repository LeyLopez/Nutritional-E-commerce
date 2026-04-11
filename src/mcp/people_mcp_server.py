"""Custom MCP server that searches people by name from a local JSON file."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from fastmcp import FastMCP

mcp = FastMCP("people-search-mcp")
DATA_FILE = Path(__file__).with_name("people.json")


def _load_people() -> list[dict[str, Any]]:
    if not DATA_FILE.exists():
        return []

    with DATA_FILE.open("r", encoding="utf-8") as f:
        data = json.load(f)

    if not isinstance(data, list):
        return []

    return [item for item in data if isinstance(item, dict)]


@mcp.tool()
def buscar_personas_por_nombre(nombre: str) -> list[dict[str, Any]]:
    """Search people by name (partial, case-insensitive match)."""
    term = nombre.strip().lower()
    if not term:
        return []

    people = _load_people()
    return [
        person
        for person in people
        if term in str(person.get("nombre", "")).lower()
    ]


if __name__ == "__main__":
    mcp.run()
