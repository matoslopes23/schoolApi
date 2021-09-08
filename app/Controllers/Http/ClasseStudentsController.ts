import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Class from 'App/Models/Class';
import Student from 'App/Models/Student';
import StudentValidator from 'App/Validators/StudentValidator';

export default class ClasseStudentsController {

    public async addAluno ({params, request}:HttpContextContract){
        const { students, ...data} = request.only(['room_number', 'capacity','students']);

        const classe = await Class.create(data);

        if(students && students.length >0){
            await classe.related('students').attach([students.id])
        }
        console.log(classe);
        return classe;

    }
}
