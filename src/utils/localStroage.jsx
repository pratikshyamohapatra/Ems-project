
  const employees = [
    {
      id: 1,
      firstname: "Aarav", // Indian first name added
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Prepare Report",
          taskDescription: "Prepare the monthly financial report.",
          taskDate: "2024-12-05",
          category: "Finance",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Client Meeting",
          taskDescription: "Attend the meeting with the new client.",
          taskDate: "2024-12-06",
          category: "Meetings",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Update Inventory",
          taskDescription: "Update the stock levels in the inventory system.",
          taskDate: "2024-12-07",
          category: "Operations",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ],
      taskCounts: {
        active: 2,      // Count of active tasks
        newTask: 1,     // Count of new tasks
        completed: 1,   // Count of completed tasks
        failed: 0       // Count of failed tasks
      }
    },
    {
      id: 2,
      firstname: "Priya", // Indian first name added
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Team Training",
          taskDescription: "Organize training sessions for the new team.",
          taskDate: "2024-12-08",
          category: "Training",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Code Review",
          taskDescription: "Review code changes submitted by the development team.",
          taskDate: "2024-12-09",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "System Testing",
          taskDescription: "Test the new updates to the company portal.",
          taskDate: "2024-12-10",
          category: "IT",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ],
      taskCounts: {
        active: 1,      // Count of active tasks
        newTask: 1,     // Count of new tasks
        completed: 1,   // Count of completed tasks
        failed: 1       // Count of failed tasks
      }
    },
    {
      id: 3,
      firstname: "Rohan", // Indian first name added
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Design Mockups",
          taskDescription: "Design UI/UX mockups for the new product.",
          taskDate: "2024-12-11",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "API Integration",
          taskDescription: "Integrate the new API into the system.",
          taskDate: "2024-12-12",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Client Demo",
          taskDescription: "Demonstrate the product to the client.",
          taskDate: "2024-12-13",
          category: "Meetings",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ],
      taskCounts: {
        active: 2,      // Count of active tasks
        newTask: 1,     // Count of new tasks
        completed: 1,   // Count of completed tasks
        failed: 0       // Count of failed tasks
      }
    }, 
    {
      id: 4,
      firstname: "Aanya", // Indian first name added
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Product Launch",
          taskDescription: "Launch the new product in the market.",
          taskDate: "2024-12-14",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Ad Campaign",
          taskDescription: "Run a social media ad campaign for the new product.",
          taskDate: "2024-12-15",
          category: "Marketing",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Customer Feedback",
          taskDescription: "Collect feedback from customers after the launch.",
          taskDate: "2024-12-16",
          category: "Customer Service",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ],
      taskCounts: {
        active: 1,      // Count of active tasks
        newTask: 1,     // Count of new tasks
        completed: 1,   // Count of completed tasks
        failed: 1      // Count of failed tasks
      }
    },
    {
      id: 5,
      firstname: "Arjun", // Indian first name added
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Bug Fixing",
          taskDescription: "Fix bugs reported in the new version.",
          taskDate: "2024-12-17",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Customer Support",
          taskDescription: "Provide customer support for product issues.",
          taskDate: "2024-12-18",
          category: "Customer Service",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Feature Update",
          taskDescription: "Implement new feature requested by the client.",
          taskDate: "2024-12-19",
          category: "Development",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ],
      taskCounts: {
        active: 1,      // Count of active tasks
        newTask: 1,     // Count of new tasks
        completed: 1,   // Count of completed tasks
        failed: 1       // Count of failed tasks
      }
    }
  ];
  
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  

  export const setLocalstorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalstorage=()=>{
    // const data=localStorage.getItem('employees')
    // const employees=JSON.parse(localStorage.getItem('employees'))
    // const admin=JSON.parse(localStorage.getItem('admin'))
    // console.log(employees,admin);

    return {employees,admin}
    
    // console.log(JSON.parse(data));
    
  } 