import React from 'react'
//to be able to change, update, the store
import produce from 'immer'
import execHandler from './reducerUtils'

//givving starting values to the store, if we want
//we can only declare the store without values
const initialState = {
    pupils: [
        { name: "Hani", id: '111111111' },
        { name: "Rivki", id: '222222222' },
        { name: "Sara", id: '333333333' }
    ],
}

//'produce'-to be able to change values in the store
//'state'-our store, the 'initialState'
//'action'-what to do, and with what to do the action: {type:'UPDATE_CLASS',payload:'...'}
// export default produce((state, action) => {//func that gets 'action' and deal with it.
//     switch (action.type) {
//         case 'ADD_PUPIL':
//             { state.pupils.push(action.payload) }
//             break;
//         case 'UPDATE_PUPIL':
//             { state.pupils.find(pupil => pupil.id == action.payload.id).name = action.payload.name }
//             break;
//     }
// }, initialState)
const pupilsReducer = {
    addPupil(state, action) {
        state.pupils.push(action.payload) 
    },
    updatePupil(state, action) {
        state.pupils.find(pupil => pupil.id === action.payload.id).name = action.payload.name 
    }
}
export default produce((state,action)=>{
    execHandler(state,action,pupilsReducer)
},initialState)