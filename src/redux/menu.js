import React from 'react';
import { Link } from 'react-router-dom'

export default function MenueRouter() {
    return (
        <>
            <Link to='/showGrade'>Show Grade</Link>
            <br></br>
            <Link to='/AddPupil'>Add Pupil</Link>
            <br></br>
            <Link to='/UpdatePupil'>Update Pupil</Link>
            <br></br>
            <Link to='/'>Home</Link>

        </>
    )
}