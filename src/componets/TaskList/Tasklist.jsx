import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data);
    
  return (
    <div  id='tasklist' className='h-[55%] overflow-x-auto w-full flex items-center justify-start gap-6  mt-10 py-5 flex-nowrap'>
        {data.tasks.map((x,idx)=>{
            if(x.active)
            {
                return <AcceptTask key={idx} data={x}/>
            }
            if(x.completed){
                return <CompleteTask key={idx} data={x}/>
            }
            if(x.newtask)
            {
                return <NewTask key={idx} data={x}/>
            }
            if(x.failed)
            {
                return <FailedTask key={idx} data={x}/>
            }
            
        } )}
        





        {/* <div className=' flex-shrink-0 h-[300px] w-[300px] p-5 bg-red-400 rounded-xl'> 
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20-feb-2024</h4>
            </div>
            <h2  className='mt-5 text-2xl font-semibold'>Make a video</h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore vero voluptatum distinctio, sit fugit. </p>
             </div>  */}
             
             {/* <div className=' flex-shrink-0 h-[300px] w-[300px] p-5 bg-green-400 rounded-xl'> 
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20-feb-2024</h4>
            </div>
            <h2  className='mt-5 text-2xl font-semibold'>Make a video</h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore vero voluptatum distinctio, sit fugit. </p>
             </div>  */}
             {/* <div className=' flex-shrink-0 h-[300px] w-[300px] p-5 bg-blue-400 rounded-xl'> 
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20-feb-2024</h4>
            </div>
            <h2  className='mt-5 text-2xl font-semibold'>Make a video</h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore vero voluptatum distinctio, sit fugit. </p>
             </div>  */}
             {/* <div className=' flex-shrink-0 h-[300px] w-[300px] p-5 bg-yellow-400 rounded-xl'> 
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20-feb-2024</h4>
            </div>
            <h2  className='mt-5 text-2xl font-semibold'>Make a video</h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore vero voluptatum distinctio, sit fugit. </p>
             </div>  */}
             {/* <div className=' flex-shrink-0 h-[300px] w-[300px] p-5 bg-teal-400 rounded-xl'> 
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20-feb-2024</h4>
            </div>
            <h2  className='mt-5 text-2xl font-semibold'>Make a video</h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore vero voluptatum distinctio, sit fugit. </p>
             </div>  */}
             
       
    </div>
  )
}

export default TaskList