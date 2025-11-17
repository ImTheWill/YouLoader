import bcrypt from 'bcrypt'
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToOne,
    BeforeInsert,
} from 'typeorm'
import { FileFolder } from './file.ts'

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('varchar', { length: 200 })
    first_name: string

    @Column('varchar', { length: 200 })
    last_name: string

    @Column('varchar', { length: 200 })
    email: string

    @Column('varchar', { length: 200 })
    username: string

    @Column('varchar', { length: 200 })
    password: string

    @CreateDateColumn()
    created_at: Date

    @OneToOne(() => FileFolder, (folder) => folder.user, { cascade: true })
    folder: FileFolder
}
