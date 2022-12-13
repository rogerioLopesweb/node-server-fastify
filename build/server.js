"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const zod_1 = require("zod");
const UserController_1 = __importDefault(require("./Controllers/UserController"));
const startServer = async () => {
    const userController = new UserController_1.default();
    const PORT = 5000;
    const fastify = (0, fastify_1.default)({
        logger: true,
    });
    await fastify.register(cors_1.default, {
        origin: false,
    });
    fastify.get('/', async (req, reply) => {
        const users = await userController.list();
        reply.send(users);
    });
    fastify.post('/user/id', async (req, reply) => {
        const createUserBody = zod_1.z.object({
            idUser: zod_1.z.string()
        });
        const userZ = createUserBody.parse(req.body);
        const user = await userController.byID(userZ.idUser);
        reply.send(user);
    });
    fastify.post('/user/login', async (req, reply) => {
        const createUserBody = zod_1.z.object({
            email: zod_1.z.string(),
            password: zod_1.z.string(),
        });
        const userZ = createUserBody.parse(req.body);
        const user = await userController.login(userZ.email, userZ.password);
        reply.send(user);
    });
    fastify.post('/user/create', async (req, reply) => {
        const createUserBody = zod_1.z.object({
            name: zod_1.z.string(),
            username: zod_1.z.string(),
            email: zod_1.z.string().email({ message: "Invalid email address" }),
            password: zod_1.z.string()
        });
        const userZ = createUserBody.parse(req.body);
        const user = await userController.create({
            name: userZ.name,
            username: userZ.username,
            email: userZ.email,
            password: userZ.password
        });
        reply.send(user);
    });
    await fastify.listen({ port: PORT, host: 'localhost' }); //desenvolvimentolocal
    //await fastify.listen({port:PORT, host: '0.0.0.0'}) //producao
};
startServer();
