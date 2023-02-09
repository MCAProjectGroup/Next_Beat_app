import React, {useState} from 'react';
import {View,Text, Switch, StyleSheet, ScrollView} from 'react-native';

const Settingcontentdata = ({stitle,ssubtitle}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    // <ScrollView>
    <View style={styles.container}>
      <View style={styles.left_container}>
        <Text style={styles.title}>{stitle}</Text>
        <Text style={styles.subtitle}>{ssubtitle}</Text>
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
    // </ScrollView>
  );
};

export default Settingcontentdata;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    marginTop:10,
    paddingRight:10,
    // marginBottom:10
  },
  left_container:{
    width:'87%',
  },
  right_container:{
    marginTop:30
  },
  title:{
    color:'#fff',
    fontSize:20
  },
  subtitle:{
    color:'grey',
    // fontSize:20
  }
});
