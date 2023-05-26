// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Help = () => {
//   return (
//     <View style={styles.container}>
//       {/* <Text style={{color:'#fff',fontSize:15}}>FAQ</Text> */}
//       <Text style={{color:'#fff',fontSize:15,marginTop:30}}>Contact Us</Text>
//       {/* <Text style={{color:'#fff',fontSize:15,marginTop:30}}>Rate App</Text>
//       <Text style={{color:'#fff',fontSize:15,marginTop:30}}>Share App</Text>
//       <Text style={{color:'#fff',fontSize:15,marginTop:30}}>Terms of Use</Text>
//       <Text style={{color:'#fff',fontSize:15,marginTop:30}}>Privacy Policy</Text> */}
//     </View>
//   )
// }

// export default Help

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     marginHorizontal:20,
//     marginTop:20
//   }
// })



// -------------------NEW CODE---------------------------

import { TextInput, StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { showFlashMessage, showYupFormValidationError } from '../../utils';
import { request } from '../../utils/request';

const schema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup.string().required("Email is Required"),
    message: yup.string().required("Message is Required"),
    extra: yup.string()
});


const Form = () => {
    const { setValue, handleSubmit, formState: { errors }, reset } = useForm({
        resolver :yupResolver(schema)
    })
     
    
      const _stateManager = (key, value = "") => {
        setValue(key, value);
      }
      useEffect(() => {
        // console.log({errors});
        showYupFormValidationError(errors)
    
      }, [errors])
    
    const onSubmit = async(data)=>{
        try {
            res = await request("post","user/main/contact", data)
            showFlashMessage(res.data.message, "", "success")
        } catch (error) {
            console.log(error);
            showFlashMessage(error.response.data.message, "", "danger")
            
        }
    }
    return (
        <>
        <ScrollView>
            <View style={styles.container}>
                <View style={[styles.wrapper, styles.marginBottom]}>
                    <View style={styles.namediv}>
                        <View style={styles.wrapper}>
                            <Text style={styles.text}>Name</Text>
                            {/* <Icon name='star-of-life' style={styles.small_icon}></Icon> */}
                        </View>
                        <View style={styles.searchinput}>
                            <TextInput placeholderTextColor={"grey"} onChangeText={(e)=> _stateManager("name",e)} placeholder="Name"  style={styles.input} />
                        </View>
                    </View>
                    {/* <View style={styles.namediv}>
                        <View style={styles.wrapper}>
                            <Text style={styles.text}>Last Name</Text>
                          
                        </View>
                        <View style={styles.searchinput}>
                            <TextInput placeholderTextColor={"grey"} style={styles.input} />
                        </View>
                    </View> */}
                </View>
                <View style={styles.marginBottom}>
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>Email</Text>
                        {/* <Icon name='star-of-life' style={styles.small_icon}></Icon> */}
                    </View>
                    <View style={styles.searchinput}>
                        <TextInput placeholderTextColor={"grey"}  onChangeText={(e)=> _stateManager("email", e)} placeholder="Email"  style={styles.input} />
                    </View>
                </View>
                <View style={styles.marginBottom}>
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>Message</Text>
                        {/* <Icon name='star-of-life' style={styles.small_icon}></Icon> */}
                    </View>
                    <View style={styles.searchinput}>
                        <TextInput placeholderTextColor={"grey"}  onChangeText={(e)=> _stateManager("message",e)} placeholder="Message" style={styles.input} />
                    </View>
                </View>
                <View style={styles.marginBottom}>
                    <Text style={styles.text}>Aditional Details</Text>
                    <View style={styles.textarea}>
                        <TextInput placeholderTextColor={"grey"} style={styles.input} placeholder="Aditional Optional" onChangeText={(e)=> _stateManager("extra",e)} multiline={true} />
                    </View>
                </View>
                <View style={styles.marginBottom}>
                    {/* <TouchableOpacity style={{ padding: 10}}> */}
                        {/* <Button style={{backgroundColor:"pink"}}
                            title='Send Message'
                            onPress={() => {
                                console.log("hi there!");
                                Alert.alert("Button is Pressed!!!");
                            }}
                        /> */}
                        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(onSubmit)}>
                    <Text style={{fontWeight: 'bold',fontSize:18,color:"black"}}> Send Message </Text>
                      </TouchableOpacity>
                    {/* </TouchableOpacity> */}
                </View>
                <View style={{ backgroundColor: 'grey', height: 2, marginBottom: 20 }}></View>
                <Text style={[styles.bold_text, styles.marginBottom]}>Contact Information</Text>
                <View style={[styles.wrapper, styles.marginBottom]}>
                    <Icon1 name='location-pin' style={styles.icon}></Icon1>
                    <View >
                        <Text style={styles.text}>Hooghly</Text>
                        <Text style={styles.text}>Kundughat,Chandannagar</Text>
                    </View>
                </View>
                <View style={[styles.text, styles.marginBottom]}>
                    <View style={styles.wrapper}>
                        <Icon2 name='phone' style={styles.icon}></Icon2>
                        <Text style={styles.text}>+91 6748512395</Text>
                    </View>
                </View>
                <View style={[styles.text, styles.marginBottom]}>
                    <View style={styles.wrapper}>
                        <Icon3 name='mail' style={styles.icon}></Icon3>
                        <Text style={styles.text}>abcxyz@gmail.com</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
        </>
    )
}
export default Form;
const styles = StyleSheet.create({
    container: {
        padding: 25,
        height: '100%',
        // backgroundColor:"red"
    },
    wrapper: {
        flexDirection: 'row',
        marginBottom: 2

    },
    text: {
        color: "#fff",
        fontSize: 20,
        borderRadius:1
        
    },
    bold_text: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold'
    },
    searchinput: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 5,
        borderWidth:1,
        borderColor:"grey",
        width: '100%'
    },
    input: {
        width: '100%',
        paddingLeft: 5,
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
        // opacity: 1,
        // borderWidth:1,
        borderColor:"grey",
    },
    namediv: {
        width: '100%',
        paddingRight: 15,
        // paddingTop: 2

    },
    marginBottom: {
        marginBottom: 22,
        // backgroundColor:"red",
        color:"grey"
    },
    textarea: {
        height: 150,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 5,
        width: '100%',
        borderWidth:1,
        borderColor:"grey",
    },
    icon: {
        fontSize: 35,
        color: "#fff",
        marginRight: 20

    },
    // small_icon: {
    //     fontSize: 13,
    //     marginLeft: 15
    // },
    loginBtn: {
      width: '100%',
      backgroundColor: '#1dd761',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
      color:"#fff"
    },

})