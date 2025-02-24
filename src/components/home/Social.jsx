import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
           <a href="https://www.instagram.com/vng21.26/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiInstagram />
                </a>
                <a href="https://github.com/vanitas2126" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/daud-zulfikar-24325025b/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;