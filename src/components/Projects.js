import React from 'react';
import PROJECTS from '../data/projects';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const { title, image, description, type, link} = props.project;

    var myLinking = null;
    if(type != 'inSite') {
        myLinking = (<a href={link}>
            <h3><img src={image} alt='' style={{ height: "10%", width: "10%", margin: '10px' }} />{title}</h3>
        </a>)
    } else {
        
        myLinking = (<Link to={link}>
            <h3> <img src={image} alt='' style={{ height: "10%", width: "10%", margin: '10px'}} /> {title}</h3>
        </Link>)
    }
    
    return(
        <div style={{ display: 'inline-block', width: "80%", margin: 10}}>
           {myLinking}
            <p>{description}</p>
            <hr></hr>
        </div>
    )
}

const Projects = () => (
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
    


export default Projects;