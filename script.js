// DOM Elements
const inputBox = document.getElementById("inputBox"); // Text input field for new or edited todos
const addBtn = document.getElementById("addBtn");     // Button to add or edit a todo
const todoList = document.getElementById("todoList"); // Container (ul) where todos will be listed

let editTodo = null; // Keeps track of which todo is currently being edited
inputBox.focus();    // Automatically focus input when page loads

// Main function to add a new todo or update an existing one
const addTodos = (e) => {
    const inputText = inputBox.value.trim(); // Trimmed input to avoid empty spaces

    if (inputText.length === 0) {
        alert("You must write something to add a To-do!");
    } 
    else if (addBtn.value === "Edit" ) {
        if (inputText.length === 0) {
        alert("You must write something to edit an existing To-do!");
        }
        else{
        // If editing existing todo
        editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
        editTodo.target.previousElementSibling.innerHTML = inputText;
        inputBox.value = "";
        addBtn.value = "Add";
        inputBox.focus();}
    } 
    else {
        // Creating a new todo list item (li)
        const li = document.createElement("li");
        const p = document.createElement("p"); // Element to hold the task text
        p.innerText = inputText;
        li.appendChild(p);

        // Creating and styling Edit button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        li.appendChild(editBtn);
        editBtn.classList.add("btn", "editBtn");

        // Creating and styling Delete button
        const delBtn = document.createElement("button");
        delBtn.innerText = "Remove";
        li.appendChild(delBtn);
        delBtn.classList.add("btn", "delBtn");

        todoList.appendChild(li);
        inputBox.value = "";
        inputBox.focus();

        saveLocalTodos(inputText); // Store the new todo in localStorage
        updateEmptyMessage(); // Update empty message if needed
    }
};

// Handle clicks on Edit and Remove buttons inside the todo list
const updateTodos = (e) => {
    if (e.target.innerText === "Remove") {
        todoList.removeChild(e.target.parentElement); // Remove todo from DOM
        deleteLocalTodos(e.target.parentElement);     // Remove todo from localStorage
        updateEmptyMessage();
        inputBox.value="";
        inputBox.focus();
        
    }
    if (e.target.innerText === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML; // Load value to input
        addBtn.value = "Edit";
        editTodo = e; // Store reference to the clicked edit button
        inputBox.focus();

    }
};

// Save a new todo to localStorage
const saveLocalTodos = (todo) => {
    let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos)); // Convert array to string before saving
};

// Retrieve and render todos from localStorage when page loads
const getLocalTodos = () => {
    let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    todos.forEach(todo => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = todo;
        li.appendChild(p);

        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn", "delBtn");
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });
};

// Remove a todo from localStorage by matching its text
const deleteLocalTodos = (todo) => {
    let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1); // Remove item by index
        localStorage.setItem("todos", JSON.stringify(todos));
    }
};

// Update an existing todo in localStorage
const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    if (todoIndex !== -1) {
        todos[todoIndex] = inputBox.value;
        localStorage.setItem("todos", JSON.stringify(todos));
    }
};

// Show message if no todos are available
function updateEmptyMessage() {
    const existingMsg = document.querySelector('.h2');
    if (existingMsg) existingMsg.remove();

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    if (todos.length === 0) {
        const h2 = document.createElement("h2");
        h2.innerText = "\"You haven't \nadded any To-dos.\"";
        h2.classList.add("h2");
        todoList.appendChild(h2);
    }
}

// Initialize todo list on page load
// Load saved todos and display empty message if needed
document.addEventListener("DOMContentLoaded", () => {
    getLocalTodos();
    updateEmptyMessage();
    inputBox.focus();
});

// Event listeners for adding todos and interacting with the todo list
addBtn.addEventListener("click", addTodos);
todoList.addEventListener("click", updateTodos);
inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addBtn.click();
    }
});
