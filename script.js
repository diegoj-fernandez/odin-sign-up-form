const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");

document.addEventListener("mouseover", () => {
    if (pass.value == "" && confirmPass.value == "") {
        pass.style.border = "1px solid #E5E7EB";
        confirmPass.style.border = "1px solid #E5E7EB";
    }else if (pass.value !== "" && pass.value !== confirmPass.value) {
        pass.style.border = "1px solid red";
        confirmPass.style.border = "1px solid red";
    } else {
        pass.style.border = "1px solid green";
        confirmPass.style.border = "1px solid green";
    }
});