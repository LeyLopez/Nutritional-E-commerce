from fastmcp import FastMCP

mcp = FastMCP("NUTRITIONAL_ECOMMERCE")


@mcp.tool()
def get_product_info(product_id: str) -> dict:
    """
    Simula la obtención de información de un producto desde una base de datos.
    En un entorno real, esta función podría realizar consultas a una base de datos o a una API externa.
    """
    # Simulación de datos de productos
    products = {
        "1": {"name": "Proteína en polvo", "price": 29.99, "stock": 100},
        "2": {"name": "Multivitamínico", "price": 19.99, "stock": 50},
        "3": {"name": "Omega-3", "price": 24.99, "stock": 75},
    }
    return products.get(product_id, {"error": "Producto no encontrado"})


@mcp.tool()
def update_stock(product_id: str, quantity: int) -> dict:
    """
    Simula la actualización del stock de un producto.
    En un entorno real, esta función podría realizar actualizaciones en una base de datos.
    """
    # Simulación de actualización de stock
    return {"message": f"Stock del producto {product_id} actualizado en {quantity} unidades."}


@mcp.tool()
def list_products() -> dict:
    """
    Simula la obtención de una lista de productos disponibles.
    En un entorno real, esta función podría realizar consultas a una base de datos o a una API externa.
    """
    # Simulación de lista de productos
    return {
        "products": [
            {"id": "1", "name": "Proteína en polvo", "price": 29.99},
            {"id": "2", "name": "Multivitamínico", "price": 19.99},
            {"id": "3", "name": "Omega-3", "price": 24.99},
        ]
    }





if __name__ == "__main__":
    mcp.run()