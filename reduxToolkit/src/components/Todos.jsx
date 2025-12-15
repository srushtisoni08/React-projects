import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

//useSelector is used to fetch data from store 
function Todos(){
    const todos = useSelector(state=> state.todos)
    // so here we fetch from store state our array todos
    const dispatch = useDispatch();
    return(
        <>
        {/* Now display our todos here */}
        <div>Todos</div>
        {todos.map((todo) =>
        (
            <li key={todo.id}>
                {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </li>

        ))}
        </>
    )
}
export default Todos