import Player from '@vimeo/player';
import _ from 'lodash';
// import throttle from 'lodash.throttle';
// var throttle = require('lodash.throttle');
console.log(_.isEqual(2, 2));
const player = new Player('vimeo-player', {
  id: 236203659,
  width: 640,
});
console.log('hello');

player.on(
  'timeupdate',
  _.throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);
const stopTime = localStorage.getItem('videoplayer-current-time');
console.log(stopTime);
if (stopTime !== null) {
  player.setCurrentTime(stopTime).then(function (seconds) {
    // seconds = the actual time that the player seeked to
  });
}
