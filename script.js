const form = document.getElementById("form");
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const email = document.getElementById("email")
const dob = document.getElementById("dob");
const password = document.getElementById("psd");
const password2 = document.getElementById("psd2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const usernameValue = username.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim()
  const dobValue = dob.value.trim();
  const passwordValue = password.value.trim();
  const passwordValue2 = password2.value.trim();
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }
  if (phoneValue === "") {
    setErrorFor(phone, "Your phone number is required");
  } else {
    setSuccessFor(phone);
  }
if (emailValue === ''){
    setErrorFor(email, 'Email cannot be blank')
}else {
    setSuccessFor(email)
}

  if (dobValue === "") {
    setErrorFor(dob, "Date cannot be blank");
  } else {
    setSuccessFor(dob);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }
  if (passwordValue2 === "") {
    setErrorFor(password2, "Password cannot be blank");
  } else if (passwordValue2 !== passwordValue) {
    setErrorFor(password2, "Password does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
