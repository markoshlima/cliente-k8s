# cliente-k8s

** Pre-Requisites **
Node Version: 16.14.0
NPM 8.3.1
Docker 20.10.7

** Install **
npm install

** Start node server **
npm run dev

** Build docker container **
docker build . -t markoshlima/cliente-k8s

** Start docker container **
docker run -it -p 5000:8080 -d markoshlima/cliente-k8s

** Logs docker container **
docker logs [img]

** Inspect docker image **
docker inspect [img]
docker exec -it [img] /bin/bash

** Stop docker container **
docker stop [img]