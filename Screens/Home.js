import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FloatingMusicPlayer from '../components/FloatingMusicPlayer/FloatingMusicPlayer'
import Header from '../components/Header/Header'
import BelowButton from '../components/BelowButton/BelowButton'
import Rechentplaylist from '../components/Recentplaylist/Rechentplaylist'
import Albums from '../components/Albums/Albums'

const Home = () => {
  return (
    
    <View style={{flex:1,paddingHorizontal:15}}>
      {/* <View style={{height:50}}/> */}
      {/* <Header/> */}
      <ScrollView showsVerticalScrollIndicator={false}>
      <Header/>
      <BelowButton/>
      <Rechentplaylist />
      <View>
      <Albums title="Chart's mix"/>
      <Albums title="Based on your recent Search"/>
      <Albums title="Trending Valentine'Hits"/> 
      <Albums title="Your top mixes"/>
      <Albums title="India's Best"/>
      <Albums title="Happy 2023"/>
      </View>
      </ScrollView>
      
      
      {/* <FloatingMusicPlayer/> */}
      </View>
  )
}

export default Home

const styles = StyleSheet.create({})