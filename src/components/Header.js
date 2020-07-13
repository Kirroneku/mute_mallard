import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import websiteLogo from '../assets/websiteLogo.jpg';
import Socials from './Social';
import LINKS from '../data/links';

class Header extends Component {
    state = {
        current: "/",
    };

    updateCurrent ( curLink ) {
        this.setState({ "current": curLink });
    }

    makeLink (curLink, text) {
        return (
            <Link to={curLink} 
            className={this.state.current==curLink? "link": "otherlink"}
            onClick={() => this.updateCurrent(curLink)}>
                {text}
            </Link>
        )
    }

    render() {
        let { current } = this.props;
        const style = {
            display: 'inline-block',
            // color: 'black',
            margin: 10,
            marginBottom: 0,
        }

        var linkToHome = (
            <div>
                <Link to='/'
                onClick={() => this.updateCurrent('/')}> 
                    <img src={websiteLogo} id="websiteLogo" />
                </Link> 
            </div>
        );

        const socialStyle = {
            "float": "right",
            "marginTop": "-1.8em",
            // "marginRight": "min(200px, 10%)"
        }

        return (     

            <div>
                <div className="header">
                    <div className="titleWrapper">
                        <div className="titleMenu">
                            <h3 style={{margin: "10 0 0 0", display: 'inline-block'}}>{linkToHome}</h3>
                            {
                                LINKS.map(LINK => {
                                    var curLink = this.makeLink(LINK.link, LINK.linkName);
                                    return(
                                        <h3 key={LINK.id} style={style}>
                                            {curLink}
                                        </h3>
                                    )
                                })
                            }
                        </div>
                        <div style={socialStyle}>
                            <Socials />
                        </div>
                    </div>
                </div>
                {this.props.children}  
            </div> 

        )
    }
   
}

export default Header;