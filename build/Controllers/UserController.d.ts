import { User } from '@prisma/client';
declare class UserController {
    private prima;
    constructor();
    create(data: Omit<User, 'id'>): Promise<unknown>;
    list(): Promise<unknown>;
    byID(idUser: string): Promise<unknown>;
}
export default UserController;
