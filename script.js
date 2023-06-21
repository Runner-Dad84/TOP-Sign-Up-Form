let password = document.getElementById("password");
let confirm = document.getElementById("confirm");

password.addEventListener('change', (e) => {
    if (password.value === confirm.value){
        console.log("pass match")
        }else{
            console.log("pass does not match")
};})

confirm.addEventListener('change', (e) => {
        if (confirm.value === password.value){
            console.log("match")
            }else{
                console.log("Does not match")
};})