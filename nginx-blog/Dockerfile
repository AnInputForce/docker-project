FROM nginx:alpine
#set timezone
RUN apk update && apk add tzdata && \
    ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" > /etc/timezone && \
    rm -rf /root/.cache

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]