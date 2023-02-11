import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Profile from './Profile';
import Settingcontent from './Settingcontent';
import Settingcontentdata from './Settingcontentdata';
import { useNavigation } from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Free account</Text>
      <TouchableOpacity style={styles.buttoncontainer}>
        <Text style={styles.button}> Go Premium </Text>
      </TouchableOpacity>
      <View style={styles.profile_details}>
        <View style={styles.profilecontainer}>
          <Profile title="Anku Pathak" />
        </View>
        <TouchableOpacity>
          <AntDesign
            name="right"
            size={15}
            color="#fff"
            style={{flexDirection: 'row'}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        <Settingcontent text={'Data Server'} />
        <Settingcontentdata
          stitle={'Audio Quality'}
          ssubtitle={
            'Sets Your audio quality to low (equivalent to 24kbit/sec) and disable artist canvases'
          }
        />
        <Settingcontent text={'Video podcasts'} />
        <Settingcontentdata
          stitle={'Download audio only'}
          ssubtitle={'save video podcasts as audio only'}
        />
        <Settingcontentdata
          stitle={'Stream audio only'}
          ssubtitle={'Play video podcasts as audio only when not wifi'}
        />
        <Settingcontent text={'Playback'} />

        <Settingcontentdata
          stitle={'Gapless'}
          ssubtitle={'Allow gapless playback'}
        />
        <Settingcontentdata
          stitle={'Automix'}
          ssubtitle={
            'Allow seamless transition between songs on select playlists.'
          }
        />
        <Settingcontentdata
          stitle={'Allow Explicit Content'}
          ssubtitle={
            'Turn on to play explict content Explicit content is labeled with Etag.'
          }
        />

        <Settingcontentdata
          stitle={'Shows unplayable songs'}
          ssubtitle={'shows songs that are unplayable.'}
        />
        <Settingcontentdata
          stitle={'Normalize volume'}
          ssubtitle={'Sets the same volume leval for all tracks.'}
        />
        <Settingcontentdata
          stitle={'Mono Audio'}
          ssubtitle={'Makes the left and right speakers play the same audio.'}
        />
        <Settingcontentdata
          stitle={'Device Brodcast Status'}
          ssubtitle={
            'Allow other apps on your device to see what you are listing to.'
          }
        />
        <Settingcontentdata
          stitle={'Autoplay'}
          ssubtitle={
            "Enjoy nonstop lisening. When your audio ends, we'll play you somethings similar."
          }
        />
        <Settingcontentdata
          stitle={'Canvas'}
          ssubtitle={'Display short, looping visuals on tracks.'}
        />
        <Settingcontent text={'Languages'} />
      </View>
      <TouchableOpacity style={styles.langcontainer} onPress={() => navigation.navigate("Language")}>
        <Text style={styles.langtitle}>Languages</Text>
        <Text style={styles.langsubtitle}>
          Choose your preferred languges for music.
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'tomato',
    paddingTop: 30,
    paddingHorizontal: 10,
    // marginBottom:200
  },
  title: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '600',
  },
  buttoncontainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: '#333',
    backgroundColor: 'white',
    borderRadius: 999,
    width: 170,
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  profile_details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langcontainer: {
    marginBottom: 60,
    
  },
  langtitle: {
    fontSize: 20,
    marginTop: 20,
    color: '#fff',
  },
  langsubtitle: {
    color: 'grey',
  },
});
