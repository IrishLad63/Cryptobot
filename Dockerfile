# Use official Node.js base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies with legacy peer deps
RUN npm install --legacy-peer-deps

# Copy rest of the app
COPY . .

# Build the frontend
RUN cd frontend && npm install && npm run build

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]