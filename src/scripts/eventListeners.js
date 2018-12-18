import contactCollection from "./contactCollection"
import contactList from "./contactList";

//event listener for form button which will take the response fields and populate an object which will post to the json server in the correct key:value pairs.
const eventListeners = {
formAppendtoJson () {
    let resetResponses = document.querySelector("#display-container");
    resetResponses.innerHTML = " ";
    let responseName = document.querySelector("#form-name-input").value;
    let responseAddress = document.querySelector("#form-address-input").value
    let responsePhoneNumber = document.querySelector("#form-phone-input").value

    const responseObj = {
        name: responseName,
        phoneNumber: responsePhoneNumber,
        address: responseAddress,
    };
    contactCollection.postResponses(responseObj)
        .then(repost => {
            console.log(repost)
            contactList.appendContactList()
        })
    }
}

export default eventListeners