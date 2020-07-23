import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import websiteLogo from '../assets/websiteLogo.jpg';
import Socials from './Social';
import { Burger, Menu } from './HamburgerMenu';

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
            "marginTop": "0.5em",
            // "marginRight": "min(200px, 10%)"
        }
      
        document.onclick = inputClick.bind(this);
        
        function inputClick (e) {
            console.log(e);
            if( this.state.open && e.srcElement.id != "ham" && e.srcElement.id != "hamToggle" ) {
                this.setState({"open": false})
            }
        }

        return (     

            <div>
                <div className="header" style={{height: "3em"}}>
                    <h3 style={{textAlign:"center", position:"absolute", margin:"auto", left:"0", right: "0", top:"0.4em"}}>Jaylynn (Jialin) Shan</h3>
                    <div className="titleWrapper">
                        <div className="titleMenu">
                            {/* <h3 style={{margin: "10 0 0 0", display: 'inline-block'}}>{linkToHome}</h3> */}

                            <Burger open={this.state.open} setOpen={() => this.setOpen()} />
                            <Menu open={this.state.open} setOpen={() => this.setOpen()} />

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