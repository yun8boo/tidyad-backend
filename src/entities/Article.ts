import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Article {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;

  @Column()
  url: string;
  
  constructor(url: string) {
    this.url = url
  }
}