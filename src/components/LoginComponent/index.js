import React, { useState, useEffect } from 'react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import RingLoader from "react-spinners/RingLoader";
import { useNavigate } from 'react-router-dom'
import { getcountData } from '../../service/index'
import Auth from '../../configuration/configuration-aws'

import * as constant from '../../constant/content'
import * as routeconstant from '../../constant/routecontent'

import logo from '../../assets/logo.png'
import wallpaperlogincomponent from '../../assets/wallpaper-login.jpeg'

const LoginComponent = () => {

    const [ loading , setLoading] = useState(false);
    const [ isErrorRegister, setIsErrorRegister] = useState(false);
    const navigate = useNavigate()

    useEffect( () => {
        async function Authentication() {
            await Auth.currentAuthenticatedUser({
                bypassCache: false
            }).then(async() => {  
                let response = await getcountData()
                navigate(routeconstant.RouteContent.home, { state: response.data} )
              })
            .catch(err => console.log('err: ',err));
        }
        Authentication();
    }, [])

    const Signin = async (e) => {
        e.preventDefault();
        setLoading(true)
        const { email, password } = e.target.elements;
            await Auth.signIn(email.value, password.value)
            .then(async () =>  {
                setIsErrorRegister(false)
                let response = await getcountData()
                navigate(routeconstant.RouteContent.home, { state: response.data})
            })
            .catch(err => {
                setLoading(false)
                setIsErrorRegister(true)
            });   
    }

    return (
       
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={wallpaperlogincomponent} alt="" />
            </div>
            <div className='bg-white flex flex-col'>
                <div className='flex justify-end pr-10 pt-3 mb-10'>
                    <img className='w-14 h-14 object-cover' src={logo} alt="" />
                </div>
                <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-4 pt-10 justify-center ' onSubmit={Signin}>
                    <h2 className='text-2xl font-bold text-left py-6 pt-14 mt-14'>{constant.LoginContent.title}</h2>
                    <div className='flex flex-col py-2'>
                        <FaUserAlt  className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaUserAlt>
                        <input type='email' className='border-b-2 border-gray pl-12 pb-2 pt-2' name='email' id="exampleInputEmail1" required placeholder={constant.LoginContent.placeholder.email} aria-describedby="emailHelp"  />
                        <div className='ml-2 text-sm text-red-500'>{isErrorRegister}</div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <FaLock className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaLock>
                        <input className='border-b-2 border-gray pl-12 pb-2 pt-2' type="password" name="password" required placeholder={constant.LoginContent.placeholder.password}  />                  
                    </div>              
                    <div className='pl-4 pr-4 ml-1 pt-4'> 
                    {isErrorRegister === true?
                        <>
                            <div className='text-sm text-red-500 text-center'>{constant.LoginContent.errorlogin}</div>
                        </>
                        :                        
                        <>
                        </>
                    }   
                    {loading === false?
                        <>
                            <button className='transition border w-full my-4 py-2 bg-sky-900 hover:bg-sky-800 text-white rounded-2xl delay-150'>{constant.LoginContent.button.email}</button>
                        </>
                        :                        
                        <> 
                            <div className="my-4 pl-14 md:ml-4 pt-2 flex">
                                <RingLoader
                                    size={25}
                                    color={"#599c3d"}
                                    loading={loading}
                                />
                                <div className="pl-4 text-center">
                                    {constant.LoginContent.loading}
                                </div>
                            </div>
                        </>
                    }   
                </div>
            </form>       
        </div>
    </div>
    )

}

export default LoginComponent