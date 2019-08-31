import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import User from "./reducers/user";
import Books from "./reducers/books"

const reducers=combineReducers({
    User,
    Books
})

const store =createStore(reducers,applyMiddleware(reduxThunk))

export default store;