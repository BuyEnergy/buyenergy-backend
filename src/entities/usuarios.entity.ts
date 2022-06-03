import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import  {  EncryptionTransformer  }  from  "typeorm-encrypted" ;


@Entity({ name: 'usuarios' })
export class Usuarios {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name?: string;

    @Column({ name: 'email', type: 'varchar', length: 100 })
    email?: string;

    @Column({ name: 'password', type: 'varchar', 
    nullable : false , 
    transformer : new  EncryptionTransformer ( { 
      key : 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d59' , 
      algorithm : 'aes-256-cbc' , 
      ivLength : 16 , 
      iv : 'ff5ac19190424b1d88f9419ef949ae56' 
    } )  })
    password?: string;

    @Column({ name: 'inclusion_date', type: 'date' })
    inclusionDate?: Date | string;

    @Column({ name: 'logged_in', type: 'boolean' })
    loggedIn?: boolean;
}