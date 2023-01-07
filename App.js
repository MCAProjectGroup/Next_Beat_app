import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'

// import Signpage from './components/Signpage/Signpage'
// import { NavigationContainer,DarkTheme } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Welcome from './components/Welcome/Welcome'


// const Stack = createNativeStackNavigator();
const App = () => {

  return (
        <View style={styles.wrapper}>
          
          <Navbar/>
        </View>
    
    // <NavigationContainer theme={DarkTheme}>
    //   <Stack.Navigator screenOptions={{headerShown:true}}>
    //     <Stack.Screen name="Welcome" options={{
    //       headerShown:false
    //     }} component={Welcome} />
    //     <Stack.Screen name="Signpage"
    //     options={{
    //       title:"Create New Account"
    //     }}
    //     component={Signpage} />
    //     <Stack.Screen name="Login"
    //     options={{
    //       title:"login your account"
    //     }}
    //     component={Login} />
        
    //   </Stack.Navigator>
    // </NavigationContainer>
  
  )}

export default App

const styles = StyleSheet.create({
  wrapper:{ 
    flex:1, 
      backgroundColor:"#121212",
      // alignItems:'center',
      // justifyContent:'center',
      Color:"#fff",
  }
})