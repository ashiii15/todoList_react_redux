import { ADD_ITEM, DELETE_ITEMS, EDIT_ITEMS } from "./action.type"

// export const addItems =(data)=>{
//     return {
//         type:ADD_ITEM,
//         payload:data

//     }

// }
export const deleteItem =(index)=>{
    return{
        type:DELETE_ITEMS,
        payload:index
    }
}
export const editItem =(id)=>{
    return{
        type:EDIT_ITEMS,
        payload:id
    }
}