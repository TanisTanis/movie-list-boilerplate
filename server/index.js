const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));

app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})