import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Teacher from './Teacher';

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public teacher_id:number;

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


  @belongsTo(() => Teacher)
  public teacher: BelongsTo<typeof Teacher>

}


