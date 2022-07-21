import React from 'react'
import { Navigate } from 'react-router-dom'
import { getLocalData } from '../utils/localStore'

function Private({ children }) {

    if (!getLocalData('email')) {
        return <Navigate to='/login' />
    }

    return children
}

export default Private