from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Nutritional-e-commerce API"}

# Aquí irá la lógica del e-commerce
