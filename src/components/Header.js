import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import home_icon from '../assets/home_icon.png';
import Socials from './Social';

class Header extends Component {

    render() {
        const { current } = this.props;
        const style = {
            display: 'inline-block',
            color: 'black',
            margin: 10,
            marginBottom: 0,
        }

        var linkToHome = (
        <Link to='/' className={current=='home'? "link": "otherlink"}> 
            Portfolio 
        </Link>);

        var linkToJokes = (
            <Link to='/jokes' 
                className={current=='jokes'? "link": "otherlink"}> 
                Jokes 
            </Link>
        );

        var linkToProjects = (
            <Link to='/projects' 
                className={current=='projects'? "link": "otherlink"}>
                Projects 
            </Link>
        );

        const socialStyle = {
            "float": "right",
            "marginTop": "-1.6em",
            // "marginRight": "min(200px, 10%)"
        }

        return (     

            <div>
                <div className="header">
                    <div className="titleWrapper">
                        <div className="titleMenu">
                            <h3 style={style}>{linkToHome}</h3>
                            <h3 style={style}>{linkToJokes}</h3>
                            <h3 style={style}>{linkToProjects}</h3>
                        </div>
                        <div style={socialStyle}>
                            <Socials />
                        </div>
                    </div>
                    

                    <hr></hr>
                </div>
                {this.props.children}  
            </div> 

        )
    }
   
}

export default Header;