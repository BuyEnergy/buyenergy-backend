import { Indicacaos } from '../entities/indicacaos.entity';
import { getConnection } from 'typeorm';

export class IndicacaosRepository {

    static getAll() {
        return getConnection()
        .getRepository(Indicacaos)
        .find();
    }

    static getById(id: number) {
        return getConnection()
        .getRepository(Indicacaos)
        .findOne(id);
    }

    static create(indicacaos: Indicacaos) {
        return getConnection()
        .getRepository(Indicacaos)
        .insert(indicacaos);
    }

    static delete(id: number) {
        return getConnection()
        .getRepository(Indicacaos)
        .delete({
            id: id,
        });
    }

    static update(id: number, indicacaos: Partial<Indicacaos>) {
        return getConnection()
        .getRepository(Indicacaos)
        .update({
            id: id
        }, indicacaos);
    }
  }