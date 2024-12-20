import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { Authcontext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userdata,setUserdata] = useContext(Authcontext)

const [taskTitle,setTaskTitle] = useState('')
const [taskDate, setTaskDate] = useState('')
const [taskAssignTo, setAssignTo] = useState('')
const [taskCategory, setTaskCategory] = useState('')
const [taskDescription, settaskDescription] = useState('')

const [newTask, setNewTask] = useState({})

  const submithandler=(e) =>{
    e.preventDefault()
    // console.log(taskTitle,taskDate,taskAssignTo,taskCategory,taskDescription);
    setNewTask({taskTitle,taskDate,taskCategory,taskDescription,active:false,newTask:true,failed:false,completed:false})

    const data= userdata
   
    data.forEach(function(elem){
      if(taskAssignTo == elem.firstname){
        elem.tasks.push(newTask)
        elem.taskCounts.newTask =elem.taskCounts.newTask+1
       console.log(elem);
      }
    })
    setUserdata(data)
    console.log(data);
    
    

      // localStorage.setItem('employees',JSON.stringify(data));
      // console.log(elem.tasks);
 
  
    setTaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setTaskCategory('')
    settaskDescription('')
    
  }
  return (
   
    <div className='p-5 bg-[#1c1c1c] mt-5  rounded'>
            <form onSubmit={(e)=>{
              submithandler(e)
            }} className='flex  flex-wrap w-full  items-start justify-between' > 
                <div className='w-1/2'>
                <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                } } className='text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='employee name'/>
                </div>

                 <div>
                 <h3 className='text-sm text-gray-300 mb-0.5' >Date</h3>
                <input  
                  value={taskDate}
                  onChange={(e)=>
                  {
                    setTaskDate(e.target.value)
                  }} className='text-sm py-1 px-2  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date"/>
                </div>

                 <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                 <input value={taskAssignTo}
                 onChange={(e)=>{
                  setAssignTo(e.target.value)
                 }}   className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='enter employee name'/>
                 </div>

                 <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                 <input value={taskCategory}
                 onChange={(e)=>{
                  setTaskCategory(e.target.value)
                 }}
                  className='text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='desgin,dev etc'/></div>
                 </div>


                <div className='w-2/5 flex-col items-start'>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                 <textarea value={taskDescription}
                 onChange={(e)=>{
                  settaskDescription(e.target.value)
                 }}
                  className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name=""  id="" />
                 <button className='bg-emerald-500 py-3 hover:bg-emerald-600 text-sm px-5 rounded mt-4 w-full'>Create Task</button>
                 </div>

            </form>
        </div>
  )
}

export default CreateTask