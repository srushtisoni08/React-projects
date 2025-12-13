import { useState , useEffect} from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import { TodoForm, TodoItem } from './components'

function App() {
  const [ todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => {
      const currentTodos = Array.isArray(prev) ? prev : []
      return [{ id: Date.now(), ...todo }, ...currentTodos] // here previous values are also there and new is added ...prev means all prev todos and spread them in array
    })
    //If I write setTodos(todo) then it will erase whole array values and make this todo in array only so here me pass a function inside it in which we will write functionality to append
  }
  const updateTodo = (id,todo) => {
    setTodos((prev) => {prev.map((prevTodo) => {prevTodo.id === id ? todo : prevTodo})})
    //here see we map so we get all todos with id nw we find that is id match with someone if yes then change it with this todo name else let it be as it is.
  }

  const deleteTodo= (id) => {
    setTodos((prev)=>{prev.filter((todo)=>{todo.id !== id})})
  }

  const toggleComplete =(id) => {
    setTodos(
      (prev)=>{prev.map(
        (prevTodo)=>{prevTodo.id === id? {...prevTodo, completed: !prevTodo.completed }:prevTodo}
      )}
    )
  }
  // so here we map then check that does id match if yes then we toggled the value of prevTodo and other values like id, todo and all remain same so we wrote ...prevTodo else we keep it as it is.
  // so simply we overwrited completed component of context.

  // useEffect(()=>{
  //   const todos = JSON.parse(localStorage.getItem("todos"))
  //   
  //   if(todos && todos.length > 0){
  //     setTodos(todos)
  //   }
  // })
  useEffect(() => {
  const storedTodos = localStorage.getItem("todos")
  // In react u can easily access local storage as we are not on server side so browser give it easily. But need to convert into json as it gives in String format.
  if (storedTodos) {  // Check if it exists first
    try {
      const todos = JSON.parse(storedTodos)
      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    } catch (error) {
      console.error("Error parsing todos:", error)
    }
  }
}, [])
  // Now I want that that we set value in todos array but not in local storage so we will add it using another useEffect as If we add this in upper useEffect then if there will be any change then it will get each and every time which is not a optimized way of doing work.
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos)) // as local storage have data in string format.
  },[todos]) 
  return (
    <TodoProvider value={{todos,toggleComplete,updateTodo, addTodo, deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos?.map((todo) =>(
                    <div key={todo.id}
                    className='w-full'>
                      <TodoItem todo={todo}/>
                      </div>
                  )

                  )}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App