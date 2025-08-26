const form = document.querySelector("#registerForm");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

// Helper to get parent .form-control and small element
function getFormControl(input) {
  const control = input.parentElement;
  const small = control.querySelector('small');
  return { control, small };
}

// Validation logic
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true; // Flag to track overall form validity

  // Username
  const nameValue = userName.value.trim();
  const { control: usernameControl, small: usernameSmall } = getFormControl(userName);
  if (nameValue.length < 3) {
    usernameSmall.innerText = "Enter your name correctly";
    usernameControl.classList.remove("success");
    isValid = false;
  } else {
    usernameSmall.innerText = "";
    usernameControl.classList.add("success");
  }

  // Email
  const emailValue = email.value.trim();
  const { control: emailControl, small: emailSmall } = getFormControl(email);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue.length === 0) {
    emailSmall.innerText = "Email should not be empty";
    emailControl.classList.remove("success");
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    emailSmall.innerText = "Enter a valid email";
    emailControl.classList.remove("success");
    isValid = false;
  } else {
    emailSmall.innerText = "";
    emailControl.classList.add("success");
  }

  // Password
  const passwordValue = password.value.trim();
  const { control: passwordControl, small: passwordSmall } = getFormControl(password);
  if (passwordValue.length === 0) {
    passwordSmall.innerText = "Password cannot be empty";
    passwordControl.classList.remove("success");
    isValid = false;
  } else if (passwordValue.length < 8) {
    passwordSmall.innerText = "Password must be at least 8 characters";
    passwordControl.classList.remove("success");
    isValid = false;
  } else if (!/\d/.test(passwordValue)) {
    passwordSmall.innerText = "Password must contain at least one number";
    passwordControl.classList.remove("success");
    isValid = false;
  } else {
    passwordSmall.innerText = "";
    passwordControl.classList.add("success");
  }

  // Confirm Password
  const confirmPasswordValue = confirmPassword.value.trim();
  const { control: confirmControl, small: confirmSmall } = getFormControl(confirmPassword);
  if (confirmPasswordValue !== passwordValue) {
    confirmSmall.innerText = "Re-enter your password correctly";
    confirmControl.classList.remove("success");
    isValid = false;
  } else {
    confirmSmall.innerText = "";
    confirmControl.classList.add("success");
  }

  // Redirect only if all fields are valid
  if (isValid) {
    window.location.href = "success.html";
  }
});
