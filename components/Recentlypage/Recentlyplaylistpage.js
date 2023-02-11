import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Recentlyplaylistpage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.left_container}>
      <Image
        source={{uri: 'https://images.genius.com/9b46bc8816a6e3db740afda972d8ca36.1000x1000x1.jpg'}}
        style={styles.playlistImage}
      />
      </View>
      <View style={styles.right_container}>
        <Text style={styles.title}>Mame Khan Mix</Text>
        <Text style={styles.subtitle}>Playlist . Musify</Text>
      </View>
    </View>
  );
};

export default Recentlyplaylistpage;

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:5
    
  },
  playlistImage: {
    marginTop: 5,
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  right_container:{
    marginLeft:10

  },
  title:{
    color:"#fff",
    fontSize:15

  },
  subtitle:{
    color:"grey"
  }
});
