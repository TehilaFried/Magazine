import React from 'react'
import { withRouter } from 'react-router'

const Flash=withRouter(function Flash(props){
    const{state}=props.location;
    if(state&&state.flash){
        return<p>{state.flash}</p>
    }
    return false;
})
export default Flash;