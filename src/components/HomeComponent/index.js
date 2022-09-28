
import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import { getcountData, getUser, deleteuser } from '../../service';
import toast, { Toaster } from 'react-hot-toast';
import * as constant from '../../constant/content'

import SidebarComponent from '../SidebarComponent'
import NavbarComponent from '../NavbarComponent'
import DashboardComponent from './MainComponent/Dashborad'
import ManageuserComponent from './MainComponent/Manageuser'
import AcceptriderComponent from './MainComponent/Acceptrider'
import './style.css'

const HomeComponent = () => {

    //yesterday i develope on task information on function search and filter

    const { state } = useLocation();
    const [currentState, setCurrentState] = useState('homepage');
    const [currentPage, setCurrentPage] = useState(1)
    const [iscurrentSection, setIsCurrentSection] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [showfilter, setShowFilter] = useState(false);
    const [pageNumber, setpageNumber] = useState("");
    const [filterAtt, setFilterAtt] = useState("");
    const [filterName, setFilterName] = useState("");
    const [data, setData] = useState("");
    const [page, setPage] = useState([]);
    const pagesize = 5;
    
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

    const getsearchuser = async (params) => {
        let responsedata = await getUser(params)
        setpageNumber(1)
        return responsedata
    }

    const deletedatauser = async (params) => {
        await deleteuser(params)
        setPage([])
        let responsedata = await getdatauser()
        return responsedata
    }

    const fetchData = async () => {
        return await getdatauser().then(
            (response) => {
                return response;
            }
        ).then(
            (data) => {
                return data;
            }
        ).catch(
            (error) => {
                console.error(error);
            }
        )
    }

    const fetchsearchData = async (params) => {
        return await getsearchuser(params).then(
            (response) => {
                return response;
            }
        ).then(
            (data) => {
                return data;
            }
        ).catch(
            (error) => {
                console.error(error);
            }
        )
    }

    const deleteData = async (params) => {
        return await deletedatauser(params).then(
            (response) => {
                return response;
            }
        ).then(
            (data) => {
                return data;
            }
        ).catch(
            (error) => {
                console.error(error);
            }
        )
    }

    const querysearchuser = async (e) => {
        e.preventDefault();
        setPage([])
        const { search, filter } = e.target.elements;
        if(filter.value === "userName"){
            setFilterAtt("ชื่อผู้ใช้งาน")
        }else if(filter.value === "userId"){
            setFilterAtt("เลขที่ผู้ใช้งาน")
        }else{
            setFilterAtt("อีเมลผู้ใช้งาน")
        }
        setFilterName(search.value)
        var params = {
            "searchinput": search.value,
            "searchattribute": filter.value
        }
        toast.promise(fetchsearchData(params), {
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
                return constant.HomeContent.loading.successsearch
            },
            error: constant.HomeContent.loading.errorsearch,
        })
        setCurrentPage(1)
        setShowFilter(true) 
    }

    const handleclick = async (e, step) => {
        e.preventDefault();
        setIsCurrentSection(false)
        setPage([])
        if (step === "homepage") {
            setCurrentState(step)
        } else if (step === "manageuserpage") {
            toast.promise(fetchData(), {
                loading: constant.HomeContent.loading.status,
                success: (data) => {
                    setData(data.data.users)
                    setCurrentState(step)
                    setShowFilter(false) 
                    return constant.HomeContent.loading.success
                },
                error: constant.HomeContent.loading.error,
            })
            setCurrentPage(1)
        } else {
            setCurrentState(step)
        }
    }

    const handleclosefeature = async (e) => {
        e.preventDefault()
        setPage([])
        toast.promise(fetchData(), {
            loading: constant.HomeContent.loading.status,
            success: (data) => {
                setData(data.data.users)
                setShowFilter(false) 
                return constant.HomeContent.loading.success
            },
            error: constant.HomeContent.loading.error
        })
        setCurrentPage(1)
    }

    const handledeleteuser = async (e, userid) => {
        e.preventDefault()
        var params = {
            "userId": userid
        }
        setIsCurrentSection(false)
        toast.promise(deleteData(params), {
            loading: constant.HomeContent.loading.statusdelete,
            success: (data) => {
                setData(data.data.users)
                setShowModal(false)
                return constant.HomeContent.loading.successdelete
            },
            error: constant.HomeContent.loading.errordelete,
        })
        setCurrentPage(1)
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
                                <DashboardComponent state={state} />
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
                                <AcceptriderComponent />
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