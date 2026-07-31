const form = document.getElementById("blogForm");

const title = document.getElementById("title");
const author = document.getElementById("author");
const content = document.getElementById("content");

const message = document.getElementById("message");

form.addEventListener("submit", function(event){

    event.preventDefault();

    if(
        title.value.trim()==="" ||
        author.value.trim()==="" ||
        content.value.trim()===""
    ){

        message.textContent="Please fill all the fields.";
        message.style.color="red";

        return;

    }

    message.textContent="Blog submitted successfully!";
    message.style.color="green";

    form.reset();

});