import * as constant from '../../../constant/content'
import { FaSearch, FaTimes, FaInfo, FaCheck } from 'react-icons/fa'
// import { getUser } from '../../../service';
import { useState } from 'react'
import { getdataeachUser } from '../../../service';
import InformationComponent from '../InformationComponent/index'
import ModelconfirmacceptriderComponent from '../../ModelComponent/Modelpopupconfirmacceptrider';
import ModelconfirmdenyComponent from '../../ModelComponent/Modelpopupconfirmdeny';

const AcceptriderComponent = ({ showModalConfirmDenyRider,setShowModalConfirmDenyRider,showModalConfirmAcceptRider,setShowModalConfirmAcceptRider,handleacceptuser,handleclosefeature, filterName, filterAtt, showfilter, querysearchuser, currentPage, setCurrentPage, handledenyuser, pageNumber, data, setData, page, pagesize, iscurrentSection, setIsCurrentSection }) => {

    const [currentData, setCurrentData] = useState("")
    const [currentId, setCurrentId] = useState("")
    const [currentName, setCurrentName] = useState("")
    const [startdata, setStartdata] = useState(0)
    const [finaldata, setFinaldata] = useState(pagesize)

    const handlemodelconfirmdenyrider = async (e, id, name) => {
        e.preventDefault();
        setCurrentId(id)
        setCurrentName(name)
        setShowModalConfirmDenyRider(true)
    }

    const handlemodelconfirmacceptrider = async (e, id, name) => {
        e.preventDefault();
        setCurrentId(id)
        setCurrentName(name)
        setShowModalConfirmAcceptRider(true)
    }

    const handlechangepage = async (e, page) => {
        e.preventDefault();
        setStartdata(pagesize * (page - 1))
        setFinaldata(pagesize * (page))
        setCurrentPage(page)

    }

    const handleclickdata = async (e, userid) => {
        e.preventDefault();
        var params = {
            "userId": userid
        }
        const reponse = await getdataeachUser(params)
        if (reponse.data.personalInformation === undefined) {
            reponse.data.personalInformation = {}
        }
        if (reponse.data.relevantPersonInformation === undefined) {
            reponse.data.relevantPersonInformation = {}
        }
        if (reponse.data.bookBankInformation === undefined) {
            reponse.data.bookBankInformation = {}
        }
        if (reponse.data.criminalHistoryInformation === undefined) {
            reponse.data.criminalHistoryInformation = {}
        }
        if (reponse.data.driverLicenseInformation === undefined) {
            reponse.data.driverLicenseInformation = {}
        }
        if (reponse.data.carInformation === undefined) {
            reponse.data.carInformation = {}
        }
        setCurrentData(reponse.data)
        setIsCurrentSection(true)
    }

    return (
        <>
            {iscurrentSection === true ?
                <>
                    <InformationComponent handlemodelconfirmacceptrider={handlemodelconfirmacceptrider} handlemodelconfirmdenyrider={handlemodelconfirmdenyrider} currentData={currentData} setIsCurrentSection={setIsCurrentSection} />
                    <ModelconfirmacceptriderComponent pagesize={pagesize} setStartdata={setStartdata} setFinaldata={setFinaldata} handleacceptuser={handleacceptuser} showModalConfirmAcceptRider={showModalConfirmAcceptRider} setShowModalConfirmAcceptRider={setShowModalConfirmAcceptRider} userId={currentId} userName={currentName}/>
                    <ModelconfirmdenyComponent pagesize={pagesize} setStartdata={setStartdata} setFinaldata={setFinaldata} handledenyuser={handledenyuser} showModalConfirmDenyRider={showModalConfirmDenyRider} setShowModalConfirmDenyRider={setShowModalConfirmDenyRider} userId={currentId} userName={currentName} />
                </>
                :
                <>
                    <div className="md:grid md:grid-cols-12 gap-5 pt-8">
                        <div className="md:col-span-12">
                            <ModelconfirmacceptriderComponent pagesize={pagesize} setStartdata={setStartdata} setFinaldata={setFinaldata} handleacceptuser={handleacceptuser} showModalConfirmAcceptRider={showModalConfirmAcceptRider} setShowModalConfirmAcceptRider={setShowModalConfirmAcceptRider} userId={currentId} userName={currentName}/>
                            <ModelconfirmdenyComponent pagesize={pagesize} setStartdata={setStartdata} setFinaldata={setFinaldata} handledenyuser={handledenyuser} showModalConfirmDenyRider={showModalConfirmDenyRider} setShowModalConfirmDenyRider={setShowModalConfirmDenyRider} userId={currentId} userName={currentName} />
                            {constant.ManageuserContent.title}
                            <div className="overflow-x-auto relative mt-4">
                                <form onSubmit={(e) => {
                                    setStartdata(0)
                                    setFinaldata(pagesize)
                                    querysearchuser(e)}} 
                                    className="xl:grid xl:grid-cols-12 flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
                                    <div className='flex flex-col xl:col-span-5'>
                                        <FaSearch className='absolute pt-2.5 pl-4 w-10 h-7 text-gray-500'></FaSearch>
                                        <input className='border-1 border-gray pl-12 pr-4 md:w-96 pb-2 pt-2 text-sm rounded-lg text-gray-500' type="text" name="search" required placeholder={constant.ManageuserContent.placeholder.search} />
                                    </div>
                                    <div className='flex flex-col px-2 xl:col-span-3'>
                                        <div className="border p-2 rounded-lg w-48">
                                            <select
                                                required id="exampleInputFilter" name='filter' type='text' className="block w-full pl-4 pb-0 text-sm text-gray-700 bg-white bg-clip-padding border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                {constant.optionsfilter.map((option, i) => (
                                                    <option disabled={option.disable} key={i} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex flex-col xl:col-span-2'>
                                        <button type='submit'
                                            className="cursor-pointer rounded-lg button-center bg-sky-800 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white text-sm"
                                        >
                                            {constant.ManageuserContent.buttonsearch}
                                        </button>
                                    </div>
                                </form>
                                {showfilter === true ?
                                    <>
                                        <div className="flex justify-between items-center pb-4 bg-white dark:bg-gray-900">

                                            <div className='flex flex-col'>
                                                <div
                                                    className="pl-12 rounded-lg button-center bg-white border-2 py-2 pr-6 font-semibold uppercase text-black transition duration-200 ease-in-out text-sm"
                                                >
                                                    {constant.ManageuserContent.filtername[0]} "{filterAtt}" {constant.ManageuserContent.filtername[1]} "{filterName}"
                                                </div>
                                                <FaTimes onClick={(e) => {
                                                    setStartdata(0)
                                                    setFinaldata(pagesize)
                                                    handleclosefeature(e)
                                                }} className='absolute pt-2.5 pl-2 w-10 h-7 text-gray-500 cursor-pointer hover:text-red-500'></FaTimes>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                    </>
                                }
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
                                    <thead className="text-md text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-6 w-[300px]">
                                                {constant.ManageuserContent.table.titleid}
                                            </th>
                                            <th scope="col" className="py-3 px-6 w-[140px]">
                                                {constant.ManageuserContent.table.titlename}
                                            </th>
                                            <th scope="col" className="py-3 px-6 w-[300px]">
                                                {constant.ManageuserContent.table.titleemail}
                                            </th>
                                            <th scope="col" className="py-3 px-6 w-[200px]">
                                                {constant.ManageuserContent.table.titlestatus}
                                            </th>
                                            <th scope="col" className="py-3 px-6 w-[200px]">
                                                {constant.ManageuserContent.table.titlemanage}
                                            </th>
                                        </tr>
                                    </thead>
                                    {data.slice(startdata, finaldata).map((data, i) => (
                                        <tbody key={i} >
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="py-4 px-6 font-medium text-gray-900 w-[300px]" >
                                                    {data.userId.length > 20 ? data.userId.slice(0, 20) + '...' : data.userId}
                                                </td>
                                                <td className="py-4 px-3 font-medium text-black">
                                                    {data.userName}
                                                </td>
                                                <td className="py-4 font-medium text-black px-6">
                                                    {data.userEmail}
                                                </td>
                                                <td className="py-4 font-medium text-black px-6">
                                                    {data.userStatus}
                                                </td>
                                                <td className="py-4 flex -ml-8">
                                                    <h4 onClick={(e) => handleclickdata(e, data.userId)} className="font-medium text-gray-600 dark:text-gray-500 hover:underline hover:text-gray-900 duration-500 transition cursor-pointer pr-10"><FaInfo className='absolute -ml-5 mt-0.5'></FaInfo>{constant.ManageuserContent.table.titleseeinfo}</h4>
                                                    <h4 onClick={(e) => handlemodelconfirmacceptrider(e, data.userId,data.userName)} className="font-medium text-green-800 dark:text-green-500 hover:underline cursor-pointer pr-8 hover:text-green-900 duration-500 transition"><FaCheck className='absolute -ml-5 mt-0.5'></FaCheck>{constant.ManageuserContent.table.titleaccept}</h4> 
                                                    <h4 onClick={(e) => handlemodelconfirmdenyrider(e, data.userId,data.userName)} className="pl-1 pr-2 font-medium text-red-800 dark:text-red-500 cursor-pointer hover:underline hover:text-red-900 duration-500 transition"><FaTimes className='absolute -ml-5 mt-0.5'></FaTimes>{constant.ManageuserContent.table.titledeny}</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                                     {data.length === 0 ?
                                        <>
                                            <tbody >
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <td className="py-4 px-6 font-medium text-gray-900 w-[300px]" >
                                                        {constant.ManageuserContent.dataempty}
                                                    </td>
                                                    
                                                </tr>
                                            </tbody>
                                        </>
                                        :
                                        <>
                                        </>
                                    }
                                </table>

                                <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                                    <div className="flex flex-1 items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-700">
                                                {constant.ManageuserContent.page.title} <span className='text-red-800'>{currentPage}</span> {constant.ManageuserContent.page.subtitle} {pageNumber}
                                            </p>
                                        </div>
                                        <div>
                                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                                {page.map((page, i) => (
                                                    <h4 key={i} onClick={(e) => handlechangepage(e, page)} className={`relative items-center border border-gray-300 px-4 py-2 text-sm font-medium focus:z-20 md:inline-flex cursor-pointer  ${page === currentPage ? "text-black bg-gray-200 hover:bg-gray-100 " : "text-gray-500 bg-white hover:bg-gray-50 "}`}>{page}</h4>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            }


        </>
    )
}

export default AcceptriderComponent