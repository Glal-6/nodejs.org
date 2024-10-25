# Devops Project

## Project Overview

This project automates the deployment of the [Node.js.org](https://github.com/nodejs/nodejs.org) website using CI/CD principles. It covers forking the repository, local testing, creating a Jenkins pipeline, and deploying to a Kubernetes cluster with ArgoCD.

## Prerequisites

- **Node.js** and **npm** 18 or above
- **Jenkins** for CI/CD pipeline automation
- **Docker** for containerization 
- **Kubernetes** cluster configured
- **ArgoCD** installed in the Kubernetes cluster for GitOps deployment
- 
- ## Local Setup

1. **Fork the Node.js.org Repository**

   - Clone your forked repository:
     ```bash
     git clone https://github.com/Glal-6/nodejs.org
     cd nodejs.org
     ```

2. **Build and Run Locally**

   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the development server:
     ```bash
     npx turbo dev
     ```
   - The site should now be available at `http://localhost:3000`.

 3. **Run Tests**
   - Ensure the application is functioning as expected by running:
     ```bash
     npm test
     ```

## CI/CD Pipeline Setup

1. **Jenkins Pipeline Configuration**

   - Configure a Jenkins pipeline to automate the following:
     - **Clone the Repository**
     - **Build the Application**
     - **Run Tests**
     - **Build Docker Image**
     - **Push to Registry**
    
  #### Fetch or Checkout stage
  ![pipeline 1](https://github.com/user-attachments/assets/4e00539e-8cfd-4a7b-845c-e06679bc86c1)
  #### Install dependencies
  ![pipeline 2](https://github.com/user-attachments/assets/cbb1865f-034d-4ad0-a1c0-c04aa28898bf)
  #### Run Unit testing
  ![pipeline 3](https://github.com/user-attachments/assets/a9461371-0e89-415c-9f34-704aee3bd68e)
  #### Dockerize
  ![pipeline 4](https://github.com/user-attachments/assets/bf663d0a-4b2d-4f36-833f-7cd13cc54b1f)
  ![pipeline 5](https://github.com/user-attachments/assets/512a19d0-4704-4494-89c6-baa6684dfd75)
  
the push to docker hub failed due to internet connection

## Deployment with ArgoCD

1. **ArgoCD Application Creation**

   - Create a new ArgoCD Application pointing to your GitHub repository where the Kubernetes manifests are stored.

2. **Application Sync**
   - ArgoCD will automatically deploy and sync your application changes to the cluster.

    ## Folder Structure

```
nodejs.org/
│
├── Jenkinsfile                # CI/CD pipeline script
├── deploy/                        # ArgoCD and Kubernetes manifests
│   ├── deployment.yaml
│   └── service.yaml
└── README.md                   # Project documentation
``` 


 

