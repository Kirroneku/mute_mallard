import React, { Component } from 'react';

const TITLES = [
    'software engineer',
    'enthusastic learner',
    'gamer',
    'beginner artist',
    'team player',
    'food lover'
]

class Title extends Component {
    state = {
        titleIndex: 0,
        fadeIn: true,
    }

    componentDidMount() {
        // console.log('Title component has mounted');
        this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2000);

        this.animateTitles();
    }

    componentWillUnmount() {
        // console.log('Title component has unmounted');

        clearInterval( this.titleInterval );
        clearTimeout( this.timeout );
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex+1) % TITLES.length;

            this.setState({ 
                titleIndex: titleIndex,
                fadeIn: true
            });
            this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2000);

        }, 4000);
    }

    render() {
        const { fadeIn, titleIndex } = this.state;

        const title = TITLES[titleIndex];

        return(
            <p className={fadeIn ? 'title-fade-in': 'title-fade-out'}> I am a {title}</p>
        )
    }
}

export default Title;