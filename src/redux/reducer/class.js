import React from 'react'
//to be able to change, update, the store
import produce from 'immer'
import execHandler from './reducerUtils'
//givving starting values to the store, if we want
//we can only declare the store without values
const initialState = {
    classGrade: 5,
}

//'produce'-to be able to change values in the store
//'state'-our store, the 'initialState'
//'action'-what to do, and with what to do the action: {type:'UPDATE_CLASS',payload:'...'}
// export default produce((state, action) => {//func that gets 'action' and deal with it.
//     switch (action.type) {
//         case 'UPDATE_CLASS':
//             { state.classGrade = action.payload }
//             break;
//     }
// }, initialState)
const classReducer = {
    updateClass(state, action) {
        state.classGrade = action.payload

    }
}
export default produce((state,action)=>{
    execHandler(state,action,classReducer)
},initialState)


