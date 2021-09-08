import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Class from 'App/Models/Class';
import ClassValidator from 'App/Validators/ClassValidator';

export default class ClasseStudentsController {

    public async addAluno (ctx:HttpContextContract){
        const {id} = ctx.params 
        //const student_id = ctx.request.body;
        const data = await ctx.request.validate(ClassValidator)

        const classe = await Class.find(id);
        const {student_id} = ctx.request.only(['student_id'])
        classe?.merge(data);
        classe?.save();

        await classe?.related('students').sync([...student_id])

        await classe?.load('students')
        return classe;

    }
}
