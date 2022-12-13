"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class UserController {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(data) {
        try {
            return this.prisma.user.create({ data: { ...data } });
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                if (e.code === 'P2002') {
                    console.log("E-mail already existing");
                }
            }
            return e;
        }
    }
    async update(data) {
        try {
            return this.prisma.user.updateMany({
                where: {
                    id: data.id,
                },
                data: {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    password: data.password
                },
            });
        }
        catch (e) {
            return e;
        }
    }
    async list() {
        try {
            return this.prisma.user.findMany();
        }
        catch (e) {
            return e;
        }
    }
    async byID(idUser) {
        try {
            return await this.prisma.user.findUnique({
                where: { id: idUser }
            });
        }
        catch (e) {
            return e;
        }
    }
    async login(email, password) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    email,
                },
            });
            if (user != null && user?.password === password) {
                return user;
            }
            else {
                return null;
            }
        }
        catch (e) {
            return e;
        }
    }
    async delete(idUser) {
        try {
            return await this.prisma.user.delete({
                where: { id: idUser }
            });
        }
        catch (e) {
            return e;
        }
    }
}
exports.default = UserController;
