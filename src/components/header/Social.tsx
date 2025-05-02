import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import SocialLink from './SocialLink';


const Social : React.FC = () => {
    return(
        <>
        <SocialLink
            url="https://www.facebook.com/p/Muses-tanguent-100063747243051/"
            target="_blank"
            icon={facebook}
            label="facebook"
        />
            <SocialLink
            url="https://www.instagram.com/musestanguent/?hl=fr"
            target="_blank"
            icon={instagram}
            label="instagram"
        />
        </>
    )
}

export default Social