# Use official Node.js base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy only package files first (for caching)
COPY package*.json ./

# Install dependencies with legacy peer deps flag
RUN npm install --legacy-peer-deps

# Copy everything else
COPY . .

# Expose the port the app runs on (Fly will map this automatically)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
