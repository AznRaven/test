# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm postinstall

# Copy the rest of your application's source code
COPY . .

# Expose a port that the application will listen on (adjust this as needed)
EXPOSE 3000

# Define the command to run your application
CMD [ "npm", "run", "dev" ]
