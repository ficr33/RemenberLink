import Repository from '../models/Repository'

class RepositoryController {
    async store(req, res) {
        return res.status(201).json({ message: 'Successfully' })
    }

    async index(req, res) {
        const repository =  Repository.findAll()
        return res.status(201).json({ message: 'Em construção' })
    }

    async update(req, res) {
        return res.status(201).json({ message: 'Successfully' })
    }
    async delete(req, res) {
        return res.status(201).json({ message: 'Successfully' })
    }
}

export default new RepositoryController()
