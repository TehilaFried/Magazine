import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { updatePupil } from '../action'
import {actions} from '../action'

export default connect()(function UpdatePupil(props) {
    const { dispatch } = props
    const nameRef = useRef('')
    const idRef = useRef('')

    function handleClick() {
        dispatch(actions.updatePupil({ name: nameRef.current.value, id: idRef.current.value }))
    }

    return (
        <>
            <h3>Update the name of the pupil's id:</h3>
            <input placeholder='name' ref={nameRef}></input>
            <br />
            <input placeholder='id' ref={idRef}></input>
            <button onClick={handleClick}>Update</button>
        </>
    )
})