import { createConnection } from 'typeorm';
import { Usuarios } from '../entities/usuarios.entity';


export const connection = createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'usersNode',
    entities: [
        Usuarios
    ],
    logging: true,
    synchronize: true
});