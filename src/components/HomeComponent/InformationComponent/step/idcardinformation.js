import { useState } from "react";
import ModelComponent from "../../../ModelComponent/ModelpopupImage.js";
import noimagepicture from '../../../../assets/noimage.webp'
import * as constant from '../../../../constant/content'

const IdcardinformationComponent = ({currentData}) => {

    const [style, setStyle] = useState(false);
    const [nameimage, setNameimage] = useState("");
    const [imageURL, setImageURL] = useState("");

    const changeStyle = (name,imageurl) => {
        setImageURL(imageurl)
        setNameimage(name)
        setStyle(!style);
    };

    return (
        <div>
            <ModelComponent style={style} changeStyle={changeStyle} image={imageURL} nameimage={nameimage}/>
            <div className="py-4">
                <h1>{constant.IdcardInformationuserContent.label.title}</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:gap-x-10">
                <div className='flex flex-col py-2 box-padding pl-14'>
                    <div className="relative z-0 mb-6 w-full group box-center">
                        <div className="pl-2 py-2 text-sm">{constant.IdcardInformationuserContent.label.name} : {currentData.personalInformation.name || "-"}  {currentData.personalInformation.surname || null}</div>
                        <div className="pl-2 py-2 text-sm">{constant.IdcardInformationuserContent.label.cardNumber} : {currentData.personalInformation.cardNumber || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.IdcardInformationuserContent.label.cardIssueDate} : {currentData.personalInformation.cardIssueDate || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.IdcardInformationuserContent.label.cardExpireDate} : {currentData.personalInformation.cardExpireDate || "-"}</div>
                    </div>
                </div>
                <div className='flex flex-col py-2 box-padding pl-14'>
                    <div className="relative z-0 mb-6 w-full group box-center">
                        <div className="pl-2 py-2 text-sm">{constant.BookbankInformationuserContent.label.name} : {currentData.bookBankInformation.name || "-"}  {currentData.bookBankInformation.surname || null}</div>
                        <div className="pl-2 py-2 text-sm">{constant.BookbankInformationuserContent.label.bookbankNumber} : {currentData.bookBankInformation.numberbookbank || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.BookbankInformationuserContent.label.namebank} : {currentData.bookBankInformation.namebank || "-"}</div>
                    </div>
                </div>
            </div>
            <div className="pb-2">
                <h1>{constant.IdcardInformationuserContent.label.titlepicture}</h1>
            </div>
            <div className="grid sm:grid-cols-3 md:gap-x-10 pt-2">
                <div className='flex flex-col py-2 text-center'>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">
                            <span>{constant.IdcardInformationuserContent.label.picture}</span>
                            {currentData.personalInformation.cardPhoto === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                     <img src={currentData.personalInformation.cardPhoto} alt="..." className="object-cover shadow w-32 h-32 rounded border-none mt-4" />
                                     <h1 onClick={()=> changeStyle('รูปภาพบัตรประชาชน',currentData.personalInformation.cardPhoto)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">{constant.IdcardInformationuserContent.button}</h1>
                                </>
                            }        
                        </label>
                    </div>
                </div>
                <div className='flex flex-col py-2 text-center'>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">
                            <span>{constant.BookbankInformationuserContent.label.picture}</span>
                            {currentData.bookBankInformation.bookbankPhoto === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                    <img src={currentData.bookBankInformation.bookbankPhoto} alt="..." className="object-cover shadow w-32 h-32 rounded border-none mt-4" />
                                    <h1 onClick={()=> changeStyle('รูปภาพบัญชีธนาคาร',currentData.bookBankInformation.bookbankPhoto)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">{constant.BookbankInformationuserContent.button}</h1>
                                </>
                            } 
                        </label>
                    </div>
                </div>
                <div className='flex flex-col py-2 text-center'>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">
                            <span>{constant.CriminalhistoryInformationuserContent.label.picture}</span>
                            {currentData.criminalHistoryInformation.criminalhistoryPhoto === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                    <img src={currentData.criminalHistoryInformation.criminalhistoryPhoto} alt="..." className="object-cover shadow w-32 h-32 rounded border-none mt-4" />
                                    <h1 onClick={()=> changeStyle('รูปภาพประวัติอาญชกรรม',currentData.criminalHistoryInformation.criminalhistoryPhoto)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">{constant.CriminalhistoryInformationuserContent.button}</h1>
                                </>
                            }
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IdcardinformationComponent