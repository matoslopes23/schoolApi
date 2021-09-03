import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Teacher from 'App/Models/Teacher'

export default class TeachersController {
    public async create({request}:HttpContextContract){
        const dataTeacher = await request.only(['name', 'matriculation', 'email', 'password', 'birth_date']);

        const teacher = await Teacher.create(dataTeacher);

        return teacher;
    }
    public async update({params, request}){
        const teacher = await Teacher.findOrFail(params.id);

        const dataToUpdate = await request.only(['name', 'matriculation', 'email', 'password', 'birth_date']);

        teacher.merge(dataToUpdate);

        await teacher.save();
        
        return teacher;
    }
    public async index(){
        const all = await Teacher.all();

        return all;
    }
    public async destroy({params, response}){
        const teacher = await Teacher.findOrFail(params.id);

        await teacher.delete();

        return response.status(200).json({message: "Deletado com sucesso"})

    }
}
