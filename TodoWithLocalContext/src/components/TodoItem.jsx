import { useTodo } from "../context/TodoContext";
import {useState} from 'react'

function TodoItem({ todo }) {
    const {update, deleteTodo, ToggleCheckbox} = useTodo()
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    //when u edit then u have to write that edited msg so for that msg we make a hook
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    // why todo.todo? so here in our function TodoItem we can see that we have a todo object means it have too many todos inside it so for selecting only 1 todo from that so we use todo.todo

    const editTodo =() =>{
        update(todo.id, {...todo,todo:todoMsg})
        //so here for that id we just changed our todo msg 
        setIsTodoEditable(false)//as we have changed the value so now it is not editable anymore.
    }
    const toggle = () =>{
        ToggleCheckbox(todo.id)
    }
 
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={ToggleCheckbox}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
