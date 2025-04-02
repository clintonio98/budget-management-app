from fastapi import FastAPI
from pydantic import BaseModel
import os

app = FastAPI()

class Expense(BaseModel):
    category: str
    amount: float
    description: str

@app.post("/add-expense/")
async def add_expense(expense: Expense):
    # This will be where we handle the receipt, category, and amount logic.
    # For simplicity, we're just printing it here.
    return {"message": "Expense added successfully", "expense": expense}

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Budget Management API!"}
