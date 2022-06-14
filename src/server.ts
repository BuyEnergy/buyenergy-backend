import express, { Request, Response } from 'express';
import cors from 'cors';
import usuariosRouter from './routes/usuarios.routes';
import feedbacksRouter from './routes/feedbacks.routes';
import indicacaosRouter from './routes/indicacaos.routes';
import { connection } from './database/config';

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/usuarios', usuariosRouter);
app.use('/feedbacks', feedbacksRouter);
app.use('/indicacaos', indicacaosRouter);

app.get('/', (req: Request, res: Response) => {
    const messageObject = {
        message: "Sistema no ar"
    };
    res.send(messageObject);
});


app.listen(process.env.PORT || port, async () => {
    await connection;
    console.log('Banco de dados conectado com sucesso!');
    console.log(`Servidor disponível na porta: ${port}`);
});


// connection.then(() => {
//     console.log('Banco de dados conectado com sucesso!');
// }).catch((err) => {
//     console.log(err);
// });