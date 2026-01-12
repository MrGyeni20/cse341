const express = require('express');
const { initDb } = require('./db/connect');
const contactsRoutes = require('./routes/contacts');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Routes
app.use('/contacts', contactsRoutes);

// Initialize database and start server
initDb((err) => {
  if (err) {
    console.log('Error connecting to database:', err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
});
