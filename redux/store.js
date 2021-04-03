import {configureStore} from '@reduxjs/toolkit';

import carparksReducer from './carparksSlice';
import regionReducer from './regionSlice';
import specificLocationReducer from './specificLocationSlice';
import sortCriteriaReducer from './sortCriteriaSlice';
import availabilityReducer from './availabilitySlice';
import maxCarparksReducer from './maxCarparksSlice';
import selectedFavouriteReducer from './selectedFavouriteSlice';

// our store will have the states carparks and region, and all updates to these states will be done with their reducers
export default configureStore({
  reducer: {
    carparks: carparksReducer,
    region: regionReducer,
    specificLocation: specificLocationReducer,
    sortCriteria: sortCriteriaReducer,
    availability: availabilityReducer,
    maxCarparks: maxCarparksReducer,
    selectedFavourite: selectedFavouriteReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
