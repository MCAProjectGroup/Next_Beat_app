import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { showFlashMessage, showYupFormValidationError } from '../../utils';
import { request } from '../../utils/request';
import { useDispatch } from 'react-redux';
import { LoginSuccessfully } from '../../store/auth';

const formSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  email: yup.string().email().required("Email is Required"),
  password: yup.string().min(6).max(32).required("Password is Required"),
  cpassword: yup.string().min(6).max(32).required("CPassword is Required"),
  phone: yup.string().min(8).max(11).required("Phone Number is Required"),
});


const Signpage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { setValue, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(formSchema),
  });

  const _stateManager = (key, value = "") => {
    setValue(key, value);
  }

  const _signupHandler = async (data) => {
    console.log({ data })
    if(data.cpassword !== data.password) 
    return showFlashMessage("Passwords do not match","", "danger");
    try {
      const res = await request("post","auth/signup",data);
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
      <ScrollView>
        <View style={{ alignItems: 'center', flex: 1, width: "100%" }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }}>
            <Text style={[styles.title]}> Get Started </Text>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Name"
                placeholderTextColor="#fff"
                onChangeText={text => _stateManager("name", text)}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Email Address"
                placeholderTextColor="#fff"
                onChangeText={text => _stateManager("email", text)}
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

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                secureTextEntry
                placeholder="Confirm password"
                placeholderTextColor="#fff"
                onChangeText={text => _stateManager("cpassword", text)}

              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                secureTextEntry
                placeholder="Phone Number"
                placeholderTextColor="#fff"
                onChangeText={text => _stateManager("phone", text)}

              />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(_signupHandler)}>
              <Text style={{ fontWeight: 'bold', fontSize: 18,color:"#000" }}> SIGN UP </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.forgotAndSignUpText}>
              Already registered?{' '}
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                Sign In
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
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff',
    marginBottom: 60,
    marginLeft: 30,
    width: "100%"
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
