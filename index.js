const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var exports = module.exports = {};

var server = express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

exports.closeServer = function(){
  server.close();
};
