import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';

const Newsongs = ({date, sname, aname}) => {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.wrapper}>
          <View style={styles.leftcontainer}>
            <Image
              source={{uri: 'https://source.unsplash.com/featured/300x236'}}
              style={styles.playlistImage}
            />
            <Text style={styles.title}>Single</Text>
            {/* <View style={styles.icons}>
        <Feather name="heart" size={24} color="#fff" />
        <Feather name="more-vertical" size={24} color="grey" style={{marginLeft:20}}/>
        </View> */}
            <View style={styles.app_icon}>
              <View style={styles.right_icon}>
                <Feather name="heart" size={24} color="#fff" />
                <Feather name="more-vertical" size={24} color="grey" />
              </View>
              <View style={styles.left_icon}>
                <AntDesign name="play" size={30} color="#fff" />
              </View>
            </View>
          </View>

          <View style={styles.rightcontainer}>
            <Text style={{color: 'grey'}}>{date}</Text>
            <Text style={styles.titletext}>{sname}</Text>
            <Text style={{color: 'grey'}}>{aname}</Text>
          </View>
        </View>
        <View style={{width: '100%', backgroundColor: 'grey', height: 0.5}}></View>
      </TouchableOpacity>
    </>
  );
};

export default Newsongs;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'blue',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  playlistImage: {
    height: 100,
    width: 100,
  },
  title: {
    color: '#fff',
    marginTop: 7,
    fontSize: 12,
  },
  titletext: {
    color: '#fff',
    fontSize: 17,
    paddingVertical: 5,
    width:'80%'
  },
  rightcontainer: {
    marginLeft: 10,
  },
  
  app_icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  right_icon: {
    flexDirection: 'row',
  },
  left_icon: {
    alignItems: 'flex-end',
  },
});
