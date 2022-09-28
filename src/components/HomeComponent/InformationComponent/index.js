import PersonalinformationComponent from "./step/personalinformation"
import IdcardinformationComponent from "./step/idcardinformation"
import CarinformationComponent from "./step/carinformation"

import { useState } from "react"

const InformationComponent = ({ currentData, setIsCurrentSection}) => {

    const [currentstep, setCurrentstep] = useState(1);

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <PersonalinformationComponent currentData={currentData}/>;
            case 2:
                return <IdcardinformationComponent currentData={currentData}/>;
            case 3:
                return <CarinformationComponent currentData={currentData}/>;
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
                                        className="cursor-pointer rounded-lg button-center bg-sky-800 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                                    >
                                        กลับ
                                    </button>
                                </>
                                :
                                <>
                                    <button onClick={handleonclicksubmitpage}
                                        className="cursor-pointer rounded-lg button-center bg-sky-800 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                                    >
                                        กลับ
                                    </button>
                                </>
                            }
                        </div>
                        <div className="sm:col-span-2 flex justify-end button-center">
                            {currentstep !== 3 ?
                                <>
                                    <button onClick={handleonclicknextpage}
                                        className="cursor-pointer rounded-lg button-center bg-sky-400 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                                    >
                                        ถัดไป
                                    </button>
                                </>
                                :
                                <>
                                    <button onClick={handleonclicksubmitpage}
                                        className="cursor-pointer rounded-lg button-center bg-sky-400 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                                    >
                                        เรียบร้อย
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <div className="">
        //     {currentUserid}
        //     <button on>

        //     </button>
        // </div>
    )
}

export default InformationComponent