import { useState } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { deleteItem } from './Redux/todoAction';


function App() {
  const dispatch = useDispatch()
  const todos = useSelector((state)=>state.todos)
  
  const [name,setName] = useState("")
  const[lists,setLists] = useState([])
  const [isEdit,setIsEdit] =useState(false)
  const [editId,setEditId] = useState(null)

  const submitHandler =(e)=>{
    e.preventDefault()
    if(!name){
      alert("plesae enter a valid input")
    }
    else if(name && isEdit){
     setLists(lists.map((item)=>{
      if(item.id === editId){
        return {...item,title:name}
      }
      setIsEdit(false)
      return item
     }))


    }
    else{
      const newItem = {id:new Date().getTime().toString(),title:name}
      setLists([...lists,newItem])
      setName("")
    }
  }
 const deleteHandler =(index)=>{
  dispatch(deleteItem(index))
//  console.log(newList);
 setLists(newList)
 }
 const batchClearHandler =()=>{
  setLists([])
 }
 const editHandler =(id)=>{{
  setIsEdit(!isEdit)
  const specificItem = lists.find((list)=>list.id ===id)
  setName(specificItem.title)
  setEditId(id)


 }}
  return (
    <div className="App">
      <div>
        <h1>TodoList</h1>
        <form onSubmit={submitHandler}>
          <input value={name} onChange={(e)=>setName(e.target.value)} />
          <button type='btn'>
            {isEdit?'Edit':'Add'}
          </button>

        </form>
        <div className='list-container'>
          <ul>
            {lists?.map((list)=>{
             const {id,title} = list
              return <li key={id}>{title}
              <button onClick={()=>editHandler(id)}>edit</button>
              <button onClick={()=>deleteHandler(id)}>delete</button>

              </li>
            })}
            

          </ul>
          {lists.length >0 &&
                    <button onClick={batchClearHandler}>clearList</button>

          }
        </div>
      </div>
     
    </div>
  );
}

export default App;
