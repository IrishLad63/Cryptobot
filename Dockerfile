FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source
COPY . .

# Expose app port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]