import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CategoriesContent = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoU2u_P0O2dItIE8Fm1Jf7edlCvAyv54vWA&usqp=CAU',
          }}
          style={styles.imageCover}
        />
      </View>
      <View style={styles.textcontainer}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          {title}
        </Text>
        <Text style={{color: 'grey', fontSize: 12, textAlign: 'center'}}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default CategoriesContent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'pink',
    width: 150,
    alignItems: 'center',
    // margin:10
    marginHorizontal: 10,
  },
  imageCover: {
    height: 150,
    width: 160,
    resizeMode: 'cover',
    marginTop: 10,
  },
  textcontainer: {
    // textAlign:'center'
  },
});
