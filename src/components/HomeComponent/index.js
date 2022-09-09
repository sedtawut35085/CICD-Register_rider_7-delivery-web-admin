import { AuthContext } from '../../auth/index'
import React, { useContext,useState } from 'react'
import Auth from '../../configuration/configuration-aws'
import * as routeconstant from '../../constant/routecontent'
import { useNavigate } from 'react-router-dom'

const HomeComponent = () => {
    const { currentUser , currentEmailUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const logout = async () => {
        await Auth.signOut();
        navigate(routeconstant.RouteContent.login)
    }

    return (
        <div>
            {currentEmailUser}
            <button  className='transition border w-full my-4 py-2 bg-sky-900 hover:bg-sky-800 text-white rounded-2xl delay-150'  onClick={logout}>
                ออกจากระบบ
            </button>
           
        </div>
    )
}


export default HomeComponent