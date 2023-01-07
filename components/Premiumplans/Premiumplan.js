import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Premiumplan = ({leftTop,rightTop1,rightTop2,middleDesc,bottomDesc,bgColor}) => {
  return (
      <View style={[styles.container,{backgroundColor:bgColor}]}> 

      <View style={styles.topcontainer}>
        <Text style={styles.lefttitle}>{leftTop}</Text>
        <View style={styles.rightcontainer}>
        <Text style={styles.righttitle}>{rightTop1}</Text>
        <Text style={styles.rightsubtitle}>{rightTop2}</Text>
        </View>
      </View>
        <View style={{alignContent:"center"}}>
      <View style={styles.middlecontainer}>
        <View style={styles.middleTextContainet}>
            <Text style={styles.middleContainetText}>{middleDesc} </Text>
        </View>
        <TouchableOpacity>
        <View style={styles.buttonwrap}>
        <Text style={styles.buttontext}>VIEW PLAN</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>
            {bottomDesc}<Text style={{color:"#fff"}}>Terms and condition </Text>

        </Text>
      </View>
      </View>
        
        </View>
    
  )
}

export default Premiumplan

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#D85F89',
        height:320,
        width:"90%",
        marginTop:10,
        marginRight:20,
        marginLeft:20,
        borderRadius:5, 
        marginBottom:20,
      },
      topcontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:40
      },

      lefttitle:{
        color:"#fff",
        fontSize:22,
      },
      righttitle:{
        color:"#fff",
        fontSize:22,
        fontWeight:'bold'

      },
      rightsubtitle:{
        color:"#fff",
        fontSize:15,
        marginLeft:15
      },
      middlecontainer:{
        alignItems:'center',
        justifyContent:'center'

      },
      buttonwrap:{
        backgroundColor:"#fff",
        borderRadius:170,
        paddingHorizontal:10,
        paddingVertical:8,
        marginHorizontal:10,
        marginBottom:10,
        width:150,
        marginTop:10
        
    },
    middleTextContainet:{
        marginHorizontal:20,
        marginTop:30,
        marginBottom:5,
    },
    middleContainetText:{
        color:"#fff",
        fontSize:18,
        textAlign:'center'

    },
    buttontext:{
        color:"#121212",
        fontSize:18,
        textAlign:'center',
        
    },
    bottomContainer:{
      marginHorizontal:20,
        alignItems:'center',
        justifyContent:'center',
    

    },
    bottomText:{
        color:"#B4B4B4",
        

    }

})