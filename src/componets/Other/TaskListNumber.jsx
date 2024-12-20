import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen '>
        <div className='rounded-xl  w-[45%] px-9 py-5 bg-red-400'> 
            <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New task</h3>
        </div>
        <div className='rounded-xl  w-[45%] px-9 py-5 bg-blue-400'> 
            <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl  w-[45%] px-9 py-5 bg-green-400'> 
            <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl  w-[45%] px-9 py-5 bg-pink-400'> 
            <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumber