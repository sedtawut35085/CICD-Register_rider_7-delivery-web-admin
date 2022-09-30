import PersonalinformationComponent from "./step/personalinformation"
import IdcardinformationComponent from "./step/idcardinformation"
import CarinformationComponent from "./step/carinformation"
import * as constant from '../../../constant/content'
import { useState } from "react"

const InformationComponent = ({ handlemodelconfirmacceptrider,handlemodelconfirmdenyrider,currentData, setIsCurrentSection }) => {

    const [currentstep, setCurrentstep] = useState(1);

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <PersonalinformationComponent currentData={currentData} />;
            case 2:
                return <IdcardinformationComponent currentData={currentData} />;
            case 3:
                return <CarinformationComponent currentData={currentData} />;
            default:
        }
    };

    const handleonclicknextpage = () => {
        const step = currentstep + 1
        setCurrentstep(step)
    }

    const handleonclickbackpage = () => {
        const step = currentstep - 1
        setCurrentstep(step)
    }

    const handleonclicksubmitpage = async () => {
        const step = 1
        setCurrentstep(step)
        setIsCurrentSection(false)
    }

    return (
        <>
            <div className="grid md:grid-cols-12 gap-5 pt-8">
                <div className="md:col-span-12">
                    <div className="border rounded-2xl pl-6 pr-6 pt-0 ">
                        {displayStep(currentstep)}
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-12 pt-1">
                <div className="md:col-span-12">
                    <div className="grid sm:grid-cols-3 md:gap-x-10 pt-4">
                        <div className="sm:col-span-1 flex justify-start button-center">
                            {currentstep !== 1 ?
                                <>
                                    <button onClick={handleonclickbackpage}
                                        className="cursor-pointer rounded-lg button-center sm:mb-4 bg-slate-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                                    >
                                        {constant.InformationuserContent.buttonback}
                                    </button>
                                </>
                                :
                                <>
                                    <button onClick={handleonclicksubmitpage}
                                        className="cursor-pointer rounded-lg button-center sm:mb-4 bg-slate-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                                    >
                                        {constant.InformationuserContent.buttonback}
                                    </button>
                                </>
                            }
                        </div>
                        <div className="sm:col-span-2 flex justify-end button-center">
                            {currentstep !== 3 ?
                                <>
                                    <button onClick={handleonclicknextpage}
                                        className="cursor-pointer rounded-lg button-center mb-4 bg-sky-800 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                                    >
                                        {constant.InformationuserContent.buttonnext}
                                    </button>
                                </>
                                :
                                <>
                                <div className="grid sm:grid-cols-3 md:gap-x-10 justify-end button-center">
                                    <button onClick={(e) => handlemodelconfirmacceptrider(e, currentData.userId,currentData.userName)}
                                        className="cursor-pointer rounded-lg button-center py-2 px-4 mb-4 font-semibold uppercase transition duration-200 ease-in-out bg-green-700 dark:text-green-500 text-white"
                                    >
                                        {constant.InformationuserContent.buttonaccept}
                                    </button>
                                    <button onClick={(e) => handlemodelconfirmdenyrider(e, currentData.userId,currentData.userName)}
                                        className="cursor-pointer rounded-lg button-center py-2 px-4 mb-4 font-semibold uppercase bg-red-700 dark:bg-red-500 transition duration-200 ease-in-out hover:bg-red-900 text-white"
                                    >
                                        {constant.InformationuserContent.buttondeny}
                                    </button>
                                    <button onClick={handleonclicksubmitpage}
                                        className="cursor-pointer rounded-lg button-center bg-sky-800 py-2 px-4 mb-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                                    >
                                        {constant.InformationuserContent.buttonsuccess}
                                    </button>
                                </div>
                                   
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InformationComponent