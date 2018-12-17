// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.

let contactCollection = {
    getAllContacts () {
        return fetch("http://localhost:8088/contacts")
        .then(response => response.json())
    }
};

export default contactCollection