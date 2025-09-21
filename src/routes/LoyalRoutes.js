const express = require('express');
const axios = require('axios');
const { generateToken } = require('../utils/token');
const router = express.Router();

router.get('/issue/:userId', async (req, res) => {
  const userId = req.params.userId;
  const token = generateToken(userId, 'loyalty-pass');

  const payload = {
    passTemplateId: process.env.BADGE_TEMPLATE_ID,
    userId,
    customAttributes: {
      name: "Jane Doe",
      tier: "Gold",
      points: "1200",
      barcodeData: token
    }
  };

  try {
    const response = await axios.post('https://api.badge.so/userPassUpsert', payload, {
      headers: {
        Authorization: `Bearer ${process.env.BADGE_API_KEY}`
      }
    });

    res.json({ downloadLink: response.data.passDownloadLink });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send('Failed to issue pass');
  }
});

module.exports = router;
