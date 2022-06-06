import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import UsuariosService from '../services/usuarios.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const usuarios = await UsuariosService.getAll();
    res.send(usuarios);
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await UsuariosService.getById(parseInt(req.params.id));
        res.send(result);
    } catch (e) {
        res.status(500).send(e);
    }
    
});

router.post('/create', async (req: Request, res: Response) => {
    await UsuariosService.create(req.body);
    res.status(201).send(generateMessage("Usuario criado com sucesso!"));
});


router.delete('/remove/:id', async (req: Request, res: Response) => {
    const usuariosId = parseInt(req.params.id);
    const usuarios = await UsuariosService.getById(usuariosId);
    if (!usuarios) return res.status(404).send(generateMessage('Usuario não encontrado! '));

    await UsuariosService.remove(usuariosId);
    return res.status(200).send(generateMessage('Usuario removido com sucesso!' ));
});

router.put('/update/:id/', async (req: Request, res: Response) => {
    const usuariosId = parseInt(req.params.id);
    const usuarios = await UsuariosService.getById(usuariosId);
    if (!usuarios) return res.status(404).send(generateMessage('Usuario não encontrado! '));

    await UsuariosService.update(usuariosId, req.body);

    res.status(200).send(generateMessage('Usuario atualizado com sucesso!'));
});

router.get('/:email/:password', async (req: Request, res: Response) => {
    const login = await UsuariosService.authenticate(req.params.email,req.params.password)
    res.send(login)
})



export default router;