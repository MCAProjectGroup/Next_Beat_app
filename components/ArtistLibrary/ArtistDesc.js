import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react';

const ArtistDesc = () => {
  return (
    // ARTIST ABOUT PAGES
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
        About
      </Text>
      <View style={styles.maincontainer}>
        <Image
          source={{
            uri: 'https://i.scdn.co/image/ab6761610000e5eb16691117e2ba803946b203ba',
          }}
          style={styles.imageCover}
        />
        <View style={styles.artist_details}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}} >1,22,77,630</Text>
            <Text style={{color: '#fff', fontSize: 15,marginLeft:3}}>MONTHLY LISTENERS</Text>
          </View>

          <View  style={{flexDirection:'row',alignItems:'center',marginRight:10}}>
          <Text style={{color: '#fff', fontSize: 15,fontWeight: '400'}}>Mohit Chauhan is a Singer-songwriter-composer,well known for his playback singing in bollywood, T...</Text>
          <TouchableOpacity>
          <AntDesign
                  name="right"
                  size={30}
                  color="#fff"
                />
              </TouchableOpacity>
          </View>
        

        </View>
      
      </View>
    </View>
  );
};

export default ArtistDesc;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  maincontainer: {
    paddingVertical: 20,
    position:"relative"
  },
  imageCover: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  artist_details:{
    position:"absolute",
    // top:16
    bottom:26,
    left:0,
    paddingHorizontal:16,
    width:'100%'

  }
});
