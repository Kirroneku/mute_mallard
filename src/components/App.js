import React, { Component } from 'react';
import {HighlightedProjects} from './Projects';
import '../css/loading-spinner.css';

import Jobs from './Jobs';
import profile from '../assets/profile.jpg'
// import Title from './title';
// import { Jokes } from './Joke';

class App extends Component {
    state = {
        displayBio: false,
    };
    

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
                                <div style = {{ textAlign:"left", margin:'10px'}}>
                                    <div style={{display:'inline-flex'}}> 
                                        <img src={profile} alt='profile' className="profile" />
                                        <div>
                                            
                                            {/* <a href="mailto:j6shan@gmail.com">j6shan@gmail.com</a> */}
                                            <p>My name is Jialin (Pronouced Jay-lynn) and I graduated with a Bachelor of Computer Science Co-op from the University of Waterloo. 
                                                I am a software developer that is motivated to learn new things all the time! This website is mostly a pet project for myself in order to
                                                learn how to use React/Redux as well as to brush up on my Javascript skills. 
                                            </p> 
                                        </div>
                                        
                                    </div>
                                    <div>
                                            <p> There are some small apps on this website that I made, feel free to check them out, and if there are any bugs let me know at: <a href="mailto:j6shan@gmail.com">j6shan@gmail.com</a>.
                                             I also do some small projects on the side, some of them which are on my <a href="https://github.com/kirroneku">github</a>.
                                            </p>
                                            <p>Some of my hobbies aside from learning about technologies and coding are drawing, which you can find some of what I do on my twitter: 
                                                - <a href="https://twitter.com/mute_mallart">@mute_mallart</a>. I also like following soccer, supporting Leicester City in the EPL. In addition, I 
                                                like to play videogames, such as league of legends - speaking of which I have a section of my website dedicated to fetching league of legends information! </p>
                                    </div>
                                    <div> 
                                        <p>
                                            Some of the technologies and tools I typically work with include:
                                            <ul>
                                                <li>Javascript</li>
                                                <li>Python</li>
                                                <li>CSS/HTML</li>
                                                <li>React</li>
                                                <li>Git</li>
                                                <li>C#</li>
                                                <li>Unity</li>
                                                <li>Java</li>
                                                <li>C++</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="ui_section">
                                {/* <div className="ui_section_title">
                                    <h5>Highlighted Projects</h5>
                                </div> */}
                                {/* <HighlightedProjects /> */}
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