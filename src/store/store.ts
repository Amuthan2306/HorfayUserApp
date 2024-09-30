import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from "../redux/Reducer/index";
const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
 const mainReducer = combineReducers({
  root: persistReducer(persistConfig, rootReducer), });

export const store = createStore(mainReducer, applyMiddleware(thunk));


export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
