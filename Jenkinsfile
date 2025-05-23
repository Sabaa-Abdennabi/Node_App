pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'sabaaabn/node'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git (
                    branch: 'main',
                    url: 'https://github.com/Sabaa-Abdennabi/Node_App.git'
                )

            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    bat "docker build -t $DOCKER_IMAGE ."
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'dockerhub', toolName: 'docker', url: 'https://index.docker.io/v1/') {
                        // Build the Docker image
                        bat "docker build -t node:latest ."
                        // Tag the Docker image
                        bat "docker tag node sabaaabn/node:latest"
                        // Push the Docker image
                        bat "docker push sabaaabn/node:latest"
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    bat "kubectl apply -f deployment.yaml"
                    bat "kubectl apply -f service.yaml"
                }
            }
        }
    }
}