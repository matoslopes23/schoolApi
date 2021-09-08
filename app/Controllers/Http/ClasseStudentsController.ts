import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Class from 'App/Models/Class';
import Student from 'App/Models/Student';
import ClassValidator from 'App/Validators/ClassValidator';
import StudentValidator from 'App/Validators/StudentValidator';

export default class ClasseStudentsController {

    public async addAluno (ctx:HttpContextContract){
        const {id} = ctx.params 
        
        const data = await ctx.request.validate(ClassValidator)

        const classe = await Class.find(id);

        classe?.merge(data);
        classe?.save();
        await classe?.related('students').sync(['295c97bc-1e77-4050-9a0b-ee4ddc2182a9','54c9eaab-c03e-48ab-93e7-d04f2cad9ec8'])

        return classe;

    }
}
