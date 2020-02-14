import React, {Component} from 'react';

class SongPreview extends Component{
    state = {
        playing: false,
        audio: null,
        curUrl: "",
        volume: 0.5
    }

    playAudio = (previewUrl) => { 
        if(previewUrl == null) {
            console.log("No url for song");
            return;
        }
        const audio = new Audio(previewUrl)
        audio.volume = this.state.volume;
        console.log("Playing audio for " + previewUrl);

        if(!this.state.playing){
            audio.play();
            this.setState({audio, playing: true, curUrl: previewUrl})
        } else {
            if(this.state.curUrl != previewUrl){
                this.state.audio.pause();
                audio.play();
                this.setState({audio, playing: true, curUrl: previewUrl})
            } else {
                this.state.audio.pause();
                this.setState({playing: false})
            }
        }
    }

    trackIcon = (track) => {
        if(track == null) return <span>N/A</span>
        if(this.state.playing && this.state.curUrl == track){
            return <span>| |</span>;
        }
        return <span>&#9654;</span>;
    }

    updateVolume = () => {
        const volume = (100 - document.getElementById("myRange").value)/100;
        if(this.state.audio) this.state.audio.volume = volume;
        this.setState({volume});
    }

    componentWillUnmount() {
        if(this.state.playing){
            this.state.audio.pause();
            this.setState({playing: false})
        }
    }

    render() {
        const { SongList } = this.props;
        var audioSlider = null;
        if(SongList[0]) {
            audioSlider = (
                <div className="slidecontainer">
                    <h2>Volume</h2>
                    <p >{Math.floor(this.state.volume * 100)}%</p>
                    <input className = "slider" type = "range" id = "myRange"
                        min = "1" max ="100" onChange={()=> this.updateVolume()}/>
                </div>
            )
        }

        return(
            <div id = "songContainer">
                {audioSlider}
                {SongList.map(Song => {
                    const { name, album, preview_url } = Song;
                    const songImage = album.images[0].url;
                    // console.log(preview_url);
                    return(
                        <div className="songBlock" key={Song.external_ids.isrc} >
                            <img 
                                src={songImage} 
                                className="songImage" 
                                alt="song image"
                                onClick={() => this.playAudio(preview_url)}
                                />
                            <h3 className="songText">{name}</h3>
                            <p className="trackIcon" >{this.trackIcon(preview_url)}</p>

                        </div>
                    )
                })}
            </div>
           
            
        )
    }


}

export default SongPreview;