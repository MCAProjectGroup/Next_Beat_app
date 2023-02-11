import TrackPlayer from 'react-native-track-player';
import {Event} from 'react-native-track-player';

module.exports = async function () {
  try {
    TrackPlayer.addEventListener('remote-play', () => {
      TrackPlayer.play();
    });

    TrackPlayer.addEventListener('remote-pause', () => {
      TrackPlayer.pause();
    });

    TrackPlayer.addEventListener('remote-next', () => {
      TrackPlayer.skipToNext();
    });
    TrackPlayer.addEventListener(Event.RemoteLike, () => {
      // TrackPlayer.();
      console.log("Liked");
    });
    TrackPlayer.addEventListener('remote-previous', () => {
      TrackPlayer.skipToPrevious();
    });

    TrackPlayer.addEventListener('remote-stop', () => {
      TrackPlayer.destroy();
    });
  } catch (error) {}
  // TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  // TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

};

export const PlaybackService = async function() {

  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemoteStop, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemoteLike, () => console.log("Liked"));

  // ...

};