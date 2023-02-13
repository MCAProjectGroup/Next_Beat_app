import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import PodcastShows from './PodcastShows';

const Podcasts = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PodcastShows />
      </ScrollView>
    </View>
  );
};

export default Podcasts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
