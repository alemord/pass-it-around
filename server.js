const express = require('express');
const app = express();

 
app.get('/', (req, res) => {
  res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">Take one down, pass it around</a>
  `);
});

app.get('/:number_of_bottles', (req, res) => {
  const num = req.params.number_of_bottles;
  const nextNum = num - 1;

  let link = '';
  if (nextNum > 0) {
    link = `<a href="/${nextNum}">Take one down, pass it around</a>`;
  }

  res.send(`
    <h1>${num} Bottles of beer on the wall</h1>
    ${link}
    <a href="/">Start Over</a>
  `);
});

 
app.listen(3010, () => {
  console.log('Server listening on port 3010');
});