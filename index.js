/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import { PlaybackService } from './service';
import store from './store';

const Main = () => {
   
    return (
      <Provider store={store}>
        {/* <PaperProvider theme={colorScheme==="dark" ? PaperDarkTheme : PaperDefaultTheme}> */}
          <App />
        {/* </PaperProvider> */}
  
      </Provider>
    );
  };
  
  export default Main;

AppRegistry.registerComponent(appName, () => Main);
TrackPlayer.registerPlaybackService(() => PlaybackService);
TrackPlayer.registerPlaybackService(() => require('./service'))
