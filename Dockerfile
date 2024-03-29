# Use node image as base image
FROM node:18.18.0-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@10.2.3
RUN npm install -g @angular/cli@17.3.0
RUN npm install --legacy-peer-deps
# Compatibility
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

# Add the source code to app
COPY . .

# Build the Angular application
RUN npm run build
# Use nginx image as base image for serving static files
FROM nginx:stable

# Remove existing files in NGINX default public directory
RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/nginx.conf
# Copy built Angular app to nginx default public directory
COPY --from=build /usr/src/app/dist/prosperitopia-web/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80
EXPOSE 443
