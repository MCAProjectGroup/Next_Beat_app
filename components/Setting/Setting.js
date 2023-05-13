import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Profile from './Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Settingcontentdata from './Settingcontentdata';
import {useNavigation} from '@react-navigation/native';
import MusicSetting from './MusicSetting';
import Logout from './Logout';
import Quality from './Quality';
import {
  // BottomSheetModal,
  BottomSheetModalProvider,
  // useBottomSheetModal
} from '@gorhom/bottom-sheet';
import Language from './Language';
import BehaviourList from './BehaviourList'
import Stream from './Stream';

const Setting = () => {
  const navigation = useNavigation();
  const [ShowBottomSheet, setShowBottomSheet] = useState({
    status: false,
    Component: Logout,
    snapPoints: [100, 200],
  });

  const _SheetClose = useCallback(() => {
    console.log('closed');
    setShowBottomSheet({
      ...ShowBottomSheet,
      status: false,
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <BottomSheetModalProvider>
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
            {/* <View style={{marginTop:20,marginLeft:10}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Music Listening Preferences
            </Text>
            <MusicSetting
              title="Music Language(s)"
              onPress={() =>
                setShowBottomSheet({
                  status: true,
                  Component: Language,
                  snapPoints: [100, 530],
                })
              }
            />
            <MusicSetting title="On Click Behaviour-List"  onPress={() =>
                setShowBottomSheet({
                  status: true,
                  Component:BehaviourList,
                  snapPoints: [100, 280],
                })
              }/>
            <MusicSetting title="Streaming Quality"   onPress={() =>
                setShowBottomSheet({
                  status: true,
                  Component:Stream,
                  snapPoints: [100, 380],
                })
              }/>
            </View>

            {/* SWITCH BUTTON */}
            {/* <Settingcontentdata
              stitle={'Offline Songs On slow Internet'}
              ssubtitle={'Play downloaded and mp3 songs only'}
            />
            <Settingcontentdata
              stitle={'Allow explict content'}
              ssubtitle={
                'Turn off to skip explict content Explict content is labeled with E tag'
              }
            /> */}
            {/* <Settingcontentdata stitle={'Sleep Timer'} />
            <Settingcontentdata stitle={'Show Lyrics on player'} />  */}

            {/* CONTENT WITH ARROW */}
            {/* <View style={{marginTop: 40, marginLeft: 10}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
                Offline Music Preferences
              </Text>
              <MusicSetting
                title="Download Quality"
                onPress={() =>
                  setShowBottomSheet({
                    status: true,
                    Component: Quality,
                    snapPoints: [100, 320],
                  })
                }
              />
            </View> */}
            {/* CONTENT WITH ARROW  AND PROFILE DEAILS*/}
            <View style={{marginTop: 40, marginLeft: 10}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
                Profile
              </Text>
              <MusicSetting title="My Profile" path={'Profilepage'} />
              <MusicSetting title="Help & Support" path={'Help'} />
              <MusicSetting
                title="Logout"
                onPress={() =>
                  setShowBottomSheet({
                    status: true,
                    Component: Logout,
                    snapPoints: [100, 200],
                  })
                }
              />
            </View>
          </View>
        </ScrollView>
        {/* <View style={[StyleSheet.absoluteFill,{backgroundColor:"transparent"}]}> */}
        {ShowBottomSheet.status && (
          <ShowBottomSheet.Component
            snapPoints={ShowBottomSheet.snapPoints}
            show={ShowBottomSheet.status}
            onClose={_SheetClose}
          />
        )}

        {/* </View> */}
      </BottomSheetModalProvider>
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
