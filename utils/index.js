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

export const showToast=(msg, length='SHORT')=>{
  Toast.show(msg, Toast[length]);
}


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

export const openUrl = url => {
  if (url && url.trim() != '') {
    url = url.trim();
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }
};
export const downLoadFile = async (hr_doc_Url, document_file) => {
  console.log('hr_doc_Url', hr_doc_Url);
  if (Platform.OS == 'ios') {
    Alert.alert(
      '',
      'Are you sure to download this file?',
      [
        {
          text: 'No',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => actualDownload(hr_doc_Url, document_file),
        },
      ],
      {cancelable: false},
    );
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          '',
          'Are you sure to download this file?',
          [
            {
              text: 'No',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => actualDownload(hr_doc_Url, document_file),
            },
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert(
          'Permission Denied!',
          'You need to give storage permission to download the file',
        );
      }
    } catch (err) {
      console.warn(err);
      console.log('erroororororo', err);
    }
  }
};

export const actualDownload = (hr_doc_Url, document_file) => {
  if (document_file === null || document_file === '') {
    showFlashMessage('No file name found', '', 'danger');
    return;
  }

  // const dirs = RNFetchBlob.fs.dirs;
  const dirToSave = Platform.OS == 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
  console.log('>>>>', document_file);

  const configfb = {
    fileCache: true,
    useDownloadManager: true,
    notification: true,
    mediaScannable: true,
    title: `${document_file}`,
    path: `${dirToSave}/${document_file}`,
  };
  const configOptions = Platform.select({
    ios: {
      fileCache: configfb.fileCache,
      title: configfb.title,
      path: configfb.path,
      appendExt: `${document_file.split('.')[1]}`,
    },
    android: configfb,
  });

  console.log(`${hr_doc_Url + document_file}`);

  // RNFetchBlob.config(configOptions)
  //   // .fetch('GET', `${hr_doc_Url + document_file}`, {})
  //   .fetch('GET', `${hr_doc_Url}`, {})

  //   .then(res => {
  //     if (Platform.OS === 'ios') {
  //       RNFetchBlob.fs.writeFile(configfb.path, res.data, 'base64');
  //       RNFetchBlob.ios.previewDocument(configfb.path);
  //     }
  //     // setisdownloaded(false);
  //     if (Platform.OS == 'android') {
  //       showFlashMessage(`File downloaded successfully..`, '', 'success');
  //       console.log(res);
  //     }

  //     // console.log('The file saved to ', res.data);
  //     // console.log('The file saved to ', res.respInfo.headers['Content-Type']);
     
  //   })
  //   .catch(e => {
  //     // setisdownloaded(true);
  //     // showSnackbar(e.message);
  //     showFlashMessage(e.message, '', 'danger');
  //     // console.log('The file saved to ERROR', e.message);
  //   });
   
};

const downloadFile = () => {
  // Get today's date to add the time suffix in filename
  let date = new Date();
  // File URL which we want to download
  let FILE_URL = fileUrl;
  // Function to get extention of the file url
  let file_ext = getFileExtention(FILE_URL);

  file_ext = '.' + file_ext[0];

  // config: To get response by passing the downloading related options
  // fs: Root directory path to download
  // const {config, fs} = RNFetchBlob;
  let RootDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      path:
        RootDir +
        '/file_' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        file_ext,
      description: 'downloading file...',
      notification: true,
      // useDownloadManager works with Android only
      useDownloadManager: true,
    },
  };
  config(options)
    .fetch('GET', FILE_URL)
    .then(res => {
      // Alert after successful downloading
      console.log('res -> ', JSON.stringify(res));
      alert('File Downloaded Successfully.');
    });
};

const getFileExtention = fileUrl => {
  // To get the file extension
  return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
};

export const capitalize = s => {
  if (s == '') return '';
  return s[0].toUpperCase() + s.slice(1).toLowerCase();
};

export const fieldToLebel = field => {
  field = field.replace(/_/g, ' ');
  field = field.toUpperCase();
  return field;
};

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

// export const getTodayDate = format => {
//   try {
//     return moment().format(format);
//   } catch (error) {
//     return;
//   }
// };

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale1 = size => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = size => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale1(size) - size) * factor;

export {scale1, verticalScale, moderateScale};

// export const startDate = selecteddate => {
//   var date = new Date(selecteddate);
//   if (date.getDay() != 1) {
//     date.setDate(date.getDate() - ((date.getDay() + 6) % 7));
//   }
//   return moment(date);
// };

export const clearAll = () => {
  // it will be called when user loged out;
  // Meteor.logout();
  // store.dispatch(logout());
};

// export const uploadToS3 = async (uri, name, type) => {
//   // upload images to S3
//   console.log('logggggggg', uri, name, type);
//   const file = {
//     uri: uri,
//     name: name,
//     type: type,
//   };

//   const options = {
//     keyPrefix: 'sanro/temp/',
//     bucket: 'dev-idiosys',
//     region: 'ap-southeast-1',
//     accessKey: 'AKIAZUGVFQTWKRIXZGEM',
//     secretKey: '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',
//     successActionStatus: 201,
//   };

//   try {
//     const response = await RNS3.put(file, options);
//     console.log('response', response);
//     return response;
//   } catch (error) {
//     console.log('error', error);
//   }
// };

export const meteorAsyncCall = (...params) => {
  const myPromise = new Promise((resolve, reject) => {
    Meteor.call(...params, async (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });

  return myPromise;
};
