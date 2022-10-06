export const LoginContent = {
    title        : "เข้าสู่ระบบแอดมิน",
    button : {
        email    : "เข้าสู่ระบบ",
        facebook : "เข้าสู่ระบบด้วย Facebook",
        google   : "เข้าสู่ระบบด้วย Google"
    },
    placeholder : {
        email           : "อีเมล",
        password        : "รหัสผ่าน",
        passwordconfirm : "กรอกรหัสผ่านอีกครั้ง"
    },
    errorpasswordmessage : {
        emthycase       : "โปรดใส่รหัสผ่าน",
        minlengthcase   : "ความยาวของรหัสผ่านต้องอย่างน้อย 8 ตัว",
        uppercase       : "ต้องมีตัวอักษรใหญ่อย่างน้อย 1 ตัว",
        lowercase       : "ต้องมีตัวอักษรเล็กอย่างน้อย 1 ตัว",
        digitcase       : "ต้องมีตัวเลขอย่างน้อย 1 ตัว",
        specialcharcase : "ต้องมีตัวอักษรพิเศษอย่างน้อย 1 ตัว",
    },
    errorconfirmpasswordmessage : {
        notmatch            : "รหัสผ่านไม่ตรงกัน",
        passwordnotcorrect  : "โปรดใส่รหัสผ่านให้ถูกต้องก่อนยืนยันรหัสผ่าน"
    },
    errorregistermailmessage : {
        emailalreadyuse     : "อีเมลนี้ได้ถูกใช้งานไปแล้ว"
    },
    loading : "กำลังเข้าสู่ระบบ",
    errorlogin : "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
}

export const NavbarContent = {
    titlelogo : "7-Delivery",
    logout : "ออกจากระบบ"
}

export const SidebarContent = {
    title : "7-Delivery-Admin",
    home : "หน้าหลัก",
    manageuser : "จัดการผู้ใช้",
    acceptrider : "อนุมัติไรเดอร์",
    logout : "ออกจากระบบ"
}

export const HomeContent = {
    loading : {
        statusupdate : "กำลังอัพเดทข้อมูล",
        statusdashboard : "กำลังโหลด",
        successdashboard : "สำเร็จ",
        errorodashboard : "ไม่สำเร็จ",
        status :"รอสักครู่ กำลังดึงข้อมูล...",
        statusdelete :"รอสักครู่ กำลังลบข้อมูลผู้ใช้...",
        statussearch : "รอสักครู่ กำลังค้นหาข้อมูล...",
        success : "ดึงข้อมูลสำเร็จ",
        successdelete : "ลบข้อมูลสำเร็จ",
        successsearch : "ค้นหาข้อมูลสำเร็จ",
        successupdate : "อัพเดทข้อมูลสำเร็จ",
        error : "ดึงข้อมูลไม่สำเร็จ",
        errordelete : "ลบข้อมูลไม่สำเร็จ",
        errorsearch : "ค้นหาข้อมูลไม่สำเร็จ",
        errorupdate : "อัพเดทข้อมูลไม่สำเร็จ",
    }
}

export const DashboardContent = {
    title : "หน้าหลัก",
    ridercomponent : {
        title : "ไรเดอร์",
        statususer: "จำนวนผู้ใช้งานทั้งหมด : ",
        statusrider : "จำนวนไรเดอร์ในขณะนี้ : ",
        noun : "คน"
    },
    registercomponent : {
        title : "จำนวนผู้ใช้ที่ขอการอนุมัติไรเดอร์ : ",
        noun : "คน"
    }
}

export const ManageuserContent = {
    title : "จัดการผู้ใช้",
    filter : "ตัวกรอง",
    buttonsearch : "ค้นหา",
    filtername : ["ผลการค้นหาในฟีเจอร์","ที่ตรงกับ"],
    dataempty : "ไม่พบข้อมูลตามการค้นหา",
    table: {
        titleid : "ไอดีผู้ใช้งาน",
        titlename : "ชื่อผู้ใช้",
        titleemail : "อีเมล",
        titlestatus : "บทบาท",
        titlemanage : "จัดการ",
        titleseeinfo : "ข้อมูล",
        titledelete : "ลบ",
        titleaccept : "อนุมัติ",
        titledeny : "ปฎิเสธ"
    },
    page : {
        title : "หน้า",
        subtitle : "ใน"
    },
    placeholder : {
        search : "ค้นหา"
    }
}

export const optionsfilter = [
    { value: "", disable: true , label:"ไม่ระบุ"},
    { value: "userName", disable: false , label: "ชื่อผู้ใช้งาน"},
    { value: "userId", disable: false , label: "เลขที่ผู้ใช้งาน"},
    { value: "userEmail", disable: false , label: "อีเมลผู้ใช้งาน"},
    { value: "userIdcardnumber", disable: false , label: "เลขบัตรประชาชนผู้ใช้งาน"}
]

