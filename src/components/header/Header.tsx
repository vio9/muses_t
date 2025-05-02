import Menu from "./Menu";
import Social from "./Social";
import './header.scss'

const Header: React.FC = () => {
    return(
        <div className="wrapper-header">
        <Menu/>
        <Social/>
        </div>
    )
}

export default Header