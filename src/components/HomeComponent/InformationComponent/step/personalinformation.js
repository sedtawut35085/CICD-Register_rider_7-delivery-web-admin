import { useState } from "react";
import ModelComponent from "../../../ModelComponent/ModelpopupImage.js";
import noimagepicture from '../../../../assets/noimage.webp'

const PersonalinformationComponent = ({currentData}) => {

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
                <h1 >ข้อมูลผู้ใช้</h1>
            </div>
            <div className="grid sm:grid-cols-3 md:gap-x-10">
                <div className='flex flex-col py-2 text-center'>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">
                            <span>รูปภาพผู้ใช้</span>
                            {currentData.personalInformation.userPhoto === undefined ?
                                <>
                                    <img src={noimagepicture} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                </>
                                :
                                <>
                                    <img src={currentData.personalInformation.userPhoto} alt="..." className="shadow w-32 h-32 object-cover rounded border-none mt-4" />
                                    <h1 onClick={()=> changeStyle('รูปภาพผู้ใช้',currentData.personalInformation.userPhoto)} className="pt-4 text-xs cursor-pointer text-red-600 hover:underline duration-100 transition hover:text-red-900">คลิกเพื่อดูรูปภาพ</h1>
                                </>
                            }
                           
                        </label>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <div className="relative z-0 mb-6 w-full group box-center">
                        <div className="pl-2 py-2 text-sm">ชื่อ : {currentData.userName || "-"}</div>
                        <div className="pl-2 py-2 text-sm">นามสกุล : {currentData.userSurName || "-"}</div>   
                        <div className="pl-2 py-2 text-sm">เพศ : {currentData.personalInformation.gender || "-"}</div>
                        <div className="pl-2 py-2 text-sm">อายุ  : {currentData.personalInformation.age || "-"} ปี</div>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <div className="relative z-0 mb-6 w-full group  box-center">
                        <div className="pl-2 py-2 text-sm">อีเมล : {currentData.userEmail || "-"}</div>
                        <div className="pl-2 py-2 text-sm">เบอร์โทรศัพท์ : {currentData.userPhone || "-"}</div>
                        <div className="pl-2 py-2 text-sm">วันเกิด : {currentData.personalInformation.birthday || "-"}</div>
                        <div className="pl-2 py-2 text-sm">จังหวัดที่ต้องการรับงาน :  {currentData.userCountry || "-"}</div>
                    </div>
                </div>

            </div>
            <div className="pb-4 pt-1">
                <h1 >ข้อมูลสำหรับบุคคลที่สามารถติดต่อได้</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:gap-x-10 py-4">
                <div className='flex flex-col py-2 text-center'>
                    <div className="relative z-0 mb-6 w-full group">
                        <div className="pl-2 py-2 text-sm">ชื่อ : {currentData.relevantPersonInformation.name || "-"} </div>
                        <div className="pl-2 py-2 text-sm">นามสกุล : {currentData.relevantPersonInformation.surname || "-"}</div>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <div className="relative z-0 mb-6 w-full group text-center">
                        <div className="pl-2 py-2 text-sm">ความสัมพันธ์ : {currentData.relevantPersonInformation.relationship || "-"}</div>
                        <div className="pl-2 py-2 text-sm">เบอร์โทรศัพท์ : {currentData.relevantPersonInformation.phone || "-"}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PersonalinformationComponent