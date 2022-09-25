import { useState } from "react"
import Post from "../../UI/post/Post"
import section from './SectionTwo.module.css'

const SectionTwo = () =>{
const [posts] = useState([
    {id: 0, title: 'Title 1', theme: 'Theme 1'},
    {id: 1, title: 'Title 2', theme: 'Theme 2'},
    {id: 2, title: 'Title 3', theme: 'Theme 3'}
])

    return(
        <div>
        <h2 className={section.title}>Новости</h2>
        <hr className={section.hr}/>
        {posts.map((p) =>{
           return <Post post={p} key={p.id}/>
        })
        }
        </div>
    )
}

export default SectionTwo