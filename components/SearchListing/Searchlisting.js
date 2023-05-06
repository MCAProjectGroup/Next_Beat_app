import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Albumbottom from '../MusicAlbum/Albumbottom'
import Feather from 'react-native-vector-icons/Feather';

const Searchlisting = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Searchlisting</Text> */}
      <View style={styles.textwrapper}>
        <Text style={styles.title}>Search</Text>
      </View>
      <View style={styles.searchinput}>
        <Feather name="search" size={24} color="#333" />
        <TextInput
          placeholder="What do you want to listen to?"
          style={styles.input}
        //   value={searchInput}
        //   onChangeText={setSearchInput}
        //   onSubmitEditing={()=>navigation.navigate("Searchlisting",{searchInput})}
        />
      </View>
      <View style={{paddingHorizontal:20}}>

      <FlatList 
        data={[1,2,3,4]}
        ItemSeparatorComponent={()=> <View  style={{height:5}}/>}
        renderItem={({item})=>(
            <Albumbottom />
        )}
        keyExtractor={(item, ) => item+"dfdsfdsf"}
      />
      </View>
    </View>
  )
}

export default Searchlisting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171926',
        paddingTop: 40,
        // padding:20
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
        // marginLeft: 10,
      },
    searchinput: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius: 5,
        marginBottom:20,
      },
      input: {
        width: '100%',
        paddingLeft: 10,
        fontSize: 15,
        color: '#333',
        fontWeight: '700',
      },
})