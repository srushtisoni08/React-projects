import {useContext , createContext} from 'react';

export const TodoContest = createContext({
    todos:[
        {
            id: 1,
            todo: "todo msg",
            completed: false,
        }
    ],

    addTodo:(todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContest)
}

export const TodoProvider = TodoContest.Provider