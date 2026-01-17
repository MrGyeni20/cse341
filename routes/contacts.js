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

// POST - Create new contact
router.post('/', async (req, res) => {
  try {
    const database = getDatabase();
    const newContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    
    const result = await database.collection('contacts').insertOne(newContact);
    
    if (result.acknowledged) {
      res.status(201).json({ id: result.insertedId });
    } else {
      res.status(500).json({ message: 'Failed to create contact' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT - Update contact 
router.put('/:id', async (req, res) => {
  try {
    const database = getDatabase();
    const contactId = new ObjectId(req.params.id);
    const updatedContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    
    const result = await database.collection('contacts').updateOne(
      { _id: contactId },
      { $set: updatedContact }
    );
    
    if (result.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Contact not found or no changes made' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE - Delete contact 
router.delete('/:id', async (req, res) => {
  try {
    const database = getDatabase();
    const contactId = new ObjectId(req.params.id);
    
    const result = await database.collection('contacts').deleteOne({ _id: contactId });
    
    if (result.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;