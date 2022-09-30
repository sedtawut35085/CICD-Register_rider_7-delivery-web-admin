import * as constant from '../../../constant/content'

const ModelconfirmacceptriderComponent = ({ pagesize,setStartdata,setFinaldata,handleacceptuser,showModalConfirmAcceptRider,setShowModalConfirmAcceptRider,userId,userName}) => {

    return (
        <>
            {showModalConfirmAcceptRider ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-xl font-semibold">
                                        {constant.ModelconfirmacceptContent.title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModalConfirmAcceptRider(false)}
                                    >
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto min-w-[500px]">
                                    <p className="my-1 text-slate-500 text-lg leading-relaxed text-center">
                                       {constant.ModelconfirmacceptContent.des[0]} <span className="text-black">{userId}</span> <br />
                                       {constant.ModelconfirmacceptContent.des[1]}  <span className="text-black">{userName || userId} </span>{constant.ModelconfirmacceptContent.des[2]} 
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-white bg-sky-800 background-transparent font-bold uppercase px-6 py-2 text-sm rounded mr-2 outline-none focus:outline-none ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModalConfirmAcceptRider(false)}
                                    >
                                        {constant.ModelconfirmacceptContent.buttonclose} 
                                    </button>
                                    <button
                                        className="bg-red-500 text-white hover:bg-red-800 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={(e)=> {
                                            setStartdata(0)
                                            setFinaldata(pagesize)
                                            handleacceptuser(e, userId)}}
                                    >
                                        {constant.ModelconfirmacceptContent.buttonsubmit} 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default ModelconfirmacceptriderComponent