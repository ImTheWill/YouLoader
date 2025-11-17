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
import { Users } from './user.ts'

@Entity()
export class FileFolder {
    @PrimaryGeneratedColumn('uuid')
    id: string
    //foreign
    @OneToOne(() => Users, (user) => user.folder)
    @JoinColumn()
    user: Users

    @OneToMany(() => File, (file) => file.folder)
    files: File[]

    @Column('int', { default: 0 })
    total_bytes: number
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
    file_name: string

    @Column('int')
    bytes: number

    @CreateDateColumn()
    created_at: Date
}
