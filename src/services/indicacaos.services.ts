import { generateMessage } from "../helpers/message.helper";
import { Indicacaos } from "../entities/indicacaos.entity";
import { IndicacaosRepository } from '../repositories/indicacaos.repository';

class IndicacaosService {

    async getAll() {
        return IndicacaosRepository.getAll();
    }

    getById(id: number) {
        if (!id) throw new Error('O campo Id é obrigatório!');
        if(!Number(id)) throw new Error('O campo de id precisa ser numérico');
        return IndicacaosRepository.getById(id);
    }


    create(indicacaos: Indicacaos) {
        return IndicacaosRepository.create(indicacaos);
    }

    remove(id: number) {
        return IndicacaosRepository.delete(id);
    }

    update(id: number,indicacaos: Indicacaos) {
        return IndicacaosRepository.update(id, indicacaos);
    }

}

export default new IndicacaosService();