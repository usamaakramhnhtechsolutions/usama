import React, { useState } from 'react'
import { UserContext } from './UserContext'

const UserProvider = ( {children} ) => {
    const [user , setUser] = useState({
        fname : "",
        lname : "",
        email : "",
        password : "",
    });
    console.log(user, "userqr")
  return (
    <UserContext.Provider value={{user , setUser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserProvider


