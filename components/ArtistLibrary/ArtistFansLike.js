import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ArtistFansLike = ({artistname}) => {
  return (
    // FAN LIKES
    <View style={styles.container}>
      {/* <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
        Fans also like
      </Text> */}
      <View style={styles.maincontainer}>
        <Image
          source={{
            uri: 'https://static.tnn.in/photo/msid-93724643/93724643.jpg',
          }}
          style={styles.imageCover}
        />
        <Text style={{color: '#fff', fontSize: 15, fontWeight: '400'}}>
          {artistname}
        </Text>
      </View>
    </View>
  );
};

export default ArtistFansLike;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    // paddingTop: 20,
  },
  maincontainer: {
    paddingVertical: 20,
    width: 150,
    alignItems:'center'
  },
  imageCover: {
    height: 150,
    width: 150,
    borderRadius: 999,
    resizeMode: 'contain',
  },
});
