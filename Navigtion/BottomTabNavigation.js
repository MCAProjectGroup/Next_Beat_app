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
import { TabBarOptions } from '../static';
import BottomTabDesign from './BottomTabDesign';
import Setting from '../components/Setting/Setting';
// import Header from '../Header/Header';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
      <NavigationContainer theme={{
        ...DarkTheme,
        colors:{
          background:"#171926"
        }
        }}>
      <Tab.Navigator  initialRouteName='Home'
      screenOptions={{
        tabBarStyle:{
        
          
          
        },
        

        tabBarInactiveTintColor:"grey",
        tabBarActiveTintColor:"#fff"
      }}
      tabBar={(props)=>(
       <BottomTabDesign {...props} />
      )}
      >
      <Tab.Screen name="StackNavigation" component={StackNavigation}
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
      <Tab.Screen name="YourLibrary" component={Library}
       options={{ headerShown:false,
        tabBarIcon:({color}) =>(
          <Icon name="library" size={25} color={color} />
        )
      }} 
      />
      <Tab.Screen name="Setting" component={Setting}
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