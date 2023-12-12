const express = require("express")
const mongoose = require("mongoose")
const { CreateUser } = require("./controller/User.controller")
const {
	CreatePost,
	getBytitle,
	getAllPost,
	getPostById,
} = require("./controller/Post.controller")

const server = express()
const PORT = 4000

server.use(express.json())

// Endpoints for User
server.post("/user", CreateUser)

// Endpoint for Post
server.post("/post", CreatePost)
server.get("/post/title", getBytitle)
server.get("/post", getAllPost)
server.get("/post/:id", getPostById)

server.all("*", (req, res) => {
	res.status(404).json({
		message: "Route not found",
	})
})

//function to connect mongoDB
async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/blog")
	console.log("DB connected")
}

server.listen(PORT, () => {
	main().catch((err) => console.log(err))
	console.log("Server Listening on port 4000")
})
