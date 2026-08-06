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
            `;

            blogContainer.appendChild(blogCard);
        });

    } catch (error) {

        console.error("Error loading blogs:", error);

        blogContainer.innerHTML =
            "<p>Unable to load blogs. Please try again.</p>";
    }
}

loadBlogs();