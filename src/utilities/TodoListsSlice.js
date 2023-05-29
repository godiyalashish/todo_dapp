import { createSlice } from "@reduxjs/toolkit";

const TodoListsSlice = createSlice({
    name : 'todoLists',
    initialState:{
        lists : {}
    },
    reducers:{
        addTodoList(state, action){
            state.lists[action.payload.name] = {name:action.payload.name};
            state.lists[action.payload.name].items = action.payload.items;
        }
    }
});


export const {addTodoList} = TodoListsSlice.actions;
export default TodoListsSlice.reducer;