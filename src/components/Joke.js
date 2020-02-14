import React, { Component } from 'react';

class Jokes extends Component {
    state = { joke: {} };

    componentDidMount() {
        this.newJoke();
    }

    newJoke() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke: json }));
    }

    render(){
        return(
        <div >
            <p>{this.state.joke.setup}</p>
            <div style={{ border: "2px solid #73AD21", padding: "3px"}}>
                <em onClick={() => this.newJoke()}>{this.state.joke.punchline}</em>
            </div>
        </div>
        )
    }
}

class GetTenJokes extends Component {
    state = { jokes: []};

    componentDidMount() {
        this.getTen();
    }

    getTen() {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes: json}));
    }

    render(){
        return(
        <div>
            <button onClick={() => this.getTen()}> More jokes! </button>
            <hr />
            {this.state.jokes.map((JOKE) => {
                return(
                    <div key={JOKE.id}>
                        <p>{JOKE.setup}</p>
                        <em>{JOKE.punchline}</em>
                        <hr/>
                    </div>
                );
            })}
        </div>);
    }
}

export {Jokes, GetTenJokes};