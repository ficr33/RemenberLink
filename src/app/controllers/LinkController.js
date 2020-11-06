import Link from '../models/Link'

class LinkController {
    async store(req, res) {
        return res.status(201).json({ message: 'Successfully' })
    }

    async index(req, res) {
        return res.status(201).json({ message: 'Successfully' })
    }

    async update(req, res) {
        return res.status(201).json({ message: 'Successfully' })
    }
    async delete(req, res) {
        return res.status(201).json({ message: 'Successfully' })
    }
}

export default new LinkController()
