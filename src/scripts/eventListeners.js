import contactCollection from "./contactCollection"

const eventListeners = {
formAppendtoJson () {
    let responseName = document.querySelector("#form-name-input").value;
    let responseAddress = document.querySelector("#form-address-input").value
    let responsePhoneNumber = document.querySelector("#form-phone-input").value

    const responseObj = {
        name: responseName,
        phoneNumber: responsePhoneNumber,
        address: responseAddress,
    };
    contactCollection.postResponses(responseObj)
    }
}

export default eventListeners