import {useContext , createContext} from 'react';

export const TodoContest = createContext({
    todos:[
        {
            id: 1,
            todo: "todo msg",
            completed: false,
        }
    ],

    add:(todo) => {},
    deleteTodo: (id) => {},
    update: (id, todo) => {},
    ToggleCheckbox: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContest)
}

export const TodoProvider = TodoContest.Provider