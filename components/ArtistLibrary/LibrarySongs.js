import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import { TrackPlayerAddAndPlay } from '../../utils/player';

const LibrarySongs = ({songno,songname,followers, ...rest}) => {
  return (
    // POPULAR SONGS
    <TouchableOpacity style={styles.container} onPress={()=> TrackPlayerAddAndPlay(  {
      id: rest._id,
      url: rest.live_song,
      title: rest.title,
      artist: rest.artists_details.map(rest => rest.name).join(", "),
      artwork: rest.live_image,
      // duration: item.duration,
    },)}>
      {/* <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
        Popular
      </Text> */}
      <View style={styles.wrapper}>
        <View style={styles.left_wrapper}>
          <Text style={{color: '#fff', fontSize: 20, paddingRight: 5}}>{songno}</Text>
          <View style={styles.image_container}>
            <Image
              source={{
                uri: rest.live_image,
              }}
              style={styles.imageCover}
            />
          </View>
          <View style={{flexDirection:'column',paddingLeft:10,}}>
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
    </TouchableOpacity>
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
