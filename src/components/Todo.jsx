import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';


const Todo=({id,taskname,index,deleteTask,editTask,completeTask,completed})=>{
    return(
        <div  className="flex justify-center py-5 gap-5">
        <h1 className={`flex text-white text-lg ${completed ? "line-through text-green-600" : "text-gray-200 hover:text-white"}`}>{index+1}.{taskname}</h1>
     <DeleteIcon className="text-red-500" onClick={()=>{deleteTask(id)}}/>
     <EditIcon onClick={()=>{editTask(id)}}/>
     <DoneIcon onClick={()=>{completeTask(id)}}/>
     

      </div>
    )
}
export default Todo