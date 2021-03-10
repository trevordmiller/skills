# Docker

**[Official documentation](https://docs.docker.com)**

## Create a container

```shell
docker run [-itdp xxxx:yyyy u someuser] [--init] some-image:some-tag [somecommand]
```

- `-i` for interactive.
- `-t` for tty attached to host shell.
- `-d` for detached.
- `-p` to map a port of the host to a port in the container with value like `xxxx:yyyy`.
- `—init` for running an init inside the container that forwards signals and reaps processes.

Example:

```shell
docker run -itu root ubuntu:latest bash
pwd
echo "hello world"
exit
```

## View containers

```shell
docker ps [-a]
```

- `-a` for all including those that have been stopped.

## Run a command in a container

```shell
docker exec [-it] some-container-id somecommand
```

- `-i` for interactive.
- `-t` for tty attached to host shell.

Example:

```shell
docker exec -it some-container bash
pwd
echo "hello world"
exit
```

## View logs from a container

```shell
docker logs [-f] some-container-id
```

- `-f` to follow the logs live.

## View used resources

```shell
docker stats
```

## Prune caches

```shell
docker system prune [-a]
```

- `-a` for all including those in use.

## Stop a running container

```shell
docker stop some-container-id
```

## Restart a stopped container

```shell
docker start some-container-id
```

## Delete a container

```shell
docker rm some-container-id
```

## View persisted data in a named volume

```shell
docker volume inspect some-volume
```

## View images

```shell
docker images
```

Example:

```shell
docker images | grep some-image
```

## Delete an image

```shell
docker rmi some-image
```

## View low-level details about an image

```shell
docker inspect some-image
```

## Create an image from a Dockerfile

```shell
docker build -t some-image:some-tag some-directory-with-dockerfile
```

Example:

```shell
docker build -t hello-world:abcde .
```

## See the command that was used to create each layer within an image

```shell
docker image history some-image:some-tag
```

- Once a layer changes, all downstream layers are recreated.

## Re-use instructions for creating an image in a Dockerfile

```dockerfile
FROM some-base-image:some-tag
...
```

- Each instruction in the Dockerfile creates a layer in the image.
- When you change the Dockerfile and rebuild the image, only those layers which have changed are rebuilt.

Example:

```dockerfile
FROM node:12-slim AS builder
EXPOSE 3000
ENV NODE_ENV=production
RUN groupadd --gid 1001 someuser \
    && useradd --uid 1001 --gid someuser --shell /bin/bash --create-home someuser \
    && mkdir /usr/src/something \
    && chown -R someuser:someuser /usr/src/something
USER someuser
RUN npm config set registry https://someregistry.com \
    && npm config set optional false \
    && npm config set loglevel warn
WORKDIR /usr/src/something
COPY --chown=someuser:someuser package.json package-lock*.json ./
RUN npm ci
COPY --chown=someuser:someuser . .

FROM node:12-slim
WORKDIR /usr/src/something
COPY --from=builder /usr/src/jsstack/node_modules ./node_modules
COPY --from=builder /usr/src/jsstack/lib ./lib
CMD ["node", "lib/index.js"]
```

## Prevent items from being added to an image in a .dockerignore file

```text
Dockerfile
.dockerignore
docker-compose.yml
.git/
.gitignore
...
```

Example:

```text
Dockerfile
.dockerignore
docker-compose.yml
.git/
.gitignore
node_modules/
```

## Work inside containers for local development

```shell
docker-compose up -d
docker-compose exec someservice somecommand
docker-compose down
```

Example:

```shell
docker-compose up -d
docker-compose exec someservice bash
npm install
npm run dev
npm run test
exit
docker-compose down
```

## Re-use local development settings in a docker-compose.yml file

```shell
version: "x.y"
services:
  someservice:
    ...
```

Example:

```shell
version: "3.8"
services:
  something:
    image: node:12
    working_dir: /usr/src/something
    volumes:
      - .:/usr/src/something:delegated
    ports:
      - "3000:3000"
    stdin_open: true
    tty: true
```
