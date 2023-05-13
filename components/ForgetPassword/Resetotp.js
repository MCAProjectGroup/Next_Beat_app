import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useState } from 'react';
import { View ,StyleSheet,Text,TouchableOpacity} from 'react-native'
import OtpInputs from 'react-native-otp-inputs';
import { request } from '../../utils/request';


const Resetotp = (props) => {
  const email = props.route.params.email || "";
  const [otp, setOtp] = useState("");
  const navigation = useNavigation();
  const _verifyOTP = async () => {
    try {
      const res = await request("put","auth/forget-password/check-otp-verify", {email,otp})
      // console.log(res.data);
      navigation.navigate("ResetPassword",{email,otp});
    } catch (error) {
      console.log(error.response.data);
    }
  }
  return (
    <View style={styles.container}>
    <View style={styles.textwrapper}>
      <Text style={styles.title}>Please Enter The Otp Sent To </Text>
      <Text style={styles.emailtitle}>pathakpuja0111@gmail.com</Text>
      </View>
      <View style={{height:100,backgroundColor:'#fff',width:'88%'}}>
      <OtpInputs
          handleChange={setOtp}
          numberOfInputs={4} placeholder={'X'}
          inputStyles={{fontSize:20,fontWeight:'bold',color:'#000',}}
          inputContainerStyles={{padding:10}}
        />
        </View>

      <TouchableOpacity style={styles.verifyBtn} onPress={_verifyOTP}>
            <Text style={{fontWeight: 'bold',fontSize:18}}>VERIFY</Text>
          </TouchableOpacity>
    
    </View>
  )
}

export default Resetotp

 const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'pink',
    },
    textwrapper:{
        alignItems:'center',
        // backgroundColor:'orange'

    },
    title:{
        fontSize:25,
        fontWeight:'600',
        color:'#fff'
    },
    emailtitle:{
        fontSize:25,
        fontWeight:'600',
        color:'#1dd761',
        padding:10

    },
    verifyBtn: {
        width: '80%',
        backgroundColor: '#1dd761',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
      },
})

