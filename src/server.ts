import Fastify from "fastify";
import cors from '@fastify/cors'
import { z } from 'zod'
import UserController from "./Controllers/UserController";
import { userInfo } from "os";


const startServer = async () => {
  const userController = new UserController();
  const PORT = 5000;
  const fastify = Fastify({
      logger:true,
  })

  await fastify.register(cors,{
      origin: false,
  })

  fastify.get('/', async (req, reply) => {
    const users = await userController.list()
    reply.send(users);
  });

  fastify.post('/user/id', async (req, reply) => {
    const createUserBody = z.object({
      idUser: z.string()
    });

    const userZ = createUserBody.parse(req.body)
    const user = await userController.byID(userZ.idUser)
    reply.send(user);
  });

  fastify.post('/user/login', async (req, reply) => {
    const createUserBody = z.object({
      email: z.string(),
      password: z.string(),
    });

    const userZ = createUserBody.parse(req.body)
    const user = await userController.login(userZ.email, userZ.password)
    reply.send(user);
  });

  fastify.post('/user/create', async (req, reply) => {
    const createUserBody = z.object({
      name: z.string(),
      username: z.string(),
      email: z.string().email({ message: "Invalid email address" }),
      password: z.string()
    });

    const userZ = createUserBody.parse(req.body)
    const user = await userController.create({
        name: userZ.name,
        username: userZ.username,
        email : userZ.email,
        password : userZ.password
      })
      reply.send(user);
    });

    fastify.put('/user/update', async (req, reply) => {
      const createUserBody = z.object({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string()
      });
  
      const userZ = createUserBody.parse(req.body)
      const user = await userController.update({
          id: userZ.id,
          name: userZ.name,
          username: userZ.username,
          email : userZ.email,
          password : userZ.password
        })
        reply.send(user);
      });

      fastify.delete('/user/delete', async (req, reply) => {
        const createUserBody = z.object({
          idUser: z.string()
        });
    
        const userZ = createUserBody.parse(req.body)
        const user = await userController.delete(userZ.idUser)
        reply.send(user);
      });

    await fastify.listen({port:PORT, host:'localhost'}) //desenvolvimentolocal
   //await fastify.listen({port:PORT, host: '0.0.0.0'}) //producao
}

startServer()
