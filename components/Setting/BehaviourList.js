import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import SelectQuality from './SelectQuality';
import BottomDemo from './BottomDemo';

const BehaviourList = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 24}}>
          playback Behaviour - List
        </Text>
      </View>
      <SelectQuality
        qualitytext="Play entire list instead"
        subqualitytext="Replaces current playing sng in the queue"
      />
      <SelectQuality
        qualitytext="Play single song"
        subqualitytext="Song will be played & added to queue"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomDemo(BehaviourList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 30,
    marginHorizontal: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1dd761',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign:'center'
  },
});
