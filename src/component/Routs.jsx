
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import {privatRouter, publicRouter} from "../router/index";

export default function Routs() {
  const {isAuth} = useContext(AuthContext)
   
  return (
    isAuth
    ?
    <Routes>
      {privatRouter.map( router =>
          <Route 
          path={router.path} 
          element={router.component}
          key={router.path}
          />
      )}
    </Routes>
    :
    <Routes>
      {publicRouter.map( router =>
          <Route 
          path={router.path} 
          element={router.component}
          key={router.path}
          />
      )}
    </Routes>
 
    
  );
}
