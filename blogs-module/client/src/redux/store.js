import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import userReducer from './user/userSlice.js';

const rootReducer = combineReducers({
    user: userReducer,
})

const persistConfig = {
        key: 'root',
        storage,
        version: 1,
    }
    // Note: In a real-world application, you would typically use a more secure storage solution for sensitive data.
    // For example, you might use sessionStorage or a secure cookie storage library.

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)