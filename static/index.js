import MCI from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer, { RepeatMode, State } from 'react-native-track-player';

export const TabBarOptions = [
    {
        name:"Home",
        path:"StackNavigation",
        Icon:({color})=><MCI name="home" size={25} color={color} />
    },
    {
        name:"Search",
        path:"Search",
        Icon:({color})=><AntDesign name="search1" size={25} color={color} />
    },
    {
        name:"Your Library",
        path:"YourLibrary",
        Icon:({color})=><Icon name="library" size={25} color={color} />
    },
    {
        name:"My Account",
        path:"Setting",
        Icon:({color})=><Icon name="person-sharp" size={25} color={color} />
    },

]

export const SongManagerOptions =  [
    {
        icon:'shuffle',
        onPress:()=>{}
    },
    {
        icon:'skip-previous',
        onPress:()=> TrackPlayer.skipToPrevious()
    },
    {
        icon:'pause-circle',
        onPress:async()=>{
            if(await TrackPlayer.getState() == State.Playing) {
                // setIsPlaying(false)
                TrackPlayer.pause();
              }
              else {
                TrackPlayer.play();
                // setIsPlaying(true)
        
              }
        }
    },
    {
        icon:'skip-next',
        onPress:()=>TrackPlayer.skipToNext()
    },
    {
        icon:'repeat',
        onPress:()=>TrackPlayer.setRepeatMode(RepeatMode.Queue)
    }
]