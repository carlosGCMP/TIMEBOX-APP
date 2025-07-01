require('dotenv').config();
const jwtsecret=process.env.JWT_SECRET;
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const statsRoutes = require('./routes/stats');
const app = express();
const path=require('path');
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/auth', authRoutes);
app.use('/api/stats', statsRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
