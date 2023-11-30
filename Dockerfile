# Use the official Node.js image as parent image
FROM node:21 AS development

# Set the working directory. If it doesn't exists, it'll be created
WORKDIR /app

# Define the env variable `PORT`
ENV PORT 3000

# Expose the port 3000
EXPOSE ${PORT}

# Use the Node.js image for the deployment
FROM node:21-slim AS deploy

# Set the working directory. If it doesn't exists, it'll be created
WORKDIR /app

# Copy the file `package.json` from current folder
# inside our image in the folder `/app`
COPY ./package.json /app/package.json

# Install the dependencies
RUN npm install

# Copy all files from current folder
# inside our image in the folder `/app`
COPY . /app

# Start the app
ENTRYPOINT ["npm", "start"]