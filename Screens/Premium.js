import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import PremiumImage from '../components/PremiumImage/PremiumImage'
import PremiumCard from '../components/PremiumCard/PremiumCard'
import Premiumplans from '../components/Premiumplans/Premiumplans'

const Premium = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PremiumImage/>
      <PremiumCard/>
      <Premiumplans/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Premium

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#171926',
    // marginTop:40, 
  },
})