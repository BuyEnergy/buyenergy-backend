import { Usuarios } from '../entities/usuarios.entity';
import { getConnection } from 'typeorm';

export class UsuariosRepository {

    static getAll() {
        return getConnection()
        .getRepository(Usuarios)
        .find();
    }

    static getById(id: number) {
        return getConnection()
        .getRepository(Usuarios)
        .findOne(id);
    }

    static create(usuarios: Usuarios) {
        return getConnection()
        .getRepository(Usuarios)
        .insert(usuarios);
    }

    static delete(id: number) {
        return getConnection()
        .getRepository(Usuarios)
        .delete({
            id: id,
        });
    }

    static update(id: number, usuarios: Partial<Usuarios>) {
        return getConnection()
        .getRepository(Usuarios)
        .update({
            id: id
        }, usuarios);
    }

    static async getLogin(email: string, password: string) {
        return getConnection()
            .getRepository(Usuarios)
            .findOne(
                {
                    where: {
                        email: email,
                        password: password
                    }
                }
            )
    }
}
