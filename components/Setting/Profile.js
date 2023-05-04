import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
        source={{uri:'https://res.cloudinary.com/jesnal/image/upload/v1677006063/musify/app_logo_xxskfq.png'}}
        style={styles.imagecover}
        />
        <View>
        <Text style={{color:'#fff',fontWeight:'bold' ,fontSize:15}}>Musify Basic</Text>
        <Text style={{color:'#fff',fontSize:13}}> Unlimited. Unlimited Downloads.Add Free Music </Text>
        <Text style={{color:'grey'}}> Valid till 17 Mar 2023 </Text>
      </View>
      
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',backgroundColor:'#343434',height:60,borderRadius:10,margin:5}}>
      <Text style={{color:'#fff',fontSize:15}}>Upgrade to Musify Premium</Text>
      <View style={{backgroundColor:'#1dd761',height:20,borderRadius:5,width:100,alignItems:'center'}}>
      <Text style={{color:'#fff',fontSize:13,}}>Upgrade Now</Text>
        
      </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginHorizontal: 18,
    backgroundColor: '#28282B',
    // height:150,
    marginTop:20
  },
  wrapper: {
    height: 100,
    width: '100%', 
    // marginTop: 20,
    alignItems:'center',
    flexDirection:'row',
    // justifyContent:'space-between'
    
  },
  imagecover:{
    height:40,
    width:40,
    borderRadius:20,
    resizeMode:'contain',
    marginLeft:10,
    marginRight:10
  }
});
