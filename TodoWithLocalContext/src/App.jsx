import { useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'

function App() {
  const [ todos, setTodos] = useState([])
  const add = (todo) => {
    setTodos((prev) => {
      [{id:Date.now(), ...todo}, ...prev] // here previous values are also there and new is added ...prev means all prev todos and spread them in array
    })
    //If I write setTodos(todo) then it will erase whole array values and make this todo in array only so here me pass a function inside it in which we will write functionality to append
  }
  const update = (id,todo) => {
    setTodos((prev) => {prev.map((prevTodo) => {prevTodo.id === id ? todo : prevTodo})})
    //here see we map so we get all todos with id nw we find that is id match with someone if yes then change it with this todo name else let it be as it is.
  }
  return (
    <TodoProvider value={{todos,ToggleCheckbox,update, add, deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App