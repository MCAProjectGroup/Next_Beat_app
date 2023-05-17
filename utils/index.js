// import moment from 'moment';
import {
  Dimensions,
  Platform,
  PixelRatio,
  Linking,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
// import RNFetchBlob from 'rn-fetch-blob';
// import {RNS3} from 'react-native-upload-aws-s3';
// import Toast from 'react-native-simple-toast';

// export const showToast=(msg, length='SHORT')=>{
//   Toast.show(msg, Toast[length]);
// }


export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

// Set the Animation Time here globally
export const ANIMATION_TIME = 2000;

export const normalizeSize = (size, lgSize = 0, smSize = 0) => {
  if (SCREEN_WIDTH >= 600) size = (lgSize != 0 ? lgSize : size) - 2;
  else if (SCREEN_WIDTH <= 330) size = (smSize != 0 ? smSize : size) - 1;

  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};



  // const dirs = RNFetchBlob.fs.dirs;
 
export const showServerValidationError = response => {
  let errorMessage = '';
  for (const [key, value] of Object.entries(response)) {
    errorMessage += '* ' + fieldToLebel(key) + ' ' + value + '\n';
  }
  errorMessage = errorMessage.replace(/\n+$/, '');

  showFlashMessage(errorMessage, '', 'danger');
};

export const showYupFormValidationError = errors => {
  console.log(errors);

  let errorMessage = '';
  for (const [key, value] of Object.entries(errors)) {
    errorMessage += '* ' + value.message + '\n';
  }
  errorMessage = errorMessage.replace(/\n+$/, '');
  if (errorMessage != '') showFlashMessage(errorMessage, '', 'danger');
};

export const showFlashMessage = (
  message = '',
  description = '',
  type = 'success',
  onPress = () => {},
  duration = 3000,
) => {
  showMessage({
    message: message,
    description: description,
    type: type,
    floating:true,
    onPress,
    duration,
  });
};



//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale1 = size => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = size => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale1(size) - size) * factor;

export {scale1, verticalScale, moderateScale};
