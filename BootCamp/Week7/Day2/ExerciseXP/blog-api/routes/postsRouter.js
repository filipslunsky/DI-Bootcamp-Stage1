const express = require('express');

const {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/postsController.js');

const postsRouter = express.Router();

postsRouter.get('/', getAllPosts);

postsRouter.get('/:id', getPostById);

postsRouter.post('/', createPost);

postsRouter.put('/:id', updatePost);

postsRouter.delete('/:id', deletePost);



module.exports = {
    postsRouter
};