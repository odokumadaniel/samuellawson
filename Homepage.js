const express = require('express');
const app = express()
const serverless = require('serverless-http')
const router = express.Router()

const bodyParser = require('body-parser')
const fs = require('fs')

const os = require('os');
const { response } = require('express');


//const connectDB = require('./DB/connection')

const Port = process.env.Port || 4000;
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'))

var webusersraw = convertjson('./users.txt')
var webusers = JSON.stringify(webusersraw)
var usersname = extractarrayfromobj('username', webusersraw)

var image = fs.readdirSync('./public/img/product')


//// index.ejs
var latestproductsarray
var comingsoonarray
////


//// blog.ejs


//// cart.ejs
var shoppingcartarray

var dealsoftheweek


////category.ejs => arrangequery.js => 
var Tops
var Cosplay
var three_dimension
var picture_frames 
var Manga
 var DVD
 var Utensils



 
var dealsoftheweek
///



////single product////
var objectinformation

var dealsoftheweek
///////






////checkout/////
var yourorderarray
////////





var defaultelement = {tops:[],picture_frames:[],three_dimension:[],cosplay:[],utensils:[],dvd:[],manga:[],latestproducts:[],comingsoon:[]}



router.get('/', function (req, res) {
try {
  var elements = convertjson('./items.txt')[0]
} catch (error) {
 var elements= defaultelement
}

  var latestproductsarray =  elements.latestproducts
  var comingsoonarray = elements.comingsoon
  res.render('index.ejs', {
    latestproductsarray: JSON.stringify(latestproductsarray),
    comingsoonarray:JSON.stringify(comingsoonarray)

  })
})

router.get('/blog', function (req, res) {
  res.render('blog.ejs', {
    number: 9

  })
})

router.get('/cart', function (req, res) {
  try {
    var elements = convertjson('./items.txt')[0]
  } catch (error) {
   var elements= defaultelement
  }

  var Tops  =  elements.tops
  var Cosplay  =  elements.cosplay
  var three_dimension  =  elements.three_dimension
  var picture_frames  =  elements.picture_frames
  var Manga  =  elements.manga
   var DVD  =  elements.dvd
   var Utensils  =  elements.utensils
   var latestproductsarray =  elements.latestproducts
   var comingsoonarray = elements.comingsoon

  res.render('cart.ejs', {
    Tops:JSON.stringify(Tops),
    Cosplay:JSON.stringify(Cosplay),
    three_dimension:JSON.stringify(three_dimension),
    picture_frames:JSON.stringify(picture_frames),
    Manga:JSON.stringify(Manga),
    DVD:JSON.stringify(DVD),
    Utensils:JSON.stringify(Utensils),
    Latest_Products:JSON.stringify(latestproductsarray),
    Coming_Soon:JSON.stringify(comingsoonarray)

  })
})



router.get('/category', function (req, res) {


  try {
    var elements = convertjson('./items.txt')[0]
  } catch (error) {
   var elements= defaultelement
  }

  var Tops  =  elements.tops
  var Cosplay  =  elements.cosplay
  var three_dimension  =  elements.three_dimension
  var picture_frames  =  elements.picture_frames
  var Manga  =  elements.manga
   var DVD  =  elements.dvd
   var Utensils  =  elements.utensils
  

  res.render('category.ejs', {
    Tops:JSON.stringify(Tops),
    Cosplay:JSON.stringify(Cosplay),
    three_dimension:JSON.stringify(three_dimension),
    picture_frames:JSON.stringify(picture_frames),
    Manga:JSON.stringify(Manga),
    DVD:JSON.stringify(DVD),
    Utensils:JSON.stringify(Utensils)

  })
})

router.get('/checkout', function (req, res) {
  res.render('checkout.ejs', {
    number: 9

  })
})

router.get('/confirmation', function (req, res) {
  res.render('confirmation.ejs', {
    number: 9

  })
})

router.get('/contact', function (req, res) {
  res.render('contact.ejs', {
    number: 9

  })
})

router.get('/elements', function (req, res) {
  res.render('elements.ejs', {
    number: 9

  })
})

router.get('/index', function (req, res) {
  try {
    var elements = convertjson('./items.txt')[0]
  } catch (error) {
   var elements= defaultelement
  }
  
    var latestproductsarray =  elements.latestproducts
    var comingsoonarray = elements.comingsoon
    res.render('index.ejs', {
      latestproductsarray: JSON.stringify(latestproductsarray),
      comingsoonarray:JSON.stringify(comingsoonarray)
  
    })
})

router.get('/login', function (req, res) {
  res.render('login.ejs', {
    number: 9

  })
})


router.get('/single-blog', function (req, res) {
  res.render('single-blog.ejs', {
    number: 9

  })
})

router.get('/single-product', function (req, res) {
  res.render('single-product.ejs', {
    number: 9

  })
})


router.get('/tracking', function (req, res) {
  res.render('tracking.ejs', {
    number: 9

  })
})






///////////////////////////////////////////////////
router.get('/admin', function (req, res) {
  res.render('admin.ejs', {
    image: image,

  })
})

