import React from 'react'
import { useSelector } from 'react-redux'
import AuthNavigator from './AuthNavigator'

const RootNavigator = () => {
    
   // const isAuth = useSelector(state => state.Auth.user)
    
    return (
        // isAuth 
        // ? <AppNavigator />: 
        <AuthNavigator />
    )
}

export default RootNavigator