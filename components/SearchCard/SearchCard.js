import { StyleSheet, Text, View,TouchableOpacity,Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Searchitem from './Searchitem'

const ListData = [
  {
    name:"2022 Wrapped",
    bgColor:"#7A2C87",
  },
  {
    name:"Prodcasts",
    bgColor:"#FF5722"

  },
  {
    name:"Made for You",
    bgColor:"#5E488B"

  },
  {
    name:"New release",
    bgColor:"#D81B60"

  },
  {
    name: "Hindi",
    bgColor:"#E53935"

  },
  {
    name: "panjabi",
    bgColor:"#AB47BC"

  },
  {
    name: "Tamil",
    bgColor:"#827717"

  },
  {
    name: "Telgu",
    bgColor:"#D84315"

  },
  {
    name: "Charts",
    bgColor:"#BA68C8"

  },
  {
    name: "Live Events",
    bgColor:"#5582B8"

  },
  {
    name: "Pop",
    bgColor:"#43A047"

  },
  {
    name: "Indie",
    bgColor:"#AD1457"

  },
  {
    name: "Trending",
    bgColor:"#D92763"

  },
  {
    name: "Romance",
    bgColor:"#8A1B1B"

  },
  {
    name: "Discover",
    bgColor:"#CE93D8"

  },
  {
    name: "Radio",
    bgColor:"#A34C6A"

  },
  {
    name: "Mood",
    bgColor:"#E91E63"

  },
  {
    name: "Party",
    bgColor:"#526E86"

  },
  {
    name: "Dance",
    bgColor:"#E2A413"

  },

]

const SearchCard = () => {
  const navigation = useNavigation();
  return (
    
    <View style={styles.wrapper} >
      <FlatList
      onPress={() => navigation.navigate("Categories")}
        numColumns={2}
        keyExtractor={(item, index)=> index+"asdas"}
        data={ListData}
        // ItemSeparatorComponent={()=><View style={{height:5}} />}
        ListHeaderComponent={()=><View style={{height:10}} />}
        renderItem={({item})=>(
          <Searchitem title={item.name} bgColor={item.bgColor} />

        )}
      />
      {/* <Searchitem title="Arijit Singh" /> */}
      {/* <Searchitem title="Udit narayn" /> */}
    </View>
    
      
  )
}

export default SearchCard

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },

})