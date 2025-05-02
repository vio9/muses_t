import './video.scss'
import { VideoProps } from '../../types/components'

const Video: React.FC<VideoProps> = ({ title, src, width , height }) => {
    return (
      <div className="video-container">
        <iframe
          width={width}
          height={height}
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };
export default Video