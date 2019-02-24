import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelecttionReducer from './SelecttionReducer';

export default combineReducers({
    libraresIndex: LibraryReducer,
    SelectedLibraryIdIndex: SelecttionReducer
});

