const todoUl = document.getElementById("todoUl")
const newTodoInput = document.getElementById("newTodoInput")
const newTodoForm = document.getElementById("newTodoForm")
const showTodosBtn = document.getElementById("showTodosBtn")

let idCounter = 201

let todos = []

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  todos = await res.json()
}

const init = async () => {
  await fetchTodos()
  render()
}

init()

// ------------------------------------------------------------ // -------------------------------------------
showTodosBtn.addEventListener("click", () => {
  console.log(todos)
})

function render() {
  todoUl.replaceChildren([])
  populateTodoList()
}

function clearTodoList(){
  todos = []
  todoUl.replaceChildren([])
}

function populateTodoList() {
  todos.forEach(i => addTodo(i))
}

newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const newTodo = {
    id: idCounter+1,
    title: newTodoInput.value,
    completed: false
  }
  idCounter++
  todos.push(newTodo)
  render()
  newTodoInput.value = ""
})

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id)
}

function editIsCompleted(id, isCompleted){
  todos = todos.map((todo) => {
    if(todo.id === id){
      todo.completed = isCompleted
      return todo
    }
    return todo
  })
}

function addTodo(todo) {
  const newLi = document.createElement("li")
  newLi.innerHTML = todo.title
  // <li> Fazer compra </li>
  
  const deleteBtn = document.createElement("button")
  deleteBtn.innerHTML = "X"
  deleteBtn.addEventListener("click", () => {
    deleteTodo(todo.id)
    render()
  })

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.checked = todo.completed
  checkbox.addEventListener("change", (e) => {
    editIsCompleted(todo.id, e.target.checked)
    render()
  })

  newLi.appendChild(checkbox)
  newLi.appendChild(deleteBtn)
  // <li>
    //    Fazer compra
    //    <input type="checkbox" checked=todo.isCompleted />
    //    <button>X</button>
  // </li>
  todoUl.appendChild(newLi)
}