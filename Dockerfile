# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all remaining source code
COPY . .

# Expose port (Fly will use this automatically)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
