FROM nginx:latest

RUN rm /usr/share/nginx/html/index.html

COPY dist /usr/share/nginx/html/

EXPOSE 80
