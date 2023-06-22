let password = document.getElementById("password");
let confirm = document.getElementById("confirm");
let notifyPassword = document.getElementById("notifyPassword");
let notifyConfirm = document.getElementById("notifyConfirm");

password.addEventListener('change', (e) => {
    if (password.value === confirm.value){
        notifyPassword.textContent = "Passwords match!"
        notifyConfirm.textContent = "Passwords match!"
        } else {
            notifyPassword.textContent = "Passwords do not match!"
            notifyConfirm.textContent = "Passwords do not match!"
};})

confirm.addEventListener('change', (e) => {
        if (confirm.value === password.value){
            notifyPassword.textContent = "Passwords match!"
            notifyConfirm.textContent = "Passwords match!"
            }else{
                notifyPassword.textContent = "Passwords do not match!"
                notifyConfirm.textContent = "Passwords do not match!"
};})



/*
let passwords = document.querySelectorAll("passwords");

passwords.forEach(password => {
    password.addEventListener('change', (e) => {
    if (password.value === confirm.value){
        notifyPassword.textContent = "Passwords match!"
        notifyConfirm.textContent = "Passwords match!"
        console.log("password matches")
        } else {
            notifyPassword.textContent = "Passwords do not match!"
            notifyConfirm.textContent = "Passwords do not match!"
            console.log("password do not matches")
};})
})

*/