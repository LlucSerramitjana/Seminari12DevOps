import { Router } from 'express'

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/user.controller'
const router = Router()

router.route('/')
  .post(createUser)
  .get(getUsers)

router.route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser)

export default router
