const formEl = document.querySelector(".login-form");
// console.dir(formEl);

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = formEl;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        return `${alert}`;
    }
    console.log({ Email: email.value , Password:  password.value });
  event.currentTarget.reset();
  console.log(formEl.value === formEl.value);
});
