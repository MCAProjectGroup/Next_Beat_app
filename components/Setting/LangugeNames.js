import React, {useState} from 'react';
import {View,Text, Switch, StyleSheet, ScrollView} from 'react-native';


const LangugeNames = ({title}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.left_container}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right_container}>
        <Switch
          trackColor={{false: '#535353', true: '#146542'}}
          thumbColor={isEnabled ? '#1db954' : '#b3b3b3'}
          ios_backgroundColor="#1db954"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  )
}

export default LangugeNames

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between",
        marginTop:15,
        // paddingRight:10,
        

    },
    title:{
        color:'#fff',
        fontSize:18,
        fontWeight:'400'
    }
})