import { Entity, Column, ObjectIdColumn } from 'typeorm';

// 注册实体类
@Entity()
export class User {
  @ObjectIdColumn()
  id?: number;

  @Column({ default: null })
  name: string;
}
