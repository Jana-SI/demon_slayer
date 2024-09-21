// Importa o componente ReactPlayer para reprodução de vídeos
import ReactPlayer from 'react-player'; 

import './Trailer.css';

const Trailer = () => {
    return (
        <div className='video'>{/* Container para o vídeo do trailer */}
            <ReactPlayer url="https://www.youtube.com/watch?v=6P79AqWs8V8" />{/* Renderiza o vídeo usando ReactPlayer */}
        </div>
    )
}

export default Trailer;