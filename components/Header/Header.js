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
            <TouchableOpacity onPress={()=>navigation.navigate("premium")} >
            <View style={{flexDirection:"row",alignItems:'center', paddingHorizontal:16,borderRadius:20,}}>
              <Image source={{uri:"https://res.cloudinary.com/jesnal/image/upload/v1677006063/musify/app_logo_xxskfq.png"}}
              style={{height:35,width:35,resizeMode:'cover',borderRadius:20

              }}
      
              />
              <View style={{borderRadius:10}}>
              <Text style={styles.title}> Go Premium</Text>
              </View>

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
    paddingHorizontal: 10,
    paddingVertical:10
  },
  textwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between"
  },
  title: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 24, 
    paddingVertical:8,
    
  },
});
