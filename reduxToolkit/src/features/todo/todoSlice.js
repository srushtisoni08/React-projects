import { createSlice , nanoid} from "@reduxjs/toolkit";
// this nanoid has no work it just used to give unique ids so as we have done in previous that we had to give Date.now() as id so to prevent such things

const initialState = {
    todos : [{id: 1, text:"Hello world"}]
}

// now reducer is just functionality and Slice is it's bigger version. 
export const todoSlice = createSlice({
    name: 'todo', //name is a property you cannot give anything u have to use keyword 'name' only to specify name
    initialState, // as data is in initial state so we mentioned here we can also do that that we write todos here and do not define initialState.
    //Now lets make reducers, so reducers have property and function
    reducers: {
        //Now my property name is addTodo which I have to give not inbuilt
        addTodo: (state, action) =>{
            const todo = {
                id : nanoid(),
                text: action.payload //so here we have our text from our action and id in todos
            }
            // now we have todo but it is not pushed in our todos array so to add that
            state.todos.push(todo)
            //This state means initialState so in that initialState we had todos in which we pushed our this todo
        },
        //Here always we have state and action
        //state gives me access of my initialState as this is initial right it is going to be change in future so stare gives me access of that simply it gives access of current situation
        //action is used to provide ids as for Example removeTodo need id to remove that todo so that id is provided by action
        removeTodo : (state, action) =>{
            state.todos = state.todos.filter((todo) => {
                todo.id !== action.payload
            })
            //here in remove we filtered all other than the id which we passed to remove  
        },
    }
})
export const {addTodo, removeTodo} = todoSlice.actions
//need to export inidividual reducers as they will be used in components

export default todoSlice.reducer
//we need to export this bcoz store is very reserved it needs list of reducers which it will operate on it will not use all reducers.