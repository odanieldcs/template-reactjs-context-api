import './loading.css'

const Loading = ({ loading, message }) => { 
    return loading ? ( 
        <div className='overlay-content'> 
            <div className='wrapper'>
                <span className='message'> 
                    {message} 
                </span> 
            </div> 
        </div> 
    ) : null 
} 

export default Loading;