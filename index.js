const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Temporary JavaScript array for storing blogs
let blogs = [
    {
        id: 1,
        title: "Welcome to My Blog",
        author: "Yogeshwaran",
        content: "This is my first blog post."
    }
];

// GET - Retrieve all blogs
app.get("/api/blogs", (req, res) => {
    res.json(blogs);
});

// POST - Add a new blog
app.post("/api/blogs", (req, res) => {

    const { title, author, content } = req.body;

    if (!title || !author || !content) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const newBlog = {
        id: blogs.length + 1,
        title: title.trim(),
        author: author.trim(),
        content: content.trim()
    };

    blogs.push(newBlog);

    res.status(201).json({
        message: "Blog created successfully",
        blog: newBlog
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});