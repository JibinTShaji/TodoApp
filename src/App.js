import { useEffect, useState } from "react";
import Todo from "./components/Todo";

const localData=()=>{
  let list=localStorage.getItem("data")
  if(list){
    return JSON.parse(list)
  }
  else{
    return []
  }
}

function App() {
  const [newTask,setNewTask]=useState("")
  const [todolist,setTodolist]=useState(localData )


  // add task
  const addTask=(e)=>{
    e.preventDefault()
if(!newTask){
  alert("enter some task")
}
else{
  let task={
    id:todolist.length===0? 1 :todolist[todolist.length-1].id+1,
    taskname:newTask,
    completed:false
  }
  let newTodolist=[...todolist,task]
  setTodolist(newTodolist)
  setNewTask("")
}
  }

  // delete task
  const deleteTask=(id)=>{
    let newTodolist=todolist.filter((item)=>{
      return item.id !== id
    })
    setTodolist(newTodolist)
  }

  //edit task

  const editTask=(id)=>{
    let ChangeTask=todolist.find((item)=>{
      return item.id===id
    })
    //delete edit task same as delete task
    let newTodolist=todolist.filter((item)=>{
      return item.id !== id
    })
    setNewTask(ChangeTask.taskname)
    setTodolist(newTodolist)
  }

  //completed task

  const completeTask=(id)=>{
   setTodolist(todolist.map((item)=>{
    if(item.id===id){
      return{...item,completed:true}
    }
    else{
      return item
    }
   })) 
    
  }
//local storage code
  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(todolist))
  })


 

  return (
    <div className="flex  items-center justify-center min-h-screen  bg-slate-500">
      <div className="flex-row   justify-center  items-center  w-full   App">
          <h1 className=" flex  justify-center text-3xl font-bold underline py-5">
      TodoList
    </h1>
    <form className="flex justify-center py-5 gap-2">
    <input className="flex justify-center" type="text" value={newTask} onChange={(e)=>{setNewTask(e.target.value)}} placeholder="Enter task">
    </input>
    <button className="bg-green-500 px-2 py-2" onClick={addTask}>Add </button>
    </form>
    <div className="flex-row justify-center">
     {
      todolist&&todolist.map((item,index)=>{
        return(
          <Todo key={item.id}
           id={item.id}
          taskname={item.taskname}
          index={index}
          deleteTask={deleteTask}
          editTask={editTask}
          completeTask={completeTask}
          completed={item.completed}
          />
        )
      })
     }
    </div>
    
    </div>
    </div>
  );
}
export default App;
