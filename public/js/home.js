const blogContainer = document.getElementById("blogContainer");

async function loadBlogs() {

    try {

        const response = await fetch("/api/blogs");

        if (!response.ok) {
            throw new Error("Failed to fetch blogs");
        }

        const blogs = await response.json();

        blogContainer.innerHTML = "";

        if (blogs.length === 0) {
            blogContainer.innerHTML = "<p>No blogs available.</p>";
            return;
        }

        blogs.forEach((blog) => {

            const blogCard = document.createElement("div");

            blogCard.classList.add("blog-card");

            blogCard.innerHTML = `
                <h3>${blog.title}</h3>

                <p class="blog-author">
                    By ${blog.author}
                </p>

                <p>${blog.content}</p>

                <button onclick="editBlog(${blog.id})">
                    Edit
                </button>
            `;

            blogContainer.appendChild(blogCard);
        });

    } catch (error) {

        console.error("Error loading blogs:", error);

        blogContainer.innerHTML =
            "<p>Unable to load blogs. Please try again.</p>";
    }
}


async function editBlog(id) {

    try {

        const response = await fetch(`/api/blogs`);

        const blogs = await response.json();

        const blog = blogs.find((blog) => blog.id === id);

        if (!blog) {
            alert("Blog not found.");
            return;
        }

        const newTitle = prompt("Enter blog title:", blog.title);

        if (newTitle === null) {
            return;
        }

        const newAuthor = prompt("Enter author:", blog.author);

        if (newAuthor === null) {
            return;
        }

        const newContent = prompt("Enter blog content:", blog.content);

        if (newContent === null) {
            return;
        }

        if (
            newTitle.trim() === "" ||
            newAuthor.trim() === "" ||
            newContent.trim() === ""
        ) {
            alert("All fields are required.");
            return;
        }

        const updateResponse = await fetch(`/api/blogs/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: newTitle,
                author: newAuthor,
                content: newContent
            })
        });

        const result = await updateResponse.json();

        if (updateResponse.ok) {

            alert("Blog updated successfully!");

            loadBlogs();

        } else {

            alert(result.message);
        }

    } catch (error) {

        console.error("Error updating blog:", error);

        alert("Unable to update blog.");
    }
}


loadBlogs();