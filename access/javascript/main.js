// show login form onclick
function showLoginFormFnc() {
  document.getElementById("modal-id").classList.add("show-component");
  document.getElementById("login-form-id").classList.add("show-component");
}

// hide login form onclick
function hideLoginFormFnc() {
  document.getElementById("modal-id").classList.remove("show-component");
  document.getElementById("login-form-id").classList.remove("show-component");
}

// show register form onclick
function showRegisterFormFnc() {
  document.getElementById("modal-id").classList.add("show-component");
  document.getElementById("register-form-id").classList.add("show-component");
}

// hide register form onclick
function hideRegisterFormFnc() {
  document.getElementById("modal-id").classList.remove("show-component");
  document.getElementById("register-form-id").classList.remove("show-component");
}
