import {
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToOne,
    OneToMany,
    JoinColumn,
    ManyToOne,
} from 'typeorm'
import { User } from './user.ts'

@Entity()
export class FileFolder {
    @PrimaryGeneratedColumn('uuid')
    id: string
    //foreign
    @OneToOne(() => User, (user) => user.folder)
    @JoinColumn()
    user: User

    @OneToMany(() => File, (file) => file.folder)
    files: File[]

    @Column('int')
    totalBytes: number
}
@Entity()
export class File {
    @PrimaryGeneratedColumn('uuid')
    id: string
    //foreign key
    @ManyToOne(() => FileFolder, (folder) => folder.files)
    @JoinColumn()
    folder: FileFolder

    @Column('varchar', { length: 200 })
    fileName: string

    @Column('int')
    bytes: number

    @CreateDateColumn()
    createdAt: Date
}
