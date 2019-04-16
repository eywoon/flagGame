import { createStore } from "redux";
import rootReducer from "./reducers";


/* The rootReducer helps with splitting up the app reducers
   once the state becomes more complex
   It uses the combineReducers function to create a single
   reducing function you can pass to createStore
   All reducers will be held in a single state object
 */

//This is an outline of the application state shape
const initialState = {
    guessTheFlag: {
        score:0
    },
    counter: 0,
    todos: []
};
export default createStore(rootReducer, initialState);


