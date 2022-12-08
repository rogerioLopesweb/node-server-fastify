import Fastify from "fastify";

const fastify = Fastify({
  logger:true,
})
const PORT = 5000;
const startServer = async () => {
   

  fastify.get('/', (req, reply) => {
    reply.send([
      { id: 1, title: 'Post One', body: 'This is post one' },
      { id: 2, title: 'Post Two', body: 'This is post two' },
      { id: 3, title: 'Post Three', body: 'This is post three' },
      { id: 4, title: 'Post Three', body: 'This is post Four 4' },
      { id: 5, title: 'Post Three', body: 'This is post Five 5' },
    ]);
  });

  //await fastify.listen({port:PORT, host:'localhost'}) //desenvolvimentolocal
  await fastify.listen({port:PORT, host: '0.0.0.0'}) //producao
}
  startServer()