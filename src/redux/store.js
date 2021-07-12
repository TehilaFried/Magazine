import React from 'react'
//to be able to change, update, the store
import produce from 'immer'
//to connect the store
import { applyMiddleware, combineReducers, createStore } from 'redux'

//bringing all the reducer files
import classNum from './reducer/class'
import pupils from './reducer/pupils'
import teacher from './reducer/teacher'
import { myMiddleware,myMiddleware2 } from './myMiddleware'

//combines all the reducers to one store
const reducer = combineReducers({ classNum, pupils, teacher })

//to put the store in the app
const store = createStore(reducer,applyMiddleware(myMiddleware,myMiddleware2))


window.store = store

export default store;