import {Router} from 'express'
import * as PostController from '../../Controllers/PostController'

const router = Router()

router.get('/posts', PostController.index)

router.post('/posts',PostController.create)

router.get('/posts/:id', PostController.show)

router.put('/posts/:id',PostController.update)

router.delete('/posts/:id',PostController.destroy)

export {router}