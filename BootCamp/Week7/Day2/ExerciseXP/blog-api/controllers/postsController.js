const {
    _getAllPosts,
    _getPostById,
    _createPost,
    _updatePost,
    _deletePost
 } = require('../models/postsModel');

const getAllPosts = async (req, res) => {
    try {
        const data = await _getAllPosts();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _getPostById(id);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(404).json({message: 'post of this id not found'});
    }
};

const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const data = await _createPost(title, content);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: 'your blog was not created'})
    }
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const data = await _updatePost(id, title, content);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: 'blog was not updated'})
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _deletePost(id);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: 'blog was not deleted'})
    }
};


module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
