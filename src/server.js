const express = require('express');
require('dotenv').config();
const loyaltyRoutes = require('./routes/loyaltyRoutes');

const app = express();
app.use(express.json());
app.use('/loyalty', loyaltyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
