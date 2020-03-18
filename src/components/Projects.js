import React from 'react';
import PROJECTS from '../data/projects';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const { title, image, description, type, link} = props.project;
    var myLinking = null;
    var projImg = null;

    if(type != 'inSite') {
        if( image != null ) {
            projImg = <img src={image} alt='' style={{ height: "10%", width: "10%", margin: '10px'}} />;
        }
        myLinking = (<a href={link} className="otherlink">
            <h3>{projImg}{title}</h3>
        </a>)
    } else {
        if( image != null ) {
            projImg = <img src={image} alt='' style={{ height: "10%", width: "10%", margin: '10px'}} />;
        }
        myLinking = (<Link to={link} className="otherlink"> 
            <h3>{projImg}{title}</h3>
        </Link>)
    }
    var newDescription = <p>{description}</p>;

    return(
        <div style={{ display: 'inline-block', width: "80%", margin: 10}}>
            {myLinking}
            {newDescription}
            <hr></hr>
        </div>
    )
}

const Projects = () => {
   
    return(
        <span>
            <div>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                            <Project key={PROJECT.id} project={PROJECT}/>
                        )
                    })
                }
            </div>
        </span>
    )    
}
    
const HighlightedProjects = () => {
    return(
        <span>
            <div>
                {
                    PROJECTS.map(PROJECT => {
                        if(PROJECT.Highlighted) {
                            return (
                                <Project key={PROJECT.id} project={PROJECT}/>                          
                            );
                        } 
                        return (null);
                    })
                }
            </div>
        </span>
    )    
}

export {Projects, HighlightedProjects};