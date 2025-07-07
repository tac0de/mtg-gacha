import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('MTG Gacha Engine - It works! 🎲');
});

app.listen(PORT, () => {
  console.log(`Gacha Engine listening on port ${PORT}`);
}); 