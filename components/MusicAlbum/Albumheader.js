import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const Albumheader = () => {
  return (
    <View style={styles.container}>
      {/* search input */}
      <View style={styles.searchbar}>
        <View style={styles.left_searchbar}>
          <Feather name="search" size={20} color="#fff" />
          <TextInput
            style={styles.searchInputText}
            placeholder={'search here ...'}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.right_searchbar}>
          <Text style={{color: '#fff', fontSize: 16}}>Sort</Text>
        </View>
      </View>

      {/* image container */}

      <View style={styles.imagecontainer}>
        <Image
          source={{
            uri: 'https://filmfare.wwmindia.com/content/2021/jun/new-bollywood-songs-humraah-91623939760.jpg',
          }}
          style={styles.imageCover}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.title}>
            Rahat Fateh Ali Khan, Shreya Ghosal, Kavita seth{' '}
          </Text>
          <Text style={styles.subtitle}>and more</Text>
        </View>
      </View>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesome name="spotify" size={24} color="#1dd761" />

        <Text style={{color: 'grey', marginLeft: 7}}>
          Made For
          <Text style={{color: '#fff', fontWeight: '700', fontSize: 15}}>
            {' '}
            Anku
          </Text>
        </Text>
      </View>
      <Text style={{color: 'grey', marginTop: 15}}> 3h 50min</Text>

      {/* bottom icons */}
      
      

      <View style={styles.iconcontainer}>
        
        <View style={styles.left_iconcontainer}>
           
            <TouchableOpacity>
          <Feather name="heart" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
          <Feather
            name="more-vertical"
            size={20}
            color="grey"
            style={{marginLeft: 20}}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.right_iconcontainer}>
        <TouchableOpacity>
          <MI name="pause-circle" size={50} color="#1dd761" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

export default Albumheader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    marginHorizontal: 10,
    paddingBottom:15
  },
  searchbar: {
    width: '100%',
    height: 45,
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left_searchbar: {
    backgroundColor: '#808080',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    flex: 1,
    borderRadius: 5,
  },
  right_searchbar: {
    backgroundColor: '#808080',
    // flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 60,
    marginLeft: 10,
    height: '100%',
  },
  searchInputText: {
    width: '100%',
    height: '100%',
    fontSize: 18,
    placeholderTextColor: 'red',
  },

  imagecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  imageCover: {
    height: 270,
    width: 270,
    borderRadius: 5,
    marginRight: 7,
  },
  textcontainer: {
    marginTop: 15,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  title: {
    color: '#1dd761',
    borderBottomWidth: 1,
    borderColor: '#1dd761',
    paddingBottom: 1,
  },
  subtitle: {
    color: 'grey',
    marginLeft: 3,
  },
  iconcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  left_iconcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
