import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import SelectQuality from './SelectQuality';


const Language = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 24}}>
          Select Music Language(s)
        </Text>
      </View>
      <SelectQuality qualitytext="Hindi" />
      <SelectQuality qualitytext="English" />
      <SelectQuality qualitytext="Bengali" />
      <SelectQuality qualitytext="Panjabi" />
      <SelectQuality qualitytext="Telugu" />
      <SelectQuality qualitytext="Tamil" />
      <SelectQuality qualitytext="Marathi" />
      <SelectQuality qualitytext="Rajjasthani" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
  },
});
