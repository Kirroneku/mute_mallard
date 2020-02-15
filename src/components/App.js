import React, { Component } from 'react';
import Projects from './Projects';
import Jobs from './Jobs';
import profile from '../assets/profile.jpg'
import Title from './title';
import { Jokes } from './Joke';
import SpawnDucks from './SpawnDucks'
import League from './League';

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
        let bio = !this.state.displayBio? (<div>
            
            {/* <Title /> */}
            </div>) : null;
            
        // let readLM =  this.state.displayBio?
        //  <button onClick={this.readMore}> Read More </button>:
        //  <button onClick={this.readMore}> Show Less </button>
        // const myMargin = Math.max('0', document.getElementById(page).clientWidth - 1000)/2));
        // style={{"marginLeft": myMargin}}
        return (
            <div>
                <SpawnDucks />
                <div className="page" >
                    {/* <div className="ui_left">
                        <div className="ui_section" style={{"height":"500px", "paddingTop":"10px"}}>
                            <div className="ui_section_title">
                                <h5>About Me</h5>
                            </div>
                            <img src={profile} alt='profile' className="profile"/>
                            <h3> 
                                Jialin Shan 
                            </h3>
                            <a href="mailto:j6shan@gmail.com">j6shan@gmail.com</a>
                            <hr />
                            <div>
                                {bio}
                            </div>
                        </div>
                    </div> */}
                    <div className="ui_middle" >
                        <div className="ui_middlepad"  > 
                            <div className="ui_section" style={{"paddingTop":"10px"}}>
                                <div className="ui_section_title">
                                    <h5>Highlighted Projects</h5>
                                </div>
                                <Projects />
                                <div className="ui_section_title">
                                    <h5>Previous Work Experience</h5>
                                </div>
                                <Jobs />
                                <div className="ui_section_title">
                                    <h5>Jokes</h5>
                                </div>
                                <Jokes /> 
                            </div>        
                        </div>   
                        <div className="ui_right">        
                            <div className="ui_section">
                                <div className="ui_section_title">
                                    <h5>League of Legends Data</h5>
                                </div>
                                <League />
                            </div>
                        </div>
                        {/* <div className="ui_right">        
                            <div className="ui_section">
                                fsdafasdfsadfasdf
                            </div>
                        </div>
                        <div className="ui_right">        
                            <div className="ui_section">
                                fsdafasdfsadfasdf
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;