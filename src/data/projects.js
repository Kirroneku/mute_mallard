import evenorodd from '../assets/eoLogo.png';
import music_master from '../assets/mmLogo.png';
import ppap from '../assets/ppap.png';
import mallardLogo from '../assets/websiteLogo.png';

const PROJECTS = [
    {
        id: 2,
        type: 'inSite',
        title: 'Evens or Odds',
        description:    `A guessing game to guess if the next card drawn has an even or odd value. 
                        Keeps track of scores and has a constant record. Made using react-redux `,
        link: '/evens-or-odds',
        image: evenorodd,
        Highlighted: true
    },   {
        id: 3,
        type: 'inSite',
        title: 'Music Master',
        description: `Using the spotify api, searches for an artist's top 10 listened songs and lists
        them to allow the user to listen to a 30 second preview.
        `,
        link: '/music-master',
        image: music_master,
        Highlighted: true
    }, 
    {
        id: 1,
        title: 'Pitch Perfect: Accurately Practice',
        description: 'An Android app that helps users develop perfect pitch by allowing them to sing and practice in different modes.',
        link: 'https://github.com/alexlai97/Pitch-Perfectly-Accurately-Practice',
        image: ppap,
        Highlighted: true
    },  
    {
        id: 4,
        title: 'Mute Mallard',
        description: 'The website you are currently on! Made with react native.',
        link: 'https://mutemallard.ca',
        image: mallardLogo,
        Highlighted: false
    },  
];


export default PROJECTS;