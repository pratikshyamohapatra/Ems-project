import React, { Children, createContext, useEffect, useState } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/localStroage'

export const Authcontext = createContext()
const AuthProvider = ({children}) => {
  // localStorage.clear()
const [userdata, setUserdata] = useState(null) 

useEffect(() => {
  setLocalstorage()
    const {employees}= getLocalstorage() 
    setUserdata(employees) 
}, [])


// const data=getLocalstorage()
// console.log(data); 



  return (
    <div>
      <Authcontext.Provider value={[userdata,setUserdata] }>
        {children}
        </Authcontext.Provider> 
    </div>
  )
}

export default AuthProvider