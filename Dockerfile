# Dockerfile
FROM nginx:alpine

# Copy web page content from the local directory to the NGINX default directory
COPY ./ /usr/share/nginx/html

# Expose port 80
EXPOSE 80
# docker build -t bkrajendra/sonpakhru:latest .
# docker run -d -p 8080:80 bkrajendra/sonpakhru:latest
# docker push bkrajendra/sonpakhru:latest