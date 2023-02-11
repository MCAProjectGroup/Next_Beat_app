import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Albumbottom from './Albumbottom';
import Albumheader from './Albumheader';

const Musicalbum = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Albumheader />
        <Albumbottom />
        <Albumbottom />
        <Albumbottom />
        <Albumbottom />
        <Albumbottom />
        <Albumbottom />
       
      </View>
    </ScrollView>
  );
};

export default Musicalbum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
