import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from './Button';
import MCI from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const SocialLogin = [
  {
    title:"Phone",
    icon:"mobile"
    
  },
  {
    title:"Facebook",
    icon:"facebook"
    
  },
  {
    title:"Google",
    icon:"google"
  }
]

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
       <View style={{flex:1}}>
        <View style={styles.containertitle}>
          <MCI name="music" size={50} color="#fff" />
          <Text style={styles.title}>Millions of Songs. </Text>
          <Text style={styles.title}>Free on Musify. </Text>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity onPress={()=> navigation.navigate("Signpage")} style={styles.loginwrapper}>
            <Text style={styles.signupButton}>Sign Up Free</Text>
          </TouchableOpacity>

          
          {
            SocialLogin.map((item, index)=>(
              <Button
                key={item+"SocialLogin"+index}
                
                title={"Continue With "+item.title}
                icon={<MCI name={item.icon} size={24} color="#fff" />}
              />
            ))
          }
         

          <TouchableOpacity style={styles.signwrapper} onPress={()=> navigation.navigate("Login")}>
            <Text style={styles.loginButton}>Log in</Text>
          </TouchableOpacity> 
        </View>
      </View> 
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
    lineHeight: 50,
    // flex:1
  },
  containerButton: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30,
  },
  containertitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginwrapper: {
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 5,
    borderColor: '#65d46e',
    borderWidth: 1,
    backgroundColor: '#65d46e',
  },
  signupButton: {
    color: '#171926',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 20,
  },
  signwrapper: {
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 5,
    borderColor: '#65d46e',
    borderWidth: 0,
  },
  loginButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 20,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#171926',
    alignItems:'center',
    justifyContent:'center'
       
  },
});
