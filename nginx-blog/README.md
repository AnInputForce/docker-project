# hexo and Nginx

Running `hexo static blog` via reverse proxy is a common practice. This configuration provides a quick way to run the application behind **nginx**.


To run the containers, run the following in this folder, it should starts the containers in dettach mode.

```bash
 docker-compose up -d
``` 

To recreate the nginx image you can force the build.

```bash
 docker-compose up --build -d
``` 

To force recreate the images.

```bash
docker-compose up --build --force-recreate  -d
```

To stop all containers

```bash
docker-compose stop
```

To display container logs



### Display Information

docker-compose ps
To display the containers running
