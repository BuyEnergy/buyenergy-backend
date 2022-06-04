import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity({ name: 'feedbacks' })
export class Feedbacks {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'atendimento', type: 'varchar', length: 200 })
    atendimento?: string;

    @Column({ name: 'rating1', type: 'integer'})
    rating1?: number;

    @Column({ name: 'plataforma', type: 'varchar', length: 200 })
    plataforma?: string;

    @Column({ name: 'rating2', type: 'integer'})
    rating2?: number;
   
    @Column({ name: 'performace', type: 'varchar', length: 200 })
    performace?: string;

    @Column({ name: 'rating3', type: 'integer'})
    rating3?: number;
}