# Use the official Node.js image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular application
RUN npm run build --prod

# Use the official Nginx image to serve the Angular application
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY --from=0 /app/dist/your-angular-app /usr/share/nginx/html

# Expose port 
EXPOSE 4300

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]