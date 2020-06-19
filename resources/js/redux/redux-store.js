import {combineReducers, createStore} from 'redux';
import snippetFormReducer from './snippetFormReducer';
import snippetReducer from './snippetReducer';
import stickerReducer from './stickerReducer';

let reducers = combineReducers({
    // snippetForm: snippetFormReducer,
    // snippetPage: snippetReducer,
    stickerPage: stickerReducer,
});

let store = createStore(reducers);

export default store;
