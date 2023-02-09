import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
// import Login from './components/Login/Login'
import axios from 'axios';
import BottomTabNavigation from './Navigtion/BottomTabNavigation';
import SplashScreen from 'react-native-splash-screen';

// import Signpage from './components/Signpage/Signpage'
// import { NavigationContainer,DarkTheme } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Welcome from './components/Welcome/Welcome'

// const Stack = createNativeStackNavigator();
// const ApiCall = async()=>{
// screen loader
// console.log("loader on")
// fetch('https://jsonplaceholder.typicode.com/todos/2')
// .then((res)=>{res.json()})
// console.log(resJson);
// const res2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
// const resJson2 = await res.json()
// console.log("loader off")

// loaderOff()

// const res = await axios({
//   url:'https://jsonplaceholder.typicode.com/todos/1',
//   method:"get",

// })
// const res2 = await axios({
//   url:'https://jsonplaceholder.typicode.com/todos/2',
//   method:"get",

// })
// const res3 = await axios({
//   url:'https://jsonplaceholder.typicode.com/todos/3',
//   method:"get",

// })

// console.log(res.data, res2.data, res3.data);

// console.log({res:res.data});

// console.log("loader off")

const App = () => {
  useEffect(() => {
    //   ApiCall()
    SplashScreen.hide();
  }, []);
  // return (
  //   // <Text>Api Call</Text>
  // )
  return (
    <View style={styles.wrapper}>
      <BottomTabNavigation />
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
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#121212',
    Color: '#fff',
  },
});
