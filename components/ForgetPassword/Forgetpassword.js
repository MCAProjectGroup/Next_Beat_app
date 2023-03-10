import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Forgetpassword = () => {
  return (
    <View style={styles.container}>
        <View style={{marginBottom: 60,alignItems:'center'}}>
        <Text style={styles.title}>Forget Password?</Text>
        <Text style={{color: 'grey',marginTop:10,fontSize:18,alignItems:'center',marginHorizontal:20,textAlign:'center'}}>
          Enter the email address associated with your account
        </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#fff"
            onChangeText={text => setState({email: text})}
          />
        </View>

        <TouchableOpacity style={styles.forgetBtn}>
          <Text style={{fontWeight: 'bold',fontSize:18}}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    
  );
};

export default Forgetpassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#fff',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#696969',
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#fff',
  },
  forgetBtn: {
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
