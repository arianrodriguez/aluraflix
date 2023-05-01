import './VideoCard.css'

const VideoCard = (props) => {
    return <img src={props.src} alt={props.alt} style={{width: `${props.width}px`}}/>
}

export default VideoCard