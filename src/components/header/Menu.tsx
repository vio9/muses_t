import { Link } from "react-router-dom"
import "./menu.scss"

const Menu : React.FC = () => {
    return(
        <nav>
        <Link className="link-menu" to="/">Home</Link>
        <Link className="link-menu" to="/about">A propos</Link>
        <Link className="link-menu" to="/contact">Contact</Link> 
      </nav>
    )
}

export default Menu