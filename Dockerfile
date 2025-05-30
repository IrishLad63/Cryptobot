# Use Node 18 base image
FROM node:18

# Create app directory
WORKDIR /app

# Install backend dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the frontend
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the server
CMD ["npm", "start"]