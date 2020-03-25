const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;


/*
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  next();
});
*/

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.options('*', cors())

/*
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("myportfolio_react/public"));
}
*/

app.use(express.static("./myportfolio_react/public"));

app.get('*', (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    const rootHtmlPath = path.resolve(__dirname, '.', 'myportfolio_react/public', 'index.html');
  res.sendFile(rootHtmlPath);
  console.log(rootHtmlPath);
})

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
