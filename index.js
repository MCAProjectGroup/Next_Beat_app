/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './App';
import {name as appName} from './app.json';
import { PlaybackService } from './service';

TrackPlayer.registerPlaybackService(async() => await PlaybackService());
AppRegistry.registerComponent(appName, () => App);
