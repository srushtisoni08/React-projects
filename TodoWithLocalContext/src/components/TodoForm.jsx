import {useState} from 'react'
import { useTodo } from '../context/TodoContext';
function TodoForm() {
    const [todo, setTodo] = useState("")
    // this is to set individual todo now to add any todo we have functionality in App.jsx so we need to access that here in this page so we need to take that functionality so we will take it from todoContext.js using useTodo as all add, delete, update, all functionalities are wrapped there.
    //As everything was in useContext and useContext is accesed by useTodo so we will use that to access all those functionality.
    const {addTodo} = useTodo()
    const add = (e) => {
        e.preventDefault()
        if (!todo) return 
        // if no todo is there then return nothing else as we have taken addTodo from useTodo so in function add in app.jsx see that id is passed as date.now() so no need to pass it we just pass todo and its status.
        addTodo({
            todo,
            completed: false
        })
        setTodo('')
        //This simply work like as reload everything is set just we reloaded page for ux.
    }
    
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;