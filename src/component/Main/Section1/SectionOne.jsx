import section from './SectionOne.module.css'
import img from '../../../assets/1.png'
import { useState } from 'react'
const SectionOne = () =>{

const [isActive, setActive] = useState({
    btnOne: true,
    btntwo: false,
    btnthree: false,
    btnFour: false
})
 
const changeBtn1 = () => setActive({btnOne: true, btntwo:false,btnthree:false,btnFour:false})
const changeBtn2 = () => setActive({btnOne: false, btntwo:true,btnthree:false,btnFour:false})
const changeBtn3 = () => setActive({btnOne: false, btntwo:false,btnthree:true,btnFour:false})
const changeBtn4 = () => setActive({btnOne: false, btntwo:false,btnthree:false,btnFour:true})

return(
    <>
    <div className={section.container}>
        <div className={section.container_btn}>
            <div className={isActive.btnOne ? section.btn  + ' ' + section._active : section.btn } onClick={changeBtn1}>Page 1</div>
            <div className={isActive.btntwo ? section.btn  + ' ' + section._active : section.btn } onClick={changeBtn2}>Page 2</div>
            <div className={isActive.btnthree ? section.btn  + ' ' + section._active : section.btn } onClick={changeBtn3}>Page 3</div>
            <div className={isActive.btnFour ? section.btn  + ' ' + section._active : section.btn } onClick={changeBtn4}>Page 4</div>
        </div>        
        <img className={section.img} src={img} alt="" />
    </div>
    </>
)
}
export default SectionOne