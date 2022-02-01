import React, {useState} from 'react';
import './App.css';
import ToDo from './Components/ToDo';
function App() {
  const [newToDo, setNewToDo]= useState(""); 
  const [toDos, setTodos]= useState([]);

  const handleNewToDoSubmit=(e) =>{
    e.preventDefault(); 
    if(newToDo.length===0 || newToDo===" "){
      return; 
    }
    const toDoItem ={
      text: newToDo, 
      complete:false
    }


    setTodos([...toDos, toDoItem]);
    setNewToDo("");

  }; 
  const handleDelete =( index) =>{
    const filterToDos= toDos.filter((todo, i)=>{
      return i !== index; 
    });
    setTodos(filterToDos);

  }
  const handleToggleCheck= (index) =>{
    const updatedToDos =toDos.map((todo, i)=>{
      if(index===i){
        todo.complete = !todo.complete; 
        // const updateToDo ={...todo, complete: !todo.complete}
        // return updateToDo;
      }
      return todo;
    });
    setTodos(updatedToDos);
  }
  return (
    <div  >
      <div style={{textAlign:"center"}}>

      
      <h1 >My To-Do List: </h1>
     <form onSubmit={e =>{
       handleNewToDoSubmit(e);
     }}>
       <input style={{borderWidth:"3px", marginBottom:"10px"}} onChange={(e=>{
         setNewToDo(e.target.value
          )
       })} 
       type={"text"} 
       value={newToDo} 

       />
       <div>
         <button >Add</button>
       </div>
       <hr></hr>
     </form>
     </div>
{
 toDos.map((toDo,i) =>{
  
   return <ToDo key={i} toDo={toDo} handleToggleCheck={handleToggleCheck} i={i} handleDelete={handleDelete}/>

 })
}

    </div>
  );
}

export default App;
