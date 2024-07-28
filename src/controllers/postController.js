import * as postService from '../services/postService.js';

export const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const post = await postService.getPostById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const post = {
            title: req.body.title,
            content: req.body.content,
            author: req.user.username,
        };
        const newPost = await postService.createPost(post);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    try {
        const updatedPost = await postService.updatePost(req.params.id, req.body);
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        const deletedPost = await postService.deletePost(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
