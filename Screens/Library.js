import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import LibraryHeader from '../components/LibraryHeader/LibraryHeader';
import LibraryBottom from '../components/LibraryBottom/LibraryBottom';
import LibraryCard from '../components/LibraryCard/LibraryCard';
import LibraryAddCard from '../components/LibraryAddCard/LibraryAddCard';
import { useNavigation } from '@react-navigation/native';

const Library = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textwrapper}>
        <LibraryHeader />
      </View>
      <LibraryBottom />
      <ScrollView>
        <LibraryCard title="Mohit Chauhan" />
        <LibraryCard title="KK" />
        <LibraryCard title="Rahat Fateh Ali Khan" />
        <LibraryCard title="Arijit Singh" />
        <LibraryCard title="Neha Kakar" />
        <LibraryCard title="Mohit Chauhan" />
        <LibraryCard title="Arijit Singh" />
        <LibraryCard title="Neha Kakar" />
        <LibraryAddCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 40,
  },
  textwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
