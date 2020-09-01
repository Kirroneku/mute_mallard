// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route , browserHistory} from 'react-router';

// Project imports
import App from './components/App';
import { Jokes, GetTenJokes } from './components/Joke';
import MusicMaster from './projects/music_master';
import EvensOrOdds from './projects/evens-or-odds';
import Weather from './projects/weather_app'
import { Projects } from './components/Projects';
import League from './components/League';
import Resume from './components/Resume';

// Utility, wrapper + css
import {Wrapper, PageWrap} from './components/Wrapper';
import './index.css';

const browser = require("history").createBrowserHistory();

ReactDOM.render(
    <Router history={browser}>
        <Switch>
            <Route exact path='/' render={() => 
                <Wrapper><App/></Wrapper>}/>
            <Route path='/jokes' render={() => 
                <Wrapper highlight='/projects'>
                    <PageWrap>
                        <h3>Here's a joke!</h3>
                        <Jokes/>
                        <hr/>
                        <h3>Ten more jokes!</h3>
                        <GetTenJokes />
                    </PageWrap>
                </Wrapper>}/>
            <Route path='/projects' render={() => 
                <Wrapper highlight='/projects'>
                    <PageWrap>
                        <Projects />
                    </PageWrap>
                </Wrapper>
            }/>
            <Route path="/resume" render={() =>
                <Wrapper highlight='/resume'>
                    <PageWrap>
                        <Resume />
                    </PageWrap>
                </Wrapper>
            }/>
            <Route path='/music-master' render={() => 
                <Wrapper highlight='/projects'>
                    <PageWrap>
                        <MusicMaster />
                    </PageWrap>
                </Wrapper>
            }/>
            <Route path='/evens-or-odds' render={() => 
                <Wrapper highlight='/projects'>
                    <PageWrap>
                        <EvensOrOdds />
                    </PageWrap>
                </Wrapper>
            }/>
            <Route path='/league-rank' render={() => 
                <Wrapper highlight='/league-rank'>
                    <PageWrap>
                        <League />
                    </PageWrap>
                </Wrapper>
            }/>
            <Route path='/weather-react' render={() => 
                <Wrapper highlight='/projects'>
                    <PageWrap>
                        <Weather />
                    </PageWrap>
                </Wrapper>
            }/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
