pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'sabaaabn/node'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Sabaa-Abdennabi/Node_App.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t $DOCKER_IMAGE ."
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
                    sh "kubectl apply -f deployment.yaml"
                    sh "kubectl apply -f service.yaml"
                }
            }
        }
    }
}