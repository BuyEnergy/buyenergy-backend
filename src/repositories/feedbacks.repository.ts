import { Feedbacks } from '../entities/feedbacks.entity';
import { getConnection } from 'typeorm';

export class FeedbacksRepository {

    static getAll() {
        return getConnection()
        .getRepository(Feedbacks)
        .find();
    }

    static getById(id: number) {
        return getConnection()
        .getRepository(Feedbacks)
        .findOne(id);
    }

    static create(feedbacks: Feedbacks) {
        return getConnection()
        .getRepository(Feedbacks)
        .insert(feedbacks);
    }

    static delete(id: number) {
        return getConnection()
        .getRepository(Feedbacks)
        .delete({
            id: id,
        });
    }

    static update(id: number, feedbacks: Partial<Feedbacks>) {
        return getConnection()
        .getRepository(Feedbacks)
        .update({
            id: id
        }, feedbacks);
    }
  }