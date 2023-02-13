import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';

const PodcastShows = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.uppercontainer}>
            <Image
              source={{
                uri: 'https://www.gazabhindi.com/wp-content/uploads/2016/12/shrimad-bhagavad-gita.jpg',
              }}
              style={styles.imageCover}
            />
            <View style={styles.textcontainer}>
              <Text style={{color: 'grey'}}>Playlist</Text>
              <Text style={{color: '#fff', fontSize: 20, fontWeight: '700'}}>
                Top Hindi Tracks of 2022
              </Text>
              <Text style={{color: 'grey', fontSize: 15}}>
                Arijit singh,pritam, neha kakar,Mohit chauhan, Tanisk Bagchi
              </Text>
            </View>
          </View>
          <View style={styles.icon_container}>
            <View style={styles.left_icon_container}>
              <TouchableOpacity>
                <AntDesign name="pluscircle" size={28} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="more-vertical"
                  size={28}
                  color="#fff"
                  style={{paddingLeft: 10}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.right_icon_container}>
              <TouchableOpacity>
                <AntDesign name="play" size={28} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PodcastShows

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
  },
  wrapper: {
    backgroundColor: 'rgba(47, 45, 46, 0.88)',
    width: '100%',
    height: 230,
    borderRadius: 7,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  uppercontainer: {
    flexDirection: 'row',
  },
  imageCover: {
    height: 150,
    width: 150,
    borderRadius: 2,
  },
  textcontainer: {
    width: 200,
    paddingHorizontal: 10,
  },
  icon_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  left_icon_container: {
    flexDirection: 'row',
  },
});
