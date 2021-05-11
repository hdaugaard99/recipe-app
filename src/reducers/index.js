import {combineReducers} from 'redux';
import recipes from './recipes';
import fluff from './fluff';
import instructions from './instructions';

export default combineReducers({
    recipes,
    fluff,
    instructions
})