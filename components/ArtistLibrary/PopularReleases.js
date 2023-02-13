import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const PopularReleases = ({sname,sfollowers}) => {
  return (
    // POPULAR RELEASE
    <View style={styles.container}>
      {/* <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
        Popular release
      </Text> */}
      <View style={styles.wrapper}>
        <View style={styles.left_wrapper}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b2731dda544f66f0eef95f7168ee',
              }}
              style={styles.imageCover}
            />
            </TouchableOpacity>
          <View style={{flexDirection:'column',paddingLeft:10,}}>
          <Text style={{color: '#fff', fontSize: 18, paddingRight: 5}}>{sname}</Text>
          <Text style={{color: 'grey', fontSize: 15, paddingRight: 5}}>{sfollowers}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PopularReleases

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 15,
    paddingTop:20
    // backgroundColor:'pink'
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderRadius:5,
    padding:5
  },
  left_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    resizeMode:'cover'
  },
  imageCover: {
    height: 80,
    width: 80,
    // borderRadius:5
  },
});
