import React from 'react'
import { connect } from 'react-redux'
import {useParams} from 'react-router-dom'
function mapStateToProps(state) {
    return {
        pupils: state.pupils.pupils
    }
}

export default connect(mapStateToProps)(function ShowPupils(props) {
    const { pupils, dispatch } = props;
    // const{id}=useParams();

    return (
        <>
            <h3>the pupils in this class are:</h3>
            <ul>
                {/* <h1>pupil number{id}:{pupils[id].name}</h1> */}
                {pupils.map(pupil =>
                    <li key={pupil.id}>{pupil.name}, {pupil.id}</li>
                )}
            </ul>
        </>
    )
})