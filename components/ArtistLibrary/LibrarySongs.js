import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

const LibrarySongs = ({songno,songname,followers}) => {
  return (
    // POPULAR SONGS
    <View style={styles.container}>
      {/* <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
        Popular
      </Text> */}
      <View style={styles.wrapper}>
        <View style={styles.left_wrapper}>
          <Text style={{color: '#fff', fontSize: 20, paddingRight: 5}}>{songno}</Text>
          <View style={styles.image_container}>
            <Image
              source={{
                uri: 'https://i.ytimg.com/vi/mt9xg0mmt28/maxresdefault.jpg',
              }}
              style={styles.imageCover}
            />
          </View>
          <View style={{flexDirection:'column',paddingLeft:10,alignItems:'center'}}>
          <Text style={{color: '#fff', fontSize: 18, paddingRight: 5}}>{songname}</Text>
          <Text style={{color: 'grey', fontSize: 15, paddingRight: 5}}>{followers}</Text>
          </View>
        </View>
        <View style={styles.right_wrapper}>
        <TouchableOpacity>
            <Feather
                  name="more-vertical"
                  size={25}
                  color="#fff"
                  style={{paddingLeft: 10}}
                />
              </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LibrarySongs;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 15,
    // backgroundColor:'pink'
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderRadius:5
  },
  image_container: {
    padding:5
  },
  left_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    resizeMode:'cover'
  },
  imageCover: {
    height: 45,
    width: 45,
    // borderRadius:5
  },
});
