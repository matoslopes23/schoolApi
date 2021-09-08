import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor (protected ctx: HttpContextContract) {
  }

	
	 
  public schema = schema.create({
	  email: schema.string(),
	  password: schema.string()
  })

  public cacheKey = this.ctx.routeKey;
	
  public messages = {}
}
