import evenorodd from '../assets/eoLogo.png';
import music_master from '../assets/mmLogo.png';
import ppap from '../assets/ppap.png';
import mallardLogo from '../assets/websiteLogo.jpg';

const PROJECTS = [
    {
        id: 1,
        type: 'inSite',
        title: 'Evens or Odds',
        description:    `A guessing game to guess if the next card drawn has an even or odd value. 
                        Keeps track of scores and has a constant record. Made using react-redux `,
        link: '/evens-or-odds',
        // image: evenorodd,
        Highlighted: true
    },   {
        id: 2,
        type: 'inSite',
        title: 'Music Master',
        description: `Using the spotify api, searches for an artist's top 10 listened songs and lists
        them to allow the user to listen to a 30 second preview.
        `,
        link: '/music-master',
        // image: music_master,
        Highlighted: true
    }, 
    {
        id: 3,
        title: 'Pitch Perfect: Accurately Practice',
        description: 'An Android app that helps users develop perfect pitch by allowing them to sing and practice in different modes.',
        link: 'https://github.com/alexlai97/Pitch-Perfectly-Accurately-Practice',
        image: ppap,
        Highlighted: true
    },  
    {
        id: 4,
        type: 'inSite',
        title: 'Mute Mallard',
        description: 'The website you are currently on! Made with react.',
        link: '/',
        image: mallardLogo,
        Highlighted: false
    },      
    {
        id: 10,
        title: 'Travel Buddy',
        description: '(Work in Progress!) A website built to help people record and share their travel adventures around the world.',
        link: 'https://kirroneku.github.io/travelbuddy/',
        Highlighted: true
    },
    {
        id: 5,
        type: 'inSite',
        title: 'Jokes',
        description: `Using a joke api, fetches a bunch of jokes for the user.`,
        link: '/jokes',
        image: null,
        Highlighted: false
    },
    {
        id: 6,
        type: 'inSite',
        title: 'Weather',
        description: `fetches weather, need to be https://mutemallard.ca`,
        link: '/weather-react',
        image: null,
        Highlighted: false
    }
];


export default PROJECTS;