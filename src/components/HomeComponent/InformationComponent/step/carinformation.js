import { useState } from "react";
import ModelComponent from "../../../ModelComponent/ModelpopupImage.js";
import noimagepicture from '../../../../assets/noimage.webp'
import * as constant from '../../../../constant/content'

const CarinformationComponent = ({ handlemodelconfirmacceptrider,handlemodelconfirmdenyrider,currentData }) => {

    const [style, setStyle] = useState(false);
    const [nameimage, setNameimage] = useState("");
    const [imageURL, setImageURL] = useState("");

    const changeStyle = (name, imageurl) => {
        setImageURL(imageurl)
        setNameimage(name)
        setStyle(!style);
    };

    return (
        <div>
            <ModelComponent style={style} changeStyle={changeStyle} image={imageURL} nameimage={nameimage} />
            <div className="grid sm:grid-cols-3 md:gap-x-10">
                <div className='flex flex-col py-2'>
                    <div className="py-4">
                        <h1 >{constant.CarInformationuserContent.label.title}</h1>
                    </div>
                    <div className="relative z-0 mb-6 w-full group box-center">
                        <div className="pl-2 py-2 text-sm">{constant.CarInformationuserContent.label.carType} : {currentData.carInformation.carType || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.CarInformationuserContent.label.carNumber} : {currentData.carInformation.carNumber || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.CarInformationuserContent.label.typeofCarsign} : {currentData.carInformation.typeofCarsign || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.CarInformationuserContent.label.carCountry} : {currentData.carInformation.carCountry || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.CarInformationuserContent.label.carBrand} : {currentData.carInformation.carBrand || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.CarInformationuserContent.label.carColor} : {currentData.carInformation.carColor || "-"} </div>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <div className="relative z-0 mb-6 w-full group box-center pt-16 box-padding-top">
                        <div className="pl-2 py-2 text-sm">{constant.CarInformationuserContent.label.licenseIssueDate} : {currentData.carInformation.licenseIssueDate || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.CarInformationuserContent.label.licenseExpireDate} :  {currentData.carInformation.licenseExpireDate || "-"} </div>
                        <div className="pl-2 py-2 text-sm">{constant.CarInformationuserContent.label.licenseName} : {currentData.carInformation.licenseName || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.CarInformationuserContent.label.taxIssueDate} : {currentData.carInformation.taxIssueDate || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.CarInformationuserContent.label.taxExpireDate} : {currentData.carInformation.taxExpireDate || "-"}</div>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <div className="py-4">
                        <h1 >{constant.DriverlicenseInformationuserContent.label.title}</h1>
                    </div>
                    <div className="relative z-0 mb-6 w-full group box-center">
                        <div className="pl-2 py-2 text-sm">{constant.DriverlicenseInformationuserContent.label.numberdriverLicense} : {currentData.driverLicenseInformation.numberdriverLicense || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.DriverlicenseInformationuserContent.label.typecardriverLicense} :  {currentData.driverLicenseInformation.typecardriverLicense || "-"}</div>
                        <div className="pl-2 py-2 text-sm">{constant.DriverlicenseInformationuserContent.label.issuedatedriverLicense} : {currentData.driverLicenseInformation.issuedatedriverLicense || "-"}</div>
                        {currentData.driverLicenseInformation.typedriverLicense !== "special" ?
                            <>
                                <div className="pl-2 py-2 text-sm">{constant.DriverlicenseInformationuserContent.label.expiredatedriverLicense} : {currentData.driverLicenseInformation.expiredatedriverLicense || "-"}</div>
                            </>
                            :
                            <>
                                {currentData.driverLicenseInformation.issmartcarddriverlicense !== true?
                                    <>
                                        <div className="pl-2 py-2 text-sm">{constant.DriverlicenseInformationuserContent.label.normalcarddriverlicense}</div>
                                    </>
                                    :
                                    <>
                                        <div className="pl-2 py-2 text-sm">{constant.DriverlicenseInformationuserContent.label.smartcarddriverlicense}</div>
                                    </>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className="py-2">
                <h1>{constant.DriverlicenseInformationuserContent.label.titlepicture}</h1>
            </div>
            <div className={`${currentData.driverLicenseInformation.typedriverLicense === "special" ? "sm:grid-cols-4" : "sm:grid-cols-3"} grid md:gap-x-10 pt-2`}>
                <div className='flex flex-col py-2 text-center'>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">
                            <span>{constant.DriverlicenseInformationuserContent.label.picture}</span>
                            {currentData.driverLicenseInformation.driverLicensePhoto === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                    <img src={currentData.driverLicenseInformation.driverLicensePhoto || "-"} alt="..." className="object-cover shadow w-32 h-32 rounded border-none mt-4" />
                                    <h1 onClick={() => changeStyle('รูปภาพใบขับขี่ตลอดชีพ', currentData.driverLicenseInformation.driverLicensePhoto)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">{constant.DriverlicenseInformationuserContent.button}</h1>
                                </>
                            }  
                        </label>
                    </div>
                </div>
                {currentData.driverLicenseInformation.typedriverLicense === "special" ?
                    <div className='flex flex-col py-2 text-center'>
                        <div className="relative z-0 mb-6 w-full group">
                            <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">
                                <span>{constant.DriverlicenseInformationuserContent.label.pictureconfirmfriverlicense[0]}<br />{constant.DriverlicenseInformationuserContent.label.pictureconfirmfriverlicense[1]}</span>
                                {currentData.driverLicenseInformation.documentdriverLicensePhoto === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                    <img src={currentData.driverLicenseInformation.documentdriverLicensePhoto || "-"} alt="..." className="object-cover shadow w-32 h-32 rounded border-none mt-4" />
                                    <h1 onClick={() => changeStyle('รูปภาพยืนยันใบขับขี่ตลอดชีพ', currentData.driverLicenseInformation.documentdriverLicensePhoto)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">{constant.DriverlicenseInformationuserContent.button}</h1>
                                </>
                                } 
                            </label>
                        </div>
                    </div>
                    :
                    <>
                    </>
                }
                <div className='flex flex-col py-2 text-center'>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">
                            <span>{constant.CarInformationuserContent.label.taxpicture}</span>
                            {currentData.carInformation.TaxPhotp === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                    <img src={currentData.carInformation.TaxPhotp || "-"} alt="..." className="object-cover shadow w-32 h-32 rounded border-none mt-4" />
                                    <h1 onClick={() => changeStyle('รูปภาพรายการเสียภาษี', currentData.carInformation.TaxPhotp)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">{constant.CarInformationuserContent.button}</h1>
                                </>
                            } 
                        </label>
                    </div>
                </div>
                <div className='flex flex-col py-2 text-center'>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">
                            <span>{constant.CarInformationuserContent.label.licencePhoto}</span>
                            {currentData.carInformation.LicencePhoto === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                    <img src={currentData.carInformation.LicencePhoto || "-"} alt="..." className="object-cover shadow w-32 h-32 rounded border-none mt-4" />
                                    <h1 onClick={() => changeStyle('รูปภาพจดทะเบียนรถ', currentData.carInformation.LicencePhoto)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">{constant.CarInformationuserContent.button}</h1>
                                </>
                            }
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarinformationComponent