import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const AllTask = () => {
   const [userdata,setUserdata] =useContext(Authcontext)
//    console.log(authdata.employees);
   
    
  return (
    <div className='bg-[#1c1c1c]  p-5 mt-5 rounded '>
        <div className='bg-red-400 px-4 py-2 mb-2 flex justify-between rounded'>
             <h2 className=' text-lg font-medium w-1/5 '>Employee Name</h2>
             <h3 className=' text-lg font-medium w-1/5 '>Active Task</h3>
             <h5 className=' text-lg font-medium w-1/5 '> New Task</h5>
             <h5 className=' text-lg font-medium w-1/5 '>Completeed Task</h5>
             <h5 className= ' text-lg font-medium w-1/5 '>Failed Task</h5>
         </div>
         
        <div className=''>
        {userdata.map(function(elem,idx){
              return <div key={idx} className=' border-2 border-emerald-400 px-4 py-2 mb-2 flex justify-between rounded '>
             <h2 className=' text-lg font-medium w-1/5 bg-600'>{elem.firstname}</h2>
             <h3 className=' text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.active}</h3>
             <h5 className=' text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.newTask}</h5>
             <h5 className=' text-lg font-medium  w-1/5 text-white-600'>{elem.taskCounts.completed}</h5>
             <h5 className=' text-lg font-medium  w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
    
         </div>
        })}
        </div>
        
        </div>
)}
export default AllTask
        
       
       