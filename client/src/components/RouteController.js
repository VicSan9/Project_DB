import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const RouteController = ({ componet: Componet, ...rest }) => {

    const [isAuth, setIsAuth] = useState(true)

    const init = () => {
        const auth = localStorage.getItem('auth')

        if (auth === null) {
            setIsAuth(false)
            return
        }
        
        if (auth === 'yes') {
            setIsAuth(true)
            return
        }
    }

    useEffect(init, [])
    
    return isAuth ? <Componet {...rest} /> : <Navigate to='/login'/>
}

export default RouteController