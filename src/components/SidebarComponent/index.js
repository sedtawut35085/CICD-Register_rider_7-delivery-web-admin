
import { AuthContext } from '../../auth/index'
import React, { useContext } from 'react'
import Auth from '../../configuration/configuration-aws'
import * as routeconstant from '../../constant/routecontent'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FaThList, FaUsersCog , FaMotorcycle, FaSignOutAlt } from 'react-icons/fa'

const SidebarComponent = ({handleclick,currentPage}) => {
    const navigate = useNavigate()

    console.log('currentPage2 : ',currentPage)

    const sideNavClicked = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("-translate-x-full");
    }

    const logout = async () => {
        await Auth.signOut();
        navigate(routeconstant.RouteContent.login)
    }
    return (
        <>
            <div className="bg-sky-900 text-gray-100 flex justify-between md:hidden">
                <h5 className="block p-4 text-white font-bold">7-Delivery-Admin</h5>
                <button className="mobile-menu-btn p-4 focus:outline-none focus:bg-sky-900" onClick={sideNavClicked}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                </button>
            </div>
            <div className="sidebar bg-white border-r-2 shadow-2xl border-gray-200 text-blue-100 w-64 space-y-6 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                <div className='bg-sky-900 py-4 px-2 '>
                    <h5 className="flex items-center text-white space-x-2 px-4">
                        <img className='w-14 h-14 object-cover' src={logo} alt="" />
                        <span className="text-md font-extrabold text-white">7-Delivery-Admin</span>
                    </h5>
                </div>
                <nav className='pt-4 px-2'>
                    {currentPage === 'homepage'?
                        <>
                            <h5 className="cursor-pointer block py-4 px-4 rounded transition duration-500 hover:bg-sky-900 bg-sky-900 hover:text-white text-white" onClick={(e)=> handleclick(e, 'homepage')}> <FaThList  className='absolute w-5 h-6 text-gray-400'></FaThList><span className="pl-12">หน้าหลัก</span></h5>
                        </>
                        :                        
                        <>
                            <h5 className="cursor-pointer block py-4 px-4 text-black rounded transition duration-500 hover:bg-sky-900 hover:text-white" onClick={(e)=> handleclick(e, 'homepage')}> <FaThList  className='absolute w-5 h-6 text-gray-400'></FaThList><span className="pl-12">หน้าหลัก</span></h5>
                        </>
                    } 
                    {currentPage === 'manageuserpage'?
                        <>
                             <h5 className="cursor-pointer block py-4 px-4 rounded transition duration-500 hover:bg-sky-900 bg-sky-900 hover:text-white text-white" onClick={(e)=> handleclick(e, 'manageuserpage')}><FaUsersCog  className='absolute w-5 h-6 text-gray-400'></FaUsersCog><span className="pl-12">จัดการผู้ใช้</span></h5>
                        </>
                        :                        
                        <>
                             <h5 className="cursor-pointer block py-4 px-4 text-black rounded transition duration-500 hover:bg-sky-900 hover:text-white" onClick={(e)=> handleclick(e, 'manageuserpage')}><FaUsersCog  className='absolute w-5 h-6 text-gray-400'></FaUsersCog><span className="pl-12">จัดการผู้ใช้</span></h5>
                        </>
                    } 
                    {currentPage === 'acceptriderpage'?
                        <>
                              <h5 className="cursor-pointer block py-4 px-4 rounded transition duration-500 hover:bg-sky-900 bg-sky-900 hover:text-white text-white" onClick={(e)=> handleclick(e, 'acceptriderpage')}><FaMotorcycle  className='absolute w-5 h-6 text-gray-400'></FaMotorcycle><span className="pl-12">อนุมัติไรเดอร์</span></h5>
                        </>
                        :                        
                        <>
                              <h5 className="cursor-pointer block py-4 px-4 text-black rounded transition duration-500 hover:bg-sky-900 hover:text-white" onClick={(e)=> handleclick(e, 'acceptriderpage')}><FaMotorcycle  className='absolute w-5 h-6 text-gray-400'></FaMotorcycle><span className="pl-12">อนุมัติไรเดอร์</span></h5>
                        </>
                    } 
                    
                   
                   
                    <div className="bottom-0 absolute w-64 left-0 px-2 py-4">
                        <h5 className="cursor-pointer block py-2.5 px-4 transition duration-500 text-black rounded hover:bg-red-800 hover:text-white" onClick={logout}><FaSignOutAlt  className='absolute w-5 h-6 text-gray-400'></FaSignOutAlt><span className="pl-12">ออกจากระบบ</span></h5>
                    </div>
                </nav>
               
            
                
              
                
            </div>
           
        </>
    )
}

export default SidebarComponent