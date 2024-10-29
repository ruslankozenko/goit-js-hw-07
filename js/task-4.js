'use strict';

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("All form fields must be filled in");
  }
  const info = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  event.target.reset();
  console.log(info);
}