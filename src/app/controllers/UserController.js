import * as Yup from 'yup'
import User from '../models/User'

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required().min(6),
    })
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Validation fails'
      })
    }
    const userExists = await User.findOne({ where: { email: req.body.email } })

    if (userExists) {
      return res.status(400).json({ error: 'Alreads exists !' })
    }
    const { id, name, email } = await User.create(req.body)

    return res.status(201).json({
      id,
      name,
      email
    })
  }

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users)
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassowrd', (oldPassword, field) => oldPassword ? field.required() : field),

      confirmPassword: Yup.string().when('password', (password, field) => password ? field.required().oneOf([Yup.ref('password')]) : field)
    })
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Validation fails'
      })
    }

    const { email, oldPassword } = req.body

    const user = await User.findOne({ where: { email } })

    if (!oldPassword) {
      return res.status(401).json({ error: 'Field oldPassword is required' })
    }
    if (user == null) {
      return res.status(404).json({ message: 'User not exists!' })
    }
    if (email != user.email) {
      const userExists = await User.findOne({ where: { email } })
      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' })
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' })
    }

    const { id, name } = await user.update(req.body)

    return res.status(200).json({
      id,
      name,
      email
    })
  }
  async delete(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } })
    if (!userExists) {
      return res.status(404).json({ message: 'User not exists !' })
    }

    userExists.destroy()

    return res.status(200).json({ message: "User delected successfully" })
  }
}

export default new UserController()
