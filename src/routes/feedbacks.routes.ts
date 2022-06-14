import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import FeedbacksService from '../services/feedbacks.services';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const feedbacks = await FeedbacksService.getAll();
    res.send(feedbacks);
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await FeedbacksService.getById(parseInt(req.params.id));
        res.send(result);
    } catch (e) {
        res.status(500).send(e);
    }
    
});

router.post('/create', async (req: Request, res: Response) => {
    await FeedbacksService.create(req.body);
    res.status(201).send(generateMessage("Feedback criado com sucesso!"));
});


router.delete('/remove/:id', async (req: Request, res: Response) => {
    const feedbacksId = parseInt(req.params.id);
    const feedbacks = await FeedbacksService.getById(feedbacksId);
    if (!feedbacks) return res.status(404).send(generateMessage('Feedback não encontrado! '));

    await FeedbacksService.remove(feedbacksId);
    return res.status(200).send(generateMessage('Feedback removido com sucesso!' ));
});

router.put('/update/:id', async (req: Request, res: Response) => {
    const feedbacksId = parseInt(req.params.id);
    const feedbacks = await FeedbacksService.getById(feedbacksId);
    if (!feedbacks) return res.status(404).send(generateMessage('Feedback não encontrado! '));

    await FeedbacksService.update(feedbacksId, req.body);

    res.status(200).send(generateMessage('Feedback atualizado com sucesso!'));
});


export default router;