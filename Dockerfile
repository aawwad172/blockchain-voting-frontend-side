# frontend/Dockerfile

# Use Node.js LTS base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
