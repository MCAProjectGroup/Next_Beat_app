import {ScrollView, StyleSheet, Text, View,FlatList} from 'react-native';
import React from 'react';
import CategoriesContent from './CategoriesContent';

const DATA = [
  {
    title: 'Hot Hits Hindi',
    subtitle: '1,295,815 FOLLOWERS',
  },
  {
    title: 'All out 00s Hindi',
    subtitle: '514,761 FOLLOWERS',
  },
  {
    title: 'Bollywood Butter',
    subtitle: '832,295 FOLLOWERS',
  },
  {
    title: 'New Music Hindi',
    subtitle: '1,295,815 FOLLOWERS',
  },
  {
    title: 'Panjabi 101',
    subtitle: '871,431 FOLLOWERS',
  },
  {
    title: 'Panjabi Pop',
    subtitle: '114,295 FOLLOWERS',
  },
];

const CategoriesItems = ({playlist}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingcontainer}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: '800'}}>
          {playlist}
        </Text>
      </View>
      {/* <ScrollView> */}
        <FlatList
          keyExtractor={(item, index) => index}
          data={DATA}
          horizontal
          ListHeaderComponent={() => <View />}
          renderItem={({item}) => (
            <CategoriesContent title={item.title} subtitle={item.subtitle} />
          )}
        />
      {/* </ScrollView> */}
    </View>
  );
};

export default CategoriesItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
    // margin: 20,
    // marginHorizontal:10
    // backgroundColor: 'green',
    marginVertical:25
  },
  headingcontainer: {
    alignItems: 'center',
  },
});
