FROM nginx

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY ./dist/casanova /usr/share/nginx/html

RUN chown nginx:nginx /usr/share/nginx/html/*
