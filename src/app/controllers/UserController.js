import User from '../models/User'

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } })

    if (userExists) {
      return res.status(400).json({ error: 'Alreads exists !' })
    }

    const user = await User.create(req.body)

    return res.json()
  }

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users)
  }

  async update(req, res) {
    const { email, oldPassword } = req.body

    const user = await User.findByPk(req.userId.id)

    if (!oldPassword) {
      return res.status(401).json({ error: 'Field oldPassword is required' })
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
    const user = await User.findByPk(req.body.id)
    user.destroy()

    return res.status(200).json({ message: "User delected successfully" })
  }
}

export default new UserController()
