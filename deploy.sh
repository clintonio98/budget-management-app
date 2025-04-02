#!/bin/bash

# Build Backend Docker Image
echo "Building Backend Docker image..."
cd backend
docker build -t budget-backend .

# Build Frontend Docker Image
echo "Building Frontend Docker image..."
cd ../frontend
docker build -t budget-frontend .

# Start Backend and Frontend Containers
echo "Starting Backend and Frontend containers..."
docker run -d -p 8000:8000 --name budget-backend budget-backend
docker run -d -p 3000:3000 --name budget-frontend budget-frontend

echo "Deployment Complete!" 