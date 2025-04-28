import { Link } from "react-router-dom"

function ErrorPage(){
    return(
        <div>
        <h1>404</h1>
        <p>Oups, cette page n'existe pas.</p>
        <Link to="/" style={{ marginTop: '1rem', display: 'inline-block' }}>
          Retourner à l'accueil
        </Link>
      </div>
    )
}
export default ErrorPage