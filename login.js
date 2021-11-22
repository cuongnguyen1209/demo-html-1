
const inputElements = document.getElementsByTagName("input");

const email = inputElements[1];
const namsinh = inputElements[2]
const password = inputElements[3];
const repeatPassword = inputElements[4];

const errorEmail = document.getElementById("err-email");
const errorPassword = document.getElementById("err-psw");
const errorRepeatPassword = document.getElementById("err-psw-repeat");
const errnamsinh = document.getElementById("err-namsinh");



function regist_Onclick() {
    const emailValue = email.value;
    const passwordValue = password.value;
    const repeatPasswordValue = repeatPassword.value;
    const namsinhvalue = namsinh.value;

    const an_textbox = function hide() {
        document.getElementById("textbox").style.display = 'none';
    }
    
    if (kiemTraEmail(emailValue) && kiemTraMatKhau(passwordValue) && KiemTraNhapLaiMatKhau(passwordValue, repeatPasswordValue) && kiemtranamsinh(namsinhvalue)) {
        document.getElementById("textbox").style.display = 'block';
        setTimeout (
            an_textbox, 3000
        )
        
        document.getElementById("reset_email").value = "";
        document.getElementById('reset_namsinh').value = "";
        document.getElementById("reset_pass").value = "";
        document.getElementById('reset_repass').value = "";
    }

    if (!kiemTraEmail(emailValue)) {
    errorEmail.innerHTML = "Email không hợp lệ";
    }
    if (!kiemTraMatKhau(passwordValue)) {
    errorPassword.innerHTML = "Mật khẩu không hợp lệ";
    }
    if (!KiemTraNhapLaiMatKhau(passwordValue, repeatPasswordValue)) {
    errorRepeatPassword.innerHTML = "Mật khẩu nhập lại không đúng"
        }
    if (!kiemtranamsinh(namsinhvalue)) {
        errnamsinh.innerHTML = "Năm sinh không hợp lệ"
    }
    // else {
    //     document.getElementById("textbox").style.display = 'block';
    //     setTimeout (
    //         an_textbox, 3000
    //     )
        
    //     document.getElementById("reset_email").value = "";
    //     document.getElementById('reset_namsinh').value = "";
    //     document.getElementById("reset_pass").value = "";
    //     document.getElementById('reset_repass').value = "";

    // }

}




//email

function kiemTraEmail(emailValue) {
 let viTri = -1;
 for (let i in emailValue) {
    if (emailValue[i] === '@') {
 if (viTri !== -1) {
 return false;
 }
 viTri = i;
 
 }
 }

 if (viTri === -1 || viTri === 0 || viTri === emailValue.length - 1) {
 return false;
 }
 return true;
}

function onbluremail() {
    const emailValue = email.value
    if (!kiemTraEmail(emailValue)) {
        errorEmail.innerHTML = "Email không hợp lệ";    
    }else {
        errorEmail.innerHTML = "";
    }
}



//mat khau

function kiemTraMatKhau(passwordValue) {
 if (passwordValue.length < 6) {
 return false;
 }
 let coChuaKiTuDacBiet = false;
 let coChuaKiTuHoa = false;
 let coChuaKiTuSo = false;
 for (let kiTu of passwordValue) {
 if (kiTu >= 'A' && kiTu <= 'Z') {
 coChuaKiTuHoa = true;
 } else if (kiTu >= '0' && kiTu <= '9') {
 coChuaKiTuSo = true;
 } else if(!(kiTu >= 'a' && kiTu <= 'z')) {
 coChuaKiTuDacBiet = true;
 }
 }
 return coChuaKiTuDacBiet && coChuaKiTuHoa && coChuaKiTuSo;
}

function onlurmatkhau() {
    const passwordValue = password.value;
    if (!kiemTraMatKhau(passwordValue)) {
        errorPassword.innerHTML = "Mật khẩu không hợp lệ";
    }else {
        errorPassword.innerHTML = "";
    }
}



// nhap lai mat khau

function KiemTraNhapLaiMatKhau(passwordValue, repeatPasswordValue) {
 return passwordValue === repeatPasswordValue;
}

function onblurnhaplaimatkhau() {
    const repeatPasswordValue = repeatPassword.value;
    const passwordValue = password.value
    if (!KiemTraNhapLaiMatKhau(passwordValue, repeatPasswordValue)) {
        errorRepeatPassword.innerHTML = "Mật khẩu nhập lại không đúng"
    }else {
        errorRepeatPassword.innerHTML = "";
    }
}




//nam sinh

function kiemtranamsinh(namsinhvalue) {
    let namhientai = new Date().getFullYear();
    if (namhientai - namsinhvalue >= 18 && namsinhvalue.length ===4) {
        return true;
    }
}
function onblurnamsinh() {
    const namsinhvalue = namsinh.value;
    if (!kiemtranamsinh(namsinhvalue)) {
        errnamsinh.innerHTML = "Năm sinh không hợp lệ"
    }else {
        errnamsinh.innerHTML = ""
    }
}



function login() {
    document.getElementById("id01").style.display = 'block';
}

function toggle() {
    document.getElementById("toggle_content").style.display = "block"
}
function moblie_close() {
    document.getElementById("toggle_content").style.display = "none"
}