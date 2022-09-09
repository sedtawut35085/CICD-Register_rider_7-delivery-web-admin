import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Auth from '../configuration/configuration-aws'
import * as routeconstant from '../constant/routecontent'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentEmailUser, setCurrentEmailUser] = useState(null);
    const navigate = useNavigate()

    useEffect( () => {
        async function check() {
            await Auth.currentAuthenticatedUser()
            .then(async(response) => {
                setCurrentUser(response);
                await Auth.currentSession()
                .then(res => {
                  setCurrentEmailUser(res.getIdToken().payload.email)
                })
                .catch(err => console.log(err));
            })
            .catch(() => {
                navigate(routeconstant.RouteContent.login);
            })
           
        }
        check();
    }, [])

    return (
        <AuthContext.Provider value={{currentUser,currentEmailUser}}>
            {children}
        </AuthContext.Provider>
    )
}