import { StyleSheet, Text, FlatList,View } from 'react-native'
import React from 'react'
import PopularReleases from './PopularReleases'

const ListData = [
   
    {
        sname:'Mere Bholenath',
        sfollowers:"Latest release . single"
    },
    {
        sname:'Rang Lageya',
        sfollowers:"2021 . Single"
    },
    {
        sname:'Tum Se Hi',
        sfollowers:"2022 . single"
    },
    {
        sname:'Teri Ada',
        sfollowers:"2022 . single"
    },
   
  ];

const PopularContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
        Popular release
      </Text>
      <FlatList
          keyExtractor={(item, index) => index}
          data={ListData}
          ListHeaderComponent={() => <View />}
          renderItem={({item}) => <PopularReleases sname={item.sname} sfollowers={item.sfollowers} />}
        />
     
    </View>
  )
}

export default PopularContainer

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal:10
      },
})