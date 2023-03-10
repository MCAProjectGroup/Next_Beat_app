import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  useBottomSheetModal
} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Language from './Language';

const BottomDemo = (Component) => {
     // ref
  
  return (props)=> {
    console.log({props});
    const bottomSheetModalRef = useRef(null);
  
    const handleDismissPress = useCallback(() => {
        // NOTE: This setCount call triggers the issue
        setCount(state => state + 1);
        bottomSheetModalRef.current?.dismiss();
    }, []);

    // variables
    const snapPoints = useMemo(() => [200, 400], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        setTimeout(() => bottomSheetModalRef.current?.snapToIndex(1), 200)
        // console.log(bottomSheetModalRef.current.snapToIndex(1))
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
        if(index<0){
          props.onClose()
        }
    }, []);

    useEffect(() => {
      
        if(props.show){
          setTimeout(() => bottomSheetModalRef.current?.snapToIndex(1), 200)
        }
        else{
          bottomSheetModalRef.current?.close()
        }
    }, [props])
    

    return props.show && (
      <GestureHandlerRootView style={styles.container}>
      {/* <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        /> */}

        <BottomSheet
          // gestureEventsHandlersHook={}
          ref={bottomSheetModalRef}
          index={0}
          // onClose={()=>props.onClose}
          enablePanDownToClose
          enableHandlePanningGesture
          backgroundStyle={{
            // backgroundColor:"#000"
          }}

          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          onDismiss={handleDismissPress}
        >
          <View style={styles.contentContainer}>
            <Component {...props} />

          </View>
        </BottomSheet>
      {/* </View> */}

      </GestureHandlerRootView>
    // </BottomSheetModalProvider>
  )}
}

export default BottomDemo

const styles = StyleSheet.create({
    container: {
      // position:"absolute",
      // width:"100%"
      ...StyleSheet.absoluteFill,
      // flex: 1,
      padding: 15,
      // marginBottom:200,
      justifyContent: 'center',
      // backgroundColor: 'transparent',
    },
    contentContainer: {
      flex: 1,
      // alignItems: 'center',
      backgroundColor:"#000"
    },
  });