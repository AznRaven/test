# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install your app's dependencies
RUN npm install

# Copy your app's source code to the container
COPY . .

# Build your React app
RUN npm run build

# Expose the port (adjust this to your app's port, if necessary)
EXPOSE 3000

# Define a command to run your React app
CMD [ "npm", "start" ]
