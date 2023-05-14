import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { SCREEN_HEIGHT, showFlashMessage, showYupFormValidationError } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { LoginSuccessfully } from '../../store/auth';

import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { request } from '../../utils/request';
import { useDispatch } from 'react-redux';


const formSchema = yup.object().shape({

  email: yup.string().email().required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const navigation=useNavigation();
  const dispatch = useDispatch();
  const { setValue, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(formSchema),
  });

  const _stateManager = (key, value = "") => {
    setValue(key, value);
  }

  const _signinHandler = async (data) => {
    console.log({ data })
   
    try {
      const res = await request("post","auth/login",data);
      console.log(res.data);
      dispatch(LoginSuccessfully(res.data.data))
    } catch (error) {
      console.log({error});
      showFlashMessage(error.response.data.message,"", "danger");
    }
  }
  useEffect(() => {
    // console.log({errors});
    showYupFormValidationError(errors)

  }, [errors])

  return (
    
    <View style={styles.container}>
      <ScrollView style={{width:"100%",}}>
      <View style={{height:SCREEN_HEIGHT*0.8, width:"100%", alignItems:"center", justifyContent:"center"}}>
      <Text style={styles.title}>Hello there , Welcome back</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#fff"
          onChangeText={text =>_stateManager("email", text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#fff"
          onChangeText={text => _stateManager("password", text)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(_signinHandler)}>
        <Text style={{fontWeight: 'bold',fontSize:18, color:"#000"}}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')}>
        <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
      </TouchableOpacity>
      </View>
      <View style={{  flex:1, justifyContent:"flex-end", paddingBottom:20, alignItems:"center"}}>
      <TouchableOpacity  onPress={()=>navigation.navigate('Signpage')}>
        <Text style={styles.forgotAndSignUpText}>
          Don't have account Yes?{' '}
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
            Sign up
          </Text>
        </Text>
      </TouchableOpacity>

      </View>
      </ScrollView>
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
