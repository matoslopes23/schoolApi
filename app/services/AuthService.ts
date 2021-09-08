//import User from 'App/Models/User'
import {sign} from 'jsonwebtoken'
//import authConfig from '../../config/auth'

interface RegisterUserCommand {
  email: string
  password: string
}

export default class AuthService {
  // register
  public async register (data: RegisterUserCommand) {
    const {email} = data

    const user = await User.firstOrNew({ email })

    if (!user.$isLocal) {
      throw new Error('There is already an user with that email address.')
    }
    user.merge(data)
    await user.save()

    return user
  }

  public async login ({email, password}) {
    const user = await User.query().where({email: email}).first()
    if (!user) {
      throw new Error('Invalid credentials')
    }

    if (!(await user.checkPassword(password))) {
      throw new Error('Invalid credentials')
    }

    const token = sign({
        email:user.email
    },"68e6d52b9155d741c914aab03b1d8c57", {
        
    })
    // criar token

    const response = {
      user: {
        id: user.id, email: user.email,
      }, token }

    return response
  }

  // createToken
  /*private createToken (data: any) {
    const {userId} = data
    if (!userId) {
      throw new Error('missing user details.')
    }
    
    /*const secret = authConfig.secret
    const expiresIn = authConfig.expiresIn
    const payload = {
      iss: process.env.APP_NAME || 'app',
      sub: userId,
    }
    return {
      expiresIn: expiresIn,
      token: jwt.sign(payload, secret, {expiresIn}),
    }
  }*/
}
