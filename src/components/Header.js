import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import websiteLogo from '../assets/websiteLogo.jpg';
import Socials from './Social';
import { Burger, Menu } from './HamburgerMenu';
import LINKS from '../data/links';

class Header extends Component {
    state = {
        current: "/",
        open: false,
        setOpen: false
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

    setOpen () {
        this.setState({open: !this.state.open})
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
            "marginTop": "-2.5em",
            // "marginRight": "min(200px, 10%)"
        }
      
        return (     

            <div>
                <div className="header">
                    <div className="titleWrapper">
                        <div className="titleMenu">
                            
                            <h3 style={{margin: "10 0 0 0", display: 'inline-block'}}>{linkToHome}</h3>

                            <Burger open={this.state.open} setOpen={() => this.setOpen()} />
                            <Menu open={this.state.open} setOpen={() => this.setOpen()} />

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