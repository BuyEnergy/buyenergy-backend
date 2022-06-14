import { createConnection } from 'typeorm';
import { Usuarios } from '../entities/usuarios.entity';
import { Feedbacks } from '../entities/feedbacks.entity';
import { Indicacaos } from '../entities/indicacaos.entity';


export const connection = createConnection({
    type: 'postgres',
    host: 'ec2-44-196-174-238.compute-1.amazonaws.com',
    port: 5432,
    username: 'zuuzgarsgeejdu',
    password: '700ced2b27a2f2c056f2502645974d397ff3ab1c3f3550f980aebb165d999b89',
    database: 'ddtl155b845btk',
    entities: [
        Usuarios,
        Feedbacks,
        Indicacaos,
    ],
    // logging: true,
    // synchronize: true,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
});