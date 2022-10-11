import { Book } from "src/book/entities/book.entitiy";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Feed extends BaseEntity{
    @PrimaryGeneratedColumn()
    no: number;

    @Column({ type: 'varchar', length: 30, comment: '제목' })
    title: string;

    @Column({ type: 'varchar', comment: '글' })
    text: string;

    // @Column({comment:"책"})
    // @OneToOne(()=> Book.no)
    // books: Book;

    // @Column({comment:"좋아요 아이콘"})
    // @OneToMany(()=> Heart.no)
    // heart_icons: Heart;

    // @Column({comment:"fire 아이콘"})
    // @OneToMany(()=> Fire.no)
    // fire_icons: Fire;

    // @Column({comment:"x 아이콘"})
    // @OneToMany(()=> X.no)
    // x_icons: X;

    // @Column({comment:"울음 아이콘"})
    // @OneToMany(()=> Cry.no)
    // cry_icons: Cry;

    // @Column({comment:"댓글"})
    // @OneToMany(()=> Reply.no)
    // reply: Reply;

    // @Column({comment:"유저"})
    // @OneToMany(()=> User.no)
    // user: User;

    // @Column({comment:"신고"})
    // @OneToOne(()=> Declaration.no)
    // declaration: Declaration;

    @Column({comment:"삭제 여부", default:false})
    isDeleted: boolean;

    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
    updatedAt: Date;
  
    @DeleteDateColumn({ name: 'delete_at', comment: '삭제일' })
    deletedAt?: Date | null;
}