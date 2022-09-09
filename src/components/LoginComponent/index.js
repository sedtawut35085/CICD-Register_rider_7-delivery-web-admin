import React, { useState, useEffect } from 'react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import RingLoader from "react-spinners/RingLoader";
import { useNavigate } from 'react-router-dom'
import Auth from '../../configuration/configuration-aws'

import * as constant from '../../constant/content'
import * as routeconstant from '../../constant/routecontent'

import logo from '../../assets/logo.png'
import wallpaperlogincomponent from '../../assets/wallpaper-login.jpeg'

const LoginComponent = () => {

    const [password, setPassword] = useState(""); 
    const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [isErrorRegister, setIsErrorRegister] = useState(null);
    const [errorPasswordMessage, setErrorPasswordMessage] = useState(null);
    const navigate = useNavigate()

    const Signin = async (e) => {
        e.preventDefault();
        if(isErrorPassword === true){
            const { email, password } = e.target.elements;
            await Auth.signIn(email.value, password.value)
            .then(async () =>  {
                console.log('success')
                await Auth.currentSession()
                .then(res => {
                  let token = res.getAccessToken();
                  console.log(token)
                })
                .catch(err => console.log(err));

                navigate(routeconstant.RouteContent.home)
            })
            .catch(err => console.log(err));   
        }else{
            console.log('error signup')
        }
    }

    const checkPassword = (e) => {
        const Pass = e.target.value;
        setPassword(Pass);
        const uppercaseRegExp   = /([A-Z])/;
        const lowercaseRegExp   = /([a-z])/;
        const digitsRegExp      = /([0-9])/;
        const specialCharRegExp = /([#?!@$%^&*-])/;
        const minLengthRegExp   = /.{8,}/;
        const uppercasePassword =   uppercaseRegExp.test(Pass);
        const lowercasePassword =   lowercaseRegExp.test(Pass);
        const digitsPassword    =   digitsRegExp.test(Pass);
        const specialCharPassword = specialCharRegExp.test(Pass);
        const minLengthPassword =   minLengthRegExp.test(Pass);
        setIsErrorPassword(false)
        if(Pass.length === 0){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.emthycase)
        }else if(!uppercasePassword){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.uppercase)
        }else if(!lowercasePassword){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.lowercase)
        }else if(!digitsPassword){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.digitcase)
        }else if(!specialCharPassword){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.specialcharcase)
        }else if(!minLengthPassword){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.minlengthcase)
        }else{
            setIsErrorPassword(true)
            setErrorPasswordMessage(null)
        }
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
                        <input value={password} className='border-b-2 border-gray pl-12 pb-2 pt-2' type="password" name="password" required placeholder={constant.LoginContent.placeholder.password} onChange={(e) => checkPassword(e)} />
                        <div className='ml-2 text-sm text-red-500'>{errorPasswordMessage}</div>
                    </div>
                
                    <div className='pl-4 pr-4 ml-1 pt-4'>
                    <button className='transition border w-full my-4 py-2 bg-sky-900 hover:bg-sky-800 text-white rounded-2xl delay-150'>{constant.LoginContent.button.email}</button>
                {/* {loading === false?
                    <>
                        <button className='transition border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl delay-150'>{constant.LoginContent.button.email}</button>
                    </>
                    :                        
                    <>
                        <div className="my-4 pl-14 pt-2 flex">
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
                }    */}
                    
                </div>
            </form>
                   
        </div>
    </div>
    )

}

export default LoginComponent