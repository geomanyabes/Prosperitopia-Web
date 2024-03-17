# Use node image as base image
FROM node:latest AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
# RUN npm install -g npm@latest
# RUN npm install -g @angular/cli
RUN npm install --legacy-peer-deps

# Add the source code to app
COPY ./ /usr/local/app/

# Build the Angular application
RUN npm run build

# Use nginx image as base image for serving static files
FROM nginx:latest

# Copy built Angular app to nginx default public directory
COPY --from=build /usr/src/app/dist/Prosperitopia-Web /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run nginx
CMD ["nginx", "-g", "daemon off;"]
