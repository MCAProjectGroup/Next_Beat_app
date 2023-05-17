import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import auth from './auth';
import category from './category';
import song from './song';

const rootReducer = combineReducers({
  auth: auth,
  category:category,
  song
  
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['global', 'auth', 'user'], // Things u want to persist
  blacklist: ['auth'], // Things u dont
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
