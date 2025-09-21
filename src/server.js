const express = require('express');
require('dotenv').config();
const loyalRoutes = require('./routes/loyalRoutes');

const app = express();
app.use(express.json());
app.use('/loyal', loyalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
