import React, { useContext, useEffect, useState } from 'react'
import Login from './componets/Auth/Login'
import EmployeeDashboard from './componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './componets/Dashboard/AdminDashboard'
import { getLocalstorage, setLocalstorage } from './utils/localStroage'
import { Authcontext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState() 
   const [loggedinuserdata,setLoggedInUserdata] = useState(null)
  const [userdata,setUserdata] = useContext(Authcontext)


 useEffect(()=>{
   const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
     const userdata =JSON.parse(loggedInUser)
     setUser(userdata.role)
/    setLoggedInUserdata(userdata.data)
   }
},[])



  
  // useEffect(() => {
  //   if(authdata){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authdata])
  

  const handleLogin =(email,password)=>{
   if(email=='admin@23.com' && password=='123'){
    setUser({role:'admin'})
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
   }
   else if (userdata){
    const employee = userdata.find((x)=>email==x.email && password==x.password)
    if(employee){
      setUser('employee')
      setLoggedInUserdata(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
   } 
   else{
    alert('invalid crediential');
   }
  }
}
   
// useEffect(() => {
//   setLocalstorage()
//     getLocalstorage()
// },)




  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}   
    {user=='admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard  changeUser={setUser} data={loggedinuserdata}/>: null )}

    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
     
    </>
  )
}
export default App