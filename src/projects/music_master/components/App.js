import React, { Component } from 'react';
import Artist from './Artist';
import SongPreview from './SongPreview';
import Search from './Search';

var config = require('../config');

class App extends Component {
    state = { 
        artist: null,
        topTracks: []
    };

    searchArtist = (artistQuery) => {
        fetch(`${config.API_ADDRESS}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {
            if(json.artists.total > 0){
                const artist = json.artists.items[0]
                this.setState({artist});
                fetch(`${config.API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response => response.json())
                .then(json => {
                    if(json.tracks.length > 0){
                        this.setState({topTracks: json.tracks});
                    }
                });
            }
        });
    }

    render() {
        console.log('this.state', this.state);
        var SongList = this.state.topTracks;
        var artist = null;

        if(this.state.artist != null) artist=(<Artist Artist={this.state.artist}/>);

        return (
            <div>
                <h2> Music Master </h2>
                <Search searchArtist={this.searchArtist}/>
                {artist}
                <SongPreview SongList={SongList} />
            </div>

        )
    }
}

export default App;