const jwt = require('jsonwebtoken');

function generateToken(userId, passId) {
  const payload = { userId, passId };
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, { expiresIn: '5m' });
}

module.exports = { generateToken };
