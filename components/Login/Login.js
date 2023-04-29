import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SCREEN_HEIGHT } from '../../utils';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation=useNavigation();
  return (
    
    <View style={styles.container}>
      <View style={{height:SCREEN_HEIGHT*0.8, width:"100%", alignItems:"center", justifyContent:"center"}}>
      <Text style={styles.title}>Hello there , Welcome back</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#fff"
          onChangeText={text => setState({email: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#fff"
          onChangeText={text => setState({password: text})}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={{fontWeight: 'bold',fontSize:18}}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')}>
        <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
      </TouchableOpacity>
      </View>
      <View style={{  flex:1, justifyContent:"flex-end", paddingBottom:20}}>
      <TouchableOpacity  onPress={()=>navigation.navigate('Signpage')}>
        <Text style={styles.forgotAndSignUpText}>
          Don't have account Yes?{' '}
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
            Sign up
          </Text>
        </Text>
      </TouchableOpacity>

      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff',
    marginBottom: 60,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#696969',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#fff',
  },
  forgotAndSignUpText: {
    color: '#fff',
    fontSize: 15,
    
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#1dd761',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});


export default Login;
