import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import TextBlock from "../../components/textblock/TextBlock"
import Video from "../../components/video/Video"
import './home.scss'

function  Home(){
    return(
        <div className="wrapper">
            <Header/>
            <h1 className="title-home">Fanfare les Muses Tanguent</h1>
            <TextBlock
                title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
                content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est 
                le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                 des morceaux de texte pour réaliser un livre spécimen de polices de texte."
            />
            <Video
                src="https://www.youtube.com/embed/uf1BxOUWsoU?si=tX7YP-i5YNUnDS9S"
                title="Muses Tanguent"
                width="100%"
                height="auto"
            />
            <Footer/>
        </div>
    )
}
export default Home