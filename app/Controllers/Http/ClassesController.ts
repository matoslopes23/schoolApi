import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Class from 'App/Models/Class'

export default class ClassesController {
  

  public async create ({request}: HttpContextContract) {
     const data = await request.only(['room_number','capacity'])

     const classe =  await Class.create(data)

     return classe;

  }

  public async index ({params}: HttpContextContract){
    const all = await Class.all();

    return all;
  }

  public async show ({params}: HttpContextContract) {
    const classe = await Class.findOrFail(params.id);

    return classe;
  }


  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
