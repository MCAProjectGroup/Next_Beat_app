import TrackPlayer, { Event } from 'react-native-track-player';

export const PlaybackService = async function() {
    // await TrackPlayer.setupPlayer()

    TrackPlayer.addEventListener(Event.RemotePlay, async() => await TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause, async() => await TrackPlayer.pause());
    TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, async() => await TrackPlayer.getDuration());

    // ...

};