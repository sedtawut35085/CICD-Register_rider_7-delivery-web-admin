import { FaUserAlt, FaCheck } from 'react-icons/fa'
import * as constant from '../../../constant/content'

const DashboardComponent = ({state}) => {

    return (
        <div >
            <div>
                <span>{constant.DashboardContent.title}</span>
            </div>
            <div className="grid md:grid-cols-12 gap-5 pt-8">
                <div className="md:col-span-9">
                    <div className="border rounded-2xl p-10 bg-sky-900">
                        <div className="grid md:grid-cols-2 md:gap-x-10 ">
                            <div className='flex flex-col py-1'>
                                <div className="relative z-0 mb-6 w-full group">
                                    <FaUserAlt className='absolute w-8 h-7 text-white bg-sky-800 p-1.5 rounded-md mt-0'></FaUserAlt>
                                    <div className="text-gray-200 text-sm pl-12 pt-1">{constant.DashboardContent.ridercomponent.title}</div>
                                </div>
                            </div>
                            <div className='flex flex-col py-1 statusrider'>
                                <div className="relative z-0 mb-2 w-full group">
                                    <div className="text-gray-200 mt-1.5 text-sm">{constant.DashboardContent.ridercomponent.statususer} <span className='text-red-400'>{state.countuserstatusrider.ScannedCount}</span> {constant.DashboardContent.ridercomponent.noun}</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-1 md:gap-x-10 ">
                            <div className='py-2'>
                                <div className="z-0 mb-6 w-full">
                                    <div className="text-red-200 w-full"><hr /></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-x-10 ">
                            <div className='flex flex-col '>
                                <div className="relative z-0 w-full group">
                                    <div className="text-gray-200 text-sm">{constant.DashboardContent.ridercomponent.statusrider}</div>
                                </div>
                            </div>
                            <div className='flex flex-col statusrider'>
                                <div className="relative z-0 w-full group">
                                    <div className="text-red-400 text-sm">{state.countuserstatusrider.Count}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-2xl p-10 bg-sky-900 mt-4">
                        <div className="grid md:grid-cols-2 md:gap-x-10 ">
                            <div className='flex flex-col py-1'>
                                <div className="relative z-0 mb-6 w-full group">
                                    <FaCheck className='absolute w-8 h-7 text-white bg-sky-800 p-1.5 rounded-md mt-0'></FaCheck>
                                    <div className="text-gray-200 text-sm pl-12 pt-1">{constant.DashboardContent.registercomponent.title}</div>
                                </div>
                            </div>
                          
                        </div>
                        <div className="grid md:grid-cols-1 md:gap-x-10 ">
                            <div className='py-2'>
                                <div className="z-0 mb-6 w-full">
                                    <div className="text-red-200 w-full"><hr /></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-x-10 ">
                            <div className='flex flex-col '>
                                <div className="relative z-0 w-full group">
                                    <div className="text-gray-200 text-sm">{constant.DashboardContent.registercomponent.title}</div>
                                </div>
                            </div>
                            <div className='flex flex-col statusrider'>
                                <div className="relative z-0 w-full group">
                                    <div className="text-red-400 text-sm">{state.countuserstatusregisteration.Count} </div>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent