import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import SearchCard from '../components/SearchCard/SearchCard';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textwrapper}>
        <Text style={styles.title}>Search</Text>
      </View>
      <View style={styles.searchinput}>
        <Feather name="search" size={24} color="#333" />
        <TextInput
          placeholder="What do you want to listen to?"
          style={styles.input}
        />
      </View>
      <ScrollView>
        <View style={styles.subwrap}>
          <Text style={styles.subtitle}>Brower all</Text>
        </View>
        <SearchCard />
        {/* <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    marginTop: 40,
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
  searchinput: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    width: '100%',
    paddingLeft: 10,
    fontSize: 15,
    color: '#333',
    fontWeight: '700',
  },
  subtitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 26,
    flex: 1,
  },
  subwrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },
});
