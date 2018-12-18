// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.

let contactCollection = {
    getAllContacts () {
        return fetch("http://localhost:8088/contacts")
        .then(response => response.json())
    },
    postResponses (newContacts) {
        return fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newContacts)
        })
        .then(repsonses => repsonses.json())
    }
};

export default contactCollection