require('./config/db');

// creating our server 
const app = require('express')();
const port = process.env.PORT || 3000;

const userRoutes = require('./api/User');

// accepting post form data 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
