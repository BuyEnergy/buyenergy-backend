import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity({ name: 'indicacaos' })
export class Indicacaos {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'nome_indicacao', type: 'varchar', length: 100 })
    nome_indicacao?: string;

    @Column({ name: 'telefone_indicacao', type: 'varchar', length: 13 })
    telefone_indicacao?: string;
   
    @Column({ name: 'email_indicacao', type: 'varchar', length: 100 })
    email_indicacao?: string;

    @Column({ name: 'comentario_indicacao', type: 'varchar', length: 100})
    comentario_indicacao?: string;
}