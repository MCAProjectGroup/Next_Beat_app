import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ANT from 'react-native-vector-icons/AntDesign';


const PremiumCard = () => {
  return (
    <View>
      <View style={styles.container}> 
        <Text style={styles.heading}>Why join Premium?</Text>
        </View>
  
        <View style={styles.bottomcontainer}> 

        <View style={styles.premiumcond}>
        <Text ><ANT name="check" size={24} color="#1dd761"/></Text>
        <Text style={styles.text}>Download to listen offline without wifi</Text>
        </View>

        <View style={styles.premiumcond}>
          <Text><ANT name="check" size={24} color="#1dd761"/></Text>
          <Text style={styles.text}> Music without ad interruption </Text>
        </View>
        
        <View style={styles.premiumcond}>
        <Text><ANT name="check" size={24} color="#1dd761"/></Text>
        <Text style={styles.text}>2x higher sound quality than our free plan</Text>
        </View>

        <View style={styles.premiumcond}>
        <Text><ANT name="check" size={24} color="#1dd761"/></Text>
        <Text style={styles.text}> play songs in any order, with unlimited skips</Text>
        </View>

        <View style={styles.premiumcond}>
          <Text><ANT name="check" size={24} color="#1dd761"/></Text>
          <Text style={styles.text}> Cancel monthly plans online anytime</Text>
        </View>
        
        </View>
      
        <View style={styles.plancontainer}> 
        <Text style={styles.plantext}>spotify Free </Text>
        <Text style={styles.currentplantext}>Current plan</Text>
        </View>

    </View>
  )
}

export default PremiumCard

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#333',
    height:70,
    width:"95%",
    color:"#fff",
    marginTop:30,
    // marginRight:10,
    marginLeft:10,
    borderRadius:5,
    borderBottomColor:"grey",
    borderWidth:1,
    borderColor:'#333', 
  
  },
  heading:{
    color:"#fff",
    fontSize:20,
    marginLeft:15,
    marginVertical:20,
    position:'absolute',
    bottom:-4
  },

  bottomcontainer:{
    backgroundColor:'#333',
    height:240,
    width:"95%",
    //  marginRight:20,
     marginLeft:10,
     borderRadius:5,
     alignItems:'center',
     
  
  },
  premiumcond:{
    marginTop:15,
    flexDirection:'row',
    width:'100%',
    marginLeft:25 
    
  },
  text:{
    color:"#fff",
    marginLeft:7,
    
  },
  plancontainer:{
    backgroundColor:'#333',
    height:70,
    width:"90%",
    color:"#fff",
    marginTop:30,
    marginRight:20,
    marginLeft:20,
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-around',  
    alignItems:'center',
  
  },
  plantext:{
    color:"#fff",
    fontSize:20,
    marginLeft:15,
    marginVertical:20,
    fontWeight:'bold'
  },
  currentplantext:{
    color:"#B1B1B1",
    marginVertical:20,
  }
})