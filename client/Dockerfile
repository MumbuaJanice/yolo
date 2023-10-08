#Official Node.js runtime as a parent image
FROM node:14

#Working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy all the application files to the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
