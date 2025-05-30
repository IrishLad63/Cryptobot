# Use official Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy all app files
COPY . .

# Build frontend
RUN npm run build

# Expose port for Fly.io
EXPOSE 3000

# Start backend server
CMD ["node", "server.js"]
