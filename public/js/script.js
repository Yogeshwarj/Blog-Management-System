const form = document.getElementById("blogForm");

const title = document.getElementById("title");
const author = document.getElementById("author");
const content = document.getElementById("content");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    if (
        title.value.trim() === "" ||
        author.value.trim() === "" ||
        content.value.trim() === ""
    ) {
        message.textContent = "Please fill all the fields.";
        message.style.color = "red";
        return;
    }

    const blogData = {
        title: title.value.trim(),
        author: author.value.trim(),
        content: content.value.trim()
    };

    try {

        const response = await fetch("/api/blogs", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(blogData)
        });

        const data = await response.json();

        if (response.ok) {

            message.textContent = "Blog published successfully!";
            message.style.color = "green";

            form.reset();

        } else {

            message.textContent = data.message;
            message.style.color = "red";
        }

    } catch (error) {

        console.error("Error:", error);

        message.textContent =
            "Unable to connect to the server.";

        message.style.color = "red";
    }
});