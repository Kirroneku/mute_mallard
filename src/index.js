import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route , browserHistory} from 'react-router';
import App from './components/App';
import { Jokes, GetTenJokes } from './components/Joke';
import Header from './components/Header';
import MusicMaster from './projects/music_master';
import EvensOrOdds from './projects/evens-or-odds';
import Weather from './projects/weather_app'
import Footer from './components/Footer';
import { Projects } from './components/Projects';
import League from './components/League';

import './index.css';

const browser = require("history").createBrowserHistory();

ReactDOM.render(
    <Router history={browser}>
        <Switch>
            <Route exact path='/' render={() => 
                <Header current="/"><App/><Footer/></Header>}/>
            <Route path='/jokes' render={() => 
                <Header current="/jokes">
                    <div className="page" >
                        <div className="page_middle">
                            <h3>Here's a joke!</h3>
                            <Jokes/>
                            <hr/>
                            <h3>Ten more jokes!</h3>
                            <GetTenJokes />
                        </div>
                    </div>
                    <Footer/>
                </Header>}/>
            <Route path='/projects' render={() => 
                <Header current="/projects">
                    <div className="page">
                        <div className="page_middle" >
                            <Projects />
                        </div>
                    </div>
                <Footer/></Header>}/>
            <Route path='/music-master' render={() => 
                <Header current="/projects">
                    <div className="page">
                        <div className="page_middle">
                            <MusicMaster />
                        </div>
                    </div>
                <Footer/></Header>}/>
            <Route path='/evens-or-odds' render={() => 
                <Header current="/projects">
                    <div className="page">
                        <div className="page_middle">
                            <EvensOrOdds />
                        </ div>
                    </div>
            <Footer/></Header>}/>
            <Route path='/league-rank' render={() =>
            <Header current="/league-rank">
                <div className="page">      
                    <div className="page_middle">
                        <League />
                    </div>
                </div>
                <Footer/></Header>
            } />
            <Route path='/weather-react' render={() =>
                <Header current="/projects">
                    <div className="page">      
                        <div className="page_middle">
                            <Weather />
                        </div>
                    </div>
                <Footer/></Header>
            }/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
