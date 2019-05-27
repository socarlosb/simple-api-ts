import { Router, Request, Response, NextFunction } from 'express'
import { User } from '../models'
import { compare, encode } from '../utils/hash'

const router = Router()

/**
 * Register user
 */
router.post(
  '/register',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUser = new User(req.body)
      if (newUser.password) {
        console.log('newUser', newUser)
        newUser.password = await encode(newUser.password)
      }
      const createdUser = await User.create(newUser)
      res.json(createdUser)
    } catch (error) {
      next(error)
    }
  }
)

/**
 * Login user
 */
router.post(
  '/login',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = new User(req.body)
      const searchUser = await User.findOne({ email: user.email })
      if (searchUser) {
        const valid = await compare(user.password, searchUser.password)
        if (valid) {
          res.json({ message: 'logged in' })
        } else {
          res.json({ error: `Wrong pass` })
        }
      } else {
        res.json({ error: `User not found` })
      }
    } catch (error) {
      next(error)
    }
  }
)

/**
 * Recover password
 */

/**
 * Update user profile
 */

/**
 * Delete user account
 */

export default router
