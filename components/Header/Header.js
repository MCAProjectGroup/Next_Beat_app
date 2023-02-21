import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Notificationpage from '../Notificationpage/Notificationpage';
import { TouchableRipple } from 'react-native-paper';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <View style={styles.textwrapper}>
            {/* <Touch */}
            <TouchableOpacity onPress={()=>navigation.navigate("premium")} style={{backgroundColor:'#1dd761',borderRadius:10}}>
            <View style={{flexDirection:"row",alignItems:'center', paddingHorizontal:16,borderRadius:20,}}>
              <Image source={{uri:"https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/spotify-512.png"}}
              style={{height:30,width:30,resizeMode:'contain',borderRadius:20

              }}
      
              />
              <Text style={styles.title}> Go Premium</Text>

            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
              <Ionicons name="md-notifications" size={30} color="#fff" />

            </TouchableOpacity>
            {/* <View style={{width: 20}} />
            <TouchableOpacity onPress={() => navigation.navigate("Recentplay")}>
              <Antdesign name="clockcircleo" size={22} color="#fff" />
            </TouchableOpacity>
            <View style={{width: 20}} />
            <TouchableOpacity>
              <Antdesign name="setting" size={22} color="#fff"  onPress={() => navigation.navigate("Setting")}/>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    minHeight:60,
    marginTop:20,
    marginBottom:14,
    backgroundColor: '#171926',
    paddingHorizontal: 16,
    paddingVertical:10
  },
  textwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between"
  },
  title: {
    color: '#000',
    fontWeight: '500',
    fontSize: 24, 
    paddingVertical:8,
    
  },
});
