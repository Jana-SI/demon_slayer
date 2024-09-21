// Importa o componente ReactPlayer para reprodução de vídeos
import ReactPlayer from 'react-player'; 

import './Trailer.css';

const Trailer = () => {
    // Renderiza o vídeo usando ReactPlayer
    return (
        <div className='video'>
            <ReactPlayer url="https://www.youtube.com/watch?v=6P79AqWs8V8" />
        </div>
    )
}

export default Trailer;