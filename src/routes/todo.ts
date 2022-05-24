import { Router } from 'express'

import { createTodo, getTodos, getTodo, deleteTodo, updateTodo } from '../controllers/todo.controller'
const router = Router()

router.route('/')
  .post(createTodo)
  .get(getTodos)

router.route('/:id')
  .get(getTodo)
  .delete(deleteTodo)
  .put(updateTodo)

export default router
