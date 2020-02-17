import React from 'react';
import SocialData from "../data/social.js";

const Social = (props) =>(
    <span style={{width: 40, height: 40, margin: 1, display: "inline-block"}}>
        <a href={props.social.link}>
            <img className="socialImage" src={props.social.image} alt="social"/>
        </a>
    </span>      
)


const Socials = () => (
    <div>
        {/* <div style={{width: "100%"}}> */}
        {
            SocialData.map((CurrentSocial) => {
                return(
                    <Social key={CurrentSocial.id} social={CurrentSocial}/>
                )
            })
        }
        {/* </div> */}
    </div>    
)

export default Socials;