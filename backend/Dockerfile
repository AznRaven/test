# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install your app's dependencies
RUN npm install

# Bundle your app source code
COPY . .

# Expose the port your app runs on (adjust this to your app's port)
EXPOSE 8080

# Define a command to run your app
CMD [ "node", "server.js" ]
