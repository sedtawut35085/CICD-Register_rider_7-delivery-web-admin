import { AuthContext } from '../../auth/index'
import React, { useContext } from 'react'

const NavbarComponent = () => {
    const { currentEmailUser} = useContext(AuthContext);

    return (
        <div className='mb-8'>
            <nav className="bg-white border-gray-200 px-0 sm:px-4 py-1 rounded dark:bg-gray-900">
                <div className="md:px-5 py-2 flex flex-wrap justify-between items-center mx-auto">
                    <div className="flex items-center">
                        {/* <img src={logo} className="mr-3 h-6 sm:h-9" alt=""/> */}
                        {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ดดดด</span> */}
                    </div>
                    <div className="flex items-center md:order-2 dropdown md:border-l-2 md:border-sky-900 pl-4">
                        <button type="button" className="flex mr-3 text-sm py-2 bg-gray-100 px-4 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <h5 className='py-1 px-1' >{currentEmailUser}</h5> 
                        </button>
                    </div>
                
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent