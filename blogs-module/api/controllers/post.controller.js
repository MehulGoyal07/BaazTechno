import Post from '../models/post.model.js'
import errorHandler from '../utils/error.js'

export const create = async(req, res, next) => {
    if (!req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to create a post!'))
    }
    if (!req.body.title || !req.body.content) {
        return next(errorHandler(400, 'Title and content are required!'))
    }
    const slug = req.body.title
        .split(' ')
        .join('-')
        .toLowerCase()
        .replace(/[^a-zA-Z0-9-]/g, '')
    const newPost = new Post({
        ...req.body,
        slug,
        userId: req.user.id
    })
    try {
        const savePost = await newPost.save()
        res.status(200).json(savePost)
    } catch (error) {
        next(error)
    }
}

export const getposts = async(req, res, next) => {
    try {
        const startIndex = parseInt(req.query.startIndex) || 0
        const limit = parseInt(req.query.limit) || 9
        const sortDirection = req.query.order === 'asc' ? 1 : -1
        const posts = await Post.find({
                ...(req.query.userId && { userId: req.query.userId }),
                ...(req.query.category && { category: req.query.category }),
                ...(req.query.slug && { slug: req.query.slug }),
                ...(req.query.postId && { _id: req.query.postId }),
                ...(req.query.searchTerm && {
                    $or: [
                        { title: { $regex: req.query.searchTerm, $options: 'i' } },
                        { content: { $regex: req.query.searchTerm, $options: 'i' } }
                    ]
                })
            })
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(limit)
        const totalPosts = await Post.countDocuments()
        const now = new Date()
        const oneMonthAgo = new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            now.getDate()
        );
        const lastMonthPosts = await Post.countDocuments({
            createdAt: { $gte: oneMonthAgo },
        });
        res.status(200).json({
            posts,
            totalPosts,
            lastMonthPosts,
        })
    } catch (error) {
        next(error)
    }
}

export const deletepost = async(req, res, next) => {
    if (!req.user.isAdmin || req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to delete this post!'))
    }
    try {
        const post = await Post.findByIdAndDelete(req.params.postId)
        if (!post) {
            return next(errorHandler(404, 'Post not found!'))
        }
        res.status(200).json('Post has been deleted!')
    } catch (error) {
        next(error)
    }
}

export const updatepost = async(req, res, next) => {
    if (!req.user.isAdmin || req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to update this post!'))
    }
    try {
        // Generate slug from title if it exists in the request
        const updateData = {
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            image: req.body.image,
        };

        // Only update slug if title is being updated
        if (req.body.title) {
            let slug = req.body.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');

            // Check if slug already exists for another post
            const existingPost = await Post.findOne({ slug, _id: { $ne: req.params.postId } });
            if (existingPost) {
                slug = `${slug}-${Date.now()}`;
            }

            if (slug.length > 100) {
                slug = slug.substring(0, 100);
            }

            updateData.slug = slug;
        }

        const updatedpost = await Post.findByIdAndUpdate(
            req.params.postId, { $set: updateData }, { new: true }
        );

        if (!updatedpost) {
            return next(errorHandler(404, 'Post not found!'))
        }
        res.status(200).json(updatedpost)
    } catch (error) {
        next(error)
    }
}