const { db } = require('../config/data.js');

const _getAllPosts = () => {
    return db('posts').select('id', 'title', 'content').orderBy('id');
};

const _getPostById = (id) => {
    return db('posts').select('id', 'title', 'content').where({id});
};

const _createPost = (title, content) => {
    return db('posts').insert({title, content}).returning(['id', 'title', 'content']);
};

const _updatePost = (id, title, content) => {
    return db('posts').update({title, content}).where({id}).returning(['id', 'title', 'content']);
};

const _deletePost = (id) => {
    return db('posts').where({id}).del().returning(['id', 'title', 'content']);
}

module.exports = {
    _getAllPosts,
    _getPostById,
    _createPost,
    _updatePost,
    _deletePost
};