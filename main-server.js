const express = require('express');
const cors = require('cors');
const { initDb } = require('./db/connect');
const contactsRoutes = require('./routes/contacts');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());  // this is here for POST/PUT

// Swagger documentation route 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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