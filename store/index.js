import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import auth from './auth';
import booking from './booking';
import common from './common';
import global from './global';
import user from './user';
import temp_booking from './temp/booking';
import foodie from './foodie';
import home from './home';
import filter from './filter';
import cart from './cart';
import notification from './notification';
import addressList from './addressList';
import foodieBooking from './foodieBooking';

const rootReducer = combineReducers({
  auth: auth,
  common: common,
  user: user,
  booking: booking,
  global: global,
  temp_booking: temp_booking,
  foodie: foodie,
  home: home,
  filter: filter,
  cart: cart,
  notification: notification,
  addressList: addressList,
  foodieBooking: foodieBooking,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['global', 'auth', 'user'], // Things u want to persist
  blacklist: ['booking'], // Things u dont
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  //middlewareState,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

let persistor = persistStore(store);

export default store;
export {persistor};
