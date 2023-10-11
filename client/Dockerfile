# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port that your frontend application runs on (e.g., 3000)
EXPOSE 3000

# Define the command to run your app (usually npm start)
CMD [ "npm", "start" ]
