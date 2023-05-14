import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import TrackPlayer from 'react-native-track-player';
import { TrackPlayerAddAndPlay } from '../../utils/player';


const Albumbottom = (props) => {
  const item = props.item;
  // const TrackPlay = async(data) => {
  //   try {
      
  //     await TrackPlayerAddAndPlay(data)
      
  //   } catch (error) {
  //     console.log({error})
  //   }
  // }
  
  return item?._id && (
    <TouchableOpacity onPress={()=> TrackPlayerAddAndPlay(  {
      id: item._id,
      url: item.live_song,
      title: item.title,
      artist: item.artists_details.map(item => item.name).join(", "),
      artwork: item.live_image,
      // duration: item.duration,
    },)}  style={styles.container}>
      <View style={styles.left_container}>
        <View style={styles.imagecontainer}>
          <Image
            source={{
              uri: item.live_image,
            }}
            style={styles.imageCover}
          />
        </View>
        <View style={styles.artist_details}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.artist_title}>
            <Text style={styles.artistsubtitle}>LYRICS</Text>
            <Text style={styles.subtitle}> Mame Khan</Text>
          </View>
        </View>
      </View>
      <View style={styles.right_container}>
        <TouchableOpacity>
          <Feather name="more-vertical" size={20} color="grey" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Albumbottom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  left_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageCover: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 7,
  },
  artist_details: {},
  title: {
    color: '#1dd761',
  },
  artist_title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  artistsubtitle: {
    backgroundColor: 'grey',
    height: 13,
    width: 40,
    fontSize: 10,
    textAlign: 'center',
    borderRadius: 3,
  },
  subtitle: {
    color: 'grey',
  },
});
