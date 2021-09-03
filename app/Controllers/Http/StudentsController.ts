import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import  Student  from 'App/Models/Student';

export default class StudentsController {

    public async create( {request} : HttpContextContract){
        const { name, matriculation, email, password, birth_date} = request.all();

        const student = await Student.create({
            name, 
            matriculation, 
            email, 
            password,
            birth_date
        });

        return student;

    }
    public async update({params, request}){
        const students = await Student.findOrFail(params.id);

        const dataToUpdate = await request.only(['name', 'matriculation', 'email', 'password', 'birth_date']);

        students.merge(dataToUpdate);

        await students.save();
        
        return students;
    }
    public async index(){
        const all = await Student.all();

        return all;
    }
    public async destroy({params, response}){
        const student = await Student.findOrFail(params.id);

        await student.delete();

        return response.status(200).json({message: "Deletado com sucesso"})

    }
}
