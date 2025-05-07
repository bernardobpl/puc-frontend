// async / await
// Promise - status: pending (não foi resolvido ainda), resolved (executa o "then"), rejected(executa o "catch")

let todos = []

const fetchTodosUsingPromise = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(resJson => {
      todos = resJson
    })
    .catch(err => {
      console.log("Deu erro")
    })
    .finally(() => {
      console.log(todos.slice(0,3))
      console.log("Terminou")
    })

  console.log("1")
  console.log("2")
  console.log("3")
}

fetchTodosUsingPromise()
