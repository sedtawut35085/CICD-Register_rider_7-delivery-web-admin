import Auth from '../../configuration/configuration-aws'
import * as routeconstant from '../../constant/routecontent'
import * as constant from '../../constant/content'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FaThList, FaUsersCog, FaMotorcycle, FaSignOutAlt } from 'react-icons/fa'

const SidebarComponent = ({ handleclick, currentState }) => {
    const navigate = useNavigate()

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
            <header className="z-50 bg-sky-900 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
                <h5 className="block p-4 text-white font-bold">{constant.SidebarContent.title}</h5>
                <button className="mobile-menu-btn p-4 focus:outline-none focus:bg-sky-900" onClick={sideNavClicked}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                </button>
            </header>

            <aside className="z-50 bg-white sidebar text-gray-100 md:w-64 shadow-2xl w-3/4 space-y-6 pt-0 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
                    <div className='bg-sky-900 py-4 px-2 '>
                        <h5 className="flex items-center text-white space-x-2 px-4">
                            <img className='w-14 h-14 object-cover' src={logo} alt="" />
                            <span className="text-md font-extrabold text-white">{constant.SidebarContent.title}</span>
                        </h5>
                    </div>

                    <nav data-dev-hint="main navigation">
                        {currentState === 'homepage' ?
                            <>
                                <h5 className="cursor-pointer block py-3 px-4 transition duration-500 hover:bg-sky-900 bg-sky-900 hover:text-white text-white" onClick={(e) => handleclick(e, 'homepage')}> <FaThList className='absolute w-5 h-6 text-gray-400'></FaThList><span className="pl-12">{constant.SidebarContent.home}</span></h5>
                            </>
                            :
                            <>
                                <h5 className="cursor-pointer block py-3 px-4 text-black transition duration-500 hover:bg-sky-900 hover:text-white" onClick={(e) => handleclick(e, 'homepage')}> <FaThList className='absolute w-5 h-6 text-gray-400'></FaThList><span className="pl-12">{constant.SidebarContent.home}</span></h5>
                            </>
                        }
                        {currentState === 'manageuserpage' ?
                            <>
                                <h5 className="cursor-pointer block py-3 px-4 transition duration-500 hover:bg-sky-900 bg-sky-900 hover:text-white text-white" onClick={(e) => handleclick(e, 'manageuserpage')}><FaUsersCog className='absolute w-5 h-6 text-gray-400'></FaUsersCog><span className="pl-12">{constant.SidebarContent.manageuser}</span></h5>
                            </>
                            :
                            <>
                                <h5 className="cursor-pointer block py-3 px-4 text-black transition duration-500 hover:bg-sky-900 hover:text-white" onClick={(e) => handleclick(e, 'manageuserpage')}><FaUsersCog className='absolute w-5 h-6 text-gray-400'></FaUsersCog><span className="pl-12">{constant.SidebarContent.manageuser}</span></h5>
                            </>
                        }
                        {currentState === 'acceptriderpage' ?
                            <>
                                <h5 className="cursor-pointer block py-3 px-4 transition duration-500 hover:bg-sky-900 bg-sky-900 hover:text-white text-white" onClick={(e) => handleclick(e, 'acceptriderpage')}><FaMotorcycle className='absolute w-5 h-6 text-gray-400'></FaMotorcycle><span className="pl-12">{constant.SidebarContent.acceptrider}</span></h5>
                            </>
                            :
                            <>
                                <h5 className="cursor-pointer block py-3 px-4 text-black transition duration-500 hover:bg-sky-900 hover:text-white" onClick={(e) => handleclick(e, 'acceptriderpage')}><FaMotorcycle className='absolute w-5 h-6 text-gray-400'></FaMotorcycle><span className="pl-12">{constant.SidebarContent.acceptrider}</span></h5>
                            </>
                        }
                    </nav>
                </div>

                <nav data-dev-hint="second-main-navigation or footer navigation">
                    <h5 className="cursor-pointer block py-3.5 px-4 transition duration-500 text-black hover:bg-red-800 hover:text-white" onClick={logout}><FaSignOutAlt className='absolute w-5 h-6 text-gray-400'></FaSignOutAlt><span className="pl-12">{constant.SidebarContent.logout}</span></h5>
                </nav>
            </aside>
        </>
    )
}

export default SidebarComponent