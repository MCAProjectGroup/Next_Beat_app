import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const Signpage = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center',flex:1, width:"100%"}}>
        <View style={{flex:1, justifyContent:"center", alignItems:"center",width:"100%"}}>
      <Text style={[styles.title]}> Get Started </Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Name"
              placeholderTextColor="#fff"
              onChangeText={text => setState({email: text})}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email Address"
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

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              secureTextEntry
              placeholder="Confirm password"
              placeholderTextColor="#fff"
              onChangeText={text => setState({password: text})}
            />
          </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={{fontWeight: 'bold',fontSize:18}}> SIGN UP </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{marginBottom:20}} onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.forgotAndSignUpText}>
            Already registered?{' '}
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              Sign In
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
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff',
    marginBottom: 60,
    marginLeft: 30,
    width:"100%"
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

export default Signpage;
