pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
                // Just to have something to archive:
                sh 'echo "Build artifact content" > build-artifact.txt'
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build-artifact.txt', fingerprint: true
            }
        }
    }

    post {
        always {
            echo "Pipeline finished. Cleaning up workspace."
            deleteDir() // cleans workspace after build
        }
        success {
            echo "Build succeeded ✅"
        }
        failure {
            echo "Build failed ❌ – check logs."
        }
    }
}
