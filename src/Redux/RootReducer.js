import { combineReducers } from "redux";

import React from 'react';

import UserReducer from "./UserReducer";



export default combineReducers({
    user : UserReducer
});