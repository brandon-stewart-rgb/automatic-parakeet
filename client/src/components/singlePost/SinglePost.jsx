import './singlePost.css';

export default function SinglePost() {
    return (
        <div className='singlePost'>
          <div className="singlePostWrapper">
              <img src="https://images.pexels.com/photos/10008380/pexels-photo-10008380.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="singlePostImg" />
              <h1 className="singlePostTitle">Lorem ipsum dolor nemo!
              <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"></i>
                  <i className="singlePostIcon far fa-trash-alt"></i>
                  </div>
              </h1>
              <div className="singlePostInfo">
                  <span className='SinglePostAuthor'>Author: <b>Brandon</b></span>
                  <span className='SinglePostDate'>1 hour</span>
              </div>
              <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in quo laudantium, inventore ducimsequs magni facere molestias labore nam velit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in quo laudantium, inventore ducimsequs magni facere molestias labore nam velit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in quo laudantium, inventore ducimsequs magni facere molestias labore nam velit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in quo laudantium, inventore ducimsequs magni facere molestias labore nam velit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in quo laudantium, inventore ducimsequs magni facere molestias labore nam velit.
                  
              </p>
              
          </div>
        </div>
    )
}
