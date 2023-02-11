import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import LangugeNames from './LangugeNames';

const ListData = [
  {
    title: 'Bengali',
  },
  {
    title: 'Gujrai',
  },
  {
    title: 'Hindi',
  },
  {
    title: 'internation',
  },
  {
    title: 'Kannada',
  },
  {
    title: 'Malaylam',
  },
  {
    title: 'marathi',
  },
  {
    title: 'Panjabi',
  },
  {
    title: 'Tamil',
  },
  {
    title: 'Telgu',
  },
];

const Language = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>
        What are your prefferd langauge for music?
      </Text>
      <View style={{marginTop: 50}}>
        <FlatList
          keyExtractor={(item, index) => index}
          data={ListData}
          ListHeaderComponent={() => <View />}
          renderItem={({item}) => <LangugeNames title={item.title} />}
        />
      </View>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    // marginBottom: 50,
    paddingTop:20,
    marginHorizontal:15
  },
  title: {
    color: '#fff',
    fontSize:18
  },
});
