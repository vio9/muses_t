import { Link } from "react-router-dom"

const Menu : React.FC = () => {
    return(
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">A propos</Link>
        <Link to="/contact">Contact</Link> 
      </nav>
    )
}

export default Menu