import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onTimeupdate, 3000));
function onTimeupdate(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
  console.log(evt.seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}
