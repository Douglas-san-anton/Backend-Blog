import Post from '../models/PostModel.js';

export const getAllPosts = async () => {
    return await Post.find();
};

export const getPostById = async (id) => {
    return await Post.findById(id);
};

export const createPost = async (post) => {
    const newPost = new Post(post);
    return await newPost.save();
};

export const updatePost = async (id, post) => {
    return await Post.findByIdAndUpdate(id, post, { new: true });
};

export const deletePost = async (id) => {
    return await Post.findByIdAndRemove(id);
};
