pipeline {
    agent any
    stages {
        stage("Clone") {
            steps {
                git url:"https://github.com/zohaibwarraich1/EasyShop.git", branch: "main"
                echo "Successfully Cloned!"
            }
        }
        stage("Build") {
            steps {
                sh 'docker build -t easyshop-image:latest .'
                echo 'Successfully Build!'
            }
        }
        stage("Push") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'echo "$PASSWORD" | docker login -u "$USERNAME" --password-stdin'
                    sh 'docker tag easyshop-image:latest $USERNAME/easyshop-image:latest'
                    sh 'docker push $USERNAME/easyshop-image:latest'
                }
                echo 'Successfully Pushed!'
            }
        }
        stage("Deploy") {
            steps {
                sh "docker-compose up -d"
                echo 'Successfully Deployed!'
            }
        }
    }
}
