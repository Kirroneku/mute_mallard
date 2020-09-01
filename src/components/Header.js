import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import websiteLogo from '../assets/websiteLogo.jpg';
import Socials from './Social';
import { Burger, Menu } from './HamburgerMenu';

const isMobile = document.body.clientWidth < 500? true: false;

function inputClick (e) {
    let menuWidth = parseInt(window.getComputedStyle(document.getElementById("ham")).width);

    if( this.state.open && e.clientX > menuWidth ) {
        this.setState({"open": false})
    }
}

class Header extends Component {
    state = {
        open: false,
        setOpen: false
    };

    updateCurrent ( curLink ) {
        this.setState({ "current": curLink });
    }

    setOpen () {
        this.setState({ "open" : !this.state.open})
        console.log("statechange!", this.state.open)
    }

    render() {
        let { current } = this.props;

        const socialStyle = {
            "float": "right",
            "marginTop": "1em",
            // "marginRight": "min(200px, 10%)"
        }
      
        document.onclick = inputClick.bind(this);
        let nameText = "Jaylynn (Jialin) Shan";

        if( isMobile ) {
            nameText = "";
        }

        return (     

            <div>
                <div className="header" style={{height: "3.5em", letterSpacing:"0.1em"}}>
                    <Burger open={this.state.open} setOpen={() => this.setOpen()} />
                    <Menu open={this.state.open} setOpen={() => this.setOpen()} />
                    <div className="titleWrapper">
                        <div className="titleMenu">
                            {/* <h3 style={{margin: "10 0 0 0", display: 'inline-block'}}>{linkToHome}</h3> */}
                        </div>
                        <div style={socialStyle}>
                            <Socials />
                        </div>
                    </div>
                    <h2 style={{textAlign:"center", position:"absolute", margin:"auto", left:"30%", right: "30%", top:"0.3em"}}><Link to='/'
                        onClick={() => this.updateCurrent('/')} className="mainLink"> 
                            {nameText}
                        </Link> </h2>

                </div>
                {this.props.children}  
            </div> 

        )
    }
   
}

export default Header;