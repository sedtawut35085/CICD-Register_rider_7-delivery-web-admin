
import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import { getcountData, getUser, deleteuser, updateUser } from '../../service';
import toast, { Toaster } from 'react-hot-toast';
import * as constant from '../../constant/content'

import SidebarComponent from '../SidebarComponent'
import NavbarComponent from '../NavbarComponent'
import DashboardComponent from './MainComponent/Dashborad'
import ManageuserComponent from './MainComponent/Manageuser'
import AcceptriderComponent from './MainComponent/Acceptrider'
import './style.css'

const HomeComponent = () => {

    let { state } = useLocation();
    const [currentState, setCurrentState] = useState('homepage');
    const [currentPage, setCurrentPage] = useState(1)
    const [iscurrentSection, setIsCurrentSection] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [showModalConfirmAcceptRider, setShowModalConfirmAcceptRider] = useState(false);
    const [showModalConfirmDenyRider, setShowModalConfirmDenyRider] = useState(false);
    const [showfilter, setShowFilter] = useState(false);
    const [pageNumber, setpageNumber] = useState("");
    const [filterAtt, setFilterAtt] = useState("");
    const [filterAttValue, setFilterAttValue] = useState("");
    const [filterName, setFilterName] = useState("");
    const [data, setData] = useState("");
    const [datacount, setDataCount] = useState(state);
    const [page, setPage] = useState([]);
    const pagesize = 2;

    const handleclick = async (e, step) => {
        e.preventDefault();
        if (step === "homepage") {
            toast.promise(getcountData(), {
                loading: constant.HomeContent.loading.statusdashboard,
                success: (data) => {
                    setDataCount(data.data)
                    setCurrentState(step)
                    return constant.HomeContent.loading.successdashboard
                },
                error: constant.HomeContent.loading.errorodashboard,
            }) 
        } else if (step === "manageuserpage") {
            setIsCurrentSection(false)
            setPage([])
            toast.promise(getdatauser(), {
                loading: constant.HomeContent.loading.status,
                success: (data) => {
                    setData(data.data.users.Items)
                    setCurrentState(step)
                    setShowFilter(false) 
                    setCurrentPage(1)
                    return constant.HomeContent.loading.success
                },
                error: constant.HomeContent.loading.error,
            }) 
        } else {
            setIsCurrentSection(false)
            setPage([])
            toast.promise(getdatastatusregister(), {
                loading: constant.HomeContent.loading.status,
                success: (data) => {
                    setData(data.data.users.Items)
                    setCurrentState(step)
                    setShowFilter(false) 
                    setCurrentPage(1)
                    return constant.HomeContent.loading.success
                },
                error: constant.HomeContent.loading.error,
            }) 
        }
    }

    const getdatastatusregister = async () => {
        var params = {
            "searchinput": "ผู้สมัคร",
            "searchattribute": "userStatus"
        }
        let data = await getUser(params)
        const datalength = data.data.users.Count
        const pagenumber = datalength / pagesize
        for (let i = 1; i <= Math.ceil(pagenumber); i++) {
            setPage(old => [...old, i])
        }
        setpageNumber(Math.ceil(pagenumber))
        setCurrentPage(1)
        return data
    }

    const getdatauser = async () => {
        let response = await getcountData()
        const datalength = response.data.countuserstatusrider.ScannedCount
        const pagenumber = datalength / pagesize
        for (let i = 1; i <= Math.ceil(pagenumber); i++) {
            setPage(old => [...old, i])
        }
        var params = {
            "pagesize": pagesize,
            "pageNumber": 1
        }
        let responsedata = await getUser(params)
        setpageNumber(Math.ceil(pagenumber))
        return responsedata
    }

    const handledeleteuser = async (e, userid) => {
        e.preventDefault()
        setIsCurrentSection(false)
        setPage([])
        var params = {
            "userId": userid
        } 
        toast.promise(deletedatauser(params), {
            loading: constant.HomeContent.loading.statusdelete,
            success: (data) => {
                setData(data.data.users.Items)
                setCurrentPage(1)
                setShowModal(false)
                return constant.HomeContent.loading.successdelete
            },
            error: constant.HomeContent.loading.errordelete,
        }) 
    }

    const handledenyuser = async (e, userid) => {
        e.preventDefault()
        setIsCurrentSection(false)
        setPage([])
        var params = {
            "userId": userid
        } 
        toast.promise(denydatauser(params), {
            loading: constant.HomeContent.loading.statusdelete,
            success: (data) => {
                setData(data.data.users.Items)
                setCurrentPage(1)
                setShowModalConfirmDenyRider(false)
                return constant.HomeContent.loading.successdelete
            },
            error: constant.HomeContent.loading.errordelete,
        }) 
    }

    const handleacceptuser = async (e, userid) => {
        e.preventDefault()
        setIsCurrentSection(false)
        setPage([])
        var params = {
            "userId": userid
        } 
        var bodydata = {
            "updateKey": "userStatus",
            "updateValue": "ไรเดอร์"
        }
        toast.promise(updatestatususer(params, bodydata), {
            loading: constant.HomeContent.loading.statusupdate,
            success: (data) => {
                setData(data.data.users.Items)
                setCurrentPage(1)
                setShowModalConfirmAcceptRider(false)
                return constant.HomeContent.loading.successupdate
            },
            error: constant.HomeContent.loading.errorupdate,
        }) 
    }

    const updatestatususer = async (params,bodydata) => {
        await updateUser(params ,bodydata)
        let data
        //
        if(showfilter === true){
            data = await acceptridergetsearchdata()
        }else{
            data = await getdatastatusregister()
        }
        
        return data
    }

    const denydatauser = async (params) => {
        await deleteuser(params)
        let data
        if(showfilter === true){
            data = await acceptridergetsearchdata()
        }else{
            data = await getdatastatusregister()
        }
        return data
    }

    const deletedatauser = async (params) => {
        await deleteuser(params)
        let data
        if(showfilter === true){
            data = await getsearchdata()
        }else{
            data = await getdatauser()
        }
        return data
    }

    const getsearchdata = async () => {
        var params = {
            "searchinput": filterName,
            "searchattribute": filterAttValue
        }
        let data = await getUser(params)
        const datalength = data.data.users.Count
        const pagenumber = datalength / pagesize
        for (let i = 1; i <= Math.ceil(pagenumber); i++) {
            setPage(old => [...old, i])
        }
        setpageNumber(Math.ceil(pagenumber))
        setCurrentPage(1)
        setShowFilter(true)
        return data
    }

    const acceptridergetsearchdata = async () => {
        var params = {
            "searchinput": filterName,
            "searchattribute": filterAttValue,
            "secondattribute" : "userStatus",
            "secondvalue" : "ผู้สมัคร"
        }
        let data = await getUser(params)
        const datalength = data.data.users.Count
        const pagenumber = datalength / pagesize
        for (let i = 1; i <= Math.ceil(pagenumber); i++) {
            setPage(old => [...old, i])
        }
        setpageNumber(Math.ceil(pagenumber))
        setCurrentPage(1)
        setShowFilter(true)
        return data
    }

    const acceptriderquerysearchuser = async (e) => {
        e.preventDefault();
        setPage([])
        const { search, filter } = e.target.elements;
        setFilterAttValue(filter.value)
        setFilterName(search.value)
        if(filter.value === "userName"){
            setFilterAtt("ชื่อผู้ใช้งาน")
        }else if(filter.value === "userId"){
            setFilterAtt("เลขที่ผู้ใช้งาน")
        }else{
            setFilterAtt("อีเมลผู้ใช้งาน")
        }
        var params = {
            "searchinput": search.value,
            "searchattribute": filter.value,
            "secondattribute" : "userStatus",
            "secondvalue" : "ผู้สมัคร"
        }
        toast.promise(getsearchuser(params), {
            loading: constant.HomeContent.loading.statussearch,
            success: (data) => {
                const datalength = data.data.users.Count
                const pagenumber = datalength / pagesize
                for (let i = 1; i <= Math.ceil(pagenumber); i++) {
                    setPage(old => [...old, i])
                }
                setData(data.data.users.Items)
                setpageNumber(Math.ceil(pagenumber))
                setCurrentPage(1)
                setShowFilter(true)
                return constant.HomeContent.loading.successsearch
            },
            error: constant.HomeContent.loading.errorsearch,
        }) 
    }

    const querysearchuser = async (e) => {
        e.preventDefault();
        setPage([])
        const { search, filter } = e.target.elements;
        setFilterAttValue(filter.value)
        setFilterName(search.value)
        if(filter.value === "userName"){
            setFilterAtt("ชื่อผู้ใช้งาน")
        }else if(filter.value === "userId"){
            setFilterAtt("เลขที่ผู้ใช้งาน")
        }else{
            setFilterAtt("อีเมลผู้ใช้งาน")
        }
        var params = {
            "searchinput": search.value,
            "searchattribute": filter.value
        }
        toast.promise(getsearchuser(params), {
            loading: constant.HomeContent.loading.statussearch,
            success: (data) => {
                const datalength = data.data.users.Count
                const pagenumber = datalength / pagesize
                for (let i = 1; i <= Math.ceil(pagenumber); i++) {
                    setPage(old => [...old, i])
                }
                setData(data.data.users.Items)
                setpageNumber(Math.ceil(pagenumber))
                setCurrentPage(1)
                setShowFilter(true)
                return constant.HomeContent.loading.successsearch
            },
            error: constant.HomeContent.loading.errorsearch,
        }) 
    }

    const getsearchuser = async (params) => {
        let data = await getUser(params)
        return data
    }

    const handleclosefeatureacceptrider = async (e) => {
        e.preventDefault()
        setPage([])
        toast.promise(getdatastatusregister(), {
            loading: constant.HomeContent.loading.status,
            success: (data) => {
                setData(data.data.users.Items)
                setShowFilter(false) 
                setCurrentPage(1)
                return constant.HomeContent.loading.success
            },
            error: constant.HomeContent.loading.error
        }) 
    }

    const handleclosefeature = async (e) => {
        e.preventDefault()
        setPage([])
        toast.promise(getdatauser(), {
            loading: constant.HomeContent.loading.status,
            success: (data) => {
                setData(data.data.users.Items)
                setShowFilter(false) 
                setCurrentPage(1)
                return constant.HomeContent.loading.success
            },
            error: constant.HomeContent.loading.error
        }) 
    }

    return (
        <div className="relative min-h-screen md:flex">
            <SidebarComponent handleclick={handleclick} currentState={currentState} />
            <main id="content" className="flex-1 lg:px-0">
                <NavbarComponent />
                <div className="max-w-7xl mx-auto">
                    <div className="px-4 sm:px-0">
                        <Toaster
                            toastOptions={{
                                className: 'text-red-400 text-sm',
                                style: {
                                    background: '#008080',
                                    color: '#ffffff',
                                }
                            }}
                        />
                        {currentState === 'homepage' ?
                            <>
                                <DashboardComponent datacount={datacount} />
                            </>
                            :
                            <>
                            </>
                        }
                        {currentState === 'manageuserpage' ?
                            <>
                                <ManageuserComponent handleclosefeature={handleclosefeature} filterName={filterName} filterAtt={filterAtt} showfilter={showfilter} querysearchuser={querysearchuser} handledeleteuser={handledeleteuser} showModal={showModal} setShowModal={setShowModal} currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} data={data} setData={setData} page={page} pagesize={pagesize} iscurrentSection={iscurrentSection} setIsCurrentSection={setIsCurrentSection} />
                            </>
                            :
                            <>
                            </>
                        }
                        {currentState === 'acceptriderpage' ?
                            <>
                                <AcceptriderComponent showModalConfirmDenyRider={showModalConfirmDenyRider} setShowModalConfirmDenyRider={setShowModalConfirmDenyRider} showModalConfirmAcceptRider={showModalConfirmAcceptRider} setShowModalConfirmAcceptRider={setShowModalConfirmAcceptRider} handleacceptuser={handleacceptuser} handleclosefeature={handleclosefeatureacceptrider} filterName={filterName} filterAtt={filterAtt} showfilter={showfilter} querysearchuser={acceptriderquerysearchuser} handledenyuser={handledenyuser} showModal={showModal} setShowModal={setShowModal} currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} data={data} setData={setData} page={page} pagesize={pagesize} iscurrentSection={iscurrentSection} setIsCurrentSection={setIsCurrentSection}/>
                            </>
                            :
                            <>
                            </>
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}


export default HomeComponent