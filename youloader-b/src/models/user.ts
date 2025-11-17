import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm'
import { FileFolder } from './file.ts'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('varchar', { length: 200 })
    firstName: string

    @Column('varchar', { length: 200 })
    lastName: string

    @Column('varchar', { length: 200 })
    email: string

    @Column('varchar', { length: 200 })
    username: string

    @Column('varchar', { length: 200 })
    password: string

    @CreateDateColumn()
    createdAt: Date

    @OneToOne(() => FileFolder, (folder) => folder.user)
    folder: FileFolder
}
