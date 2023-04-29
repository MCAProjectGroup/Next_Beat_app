import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Featuring = ({artistdetails}) => {
  return (
    // SINGER FEATURING PAGES
    <View style={styles.container}>
      {/* <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
        Popular release
      </Text> */}
      <View style={styles.wrapper}>
        <View style={styles.left_wrapper}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/3b2ac47a1c5a803c4663dc3d099abc42_500x500.jpg',
              }}
              style={styles.imageCover}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
              {artistdetails}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Featuring;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingTop:10,
  },
  wrapper: {
    borderRadius: 5,
    padding: 5,
  },
  left_wrapper: {
    resizeMode: 'cover',
    marginTop: 10,
    // justifyContent:'center',
  },
  imageCover: {
    height: 160,
    width: 160,
  },
});
