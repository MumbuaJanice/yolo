# Explanation of Assessment Objectives

## Objective 1: Dockerized Frontend

In this project, we successfully dockerized the frontend part of our application. We used an official Node.js runtime as the parent image. Here's a breakdown of the steps we followed:

- **Set Working Directory**: We set the working directory within the container to `/usr/src/app` to organize our application code.

- **Copy Package Files**: We copied the `package.json` and `package-lock.json` files into the container to enable dependency installation.

- **Install Dependencies**: We used the `npm install` command to install the required dependencies.

- **Copy Application Code**: We copied the rest of the frontend application code into the container, ensuring that the Docker image has all the necessary files.

- **Expose Port**: To allow external access, we exposed port 3000 in the container.

- **Define Startup Command**: We defined the command to run our frontend application using `CMD ["npm", "start"]`.

## Objective 2: Dockerized Backend

Similar to the frontend, we successfully dockerized the backend of our application. Here's how we achieved this:

- **Set Working Directory**: We set the working directory in the backend container to `/usr/src/app`.

- **Copy Package Files**: The `package.json` and `package-lock.json` files were copied into the container to enable dependency installation.

- **Install Dependencies**: We executed `npm install` to install all the backend dependencies.

- **Copy Application Code**: We ensured that the container contains all the backend code by copying the application files.

- **Expose Port**: Port 5000 was exposed to enable external access to the backend application.

- **Define Startup Command**: We defined the command to run the backend application using `CMD ["node", "server.js"]`.

## Objective 3: Dockerized MongoDB

In this project, we successfully dockerized MongoDB as a database for our application. Here's a summary of the steps involved:

- **Use Official Image**: We utilized the official MongoDB image from Docker Hub.

- **Exposed Ports**: We exposed port 27017 to allow communication with the MongoDB instance.

- **Persistent Data**: We created a data volume to store MongoDB data persistently.

- **Initialization**: MongoDB was initialized and ready to accept connections.

## Objective 4: Docker Compose

We used Docker Compose to manage the orchestration of our Docker containers. Docker Compose simplifies the process of starting and managing multi-container applications. Here are the key aspects:

- **Version**: We defined the version of Docker Compose to use in our project, which was '3' in this case.

- **Services**: We defined the different services required for our application, such as frontend, backend, and MongoDB.

- **Build and Ports**: We specified the build context, Dockerfile, and ports for each service.

- **Environment Variables**: Environment variables, such as the MongoDB connection URI, were configured to enable communication between services.

- **Networks**: We created a custom Docker network to ensure that the containers could communicate with each other.

- **Volumes**: We utilized volumes to ensure persistent storage of MongoDB data.

## Objective 5: Versioning and Pushing to DockerHub

We tagged our Docker images with version numbers using semantic versioning. Specifically, we tagged our frontend and backend images with the version 'v1.0.0'. Here are the key steps:

- **Tagging Images**: We used the `docker tag` command to tag our frontend and backend images with the version 'v1.0.0'.

- **Pushing to DockerHub**: We pushed our tagged images to DockerHub using the `docker push` command. We ensured that we had logged in to DockerHub using `docker login` before pushing.

By completing these objectives, we successfully Dockerized our application and made it ready for deployment.

