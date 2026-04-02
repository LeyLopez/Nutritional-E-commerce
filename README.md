# Nutritional-e-commerce

Plataforma e-commerce para vender suplementos nutricionales y productos de dermocosmética en Colombia.

## Descripción
- Navegación de catálogo por parte del cliente.
- Compras con pago digital vía Wompi.
- Gestión manual de envíos por el dueño.

## Estructura del Proyecto

```
src/
├── domain/           # Modelos y esquemas (Pydantic)
│   ├── __init__.py
│   └── schemas.py         # AssistantRequest, AssistantResponse, Product, Document
├── infrastructure/   # Integraciones externas
│   ├── __init__.py
│   ├── document_loader.py # Carga de documentos (files, products.json)
│   └── google_service.py  # Client para Google Generative API
├── services/         # Lógica de negocio
│   ├── __init__.py
│   ├── rag_service.py     # Orquestación RAG (retrieve + build prompt)
│   └── vector_index.py    # Índice TF-IDF
├── rag_assistant_v2.py    # Endpoint FastAPI
└── products.json          # Catálogo de ejemplo
```

## Instalación

1. Clona el repositorio.
2. Copia `.env.example` a `.env` y configura `GOOGLE_API_KEY`:
   ```bash
   cp .env.example .env
   # Edita .env y añade tu GOOGLE_API_KEY
   ```
3. Instala dependencias e inicializa:
   ```bash
   python init.py
   ```
4. Ejecuta localmente:
   ```bash
   uvicorn src.rag_assistant_v2:app --reload --host 0.0.0.0 --port 8000
   ```

## Endpoints

- **GET /** — Health check y lista de endpoints.
- **GET /health** — Status del servidor.
- **POST /assistant** — Chat endpoint (RAG). 
  - Body: `{"message": "¿Qué proteína me recomiendas?", "use_rag": true, "top_k": 3}`
  - Response: `{"reply": "...", "source": "rag-google", "retrieved": [...]}`
- **POST /reindex** — Reconstruye el índice desde products.json, skills/, y knowledge/.

## Documentación Interactiva

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Despliegue en Vercel

1. Asegúrate de añadir `GOOGLE_API_KEY` como variable de entorno en Vercel (Project Settings → Environment Variables).
2. El workflow de GitHub Actions desplegará automáticamente en cada push a `main`.
3. Una vez desplegado, se puede invocar `/reindex` vía:
   ```bash
   curl -X POST https://<tu-proyecto>.vercel.app/reindex
   ```

## Arquitectura

El proyecto sigue **Clean Architecture**:

- **Domain** (`src/domain/`): Modelos de datos independientes de frameworks.
- **Infrastructure** (`src/infrastructure/`): Adaptadores para APIs externas (Google), I/O de archivos.
- **Services** (`src/services/`): Lógica de negocio (RAG, vector index).
- **Endpoints** (`src/rag_assistant_v2.py`): Routes FastAPI que orquestan los servicios.

## Notes

- RAG actualmente usa TF-IDF (scikit-learn). Para mejorar: usar embeddings reales de Google o vector DB (Pinecone, Weaviate, FAISS).
- El índice se persiste en `src/data/vector_index.pkl`. Para Vercel, considera S3 o una DB remota.
- `/reindex` es acceso libre — recomendado añadir autenticación antes de producción.
