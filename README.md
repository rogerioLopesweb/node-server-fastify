Projeto feito com [nodejs](https://nodejs.org/en/) 

## SERVIDOR API Rota com Fastify

Documentação [fastify.io](https://www.fastify.io/) 

## Comandos instalação de pacotes NPM

* npm init -y
* npm install fastify
* npm i @fastify/cors
* npm install zod
* npm install -D nodemon
* npm install config
* npm i typescript --save-dev
* npm i -D typescript @types/node
* npm i prisma
* npx prisma migrate dev --name init  


## Videos de apoio a configuração de ambiente

https://www.youtube.com/watch?v=_RwE-UnVJxU


## publicacao em produção para servidor [napoleon.com.br](https://napoleon.com.br/)  
Executar o comando npm run build <br/>
Subir a pasta build/server.js  <br/>

"scripts": {
    "build": "tsc w",
    "start": "node build/server.js",
    "server": "nodemon build/server.js"
  },

Subir o arquivo package.json <br/>
No Cpanel executar: <br/>
 * 1-Executar a instalação do NPM
 * 2-Correr script js > start

 *sempre que atualizar o arquivo server.js excutar a opação 2 para atualizar<br/>

## ORM Prima
Video de referencia <br/>
https://www.youtube.com/watch?v=btaePK6RzgA

Comando migration  <br/>

npx prisma migrate dev --name UserAjustes