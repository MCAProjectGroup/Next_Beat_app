import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { request } from '../../utils/request'
import { SCREEN_HEIGHT } from '../../utils'

const Rechentplaylist = () => {
  const [ArtistsList, setArtistsList] = useState([])
  const getSomeArtists = async () => {
    try {
      const res = await request("get", "user/artists");
      console.log({res:res.data});
      setArtistsList(res.data.data)
    } catch (error) {

    }
  }

  useLayoutEffect(() => {
    
    getSomeArtists()
  }, [])

  return (
    <View style={{ marginTop: 15, flex: 1, }}>
      <FlatList
        data={ArtistsList}
        keyExtractor={(item) => item._id}
        numColumns={2}
        ItemSeparatorComponent={()=> <View style={{height:SCREEN_HEIGHT*0.01}} />}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.playlistdesc}>
          <Image
            source={{ uri: item.live_image }}
            style={styles.playlistImage}
          />
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
        )}
      />
      {/* <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://i.scdn.co/image/ab6761610000e5ebeba97bff36c4ae81e94333d8"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title}>Mame Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://nettv4u.com/fileman/Uploads/Top-20-Singers-Who-Rule-Bollywood/Udit_Narayan.jpg"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title} >Udit Narayan</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://freekaamaal.com/blog/wp-content/uploads/2021/06/sh.jpg"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title}>Sherya Ghosal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://ecdn.thelistacademy.com/wp-content/uploads/2019/05/Arijit_Singh_in__Ebela_Ami_Amar_Moto_Samman_Award_2013_.jpg"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title} >Arijit Singh</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://nettv4u.com/fileman/Uploads/Top%2010%20Singers%20of%20the%20Bollywood%20with%20Initial%20%E2%80%9CS%E2%80%9D/shaan.png"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title}>Shaan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://www.rotarybombayseacoast.org/wp-content/uploads/2022/03/Kumar-Sanu.jpg"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title} >Kumar Sanu</Text>
        </TouchableOpacity> */}
      {/* </View> */}
    </View>
  )
}

export default Rechentplaylist

const styles = StyleSheet.create({
  wrapper: {
    // flexDirection: 'row',
    width:"50%",
    marginHorizontal: 5,
    marginVertical: 5
  },
  playlistImage: {
    height: 60,
    width: 60,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  title: {
    color: "#fff",
    marginLeft: 8
  },
  playlistdesc: {
    flexDirection: 'row',
    marginRight: 8,
    borderRadius: 5,
    backgroundColor: "#333",
    alignItems: 'center',
    width: "50%",
  }
})