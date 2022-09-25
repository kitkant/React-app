import { useContext } from "react";
import MyButton from "../component/UI/button/MyButton";
import { AuthContext } from "../context";
import { Link } from "react-router-dom"

const Authorized = () => {
  const {setIsAuth} = useContext(AuthContext)
  const logout = () =>{
    setIsAuth(false) 
    localStorage.removeItem('auth')
  }
  return (
    <>
      <h1>Authorized Page</h1>
      <MyButton onClick={logout}>Sign out</MyButton>
      <Link to="/" >
                <MyButton>Главная страница</MyButton>
            </Link>
    </>
  );
};

export default Authorized;
