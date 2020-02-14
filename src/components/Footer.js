import React from 'react';

const Footer = () =>{
    const style = {
        "backgroundColor": "white"
    }

    return(
        <div className="footer" style={style}>
            <div style={{'clear':'both'}}></div>
            <h4>About the website</h4>
            <p>Website built using react, with concepts learned in an online bootcamp.</p>
            <p>Hosted on Google Cloud Platform. Information pulled from self maintained express based APIs, ran on GCP functions.</p>
        </div>
    )
}

export default Footer;