import VimeoPlayer from "@vimeo/player";
import LodashThrottle from "lodash.throttle";
console.log(VimeoPlayer);
console.log(LodashThrottle);

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

 player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {

    const message = evt.currentTarget;
    localStorage.setItem(`videoplayer-current-time`, message);

};

player.setCurrentTime().then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

