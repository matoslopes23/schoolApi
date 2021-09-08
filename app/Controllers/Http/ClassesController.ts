import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Class from 'App/Models/Class'
import Teacher from 'App/Models/Teacher'
import { TeacherService } from 'App/services/TeacherService'
import ClassValidator from 'App/Validators/ClassValidator'
import NotFoundException from 'App/Exceptions/NotFoundException'
import StudentValidator from 'App/Validators/StudentValidator'
import Student from 'App/Models/Student'
export default class ClassesController {
  private teacherService = new TeacherService()

  public async store (ctx: HttpContextContract) {
     const {teacher_id} = ctx.params
     //const {id} = ctx.request.body();
     const dto = await ctx.request.validate(ClassValidator)
     //const student  = await Student.find(id);
     const classe = await this.teacherService.createClass(teacher_id, dto)
    
     
     return classe;

  }

  public async index (ctx: HttpContextContract){
    const {teacher_id} = ctx.params;
    const teacher = await Teacher.firstOrFail(teacher_id);
    //const teacher = await this.teacherService.getTeacherFullView(teacher_id);
    
    //const classe = await Class.query().where('teacherId', teacher_id).preload('teacher').first();

    
    await teacher.load('classes');
    return ctx.response.json(teacher.classes);

  }

  public async show ({params}: HttpContextContract) {
    const classe = await Class.findOrFail(params.id);

    return classe;
  }


  public async update (ctx: HttpContextContract) {
    const {teacher_id,id} = ctx.params;
    
    const data = await ctx.request.validate(ClassValidator);

    const classe = await Class.find(id);
    if(classe?.teacherId=== teacher_id){
      classe?.merge(data)
      await classe?.save()
      await classe?.related('students').attach(['87e7b355-36a8-4ae9-9217-c61da476f1fd'])
      return classe
    }

    throw new NotFoundException('Esta sala não pertence a este professor')

  }

  public async destroy (ctx: HttpContextContract) {
    const {teacher_id, id} = ctx.params
    const classe = await Class.findOrFail(id);

    if(classe.teacherId === teacher_id){
      await classe?.delete();
      return ctx.response.status(204).json({ message:"Sala daeletada com sucesso"})
    }
    throw new NotFoundException('Esta sala não pertence a este professor')
  }
}
