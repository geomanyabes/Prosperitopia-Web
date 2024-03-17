# Use node image as base image
FROM node:18.18.0 AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install -g @angular/cli@17.3.0
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN ng build --prod

# Use nginx image as base image for serving static files
FROM nginx:latest

# Copy built Angular app to nginx default public directory
COPY --from=build /usr/src/app/dist/Prosperitopia-Web /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run nginx
CMD ["nginx", "-g", "daemon off;"]
