import { PrismaClient, User } from '@prisma/client';

class UserController {
    private prima: PrismaClient;

    constructor(){
        this.prima = new PrismaClient()
    }
    async create(data: Omit<User, 'id'>){
        try {
           return this.prima.user.create({data:{...data}});
        } catch (error) {
            return error
        }
    }
}
export default UserController