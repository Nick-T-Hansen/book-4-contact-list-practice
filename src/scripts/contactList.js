// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.
//
import contacts from "./contact"

import contactCollection from "./contactCollection"

const contactList = {
    appendContactList() {
        contactCollection.getAllContacts()
        .then (allContacts => {
            let contactListFragment = document.createDocumentFragment();
            // Iterate over data in JSON and build HTML for each item
            allContacts.forEach(person => {
                let contactAddition = contacts.contactBuilder(person);
                contactListFragment.appendChild(contactAddition);
            });
            // Append the HTML to the DOM
            let contactListContainer = document.querySelector("#display-container");
            contactListContainer.appendChild(contactListFragment);
        });
    }
}

export default contactList