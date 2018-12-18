// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.

// This module will build a form and append it to the DOM.
// 1. Build HTML form
// 2. Attach event listener to button in form
// 3. Append the HTML form to the DOM


import eventListeners from "./eventListeners"

const contactForm = {
    formBuilder () {
        //form appends to dom
        let formContainer = document.querySelector("#form-container");
        let contactForm = document.createElement("section");
        formContainer.appendChild(contactForm);

        let formName = document.createElement("input");
        formName.setAttribute("id","form-name-input");
        formName.placeholder = "Name";
        contactForm.appendChild(formName);

        let formPhoneNumber = document.createElement("input");
        formPhoneNumber.setAttribute("id","form-phone-input");
        formPhoneNumber.placeholder = "Phone Number";
        contactForm.appendChild(formPhoneNumber);

        let formAddress = document.createElement("input");
        formAddress.setAttribute("id","form-address-input");
        formAddress.placeholder = "Address";
        contactForm.appendChild(formAddress);

        let formSubmit = document.createElement("button");
        formSubmit.innerHTML = "Submit";
        contactForm.appendChild(formSubmit);
        //form event listener
        formSubmit.addEventListener("click", eventListeners.formAppendtoJson)

    }
};

export default contactForm
