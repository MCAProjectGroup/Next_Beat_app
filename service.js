import TrackPlayer, { AppKilledPlaybackBehavior, Capability } from 'react-native-track-player';
import {Event} from 'react-native-track-player';
export const setupPlayerManager = async()=>{
  // let isSetup = false;
console.log("hello");
  // try {
    

  //   await TrackPlayer.getCurrentTrack();
  //   isSetup = true;
  // }
  // catch {
  // console.log("setup run");

  //   await TrackPlayer.setupPlayer();
  //   await TrackPlayer.updateOptions({
  //     android: {
  //       appKilledPlaybackBehavior:
  //         AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
  //     },
  //     capabilities: [
  //       Capability.Play,
  //       Capability.Pause,
  //       Capability.SkipToNext,
  //       Capability.SkipToPrevious,
  //       Capability.SeekTo,
  //     ],
  //     compactCapabilities: [
  //       Capability.Play,
  //       Capability.Pause,
  //       Capability.SkipToNext,
  //     ],
  //     progressUpdateEventInterval: 2,
  //   });

  //   isSetup = true;
  // }
  // finally {
  //   return isSetup;
  // }
}
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
    // TrackPlayer.addEventListener(Event.RemoteLike, () => {
    //   // TrackPlayer.();
    //   console.log("Liked");
    // });
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