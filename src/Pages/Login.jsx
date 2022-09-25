import { useContext } from "react";
import MyButton from "../component/UI/button/MyButton";
import MyInput from "../component/UI/input/MyINput";
import { AuthContext } from "../context";

const Login = () => {
  const {setIsAuth} = useContext(AuthContext)
  const login = event =>{
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth','true')
  }
  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placehlder="логин" />
        <MyInput type="password" placehlder="пароль" />
        <MyButton >Sign in</MyButton>
      </form>
    </>
  );
};

export default Login;
