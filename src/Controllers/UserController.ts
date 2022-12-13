import { PrismaClient, Prisma,  User } from '@prisma/client';
import { parse } from 'path';

class UserController {
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient()
    }
    async create(data: Omit<User, 'id'>){
        try {
           return this.prisma.user.create({data:{...data}});
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
    async update(data: User){
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
        } catch (e) {
            return e;
        }
    }

    async list(){
        try {
           return this.prisma.user.findMany();
        } catch (e) {
            return e;
        }
    }

    async byID(idUser : string){
        try {
           return await this.prisma.user.findUnique({
            where: { id: idUser }
           })
        } catch (e) {
            return e;
        }
    }

    async login(email :  string,  password : string){
        try {
           const user =  await this.prisma.user.findUnique({
            where: {
                email,
              },
           })

           if(user!= null &&  user?.password === password){
              return user;
           }else{
            return null;
           }
           
        } catch (e) {
            return e;
        }
    }

    async delete(idUser : string){
        try {
           return await this.prisma.user.delete({
            where: { id: idUser }
           })
        } catch (e) {
            return e;
        }
    }
}
export default UserController