"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class UserController {
    constructor() {
        this.prima = new client_1.PrismaClient();
    }
    async create(data) {
        try {
            return this.prima.user.create({ data: { ...data } });
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = UserController;
