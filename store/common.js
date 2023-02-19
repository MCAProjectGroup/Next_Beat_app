import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'common',
  initialState: {
    inputFocus: false,
    loaderBtn: {
      name: '',
      status: false,
    },
    refreshCurrentDeliveryRequest:0,
    cordinates: {},
    AddressLoaction: {},
  },
  reducers: {
    SetInputFocus: (state, {payload}) => {
      state.inputFocus = payload;
    },
    setLoaderTrue: (state, {payload}) => {
      state.loaderBtn = {
        name: payload,
        status: true,
      };
    },
    setLoaderFalse: state => {
      state.loaderBtn = {
        name: '',
        status: false,
      };
    },
    RiderAcceptNotification: state => {
      state.refreshCurrentDeliveryRequest +=1 ;
    },
    SetCordinates: (state, {payload}) => {
      state.cordinates = payload;
    },
    SetAddressLoaction: (state, {payload}) => {
      state.AddressLoaction = payload;
    },
  },
});

export const {
  SetInputFocus,
  setLoaderFalse,
  setLoaderTrue,
  SetCordinates,
  SetAddressLoaction,
  RiderAcceptNotification
} = slice.actions;

export default slice.reducer;
