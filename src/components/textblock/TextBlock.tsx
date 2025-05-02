import { TextBlockProps } from "../../types/components";
import './textblock.scss';

const TextBlock : React.FC<TextBlockProps> = ({title, content}) => {
    return(
        <div className="textblock-container">
        <h2>{title}</h2>
        <p>{content}</p>
        </div>
    )
}

export default TextBlock;