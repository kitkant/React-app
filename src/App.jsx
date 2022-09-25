import React, { useEffect, useState } from "react";
import Routs from "./component/Routs";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem('auth'))
      setIsAuth(true)
  })

  return(
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
        <BrowserRouter>
        <Routs />
        </BrowserRouter>
    </AuthContext.Provider>
  )   
}
export default App