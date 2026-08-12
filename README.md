# Blog Management System

A beginner-friendly Full Stack Blog Management System built as part of my **Full-Stack Development Internship at Codomax Digital Solutions**.

The project demonstrates CRUD (Create, Read, Update, Delete) operations using HTML, CSS, JavaScript, Node.js, and Express.js.

---

## Features

- View all blog posts
- Add a new blog
- Edit existing blog posts
- Delete blog posts
- Form validation
- Responsive design
- Smooth scrolling and UI animations
- REST API integration using Fetch API
- GitHub Pages deployment (Frontend)

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Node.js
- Express.js

### Tools
- VS Code
- Git
- GitHub
- Postman

---

## Project Structure

```
Blog-Management-System/
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── script.js
│   │   └── home.js
│   │
│   ├── index.html
│   └── add-blog.html
│
├── index.js
├── package.json
└── README.md
```

---

## API Endpoints

### Get All Blogs

```
GET /api/blogs
```

Returns all available blog posts.

---

### Add Blog

```
POST /api/blogs
```

Example Request

```json
{
  "title": "My Blog",
  "author": "Yogeshwaran",
  "content": "This is my first blog."
}
```

---

### Update Blog

```
PUT /api/blogs/:id
```

---

### Delete Blog

```
DELETE /api/blogs/:id
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/Yogeshwarj/Blog-Management-System.git
```

Navigate into the project

```bash
cd Blog-Management-System
```

Install dependencies

```bash
npm install
```

Start the server

```bash
node index.js
```

Open in browser

```
http://localhost:3000
```

---

## Learning Outcomes

During this project I learned:

- Building REST APIs using Express.js
- Connecting frontend and backend using Fetch API
- Performing CRUD operations
- Client-side form validation
- Responsive web design
- Git and GitHub workflow
- Deploying projects with GitHub Pages

---

## Future Improvements

- Database integration (MongoDB/MySQL)
- User authentication
- Search functionality
- Categories and tags
- Image upload support
- Rich text editor

---

## Author

**Yogeshwaran**

GitHub:
https://github.com/Yogeshwarj

LinkedIn:
https://www.linkedin.com/in/yogeshwaran-j/

---

## Internship

Project completed as part of the **Full-Stack Development Internship at Codomax Digital Solutions**.