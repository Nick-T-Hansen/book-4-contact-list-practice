// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.

// This module will build a form and append it to the DOM.
// 1. Build HTML form
// 2. Attach event listener to button in form
// 3. Append the HTML form to the DOM

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
        //what is wrong with the button size?
        let formSubmit = document.createElement("button");
        formSubmit.innerHTML = "Submit";
        contactForm.appendChild(formSubmit);
        formSubmit.addEventListener("click", formEventListener ());
    },
    formEventListener () {
        console.log("test");
    }
};

export default contactForm
// This module will also contain the function that executes when the button in the form is clicked. When the button in the form is clicked, the following will happen:
// 1. Get user input that user entered
// 2. Create a new object with the same structure we have been using throughout the application to represent a food item:
// {
//   name: "user input name",
//   phoneNumber: "user input expiration",
//   type: "user input type"
// }
// 3. Call the method(postNewFood) with the fetch request to POST to the API