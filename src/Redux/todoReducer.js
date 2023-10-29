import { ADD_ITEM, DELETE_ITEMS } from "./action.type";

const initialState = {
    todos:[]
}
export const todoReducer = (state=initialState,action)=>{
    switch (action.type) {
    // case ADD_ITEM:
    //     return {...state,
    //         todos:[...state.todos,action.payload]}
        case DELETE_ITEMS:
            return {...state,
                todos:state.todos.filter((todo,index)=>index!==action.payload)}
    default:
        return state
}

}