import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const RouteController = ({ componet: Componet, ...rest }) => {

    const [isAuth, setIsAuth] = useState(true)

    const init = () => {
        const auth = localStorage.getItem('auth')

        if (auth === null) {
            console.log(auth)
            setIsAuth(false)
            return
        }
        
        if (auth === 'yes') {
            console.log(auth)
            setIsAuth(true)
            return
        }
    }

    useEffect(init, [])
    
    return isAuth ? <Componet {...rest} /> : <Navigate to='/login'/>
}

export default RouteController