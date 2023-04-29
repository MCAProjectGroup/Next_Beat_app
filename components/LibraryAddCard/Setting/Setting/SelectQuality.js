import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';

const SelectQuality = ({qualitytext, subqualitytext}) => {
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.left_wrapper}>
          <Text style={{color: '#fff', fontSize: 18}}>{qualitytext}</Text>
          <Text style={{color: 'grey', fontSize: 14}}>{subqualitytext}</Text>
        </View>
        <View style={styles.right_wrapper}>
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => setLiked(!liked)}>
            {liked ? (
              <MI name="circle-slice-8" size={24} color="#1dd761" />
            ) : (
              <Feather name="circle" size={24} color="grey" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectQuality;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 13,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left_wrapper: {},
  right_wrapper: {},
});