export const InformationuserContent = {
    title : "ข้อมูลผู้ใช้",
    buttonback : "กลับ",
    buttonnext : "ถัดไป",
    buttonsuccess : "เรียบร้อย",
    buttonaccept : "อนุมัติ",
    buttondeny : "ปฎิเสธ",
}

export const PersonalInformationuserContent = {
    label : {
        title : "ข้อมูลผู้ใช้",
        pictureuser : "รูปภาพผู้ใช้",
        name : "ชื่อ",
        surname : "นามสกุล",
        gender : "เพศ",
        age : "อายุ",
        email : "อีเมล",
        phone : "เบอร์โทรศัพท์",
        birthday : "วันเกิด",
        country : "จังหวัดที่ต้องการรับงาน",
    },
    button : "คลิกเพื่อดูรูปภาพ"
}

export const RelevantInformationuserContent = {
    label : {
        title : "ข้อมูลสำหรับบุคคลที่สามารถติดต่อได้",
        name : "ชื่อ",
        surname : "นามสกุล",
        relationship : "ความสัมพันธ์",
        phone : "เบอร์โทรศัพท์",
    },
    button : "คลิกเพื่อดูรูปภาพ"
}

export const IdcardInformationuserContent = {
    label : {
        title : "ข้อมูลบัตรประชาชน",
        name : "ชื่อ",
        cardNumber : "หมายเลขบัตรประชาชน",
        cardIssueDate : "วันที่ออกบัตร",
        cardExpireDate : "วันหมดอายุบัตร",
        picture : "รูปภาพบัตรประชาชน",
        titlepicture : "รูปภาพ"
    },
    button : "คลิกเพื่อดูรูปภาพ"
}

export const BookbankInformationuserContent = {
    label : {
        name : "ชื่อบัญชีธนาคาร",
        bookbankNumber : "เลขบัญชีธนาคาร",
        namebank : "ชื่อธนาคาร",
        picture : "รูปภาพบัญชีธนาคาร"
    },
    button : "คลิกเพื่อดูรูปภาพ"
}

export const CriminalhistoryInformationuserContent = {
    label : {
        picture : "รูปภาพประวัติอาญชกรรม"
    },
    button : "คลิกเพื่อดูรูปภาพ"
}

export const CarInformationuserContent = {
    label : {
        title : "ข้อมูลยานพาหนะ",
        carType : "ชนิดของยานพาหนะ",
        carNumber : "เลขทะเบียน",
        typeofCarsign : "ประเภทป้าย",
        carCountry : "จังหวัดที่จดทะเบียนรถ",
        carBrand : "ยี่ห้อ",
        carColor : "สีรถ",
        licencePhoto : "รูปภาพจดทะเบียนรถ",
        licenseIssueDate : "วันที่ออก พรบ.",
        licenseExpireDate : "วันหมดอายุ พรบ.",
        licenseName : "ชื่อผู้ถือกรมสิทธิ์",
        taxIssueDate : "วันที่เสียภาษี",
        taxExpireDate : "วันที่ครบกำหนดเสียภาษี",
        taxpicture : "รูปภาพรายการเสียภาษี"
    },
    button : "คลิกเพื่อดูรูปภาพ"
}

export const DriverlicenseInformationuserContent = {
    label : {
        title : "ข้อมูลใบขับขี่",
        numberdriverLicense : "เลขที่ใบขับขี่",
        typecardriverLicense : "ประเภทใบขับขี่",
        issuedatedriverLicense : "วันที่ออกบัตร",
        expiredatedriverLicense : "วันที่บัตรหมดอายุ",
        smartcarddriverlicense : "ใบขับขี่ชนิด : แบบธรรมดา",
        normalcarddriverlicense : "ใบขับขี่ชนิด : แบบสมาร์ตการ์ด",
        titlepicture : "รูปภาพ",
        picture : "รูปภาพใบขับขี่",
        pictureconfirmfriverlicense : ["รูปภาพยืนยันใบขับขี่","ตลอดชีพ"]
    },
    button : "คลิกเพื่อดูรูปภาพ"
}

export const ModelconfirmdenyContent = {
    title : "ยืนยันการปฎิเสธผู้ใช้",
    des : ["คุณต้องการปฎิเสธผู้ใช้รหัส","ชื่อผู้ใช้","ในการเป็นไรเดอร์ ?"],
    buttonclose : "ปิด",
    buttonsubmit : "ยืนยัน"
}

export const ModelconfirmdeleteContent = {
    title : "ยืนยันการลบผู้ใช้",
    des : ["คุณต้องการลบข้อมูลผู้ใช้รหัส","ชื่อผู้ใช้"],
    buttonclose : "ปิด",
    buttonsubmit : "ยืนยัน"
}

export const ModelconfirmacceptContent = {
    title : "ยืนยันการอนุมัติไรเดอร์",
    des : ["คุณต้องการอนุมัติผู้ใช้รหัส","ชื่อผู้ใช้","เป็นไรเดอร์ไหม ?"],
    buttonclose : "ปิด",
    buttonsubmit : "ยืนยัน"
}