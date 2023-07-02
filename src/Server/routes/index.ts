import {Router} from 'express'
import * as PostController from '../../Controllers/PostController'

const router = Router()

router.get('/', PostController.index)

router.post('/posts',PostController.create)

export {router}