import { Router, Request, Response, NextFunction } from 'express'
import { User } from '../models'
import { encode } from '../utils/hash'

const router = Router()

/**
 * List users
 */
router.get('/list', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userList = await User.find({})
    res.json(userList)
  } catch (error) {
    res.json(error)
  }
})

/**
 * Create new user / register
 */
router.post('/new', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body
    if (user.password) user.password = await encode(user.password)
    const createdUser = await User.create(user)
    res.json(createdUser)
  } catch (error) {
    res.json(error)
  }
})

/**
 * Read user
 */
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const searchedUser = await User.findOne({ _id: id })
    if (!searchedUser) res.status(404).json({ error: 'User not found' })
    else res.json(searchedUser)
  } catch (error) {
    res.json(error)
  }
})

/**
 * Update user
 */
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = req.body
    if (user.password) user.password = await encode(user.password)

    const newUser = await User.findOneAndUpdate({ _id: id }, user, {
      new: true
    })
    if (!newUser) res.status(404).json({ error: 'User not found' })
    else res.json(newUser)
  } catch (error) {
    res.json(error)
  }
})

/**
 * Delete user
 */
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deletedUser = await User.findOneAndDelete({ _id: id })
    if (!deletedUser) res.status(404).json({ error: 'User not found' })
    else res.json({ message: 'User removed' })
  } catch (error) {
    res.json(error)
  }
})

export default router
