const Post = require("../model/Post.model")

async function CreatePost(req, res) {
	try {
		const post = new Post(req.body)
		await post.save()

		res.status(201).json({
			message: "Post Created",
			post,
		})
	} catch (error) {
		console.log(error)
	}
}

async function getBytitle(req, res) {
	try {
		const post = await Post.findOne({ title: req.body.title })
			.populate("author")
			.exec()

		if (post) {
			res.status(200).json({
				message: "Post Gotten",
				post,
			})
		} else {
			res.status(404).json({
				message: "post not found",
			})
		}
	} catch (error) {
		console.log(error)
	}
}

async function getAllPost(req, res) {
	try {
		const post = await Post.find()

		res.status(200).json({
			message: "Post fetched",
			post,
		})
	} catch (error) {
		console.log(error)
	}
}

async function getPostById(req, res) {
	try {
		const post = await Post.findById(req.params.id).populate("author").exec()

		if (post) {
			res.status(200).json({
				message: "Post fetched",
				post,
			})
		} else {
			res.status(404).json({
				message: "post not found",
			})
		}
	} catch (error) {
		console.log(error)
	}
}

module.exports = { CreatePost, getBytitle, getAllPost, getPostById }