router.post('/admin', function (req, res) {
try {
  var extracted_allements =  convertjson('./items.txt')
  var allelements = extracted_allements[0]
} catch (error) {
  var allelements = {tops:[],picture_frames:[],three_dimension:[],cosplay:[],utensils:[],dvd:[],manga:[],latestproducts:[],comingsoon:[]}
}




  var itemfile = { name: req.body.namegen, 
    image: req.body.imagegen, 
    stickerimage: req.body.stickergen, 
    stickerwidth: req.body.widthgen, 
    stickerheight: req.body.heightgen, 
    stickerx: req.body.xgen, 
    stickery: req.body.ygen, 
    discount_price: req.body.discount_pricegen, 
    real_price: req.body.real_pricegen, 
    category: req.body.categorygen,
    anime: req.body.animegen,
    id: req.body.idgen,
    availability: req.body.availabilitygen }

 

    console.log(response)

if(req.body.categorygen){
if((req.body.categorygen).toUpperCase()  == ('tops').toUpperCase() ){allelements.tops.push(itemfile)}

if((req.body.categorygen).toUpperCase()  == ('picture_frames').toUpperCase() ){allelements.picture_frames.push(itemfile)}

if((req.body.categorygen).toUpperCase()  == ('three_dimension').toUpperCase() ){allelements.three_dimension.push(itemfile)}

if((req.body.categorygen).toUpperCase()  == ('cosplay').toUpperCase() ){allelements.cosplay.push(itemfile)}

if((req.body.categorygen).toUpperCase() == ('utensils').toUpperCase()){allelements.utensils.push(itemfile)}

if((req.body.categorygen).toUpperCase()  == ('dvd').toUpperCase()){allelements.dvd.push(itemfile)}

if((req.body.categorygen).toUpperCase()  == ('manga').toUpperCase()){allelements.manga.push(itemfile)}
}

console.log(allelements)
console.log(req.body.featuresgen)
    if(req.body.featuresgen.toUpperCase() == ('coming soon').toUpperCase()){ console.log('true');  allelements.comingsoon.push(itemfile)}
    if(req.body.featuresgen.toUpperCase()  == ('latest products').toUpperCase()){allelements.latestproducts.push(itemfile)}
  
  




  var array_allements = [allelements]


replacewholejson('./items.txt',array_allements)


  res.render('admin.ejs', {
    image: image,

  })
})


router.get('/edit', function (req, res) {

  try {
    var elements = convertjson('./items.txt')[0]
  } catch (error) {
   var elements= defaultelement
  }

  var Tops  =  elements.tops
  var Cosplay  =  elements.cosplay
  var three_dimension  =  elements.three_dimension
  var picture_frames  =  elements.picture_frames
  var Manga  =  elements.manga
   var DVD  =  elements.dvd
   var Utensils  =  elements.utensils
   var latestproductsarray =  elements.latestproducts
   var comingsoonarray = elements.comingsoon

  res.render('edit.ejs', {
    Tops:JSON.stringify(Tops),
    Cosplay:JSON.stringify(Cosplay),
    three_dimension:JSON.stringify(three_dimension),
    picture_frames:JSON.stringify(picture_frames),
    Manga:JSON.stringify(Manga),
    DVD:JSON.stringify(DVD),
    Utensils:JSON.stringify(Utensils),
    Latest_Products:JSON.stringify(latestproductsarray),
    Coming_Soon:JSON.stringify(comingsoonarray)

  })
})


router.post('/edit', function (req, res) {
var extractedarray =  JSON.parse(req.body.editedvalues)
var array_allements = [extractedarray]

replacewholejson('./items.txt',array_allements)

res.render('redirect.ejs')

})






///////////////////////////////////////////////

let global_index = 0;










app.listen(Port, () => {
  console.log('Port connected')
})

app.use('/',router);

module.exports.handler = serverless(app)
//////////////////////////////////////////////////////////////////
function convertjson(nameoffile) {
  try {
    var file = fs.readFileSync(nameoffile, 'utf8')

  } catch (err) {
    console.log(err)
  }


  var nextfile = file.replace("'", "\\'")
  var nextfile2 = "'" + nextfile + "'"


  var data = eval(nextfile);
  return data
}


//usage: returnbool(string, array)
function returnbool(array, imagevideoname) {
  var demoarr = []
  for (var i = 0; i < imagevideoname.length; i++) {
    if (array != imagevideoname[i]) {
      demoarr.push('False')
    } else {
      demoarr.push('True')
    }

  }

  return demoarr.join().indexOf('True') > -1
}


function updatejson(string, fullobject) {
  var elementarr
  var newname = []

  try {
    elementarr = convertjson(string)


    for (var i = 0; i < elementarr.length; i++) {
      newname.push(elementarr[i].name)
    }





    var boolean = returnbool(fullobject.name, newname)

    if (boolean == false) {
      elementarr.push(fullobject)
    }






  } catch{
    elementarr = [];
    elementarr.push(fullobject)
  }





  var data = JSON.stringify(elementarr)

  try {
    //dataset represents the final form of data
    const dataset = fs.writeFileSync(string, data)

  } catch (err) {
    alert("The Document Was Not Saved")
    console.log(err)
  }
}


function extractarrayfromobj(username, arrayobject) {
var webusersraw = 'webusersraw'
  var jsonconvert = JSON.stringify(arrayobject)

  var firstfunction = 'function extractarrayfromobject(){  ' + webusersraw + ' =  JSON.parse(jsonconvert);  var usernamearray = [];for(var i = 0; i<' + webusersraw + '.length;i++){usernamearray.push(' + webusersraw + '[i].' + username + ')};return usernamearray}'
  eval(firstfunction)


  var lastfunction = 'extractarrayfromobject(' + webusersraw + ')'
  var answer = eval(lastfunction)
  return answer

}

function retriveindex(string, array) {
  var index;
  for (var i = 0; i < array.length; i++) {

    if (array[i] == string) {
      index = i
    }

  }
  return index
}



function replacewholejson(string, newarray) {
  var recentfiles = JSON.stringify(newarray)
  var recentfiles2 = recentfiles
  try {
    //dataset represents the final form of data
    const dataset2 = fs.writeFileSync(string, recentfiles2)

  } catch (err) {
    alert("The Document Was Not Saved")
    console.log(err)
  }
}