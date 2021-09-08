import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, ManyToMany, manyToMany, } from '@ioc:Adonis/Lucid/Orm'
import Teacher from './Teacher';
import Student from './Student';

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  public id: string;
  @column()
  public teacherId:string;

  @column()
  public room_number:number;

  @column()
  public capacity: number;

  @column()
  public availability: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @manyToMany(() => Student)
  public students: ManyToMany<typeof Student>

  @belongsTo(() => Teacher, {foreignKey: 'teacherId'})
  public teacher: BelongsTo<typeof Teacher>

}


