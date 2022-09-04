const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static('public'));

app.get('/static/index.html', (req, res) => {
  res.send('root')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// const fs = require('fs');
// const data = JSON.parse(fs.readFileSync('./src/data.json', 'utf8'));

// console.log(data);