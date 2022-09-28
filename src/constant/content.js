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
        status :"รอสักครู่ กำลังดึงข้อมูล...",
        statusdelete :"รอสักครู่ กำลังลบข้อมูลผู้ใช้...",
        statussearch : "รอสักครู่ กำลังค้นหาข้อมูล...",
        success : "ดึงข้อมูลสำเร็จ",
        successdelete : "ลบข้อมูลสำเร็จ",
        successsearch : "ค้นหาข้อมูลสำเร็จ",
        error : "ดึงข้อมูลไม่สำเร็จ",
        errordelete : "ลบข้อมูลไม่สำเร็จ",
        errorsearch : "ค้นหาข้อมูลไม่สำเร็จ"
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
    table: {
        titleid : "ไอดีผู้ใช้งาน",
        titlename : "ชื่อผู้ใช้",
        titleemail : "อีเมล",
        titlestatus : "บทบาท",
        titlemanage : "จัดการ",
        titleseeinfo : "ข้อมูล",
        titledelete : "ลบ"
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
    { value: "userEmail", disable: false , label: "อีเมลผู้ใช้งาน"}
]

export const InformationuserContent = {
    title : "ข้อมูลผู้ใช้",

}