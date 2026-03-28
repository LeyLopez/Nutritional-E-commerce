# Nutritional-e-commerce

Plataforma e-commerce para vender suplementos nutricionales y productos de dermocosmética en Colombia.

## Descripción
- Navegación de catálogo por parte del cliente.
- Compras con pago digital vía Wompi.
- Gestión manual de envíos por el dueño.

## Instalación
1. Clona el repositorio.
2. Instala dependencias: `pip install -r requirements.txt`
3. Configura variables en `.env`
4. Ejecuta: `uvicorn main:app --reload`

## Estructura
- `src/domain/`: Schemas y enums.
- `src/services/`: Lógica de negocio.
- `src/infrastructure/`: Adaptadores e integraciones.