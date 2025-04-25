import express from 'express'
import { createComment, deleteComment, editComment, getcomments, getPostComments, likeComment } from '../controllers/comment.controller.js'
import { verifyUser } from '../utils/verifyUser.js'

const router = express.Router()

router.post('/create', verifyUser, createComment)
router.get('/getpostcomments/:postId', getPostComments)
router.put('/likecomment/:commentId', verifyUser, likeComment)
router.put('/editcomment/:commentId', verifyUser, editComment)
router.delete('/deletecomment/:commentId', verifyUser, deleteComment);
router.get('/getcomments', verifyUser, getcomments);

export default router