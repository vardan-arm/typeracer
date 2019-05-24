import { combineReducers } from 'redux';
import { reducer as main } from './modules/main';

const rootReducer = combineReducers({
    main
});

export default rootReducer;
