import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Class from './Class';

export default class Teacher extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string;

  @column()
  public matriculation: string;

  @column()
  public email: string;

  @column.date({
    serialize: (value: DateTime) => value ? value.toFormat('dd-MM-yyyy') : value,
  }) public birthDate: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> Class)
  public classes: HasMany<typeof Class>

  
}
