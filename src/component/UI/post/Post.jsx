import img from '../../../assets/2.png'
import post from './Post.module.css'

const Post = (props) =>{
    return(
        <div className={post.app}>
            <div className={post.post}>
                <div className={post.content}>
                    <img src={img}  className={post.img}/>
                    <div className={post.filling}>
                        <h2>{props.post.title}</h2>
                        <hr/>
                        <p>{props.post.theme}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Post