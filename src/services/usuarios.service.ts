import { generateMessage } from "../helpers/message.helper";
import { Usuarios } from "../entities/usuarios.entity";
import { UsuariosRepository } from "../repositories/usuarios.repository";

class UsuariosService {

    async getAll() {
        return UsuariosRepository.getAll();
    }

    getById(id: number) {
        if (!id) throw new Error('O campo Id é obrigatório!');
        if(!Number(id)) throw new Error('O campo de id precisa ser numérico');
        return UsuariosRepository.getById(id);
    }


    create(usuarios: Usuarios) {
        return UsuariosRepository.create(usuarios);
    }

    remove(id: number) {
        return UsuariosRepository.delete(id);
    }

    update(id: number, usuarios: Usuarios) {
        return UsuariosRepository.update(id, usuarios);
    }

    authenticate(email: string, password: string) {
        return UsuariosRepository.getLogin(email, password)
      }
}

export default new UsuariosService();