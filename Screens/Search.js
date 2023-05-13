import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useLayoutEffect } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import SearchCard from '../components/SearchCard/SearchCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryData } from '../store/category';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    dispatch(getCategoryData());  
  
  }, [])
  console.log({categories});
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
          value={searchInput}
          onChangeText={setSearchInput}
          onSubmitEditing={()=>navigation.navigate("Searchlisting",{searchInput})}
        />
      </View>
      <ScrollView>
        <View style={styles.subwrap}>
          <Text style={styles.subtitle}>Brower all</Text>
        </View>
        <SearchCard data={categories} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171926',
    paddingTop: 40,
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
    marginBottom:10
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
