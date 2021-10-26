import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(function(data) {
   localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));

const savedCurrentTime = localStorage.getItem("videoplayer-current-time");
if (savedCurrentTime) {
        player.setCurrentTime(savedCurrentTime);
    }