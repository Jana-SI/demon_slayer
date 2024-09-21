import ReactPlayer from 'react-player';
import './Trailer.css';

const Trailer = () => {
    return (
        <div className='video'>
            <ReactPlayer url="https://www.youtube.com/watch?v=6P79AqWs8V8" />
        </div>
    )
}

export default Trailer;