import { User } from '@prisma/client';
declare class UserController {
    private prisma;
    constructor();
    create(data: Omit<User, 'id'>): Promise<unknown>;
    list(): Promise<unknown>;
    byID(idUser: string): Promise<unknown>;
    login(email: string, password: string): Promise<unknown>;
}
export default UserController;
