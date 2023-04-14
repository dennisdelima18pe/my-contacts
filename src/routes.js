const { Router } = require('express');

const route = Router();
const ContactsControllers = require('./controllers/ContactsController');

route.get('/contacts', ContactsControllers.index);
route.get('/contacts/:id', ContactsControllers.show);
route.delete('/contacts/:id', ContactsControllers.delete);
route.post('/contacts', ContactsControllers.store);
route.put('/contacts/:id', ContactsControllers.update);

module.exports = route;
