FROM nginx:alpine
# COPY index.html /usr/share/nginx/html/index.html
# COPY nginx.conf /etc/nginx/nginx.conf
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]