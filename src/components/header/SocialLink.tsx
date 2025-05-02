import React from "react"
import { ExternalLinkComponent } from "../../types/components"
import '../../components/header/social.scss'

const SocialLink: React.FC<ExternalLinkComponent> = ({label, url, target, icon}) => {
return(
    <>
    <a href={url} target={target}>
    <img className="social-img" src={icon} alt = {label}/>
    </a>
    </>
)
}
export default SocialLink
