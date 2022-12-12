import { PrismaClient, Prisma,  User } from '@prisma/client';

class UserController {
    private prima: PrismaClient;

    constructor(){
        this.prima = new PrismaClient()
    }
    async create(data: Omit<User, 'id'>){
        try {
           return this.prima.user.create({data:{...data}});
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                if (e.code === 'P2002') {
                   console.log("E-mail already existing")
                }
            }
            return e;
        }
       
    }

    async list(){
        try {
           return this.prima.user.findMany();
        } catch (e) {
            return e;
        }
       
    }

    async byID(idUser : string){
        try {
           return await this.prima.user.findUnique({
            where: { id: idUser }
           })
        } catch (e) {
            return e;
        }
    }
}
export default UserController