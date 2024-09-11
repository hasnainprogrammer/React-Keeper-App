import React, {useState} from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [todoVal, setTodoVal] = useState('')
  const [todos, setTodos] = useState([])
  function handleChange(e) {
    e.preventDefault()
    setTodoVal(e.target.value)
  }
  function handleClick() {
    setTodos((prev) => {
      return [...prev, todoVal]
    })
    setTodoVal('')
  }
  return (
    <>
      <h2>Simple Todo App</h2>
      <hr />
      <br />
      <input type="text" onChange={handleChange} value={todoVal} />
      <br />
      <br />
      <button onClick={handleClick}>Add Todo</button>
      <h3>Your Todo's</h3>
      {todos.map((todo) => {
        return <li>{todo}</li>
      })}
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
