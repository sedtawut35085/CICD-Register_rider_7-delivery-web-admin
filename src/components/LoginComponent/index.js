import React, { useEffect } from 'react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Auth from '../../configuration/configuration-aws'

import * as constant from '../../constant/content'
import * as routeconstant from '../../constant/routecontent'

const LoginComponent = () => {

    const navigate = useNavigate()

    useEffect( () => {
        async function Authentication() {
            await Auth.currentAuthenticatedUser({
                bypassCache: false
            }).then(async() => {  
                navigate('/home')
              })
            .catch(err => console.log('err: ',err));
        }
        Authentication();
    }, [])

    const Signin = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
            await Auth.signIn(email.value, password.value)
            .then(async () =>  {
                await Auth.currentSession()
                .then(res => {
                  console.log('token : ',res.getAccessToken())
                })
                .catch(err => console.log(err));
                console.log('success')
                navigate(routeconstant.RouteContent.home)
            })
            .catch(err => {
            });   
    }

    return (
       
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
            <div className='bg-white flex flex-col'>
                <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-4 pt-10 justify-center ' onSubmit={Signin}>
                    <h2 className='text-2xl font-bold text-left py-6 pt-14 mt-14'>{constant.LoginContent.title}</h2>
                    <div className='flex flex-col py-2'>
                        <FaUserAlt  className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaUserAlt>
                        <input type='email' className='border-b-2 border-gray pl-12 pb-2 pt-2' name='email' id="exampleInputEmail1" required placeholder={constant.LoginContent.placeholder.email} aria-describedby="emailHelp"  />
                    </div>
                    <div className='flex flex-col py-2'>
                        <FaLock className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaLock>
                        <input className='border-b-2 border-gray pl-12 pb-2 pt-2' type="password" name="password" required placeholder={constant.LoginContent.placeholder.password}  />                  
                    </div>              
                    <div className='pl-4 pr-4 ml-1 pt-4'> 
                    <button className='transition border w-full my-4 py-2 bg-sky-900 hover:bg-sky-800 text-white rounded-2xl delay-150'>{constant.LoginContent.button.email}</button>
                </div>
            </form>
                   
        </div>
    </div>
    )

}

export default LoginComponent