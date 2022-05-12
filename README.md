# cliente-k8s

**Pre-Requisites** <br />
Node Version: 16.14.0 <br />
NPM 8.3.1 <br />
Docker 20.10.7

**Install** <br />
npm install

**Start node server** 
npm run dev

**Build docker container** <br />
docker build . -t markoshlima/cliente-k8s<br />
docker build . -t markoshlima/cliente-k8s --platform linux/amd64 //EKS

**Start docker container** <br />
docker run -it -p 5004:8080 -d markoshlima/cliente-k8s

**Logs docker container** <br />
docker logs [img]

**Inspect docker image** <br />
docker inspect [img] <br />
docker exec -it [img] /bin/bash

**Stop docker container** <br />
docker stop [img]