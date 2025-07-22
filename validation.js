const form=document.getElementById("form")
const fullName = document.getElementById("name")
const nameAlert = document.getElementById("name-alert")
const y = document.getElementById('year')
let inputs = document.querySelectorAll(".form-control")
console.log(inputs)
const eligiblity = document.getElementById('eligiblity')
const email = document.getElementById("email")
let emailAlert = document.getElementById("email-alert")
const password = document.getElementById("password")
let passwordAlert = document.getElementById("password-alert")
const confirmPassword = document.getElementById("confirm-password")
let confirmAlert = document.getElementById("confirm-password-alert")
const checkbox = document.getElementById("terms")
let termsAlert = document.getElementById("terms-alert")
const submit = document.getElementById("submit")
const reset = document.getElementById("reset")
let n=e=p=c=j= false

document.addEventListener("DOMContentLoaded", () => {


// name validation starts
fullName.addEventListener("blur", () => {
    if (fullName.value == "") {
        nameAlert.textContent = "Please Enter Your full name"
        fullName.focus()
    }
    else {
        nameAlert.textContent = ""
        email.focus();
        n = true;
    }
})
// name validation end


// Eligiblity validation start
y.addEventListener('change', () => {
    const year = parseInt(y.value)
    console.log(year)

    switch (year) {

        case 1980: {
            eligiblity.textContent = "Inneligible..birth year < 1980"
            eligiblity.style.color = "red"
            break
        }
        case 1990: {
            eligiblity.textContent = "Inneligible..birth year < 1990"
            eligiblity.style.color = "red"
            break
        }

        case 2000: {
            j = true
            eligiblity.textContent = "eligible..birth year 1991-2000"
            eligiblity.style.color = "green"
            inputs.forEach(input => { input.disabled = false })
            y.disabled = true
            break
        }
        case 2010: {
            j = true
            eligiblity.textContent = "eligible..birth year 2001-2010"
            eligiblity.style.color = "green"
            inputs.forEach(input => { input.disabled = false })
            y.disabled = true
            break
        }
        case 2020: {
            j = true
            eligiblity.textContent = "eligible..birth year 2011-2020"
            eligiblity.style.color = "green"
            inputs.forEach(input => {
                input.disabled = false
            })
            y.disabled = true
            break
        }
        case 2025: {

            eligiblity.style.color = "red"
            eligiblity.textContent = "Inneligible..birth year >2021"
            break
        }
        default:
            {
                alert("Select birth year")
            }

    }


})

// Eligibility validation End


// email validation start
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

email.addEventListener("blur", () => {
    let emailValue = email.value.trim();
    if (emailValue === "") {
        emailAlert.textContent = "Enter your Email Id"
        email.focus()
    }
    else if (emailRegex.test(emailValue)) {

        emailAlert.textContent = "";
        password.focus()
        e = true
    }
    else {
        console.log(emailRegex.test(emailValue))
        emailAlert.textContent = "Enter a valid email"
        email.focus()
    }
})
// email validation end


// password validation start
password.addEventListener("blur", () => {
    const passwordValue = password.value.trim()
    const lower = /[a-z]/.test(passwordValue)
    const upper = /[A-Z]/.test(passwordValue)
    const special = /[!@#$%&*]/.test(passwordValue)
    const no = /[0-9]/.test(passwordValue)
    if (passwordValue == "") {
        passwordAlert.textContent = "Enter the password"
        password.focus()
    }
    else if (passwordValue.length < 8) {
        passwordAlert.textContent = "password Should be at least 8 characters"
        password.focus()
    }
    else if (upper && lower && no && special) {
        passwordAlert.textContent = ""
        confirmPassword.focus()
        p = true
    }
    else {
        passwordAlert.textContent = "Password should contain at least one lowercase letter ,upper case letter ,number, and a special character"
        password.focus()
    }

})
// password validation end



// confirm validation start
confirmPassword.addEventListener("blur", () => {
    let confirmPasswordValue = confirmPassword.value.trim()
    if (confirmPasswordValue == "") {
        passwordAlert.textContent = "Please confirm the Password"
    }
    else if (password.value !== confirmPasswordValue) {
        confirmAlert.textContent = "Confirm Password should be same as the Password"
        confirmPassword.focus()
    }
    else {
        confirmAlert.textContent = ""
        c = true
    }

})
// Confirm password validation end


// checkbox validation start
checkbox.addEventListener("blur", () => {
    if (!checkbox.checked) {
        termsAlert.textContent = "Please agree the Terms And Condition"
    }
    else {
        termsAlert.textContent = ""
    }
})
// Checkbox validation end


// checking whether all fields are completed
submit.addEventListener("click", (event) => {

    event.preventDefault()
    console.log(fullName.value)

    if (n == true && e == true && p == true && c == true && checkbox.checked)
        alert("Form Submitted Successfully")
    else {
        alert("All fields are Required Please add  information")

    }
})


// reseting all elements
reset.addEventListener("click", () => {
  
     form.reset()
  
    eligiblity.textContent = ""
    nameAlert.textContent = ""
    emailAlert.textContent = ""
    passwordAlert.textContent = ""
    confirmAlert.textContent = ""
    termsAlert.textContent = ""
  y.disabled=false
    inputs.forEach(input => {
        if ( input.type !== "submit" && input.type !== "reset") {
          input.disabled = true
        }
    })
  
    n = e = p = c = j = false
    fullName.focus()
  })

  
})
