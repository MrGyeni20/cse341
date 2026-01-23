const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// GET all contacts
router.get('/', contactsController.getAllContacts);

// GET single contact by ID
router.get('/:id', contactsController.getContactById);

// POST - Create new contact
router.post('/', contactsController.createContact);

// PUT - Update contact
router.put('/:id', contactsController.updateContact);

// DELETE - Delete contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;