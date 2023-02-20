import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Profile from './Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Settingcontent from './Settingcontent';
import Settingcontentdata from './Settingcontentdata';
import MusicSetting from './MusicSetting';
import { useNavigation } from '@react-navigation/native';
import Logout from './Logout';

const Setting = () => {
  const navigation = useNavigation();
  const [ShowBottomSheet, setShowBottomSheet] = useState(false)

  return (
    <View>

      <ScrollView>
        <View style={styles.container}>
          {/* UPPER CONTAINER TEXT */}
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <AntDesign name="left" color={'#fff'} size={20} />
            <Text style={{color: '#fff', fontSize: 32, fontWeight: 'bold'}}>
              {' '}
              Settings{' '}
            </Text>
          </View>
          {/* PROFILE TEXT */}
          <Profile />
          {/* SETTING WITH ARROW */}
          <Settingcontent />
          {/* SWITCH BUTTON */}
          <Settingcontentdata
            stitle={'Offline Songs On slow Internet'}
            ssubtitle={'Play downloaded and mp3 songs only'}
          />
          <Settingcontentdata
            stitle={'Allow explict content'}
            ssubtitle={
              'Turn off to skip explict content Explict content is labeled with E tag'
            }
          />
          <Settingcontentdata stitle={'Sleep Timer'} />
          <Settingcontentdata stitle={'Show Lyrics on player'} />
  
          {/* CONTENT WITH ARROW */}
          <View style={{marginTop: 40, marginLeft: 10}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Offline Music Preferences
            </Text>
            <MusicSetting title="Download Quality" />
          </View>
          {/* CONTENT WITH ARROW  AND PROFILE DEAILS*/}
          <View style={{marginTop: 40, marginLeft: 10}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Profile
            </Text>
            <MusicSetting title="My Profile"  path={"Profilepage"}/>
            <MusicSetting title="Help & Support" path={"Help"}/>
            <MusicSetting title="Logout" />
          </View>
        </View>
      </ScrollView>
          {/* <View style={[StyleSheet.absoluteFill,{backgroundColor:"transparent"}]}> */}
      <Logout show={true} />

          {/* </View> */}
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
    marginTop: 30,
    marginBottom: 50,
  },
});
