pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    if (!fileExists('nodejs.org')) {
                        sh 'sudo git clone https://github.com/Glal-6/nodejs.org'
                    } else {
                        dir('nodejs.org') {
                            sh 'sudo git fetch'
                            sh 'sudo git checkout main'
                            sh 'sudo git pull'
                        }
                    }
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                dir('nodejs.org') {
                    sh 'export PATH="/home/qmo/.nvm/versions/node/v18.20.4/bin:$PATH" &&  npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                dir('nodejs.org') {
                    sh 'export PATH="/home/qmo/.nvm/versions/node/v18.20.4/bin:$PATH" &&  npm test'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                dir('nodejs.org') {
                    sh ' sudo docker build -t Glal663/nodejs.org -f Dockerfile .'
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                dir('nodejs.org') {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh 'echo "$DOCKER_PASSWORD" | sudo docker login -u "$DOCKER_USERNAME" --password-stdin'
                        sh 'sudo docker push Glal663/nodejs.org'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Build, test, and push completed successfully!'
        }
        failure {
            echo 'Build, test, or push failed!'
        }
    }
}