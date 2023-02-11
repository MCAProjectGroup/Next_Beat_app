import MCI from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

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
        name:"YourLibrary",
        path:"YourLibrary",
        Icon:({color})=><Icon name="library" size={25} color={color} />
    },
    {
        name:"Premium",
        path:"Premium",
        Icon:({color})=><MCI name="spotify" size={25} color={color} />
    },

]