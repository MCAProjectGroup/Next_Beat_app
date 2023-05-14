import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';

const PremiumImage = () => {
  return (
    <View style={{flex:1,}}>
      <View style={styles.imgcontainer}> 
      <Image
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxDmZdUNct9yiPfV-mgjs1bX-2aSRexgVPw&usqp=CAU"}}
        style={styles.playlistImage}
        />
        <View style={styles.heading}>
        {/* <Entypo name="spotify" size={24} color="#fff"/> */}
        <Image source={{uri:"https://res.cloudinary.com/jesnal/image/upload/v1677006063/musify/app_logo_xxskfq.png"}}
              style={{height:30,width:30,resizeMode:'cover',borderRadius:20

              }}
      
              />
        <Text style={styles.title}>Premium</Text>
        </View>
        <Text style={styles.header}> Ends soon : 3 months of Premium for $0</Text>
        </View>
      <View style={styles.buttonwrap}>
        <Text style={styles.buttontext}>GET 3 MONTHS FREE</Text>
      </View>
      <View>
      <Text style={{color:"gray",marginHorizontal:5}}>From $5/months after.Offer only for users who are new to Premium <Text style={{color:"#fff"}}>Terms and condition apply.</Text>
  
      </Text>
      </View>

      
    </View>
  )
}

export default PremiumImage

const styles = StyleSheet.create({
    playlistImage:{
       
        height:350,
        width:"100%",
       borderRadius:40
    },
    title:{
        color:"#fff",
        marginLeft:5
        
    },
    heading:{
        flexDirection:'row',
        position:'absolute',
        marginTop:30,
        marginLeft:20
    },
    header:{
        color:"#fff",
        fontSize:35,
        marginLeft:15,
        position:'absolute',
        bottom:10,
        paddingBottom:5
    },
    buttonwrap:{
        backgroundColor:"#fff",
        borderRadius:999,
        padding:8,
        marginHorizontal:10,
        marginBottom:10
    },
    buttontext:{
        color:"#171926",
        fontSize:26,
        textAlign:'center',
        
    }
})