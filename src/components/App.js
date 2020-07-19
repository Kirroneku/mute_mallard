import React, { Component } from 'react';
import {HighlightedProjects} from './Projects';
import Jobs from './Jobs';
import profile from '../assets/profile.jpg'
// import Title from './title';
// import { Jokes } from './Joke';

class App extends Component {
    state = {
        displayBio: false,
    };
    
    // constructor(){
    //     super();
    //     this.state = {
    //         displayBio: false,
    //     };

    //     this.readMore = this.readMore.bind(this);
    // }

    // readMore = () => {
    //     this.setState({
    //         displayBio: !this.state.displayBio,
    //     })
    //     // console.log('readMore this', this);
    // }
    render() {            
        return (
            <div className="block">
                <div className="page">
                    <div className="ui_middle" >
                        <div className="ui_middlepad"  > 
                            <div className="ui_section">
                                <div className="ui_section_title">
                                    <h5>About Me</h5>
                                </div>
                                <img src={profile} alt='profile' className="profile"/>
                                <h3> 
                                    Jay-lynn (Jialin) Shan 
                                </h3>
                                <a href="mailto:j6shan@gmail.com">j6shan@gmail.com</a>
                                <p>I am a software developer that is motivated to learn new things all the time! </p>
                                <p>I also draw as a hobby! twitter - <a href="https://twitter.com/mute_mallart">@mute_mallart</a></p>
                            </div>
                            <div className="ui_section">
                                <div className="ui_section_title">
                                    <h5>Highlighted Projects</h5>
                                </div>
                                <HighlightedProjects />
                                <div className="ui_section_title">
                                    <h5>Previous Work Experience</h5>
                                </div>
                                <Jobs />
                            </div>        
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}

export default App;