# 🧾 To-do List WebApp  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![HTML](https://img.shields.io/badge/HTML5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)  
[![CSS](https://img.shields.io/badge/CSS3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)  
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ✅ Features

- Add new to-do tasks with a simple UI
- Edit existing tasks with a single click
- Delete specific tasks from the list
- Tasks persist using `localStorage` (even after refresh)
- Shows a friendly message when the list is empty
- Responsive layout with soft shadows and gradients
- Supports quick input using the **Enter** key
- Interactive button hover effects and animations

## 🛠️ How It Works

```js
// Add a new to-do
addBtn.addEventListener("click", addTodos);

// Save to-do to localStorage
function saveLocalTodos(todo) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
```


## 📋 Requirements
- Modern web browser
- No external libraries needed
- Internet access for Google Fonts


## 🚀 How to Run
```
# Clone the repository
git clone https://github.com/RabbanAli1122/todo-list-webapp-js.git
cd todo-list-webapp-js

# Open the index.html file in any modern browser
```


## 🖼️ Screenshots
<img width="747" alt="1" src="https://github.com/user-attachments/assets/a860d24e-62a1-4c92-aff3-3f3a12a5b45d" />
<img width="747" alt="2" src="https://github.com/user-attachments/assets/06556ec6-46c7-4bc8-abd6-450312324e4c" />
<img width="747" alt="3" src="https://github.com/user-attachments/assets/858cb21a-4131-4b1a-a3d8-f1b3fc433bec" />

## 🔗 Demo (GitHub Pages):
Click [here](https://rabbanali1122.github.io/todo-list-webapp-js/) for live demo.

## 💻 Technologies Used
- HTML5
- CSS3 with Google Fonts (Poppins)
- JavaScript (ES6)
- LocalStorage API

## 🧠 Lessons Learned
1. DOM manipulation with vanilla JS
2. Managing dynamic UI states (Add/Edit/Remove)
3. Using localStorage to persist data
4. Writing clean and scalable frontend code

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for full details.
