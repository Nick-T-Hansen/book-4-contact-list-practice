// A component that displays a person's name(contactName), phone number(contactPhoneNumber), and address(contactAddress).

const contacts = {
    contactBuilder(contactObj) {
        let contactSection = document.createElement("section");

        let contactName = document.createElement("h3");
        contactName.innerText = contactObj.name;

        let contactPhoneNumber = document.createElement("p");
        contactPhoneNumber.innerText = contactObj.phoneNumber;

        let contactAddress = document.createElement("p");
        contactAddress.innerText = contactObj.address

        contactSection.appendChild(contactName);
        contactSection.appendChild(contactPhoneNumber);
        contactSection.appendChild(contactAddress);

        return contactBuilder
    }
}

export default contacts