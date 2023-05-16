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
import { StackActions, useNavigation } from '@react-navigation/native';
// import { ResetPasswordSuccessfully } from '../../store/auth';

import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { request } from '../../utils/request';
import { useDispatch } from 'react-redux';


const formSchema = yup.object().shape({

  password: yup.string().required("Password is Required"),
  cpassword: yup.string().required("Confirm Password is Required"),
});

const ResetPassword = (props) => {
  const navigation = useNavigation();
  const {email, otp} = props.route.params;
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
      const res = await request("put", "auth/reset-password", {email,otp,new_password:data.password});
      console.log(res.data);
      navigation.dispatch(StackActions.popToTop())
      // dispatch(ResetPasswordSuccessfully(res.data.data))
    } catch (error) {
      console.log({ error:error.response });
      showFlashMessage(error.response.data.message, "", "danger");
    }
  }
  useEffect(() => {
    // console.log({errors});
    showYupFormValidationError(errors)

  }, [errors])

  return (

    <View style={styles.container}>
      <ScrollView style={{ width: "100%", }}>
        <View style={{ height: SCREEN_HEIGHT * 0.8, width: "100%", alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.title}>Hello there , Reset Password</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="#fff"
              secureTextEntry

              onChangeText={text => _stateManager("password", text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              secureTextEntry
              placeholder="Confirm Password"
              placeholderTextColor="#fff"
              onChangeText={text => _stateManager("cpassword", text)}
            />
          </View>
          
          <TouchableOpacity style={styles.ResetPasswordBtn} onPress={handleSubmit(_signinHandler)}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#000" }}>Reset Password </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 20, alignItems: "center" }}>


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
  ResetPasswordBtn: {
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


export default ResetPassword;
