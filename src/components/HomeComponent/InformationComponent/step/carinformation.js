import { useState } from "react";
import ModelComponent from "../../../ModelComponent/ModelpopupImage.js";
import noimagepicture from '../../../../assets/noimage.webp'

const CarinformationComponent = ({ currentData }) => {

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
                        <h1 >ข้อมูลยานพาหนะ</h1>
                    </div>
                    <div className="relative z-0 mb-6 w-full group box-center">
                        <div className="pl-2 py-2 text-sm">ชนิดของยานพาหนะ : {currentData.carInformation.carType || "-"}</div>
                        <div className="pl-2 py-2 text-sm">เลขทะเบียน : {currentData.carInformation.carNumber || "-"}</div>
                        <div className="pl-2 py-2 text-sm">ประเภทป้าย : {currentData.carInformation.typeofCarsign || "-"}</div>
                        <div className="pl-2 py-2 text-sm">จังหวัดที่จดทะเบียนรถ : {currentData.carInformation.carCountry || "-"}</div>
                        <div className="pl-2 py-2 text-sm">ยี่ห้อ : {currentData.carInformation.carBrand || "-"}</div>
                        <div className="pl-2 py-2 text-sm">สีรถ : {currentData.carInformation.carColor || "-"} </div>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <div className="relative z-0 mb-6 w-full group box-center pt-16 box-padding-top">
                        <div className="pl-2 py-2 text-sm">วันที่ออก พรบ. : {currentData.carInformation.licenseIssueDate || "-"}</div>
                        <div className="pl-2 py-2 text-sm">วันหมดอายุ พรบ. :  {currentData.carInformation.licenseExpireDate || "-"} </div>
                        <div className="pl-2 py-2 text-sm">ชื่อผู้ถือกรมสิทธิ์ : {currentData.carInformation.licenseName || "-"}</div>
                        <div className="pl-2 py-2 text-sm">วันที่เสียภาษี : {currentData.carInformation.taxIssueDate || "-"}</div>
                        <div className="pl-2 py-2 text-sm">วันที่ครบกำหนดเสียภาษี : {currentData.carInformation.taxExpireDate || "-"}</div>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <div className="py-4">
                        <h1 >ข้อมูลใบขับขี่</h1>
                    </div>
                    <div className="relative z-0 mb-6 w-full group box-center">
                        <div className="pl-2 py-2 text-sm">เลขที่ใบขับขี่ : {currentData.driverLicenseInformation.numberdriverLicense || "-"}</div>
                        <div className="pl-2 py-2 text-sm">ประเภทใบขับขี่ :  {currentData.driverLicenseInformation.typecardriverLicense || "-"}</div>
                        <div className="pl-2 py-2 text-sm">วันที่ออกบัตร : {currentData.driverLicenseInformation.issuedatedriverLicense || "-"}</div>
                        {currentData.driverLicenseInformation.typedriverLicense !== "special" ?
                            <>
                                <div className="pl-2 py-2 text-sm">วันที่บัตรหมดอายุ : {currentData.driverLicenseInformation.expiredatedriverLicense || "-"}</div>
                            </>
                            :
                            <>
                                {currentData.driverLicenseInformation.issmartcarddriverlicense !== true?
                                    <>
                                        <div className="pl-2 py-2 text-sm">ใบขับขี่ชนิด : แบบธรรมดา</div>
                                    </>
                                    :
                                    <>
                                        <div className="pl-2 py-2 text-sm">ใบขับขี่ชนิด : แบบสมาร์ตการ์ด</div>
                                    </>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className="py-2">
                <h1>รูปภาพ</h1>
            </div>
            <div className={`${currentData.driverLicenseInformation.typedriverLicense === "special" ? "sm:grid-cols-4" : "sm:grid-cols-3"} grid md:gap-x-10 pt-2`}>
                <div className='flex flex-col py-2 text-center'>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">
                            <span>รูปภาพใบขับขี่</span>
                            {currentData.driverLicenseInformation.driverLicensePhoto === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                    <img src={currentData.driverLicenseInformation.driverLicensePhoto || "-"} alt="..." className="object-cover shadow w-32 h-32 rounded border-none mt-4" />
                                    <h1 onClick={() => changeStyle('รูปภาพใบขับขี่ตลอดชีพ', currentData.driverLicenseInformation.driverLicensePhoto)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">คลิกเพื่อดูรูปภาพ</h1>
                                </>
                            }  
                        </label>
                    </div>
                </div>
                {currentData.driverLicenseInformation.typedriverLicense === "special" ?
                    <div className='flex flex-col py-2 text-center'>
                        <div className="relative z-0 mb-6 w-full group">
                            <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">
                                <span>รูปภาพยืนยันใบขับขี่<br />ตลอดชีพ</span>
                                {currentData.driverLicenseInformation.documentdriverLicensePhoto === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                    <img src={currentData.driverLicenseInformation.documentdriverLicensePhoto || "-"} alt="..." className="object-cover shadow w-32 h-32 rounded border-none mt-4" />
                                    <h1 onClick={() => changeStyle('รูปภาพยืนยันใบขับขี่ตลอดชีพ', currentData.driverLicenseInformation.documentdriverLicensePhoto)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">คลิกเพื่อดูรูปภาพ</h1>
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
                            <span>รูปภาพรายการเสียภาษี</span>
                            {currentData.carInformation.TaxPhotp === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                    <img src={currentData.carInformation.TaxPhotp || "-"} alt="..." className="object-cover shadow w-32 h-32 rounded border-none mt-4" />
                                    <h1 onClick={() => changeStyle('รูปภาพรายการเสียภาษี', currentData.carInformation.TaxPhotp)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">คลิกเพื่อดูรูปภาพ</h1>
                                </>
                            } 
                        </label>
                    </div>
                </div>
                <div className='flex flex-col py-2 text-center'>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">
                            <span>รูปภาพจดทะเบียนรถ</span>
                            {currentData.carInformation.LicencePhoto === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                    <img src={currentData.carInformation.LicencePhoto || "-"} alt="..." className="object-cover shadow w-32 h-32 rounded border-none mt-4" />
                                    <h1 onClick={() => changeStyle('รูปภาพจดทะเบียนรถ', currentData.carInformation.LicencePhoto)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">คลิกเพื่อดูรูปภาพ</h1>
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