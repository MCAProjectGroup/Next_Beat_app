import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Premiumplan from './Premiumplan'

const ListData = [
    {
      leftTop:"Mini",
      rightTop1:"From $7",
      rightTop2:"For 1 DAY",
      middleDesc:"1 day and 1 week palans . Ad-free music on mobile.Download 30 songs on 1 mobile device . Mobile only plan",
      bottomDesc:"Prices very according to duration of plan  apply",
      bgColor:"#2196F3",
    },
    {
      leftTop:"Premium Individual",
      rightTop1:"Free",
      rightTop2:"For 1 MONTH",
      middleDesc:"Ad-free music listing . Download to listen offline . Debit and credit cards accepted",
      bottomDesc:"Offer only for users who are new to Premium",
      bgColor:"#2E7D32"
  
    },
    {
      leftTop:"Premium Duo",
      rightTop1:"Free",
      rightTop2:"For 1 MONTH",
      middleDesc:"2 Premium accounts . For couples who live together . Ad-free music listening .",
      bottomDesc:"Offer only for users who are new to Premium",
      bgColor:"#815987"
  
    },
    {
      leftTop:"Premium Family",
      rightTop1:"Free",
      rightTop2:"For 1 MONTH",
      middleDesc:"Ad-free music listing . Choose 1,3,6 or 12 months of Premium . Debit and credit cards accepted ",
      bottomDesc:"Offer only for users who are new to Premium",
      bgColor:"#D81B60"
  
    },
    {
      leftTop:"Premium Student",
      rightTop1:"Free",
      rightTop2:"For 1 MONTH",
      middleDesc:"Ad-free music listing . Download to listen offline",
      bottomDesc:"Offer only for users who are new to Premium",
      bgColor:"#FFA000"
  
    },
   

  
  ]


const Premiumplans = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Pick your Premium</Text>
      
       <FlatList
        keyExtractor={(item, index)=> index}
        data={ListData}
        ListHeaderComponent={()=><View  />}
        renderItem={({item})=>(
          <Premiumplan leftTop={item.leftTop} rightTop1={item.rightTop1} rightTop2={item.rightTop2}
          middleDesc={item.middleDesc} bottomDesc={item.bottomDesc}
          bgColor={item.bgColor} />
          

        )}
      />

      </View>
    </View>
  )
}

export default Premiumplans

const styles = StyleSheet.create({
container:{
  flex:1,
},
title:{
    color:"#fff",
    fontSize:20,
    marginVertical:20,
    marginHorizontal:30

}
})