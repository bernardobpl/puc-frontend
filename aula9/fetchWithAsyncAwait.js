// async / await
// Promise - status: pending (não foi resolvido ainda), resolved (executa o "then"), rejected(executa o "catch")

let todos = []

const fetchTodosUsingAsyncAwait= async () => {
  console.log("Começou")

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    todos = await res.json()
    console.log("Deu certo")
  } catch (err) {
    console.log("Deu erro")
  } finally {
    console.log(todos.slice(0,3))
    console.log("Terminou")
  }

  console.log("1")
  console.log("2")
  console.log("3")
}

fetchTodosUsingAsyncAwait()
