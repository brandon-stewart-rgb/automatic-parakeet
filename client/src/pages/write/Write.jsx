import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img
            className='writeImg'
             src="https://images.pexels.com/photos/139975/pexels-photo-139975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}} />
                   {/* autoFocus of true focuses automatically on title input */}
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='What is your story?' type='text' className='writeInput writeText' ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
