var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

session.email='';

var loggedin = require('./routes/loggedin');
var check = require('./routes/check');
var logout = require('./routes/logout');
var register = require('./routes/register');
var atc = require('./routes/atc');
var getorder = require('./routes/getorder');
var address = require('./routes/address');
var datetime = require('./routes/datetime');
var pay = require('./routes/pay');

var index = require('./routes/index');
var products = require('./routes/products');
var regcupcake = require('./routes/regcupcake');
var layerc = require('./routes/layered_cake');
var minicup = require('./routes/minicupcake');
var celeb = require('./routes/celebration');
var lsb = require('./routes/lsb');
var pt = require('./routes/pies_tarts');
var carrc = require('./routes/carrc');
var signup = require('./routes/signup');
var placeorder = require('./routes/placeorder');
var chococup = require('./routes/chococup');
var chocobrownie = require('./routes/chocobrownie');
var keylime = require('./routes/keylime');
var sugarart = require('./routes/sugarart');
var chocovanillac = require('./routes/chocovanillac');
var redvelvet = require('./routes/redvelvet');
var saltedcaramel = require('./routes/saltedcaramel');
var vegancupcake = require('./routes/vegancupcake');
var minichoco  = require('./routes/minichoco');
var minivanilla = require('./routes/minivanilla');
var minicarrot = require('./routes/minicarrot');
var miniredvelvet = require('./routes/miniredvelvet');
var minicaramel = require('./routes/minicaramel');
var minichocomarsh = require('./routes/minichocomarsh');
var minilemon = require('./routes/minilemon');
var minimocha = require('./routes/minimocha');
var confetticc = require('./routes/confetticc');
var cookiedoughcc = require('./routes/cookiedoughcc');
var smorecc = require('./routes/smorecc');
var strawberrycc = require('./routes/strawberrycc');
var stripeycc = require('./routes/stripeycc');
var vegancc = require('./routes/vegancc');
var kinderbuenocc =require('./routes/kinderbuenocc');
var redvelvetc = require('./routes/redvelvetc');
var chocolc = require('./routes/chocolc');
var coconutlc = require('./routes/coconutlc');
var plumlc = require('./routes/plumlc');
var saltedcaramelc = require('./routes/saltedcaramelc');
var smorelc = require('./routes/smorelc');
var snickerlc = require('./routes/snickerlc');
var stripeylc = require('./routes/stripeylc');
var victorialc = require('./routes/victorialc');
var abl = require('./routes/abl');
var acs = require('./routes/acs');
var rockyroad = require('./routes/rockyroad');
var kindercookie = require('./routes/kindercookie');
var cookiedoughtruffle = require('./routes/cookiedoughtruffle');
var meltingmoment = require('./routes/meltingmoment');
var nutellacookie = require('./routes/nutellacookie');
var pecanpie = require('./routes/pecanpie');
var treacle = require('./routes/treacle');
var applepie = require('./routes/applepie');
var chocopeanut = require('./routes/chocopeanut');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret:'kedar'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/loggedin',loggedin);
app.use('/check',check);
app.use('/logout',logout);
app.use('/register',register);
app.use('/atc',atc);
app.use('/getorder',getorder);
app.use('/address',address);
app.use('/pay',pay);

app.use('/', index);
app.use('/products', products);
app.use('/signup',signup);
app.use('/placeorder',placeorder);
app.use('/datetime',datetime);



app.use('/regcupcake', regcupcake);
app.use('/keylime',keylime);
app.use('/sugarart',sugarart);
app.use('/carrc',carrc);
app.use('/chococup',chococup);
app.use('/chocovanillac',chocovanillac);
app.use('/redvelvet',redvelvet);
app.use('/saltedcaramel',saltedcaramel);
app.use('/vegancupcake',vegancupcake);

app.use('/minicupcake',minicup);
app.use('/minichoco',minichoco);
app.use('/minivanilla',minivanilla);
app.use('/minicarrot',minicarrot);
app.use('/miniredvelvet',miniredvelvet);
app.use('/minicaramel',minicaramel);
app.use('/minichocomarsh',minichocomarsh);
app.use('/minilemon',minilemon);
app.use('/minimocha',minimocha);

app.use('/celebration',celeb);
app.use('/confetticc',confetticc);
app.use('/cookiedoughcc',cookiedoughcc);
app.use('/smorecc',smorecc);
app.use('/strawberrycc',strawberrycc);
app.use('/stripeycc',stripeycc);
app.use('/vegancc',vegancc);
app.use('/kinderbuenocc',kinderbuenocc);
app.use('/redvelvetc',redvelvetc);

app.use('/layered_cake',layerc);
app.use('/coconutlc',coconutlc);
app.use('/chocolc',chocolc);
app.use('/plumlc',plumlc);
app.use('/saltedcaramelc',saltedcaramelc);
app.use('/smorelc',smorelc);
app.use('/snickerlc',snickerlc);
app.use('/stripeylc',stripeylc);
app.use('/victorialc',victorialc);

app.use('/lsb',lsb);
app.use('/abl',abl);
app.use('/acs',acs);
app.use('/rockyroad',rockyroad);
app.use('/kindercookie',kindercookie);
app.use('/chocobrownie',chocobrownie);
app.use('/cookiedoughtruffle',cookiedoughtruffle);
app.use('/meltingmoment',meltingmoment);
app.use('/nutellacookie',nutellacookie);

app.use('/pies_tarts',pt);
app.use('/pecanpie',pecanpie);
app.use('/applepie',applepie);
app.use('/treacle',treacle);
app.use('/chocopeanut',chocopeanut);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
