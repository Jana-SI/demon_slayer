import ReactPlayer from 'react-player';
import './Trailer.css';

const Trailer = () => {
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6P79AqWs8V8?si=pYd3klcoMWHLFwQ-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <ReactPlayer url="https://www.youtube.com/watch?v=6P79AqWs8V8" />
        </div>
    )
}

export default Trailer;