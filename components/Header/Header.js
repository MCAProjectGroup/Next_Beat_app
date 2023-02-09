import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Notificationpage from '../Notificationpage/Notificationpage';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <View style={styles.textwrapper}>
            <Text style={styles.title}> Good Morning</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
              <Ionicons name="notifications-outline" size={24} color="#fff" />

            </TouchableOpacity>
            <View style={{width: 20}} />
            <TouchableOpacity onPress={() => navigation.navigate("Recentplay")}>
              <Antdesign name="clockcircleo" size={22} color="#fff" />
            </TouchableOpacity>
            <View style={{width: 20}} />
            <TouchableOpacity>
              <Antdesign name="setting" size={22} color="#fff"  onPress={() => navigation.navigate("Setting")}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex:1,
    // height:50,
    height: '100%',
    // width: '100%',
    // alignItems: 'center',
    backgroundColor: '#121212',
    paddingHorizontal: 10,
    paddingVertical:10
  },
  textwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:"space-between"
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 26,
    flex: 1,
  },
});
