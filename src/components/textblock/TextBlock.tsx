import { TextBlockProps } from "../../types/components";
import './textblock.module.scss';

const TextBlock : React.FC<TextBlockProps> = ({title, content}) => {
    return(
        <div>
        <h2>{title}</h2>
        <p>{content}</p>
        </div>
    )
}

export default TextBlock;