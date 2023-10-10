require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 4002;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/getApiRootUrl', (req, res) => {
  res.status(200).send(`${process.env.API_ROOT_URL}`);
})

app.use('/admin/*', function (req, res, next) {
  res.sendFile(__dirname + '/public/admin/index.html');
});
app.use('/faculty/*', function (req, res, next) {
  res.sendFile(__dirname + '/public/faculty/index.html');
});
app.use('/student/*', function (req, res, next) {
  res.sendFile(__dirname + '/public/student/index.html');
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
})