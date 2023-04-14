import VimeoPlayer from "@vimeo/player";
import LodashThrottle from "lodash.throttle";



const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

 player.on('timeupdate',  LodashThrottle(onPlay, 1000));
// const data = {};

function prDefault(evt) {
    evt.preventDefault();
}
 
// console.log(prDefault);

function onPlay(data) {
    localStorage.setItem(`videoplayer-current-time`, data.seconds);
};

const saveVideo = localStorage.getItem(`videoplayer-current-time`);

player.setCurrentTime(saveVideo).then(function (seconds) {
    // seconds = the actual time that the player seeked to
});
// .catch (function (error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

