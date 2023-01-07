import { StyleSheet, Text, View } from 'react-native'
import MCI from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import Search from '../../Screens/Search';
import Library from '../../Screens/Library';
import Premium from '../../Screens/Premium';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header/Header';


const Tab = createBottomTabNavigator();

const Navbar = () => {
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
        
        tabBarActiveTintColor:"#fff"
      }}
      >
      <Tab.Screen name="Home" component={Home}
      options={{ 
        header:()=>(
          <View style={{height:60, backgroundColor:"red"}}>
              <Header />
          </View>
        ),
        
        tabBarIcon:() =>(
          <MCI name="home" size={25} color="#fff" />
            
        )
      }}
      />
      <Tab.Screen name="Search" component={Search}
       options={{ headerShown:false,
        tabBarIcon:() =>(
          <AntDesign name="search1" size={25} color="grey" />
        )
      }}
      />
      <Tab.Screen name=" Your Library" component={Library}
       options={{ headerShown:false,
        tabBarIcon:() =>(
          <Icon name="library" size={25} color="grey" />
        )
      }} 
      />
      <Tab.Screen name="Premium" component={Premium}
       options={{ headerShown:false,
        tabBarIcon:() =>( 
            <MCI name="spotify" size={25} color="grey" />
        )
      }}
       />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navbar

const styles = StyleSheet.create({
  // container:{
  //   flex:1,
  //   borderStartColor:"fff",
  //   alignItems:'center',
  //   justifyContent:'center',
    
  // }
})