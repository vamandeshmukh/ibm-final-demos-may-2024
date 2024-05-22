pipeline {
    agent any

    tools {
        nodejs 'Node'
    }

    stages {
        stage('Checkout') {
            steps {
                // Corrected git step syntax
                git branch: 'main', url: 'https://github.com/vamandeshmukh/ibm-ng-demo-april-2014.git'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build --omit=dev'  
            }
        }
    }
}
