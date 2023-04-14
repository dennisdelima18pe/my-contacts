const ContactsRepositories = require('../repositories/ContactsRepositories');

class ContactsControllers {
  async index(request, response) {
    // esse método lista todos os contatos.
    const contacts = await ContactsRepositories.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // trazer um único registro
    const { id } = request.params;

    const contact = await ContactsRepositories.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    // criar um novo registro.
    const {
      name,
      email,
      phone,
      category,
    } = request.body;

    const contactExist = await ContactsRepositories.findByEmail(email);

    if (contactExist) {
      return response.status(400).json('User e-mail exists');
    }

    if (!name) {
      return response.status(400).json('Name is required');
    }

    const createContact = await ContactsRepositories.createContact({
      name,
      email,
      phone,
      category,
    });

    response.json(createContact);
  }

  async update(request, response) {
    // atualizar um único registro
    const { id } = request.params;

    const {
      name,
      email,
      phone,
      category,
    } = request.body;

    const contactExist = await ContactsRepositories.findById(id);

    if (!contactExist) {
      return response.status(400).json('User not found');
    }

    if (!name) {
      return response.status(400).json('Name is required');
    }

    const updateContact = await ContactsRepositories.update(id, {
      name,
      email,
      phone,
      category,
    });

    response.json(updateContact);
  }

  async delete(request, response) {
    // deletar um contato especifico.

    const { id } = request.params;

    const contact = await ContactsRepositories.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepositories.deleteContact(id);

    response.status(200).json({ code: 'success' });
  }
}

module.exports = new ContactsControllers();
