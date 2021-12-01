import './post.css'

export default function Post() {
    return (
        <div className='post'>
           <img 
           className='postImg'
           src="https://images.pexels.com/photos/10008380/pexels-photo-10008380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
           <div className="postInfo">
               <div className="postCats">
                   <span className="postCat">Music</span>
                   <span className="postCat">Life</span>
               </div>
               <div className="postTitle">Maxime doloribtibus sunt expedita</div>
               <hr/>
               <span className="postDate">1 hour ago</span>
           </div>
           <p className='postDesc'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nuum quidem veritatis id, doloribus dolor niam magnam libero?
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nuum quidem veritatis id, doloribus dolor niam magnam libero?
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nuum quidem veritatis id, doloribus dolor niam magnam libero?
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nuum quidem veritatis id, doloribus dolor niam magnam libero?
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nuum quidem veritatis id, doloribus dolor niam magnam libero?
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nuum quidem veritatis id, doloribus dolor niam magnam libero?
           </p>
        </div>
    )
}
