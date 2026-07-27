const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile('infusion-glutathion.html');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
