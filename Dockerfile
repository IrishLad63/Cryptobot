# Use official Node.js image
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build the Vite app
COPY . .
RUN npm run build

# Expose the port Fly sets (default 8080)
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]