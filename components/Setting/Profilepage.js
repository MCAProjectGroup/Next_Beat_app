import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Profilepage = () => {
    const profile = {
        mobile: '+919903731198',
        name: 'Pooja Pathak',
        email: 'pathak.pooja@example.com',
        avatar: 'https://example.com/jane-doe-avatar.pnghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yPAXPAo9-sT7PrXI4184Ygmb9qoL2akVpA&usqp=CAU',
      }
      const [mobile, setMobile] = useState(profile.mobile);
      const [name, setName] = useState(profile.name);
      const [email, setEmail] = useState(profile.email);
      const [avatar, setAvatar] = useState(profile.avatar);
    
      const handleSubmit = () => {
    
      }
    
      return (
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yPAXPAo9-sT7PrXI4184Ygmb9qoL2akVpA&usqp=CAU'}}
            />
            <TouchableOpacity style={styles.changeAvatarButton} onPress={() => {/* open image picker */}}>
              <Text style={styles.changeAvatarButtonText}>Change Avatar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile Number"
              value={mobile}
              onChangeText={setMobile}
            />
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              value={name}
              onChangeText={setName}
            />
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email Address"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit({mobile, name, email, avatar})}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
    
        </View>
      );
    };
  

export default Profilepage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      width: '80%',
    },
    label: {
      marginTop: 20,
      color:'grey',
      fontSize:15,
    //   marginLeft:7
    },
    input: {
      borderColor: 'grey',
      borderBottomWidth:1,
      borderRadius: 5,
    //   padding: 10,
      fontSize: 18,
      color:'#fff'
    },
    button: {
      marginTop: 20,
      backgroundColor: '#1dd761',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      textAlign:'center'
    },
    avatarContainer: {
      marginTop: 20,
      alignItems: 'center',
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      resizeMode:'contain'
    },
    changeAvatarButton: {
      marginTop: 10,
    },
    changeAvatarButtonText: {
      color: '#1dd761',
      fontSize: 18,
    },
  });