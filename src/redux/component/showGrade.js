import React from 'react'
import { connect } from 'react-redux'
import { updateClass, addPupil } from '../action'
import { actions } from '../action'
import { Redirect, withRouter } from 'react-router-dom'

//getting what we need from the store
function mapStateToProps(state) {
    return {
        //go to the class in the store, and then into the reducer
        classGrade: state.classNum.classGrade
    }
}

export default withRouter( connect(mapStateToProps)(function ShowGrade(props) {
    const { classGrade, dispatch ,history} = props

    function handleChange(e) {
        // 'dispatch' knows to get to the wanted store, because of the line 'window.store = store' in store.js
        dispatch(actions.updateClass(e.target.value))
        setTimeout(
            ()=>history.push('/pupils'),2000
        )
    }
    // if (classGrade < 5)
    //     return (
    //         <>
    //             <Redirect to={{ pathName:'/', state: { flash: 'the class is small then 5' }}}></Redirect>
    //         </>
    //     )

    return (
        <>
            <h3>class grade:</h3>
            <p>{classGrade}</p>
            <input type='number' onChange={handleChange}></input>
        </>
    )
}))