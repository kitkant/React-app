import header from './Header.module.css'
import { Link } from "react-router-dom"
import MyButton from "../UI/button/MyButton";

const Header = () =>{

    return(
        <>
            <div className={header.container}>
            <div className={header.logo}>Донбассгаз</div>
            <Link to="/login" className={header.btn}>
                <MyButton>Вход</MyButton>
            </Link>
            </div>
        </>
    )
}

export default Header