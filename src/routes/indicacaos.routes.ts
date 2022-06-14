import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import IndicacaosService from '../services/indicacaos.services';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const indicacaos = await IndicacaosService.getAll();
    res.send(indicacaos);
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await IndicacaosService.getById(parseInt(req.params.id));
        res.send(result);
    } catch (e) {
        res.status(500).send(e);
    }
    
});

router.post('/create', async (req: Request, res: Response) => {
    await IndicacaosService.create(req.body);
    res.status(201).send(generateMessage("A Indicação foi criada com sucesso!"));
});


router.delete('/remove/:id', async (req: Request, res: Response) => {
    const indicacaosId = parseInt(req.params.id);
    const indicacaos = await IndicacaosService.getById(indicacaosId);
    if (!indicacaos) return res.status(404).send(generateMessage('A Indicação foi não encontrada! '));

    await IndicacaosService.remove(indicacaosId);
    return res.status(200).send(generateMessage('A Indicação removida com sucesso!' ));
});

router.put('/update/:id/', async (req: Request, res: Response) => {
    const indicacaosId = parseInt(req.params.id);
    const indicacaos = await IndicacaosService.getById(indicacaosId);
    if (!indicacaos) return res.status(404).send(generateMessage('A Indicação não encontrada! '));

    await IndicacaosService.update(indicacaosId, req.body);

    res.status(200).send(generateMessage('Indicação atualizada com sucesso!'));
});


export default router;