import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import NotFoundException from 'App/Exceptions/NotFoundException';
import Teacher from 'App/Models/Teacher'
import TeacherValidator from 'App/Validators/TeacherValidator';

export default class TeachersController {
    public async create({request}:HttpContextContract){
        const dto = await request.validate(TeacherValidator);
        const teacher = await Teacher.create(dto);

        return teacher;
    }
    public async show(ctx:HttpContextContract){
        const {id} = ctx.params;

        try {
            const teacher = await Teacher.find(id);
            if(!teacher){
                throw new NotFoundException('Professor não localizado')
            }

            return teacher;
        } catch (error) {
            throw new NotFoundException('Professor não localizado')
        }
    }
    public async update(ctx:HttpContextContract){
        const dto = await ctx.request.validate(TeacherValidator)
        const { id } = ctx.params

        try {
            const teacher = await Teacher.find(id)

            teacher?.merge(dto);
            await teacher?.save();

            return teacher;
        } catch (error) {
            throw new NotFoundException('Professor não encontrado')
        }
    }
    public async index(){
        const all = await Teacher.all();

        return all;
    }
    public async destroy(ctx: HttpContextContract){
        const {id} = ctx.params
        try {
            await Teacher.query().where({id:id}).delete();
            return ctx.response.status(204).json({message:"Professor deletado com sucesso"})
        } catch (error) {
            throw new NotFoundException('Professor não encontrado ou não existe')
        }

    }
}
