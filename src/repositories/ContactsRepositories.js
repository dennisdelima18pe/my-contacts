const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Dário',
    email: 'dariolima@gmail.com',
    phone: '81981347527',
    category: 'fcaf745d-f918-4aad-8ffb-6a32b080a2c8',
  },
  {
    id: v4(),
    name: 'Dennis',
    email: 'dennislima@gmail.com',
    phone: '81981347527',
    category: 'fcaf745d-f918-4aad-8ffb-6a32b080a2c8',
  },
  {
    id: v4(),
    name: 'Zoar',
    email: 'dennislima@gmail.com',
    phone: '81981347527',
    category: 'fcaf745d-f918-4aad-8ffb-6a32b080a2c8',
  },
];

class ContactsRepositories {
  findAll() {
    const response = new Promise((resolve, reject) => {
      resolve(contacts);
    });
    return response;
  }

  createContact({
    name,
    email,
    phone,
    category,
  }) {
    const newContact = {
      id: v4(),
      name,
      email,
      phone,
      category,
    };

    contacts.push(newContact);

    const response = new Promise((resolve, reject) => {
      resolve(newContact);
    });
    return response;
  }

  update(
    id,
    {
      name,
      email,
      phone,
      category,
    },
  ) {
    const updateContact = {
      id,
      name,
      email,
      phone,
      category,
    };
    contacts = contacts.map((contact) => (contact.id === id ? updateContact : contact));
    const response = new Promise((resolve, reject) => {
      resolve(updateContact);
    });
    return response;
  }

  deleteContact(id) {
    contacts = contacts.filter((contact) => contact.id !== id);
    const response = new Promise((resolve, reject) => {
      resolve(contacts);
    });
    return response;
  }

  findById(id) {
    const contactsFind = contacts.find((contact) => contact.id === id);

    const response = new Promise((resolve, reject) => {
      resolve(contactsFind);
    });
    return response;
  }

  findByEmail(email) {
    const contactsFind = contacts.find((contact) => contact.email === email);

    const response = new Promise((resolve, reject) => {
      resolve(contactsFind);
    });
    return response;
  }
}

module.exports = new ContactsRepositories();
