# Stage 1: Build the Angular application
FROM node:20-alpine AS build-stage

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy project files and build the application
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy build artifacts from the build stage to Nginx
# Based on angular.json, the output is in ./dist
COPY --from=build-stage /app/dist/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker build -t bkrajendra/sonpakhru:latest .
# docker run -d -p 8085:80 bkrajendra/sonpakhru:latest
# docker push bkrajendra/sonpakhru:latest