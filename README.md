# Azure AKS Containerized Application

This project demonstrates deploying a Dockerized Node.js application to Azure Kubernetes Service (AKS) using Azure Container Registry (ACR) and Terraform.

## Architecture

```text
User
 │
 ▼
Azure Load Balancer
 │
 ▼
AKS Cluster
 │
 ├── Pod 1 (Node.js App)
 └── Pod 2 (Node.js App)

## Technologies Used

- Azure Kubernetes Service (AKS)
- Azure Container Registry (ACR)
- Terraform
- Docker
- Kubernetes
- Node.js
- Azure CLI

## Infrastructure

Terraform provisions:

- Resource Group
- Azure Container Registry
- AKS Cluster

## Kubernetes Deployment

Kubernetes resources used:

- Deployment
- Service (LoadBalancer)
- Ingress

## Docker Commands

docker build -t aks-webapp:1.0 .
docker tag aks-webapp:1.0 <acr>.azurecr.io/aks-webapp:1.0
docker push <acr>.azurecr.io/aks-webapp:1.0

## Kubernetes Commands

kubectl apply -f deployment.yaml
kubectl get pods
kubectl get service

## Screenshots

### Pods Running

![pods](screenshots/pods.png)

### Public Service

![service](screenshots/service.png)

### Application Running

![app](screenshots/app-running.png)