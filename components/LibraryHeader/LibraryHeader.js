import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import Antdesign from 'react-native-vector-icons/AntDesign';


const LibraryHeader = () => {
   
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textwrapper}>
        <Image
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3CWx3HdiVZnwYAVNc2aOmf5C7mjcWaytU_A&usqp=CAU'}}
          style={styles.playlistImage}
        />
        <Text style={styles.title}>Your Library</Text>
        <View style={styles.libraryicon}>
            <TouchableOpacity>
            <Antdesign name="search1" size={24} color="#fff" />
            </TouchableOpacity>
            </View>
            <View style={styles.libraryicon}>
            <TouchableOpacity>
            <Antdesign name="plus" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LibraryHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171926',
    paddingTop: 10,
      flexDirection:'row'
    
  },
  textwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 28,
    flex: 1,
    marginLeft: 10,
  },
  playlistImage: {
    height: 50,
    width: 50,
    borderRadius: 999,
    marginLeft: 10,
    resizeMode:'contain'
  },
  libraryicon:{
   margin:15
  }
});
