import { StyleSheet, Text, View } from 'react-native'
import MCI from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Library from '../Screens/Library';
import Premium from '../Screens/Premium';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header/Header';
import StackNavigation from './StackNavigation';
// import Header from '../Header/Header';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
      <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator  initialRouteName='Home'
      screenOptions={{
        tabBarStyle:{
          height:65,
          paddingTop:10,
          backgroundColor:"#040404",
          borderTopWidth:0,
          marginBottom:5
          
        },
        tabBarInactiveTintColor:"grey",
        tabBarActiveTintColor:"#fff"
      }}
      >
      <Tab.Screen name="Home" component={StackNavigation}
      options={{ 
        // header:()=>(
         
        //   <View style={{height:60, backgroundColor:"red"}}>
        //       <Header />
        //   </View>
        // ),
       
        headerShown:false,
        
        tabBarIcon:({color, focused,size}) =>(
          <MCI name="home" size={25} color={color} />
            
        )
      }}
      />
      <Tab.Screen name="Search" component={Search}
       options={{ headerShown:false,
        tabBarIcon:({color}) =>(
          <AntDesign name="search1" size={25} color={color} />
        )
      }}
      />
      <Tab.Screen name=" Your Library" component={Library}
       options={{ headerShown:false,
        tabBarIcon:({color}) =>(
          <Icon name="library" size={25} color={color} />
        )
      }} 
      />
      <Tab.Screen name="Premium" component={Premium}
       options={{ headerShown:false,
        tabBarIcon:({color}) =>( 
            <MCI name="spotify" size={25} color={color} />
        )
      }}
       />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({
  // container:{
  //   flex:1,
  //   borderStartColor:"fff",
  //   alignItems:'center',
  //   justifyContent:'center',
    
  // }
})