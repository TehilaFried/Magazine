import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { updateClass, addPupil } from '../action'
// import actions from '../action'
import {actions} from '../action'
export default connect()(function AddPupil(props) {
    const { dispatch } = props
    const nameRef = useRef('')
    const idRef = useRef('')

    function handleClick() {
        dispatch(actions.addPupil({ name: nameRef.current.value, id: idRef.current.value }))
    }

    return (
        <>
            <h3>Adding Pupil:</h3>
            <input placeholder='name' ref={nameRef}></input>
            <br />
            <input placeholder='id' ref={idRef}></input>
            <button onClick={handleClick}>Add</button>
        </>
    )
})