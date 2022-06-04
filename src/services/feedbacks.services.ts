import { generateMessage } from "../helpers/message.helper";
import { Feedbacks } from "../entities/feedbacks.entity";
import { FeedbacksRepository } from '../repositories/feedbacks.repository';

class FeedbacksService {

    async getAll() {
        return FeedbacksRepository.getAll();
    }

    getById(id: number) {
        if (!id) throw new Error('O campo Id é obrigatório!');
        if(!Number(id)) throw new Error('O campo de id precisa ser numérico');
        return FeedbacksRepository.getById(id);
    }


    create(feedbacks: Feedbacks) {
        return FeedbacksRepository.create(feedbacks);
    }

    remove(id: number) {
        return FeedbacksRepository.delete(id);
    }

    update(id: number,feedbacks: Feedbacks) {
        return FeedbacksRepository.update(id, feedbacks);
    }

}

export default new FeedbacksService();