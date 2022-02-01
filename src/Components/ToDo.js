const ToDo =(props) =>{
    const toDoClasses=["bold","italic"];
    if(props.toDo.complete){
      toDoClasses.push("line-through");
    }
    return (
    <div > 
   <input onChange={(e)=>{
     props.handleToggleCheck(props.i);
   }} checked={props.toDo.complete} type={"checkbox"}></input>
     <span className={toDoClasses.join(" ")}>
       {props.toDo.text}
     </span>
     <button style={{marginLeft:"10px"}} onClick={(e) =>{
       props.handleDelete(props.i)
     }}>Delete</button>
   </div> 
    )}
export default ToDo; 