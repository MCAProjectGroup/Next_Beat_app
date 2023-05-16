import TrackPlayer, { AppKilledPlaybackBehavior, Capability } from "react-native-track-player";

export const setupPlayerManager = async () => {
  let isSetup = false;
  console.log('hello');
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    console.log('setup run');

    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },

      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
        // Capability.Stop,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
        // Capability.Stop,
      ],
      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
        // Capability.Stop,
      ],
      alwaysPauseOnInterruption:true,
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  } finally {
    return isSetup;
  }
};


export const TrackPlayerAddAndPlay = async(data) => {
  try {
    
    await TrackPlayer.removeUpcomingTracks();
    await TrackPlayer.add(data)
    await TrackPlayer.skipToNext();
    await TrackPlayer.play()
    
  } catch (error) {
    console.log({error})
  }
}