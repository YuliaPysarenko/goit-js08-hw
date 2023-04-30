import VimeoPlayer from "@vimeo/player";
import LodashThrottle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on('timeupdate', LodashThrottle(onPlay, 1000));

 saveVideo = localStorage.getItem(`videoplayer-current-time`);

function onPlay(data) {
    localStorage.setItem(`videoplayer-current-time`, data.seconds);
};

   if (saveVideo) {
          player.setCurrentTime(saveVideo).then(function (seconds) {
               console.log(saveVideo)
                // seconds = the actual time that the player seeked to
            }).catch (function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
            
};
 