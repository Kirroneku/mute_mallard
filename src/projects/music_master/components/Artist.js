import React from 'react';

const Artist = ({Artist}) => {
    const {images, name, followers, genres} = Artist;
    
    var genreWrapper = (<p>Genres: {genres.join(", ")}</p>);

    const artistImage = images[0].url;

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div>
            <hr />
            <img src = {artistImage} alt="artist" className="artistImage"/>
            <h1>{name}</h1>
            <p>{numberWithCommas(followers.total)} followers </p>
            {genreWrapper}
        </div>
    )
    
}   

export default Artist;