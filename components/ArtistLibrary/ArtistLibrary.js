import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react';

const ArtistLibrary = () => {
  return (
    // main components
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          source={{
            uri: 'https://i.scdn.co/image/ab6761610000e5eb16691117e2ba803946b203ba',
          }}
          style={styles.imageCover}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 50,
            fontWeight: '800',
            position: 'absolute',
            top: 205,
          }}>
          Mohit Chauhan
        </Text>
      </View>
      <View style={styles.bottomcontainer}>
        <Text style={{color: 'grey'}}>12,238,677 monthly listeners</Text>
        <View style={styles.iconcontainer}>
          <View style={styles.left_iconcontainer}>
          <TouchableOpacity>
            <Text style={{color: '#fff',borderRadius:3,borderWidth:1,borderColor:'#fff',fontSize:15,width:100,textAlign:'center',padding:2}}>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Feather
                  name="more-vertical"
                  size={25}
                  color="#fff"
                  style={{paddingLeft: 10}}
                />
              </TouchableOpacity>
          </View>
          <View style={styles.right_iconcontainer}>
          <TouchableOpacity>
            <Ionicons
                  name="play-circle"
                  size={50}
                  color="#1dd761"
                  style={{paddingLeft: 10}}
                />
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ArtistLibrary;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'purple',
    // paddingTop:10
  },
  imagecontainer: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
  imageCover: {
    height: 270,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 15,
  },
  bottomcontainer: {
    // paddingVertical: 10,
    paddingTop:10,
    paddingHorizontal: 15,
  },
  iconcontainer: {
    // paddingVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // padding:5,
    paddingTop:5
  },
  left_iconcontainer: {
    flexDirection:'row',
    // alignItems:'center'

  },
  right_iconcontainer: {},
});
