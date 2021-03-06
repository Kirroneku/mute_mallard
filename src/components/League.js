import React, { Component } from 'react';
import LEAGUE_RANKS from '../data/leagueRank';
import RIOT_REGIONS from '../data/riotRegions';
const mode_data = require('../data/queues.json');
const API_URL = "https://us-central1-pivotal-surfer-261220.cloudfunctions.net/riot-wrapper";

class League extends Component {
    state = {
        region: 'na1',
        soloRank: null,
        flexRank: null,
        inGame: null,
        currentSummoner: "Import",
        loading: true,
        error: false
    }

    componentDidMount() {
        this.getLeagueRank();
        this.getInGame();
    }

    getLeagueRank = async () => {
        // console.log("finding league")
        try {
            this.setState({"loading": true});
            let res = await fetch(`${API_URL}/summoner-info?summoner=${this.state.currentSummoner}&region=${this.state.region}`);

            let json = await res.json();
            var soloRank = {
                rank: null,
                tier: 'UNRANKED',
                lp: null,
                wr: null
            };
            var flexRank = {
                rank: null,
                tier: 'UNRANKED',
                lp: null,
                wr: null
            };

            for (const i in json) {
                switch(json[i].queueType){
                    case 'RANKED_SOLO_5x5':
                        soloRank = {
                            tier: json[i].tier, 
                            rank: json[i].rank,
                            lp: json[i].leaguePoints + 'LP'
                        };
                        break;
                    case 'RANKED_FLEX_SR':
                        flexRank = {
                            tier: json[i].tier, 
                            rank: json[i].rank,
                            lp: json[i].leaguePoints + 'LP'
                        };
                        break;
                    default:
                        console.log("undefined queue type");
                }
            }
            this.setState({loading: false, soloRank, flexRank});
        } catch (e) {
            this.setState({error: true, loading: false, inGame: {gameType: -1}})
        }
        
        return ;
    }

    getInGame = async () => {
        try{
            let res = await fetch(`${API_URL}/summoner-ingame?summoner=${this.state.currentSummoner}&region=${this.state.region}`);
            let json = await res.json();
            // console.log(json)
            //     console.log(json.gameQueueConfigId);
            if(json.status != undefined) {
                return;
            }
    
            for(const i in mode_data) {
                // console.log(mode_data[i].queueId );
                
                if(mode_data[i].queueId === json.gameQueueConfigId) {
                    // console.log("Matched" + json.gameQueueConfigId)
                    this.setState({inGame: {
                        gameType: mode_data[i].description,
                    }})
                    // return;
                }
            }
        } catch (e) {
            console.log(e);
        }
        return ;
    }

    handleKeyPress = (event) => {
        if(event.key == 'Enter') {
            this.findSummoner();
        }
    }

    updateSummoner = (event) => {
        // console.log('event.target.value', event.target.value);
        this.setState({ currentSummoner: event.target.value });
        
    }

    findSummoner = () => {
        this.getInGame();
        this.getLeagueRank();
        this.setState({error: false})
    }

    updateRegion = (event) => {
        console.log('event.target.value', event.target.value);
        this.setState({ region: event.target.value });
    }

    render() {
        var soloRank = null;
        var soloRankImg = null;

        var flexRank = null;
        var flexRankImg = null

        var info = null;

        var inGame = 
            (<div style={{textAlign: 'center'}}>
                <p style={{fontSize: '18px', width: '170px' , margin: "0 auto"}}>Not in game</p>
            </div>);

        // console.log(this.state);
        if(this.state.inGame != null) {
            if(this.state.inGame.gameType === -1){
                inGame = (
                    <div style={{textAlign: 'center'}}>
                        <h3>Summoner not in game</h3>
                    </div>
                )
            } else {
                inGame = 
                    (<div style={{textAlign: 'center'}}>
                        <p style={{fontSize: '18px', width: '170px' , margin: "0 auto"}}>Currently in a {this.state.inGame.gameType} game</p>
                    </div>);
            }
        }


        if(this.state.soloRank){        
            for ( const rank in LEAGUE_RANKS ) {
                // console.log(rank)
                if( LEAGUE_RANKS[rank].title == this.state.soloRank.tier ) {
                    soloRankImg = LEAGUE_RANKS[rank].image;
                }
            }

            soloRank = 
                (<div>
                    <hr />
                    Solo Queue: 
                    <br/>
                    <img src={soloRankImg} alt="rank image" style={{width: '100px'}} />
                    <br/>
                    <p>
                        {this.state.soloRank.tier} {this.state.soloRank.rank} {this.state.soloRank.lp} 
                    </p>
                </div>);
        }

        if(this.state.flexRank){        
            for ( const rank in LEAGUE_RANKS ) {
                // console.log(rank)
                if( LEAGUE_RANKS[rank].title == this.state.flexRank.tier ) {
                    flexRankImg = LEAGUE_RANKS[rank].image;
                }
            }

            flexRank = 
                (<div>
                    <hr />
                    Flex Queue: 
                    <br/>
                    <img src={flexRankImg} alt="rank image" style={{width: '100px'}} />
                    <br/>
                    <p>
                        {this.state.flexRank.tier} {this.state.flexRank.rank} {this.state.flexRank.lp}
                    </p>
                </div>);
        }
        
        if( this.state.error ) {
            info = <center><h5>Error, try again.</h5></center>
        }else if( this.state.loading ){
            info =  <center><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></center>
            
        } else {
            info = <div>
                <h3>Summoner: {this.state.currentSummoner}</h3>
                {soloRank}
                {flexRank}
                <hr />
                {inGame} 
            </div>

        }

        let regionsSelect = 
            <select onChange={this.updateRegion}>
               {Object.entries(RIOT_REGIONS).map(([key, val]) => {
                return <option value={val} key={key}>{key}</option>
            })}
            </select>
            

        return (
            <div>
                <div className="ui_section_title">
                    <h5>League of Legends Data</h5>
                </div>                
                <h5>Search Summoner {regionsSelect}</h5>
                <input 
                    onKeyPress={this.handleKeyPress}
                    onChange={this.updateSummoner}
                    placeholder="Import (My Account)"
                    style={{"width":"200px", "marginBottom": "10px"}}
                    disabled={this.state.loading}
                />
                <button onClick={() => this.findSummoner()} disabled={this.state.loading}>Check</button>
                {info}

            </div>
        )
    }
}

export default League;