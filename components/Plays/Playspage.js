import {ScrollView, StyleSheet,View} from 'react-native';
import React from 'react';
import Plays from './Plays';

const Playspage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Plays />
        <Plays />
        <Plays />
        <Plays />
        <Plays />
        <Plays />
        <Plays />
        <Plays />
      </ScrollView>
    </View>
  );
};

export default Playspage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
