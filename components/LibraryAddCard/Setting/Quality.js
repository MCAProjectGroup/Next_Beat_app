import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectQuality from './SelectQuality';

const Quality = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 24}}>
          Select Download Quality
        </Text>
      </View>
      <SelectQuality qualitytext="HD" subqualitytext="320/256 kbps" />
      <SelectQuality qualitytext="High" subqualitytext="128 kbps" />
      <SelectQuality qualitytext="Medium" subqualitytext="64 kbps" />
      <SelectQuality qualitytext="Low" subqualitytext="32 kbps" />
    </View>
  );
};

export default Quality;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
  },
});
