const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDatabase } = require('../db/connect');

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const database = getDatabase();
    const contacts = await database.collection('contacts').find().toArray();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single contact by ID
router.get('/:id', async (req, res) => {
  try {
    const database = getDatabase();
    const contactId = new ObjectId(req.params.id);
    const contact = await database.collection('contacts').findOne({ _id: contactId });
    
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;