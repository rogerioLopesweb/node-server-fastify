"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify = (0, fastify_1.default)({
    logger: true,
});
const PORT = 5000;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
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
    yield fastify.listen({ port: PORT, host: '0.0.0.0' }); //producao
});
startServer();
