const express = require('express');
const app = express()
const serverless = require('serverless-http')
const router = express.Router()

const bodyParser = require('body-parser')
const fs = require('fs')

const os = require('os')


//const connectDB = require('./DB/connection')

const Port = process.env.Port || 3000;
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'))

var image = fs.readdirSync('./public/Homepage_files')
var mp3 = fs.readdirSync('./public/Musicmp3')
var webusersraw = convertjson('./users.txt')
var webusers = JSON.stringify(webusersraw)
var usersname = extractarrayfromobj('webusersraw', 'username', webusersraw)

//


router.get('/', function (req, res) {
  res.render('Homepage.ejs', {
    number: 9

  })
})



let global_index = 0;


router.post('/MusicPage', function (req, res) {


  //extraction of userinfo from raw data txt
  /////////////////////////////////////
  var webusersraw = convertjson('./users.txt')
  var webusers = JSON.stringify(webusersraw)

  var usersname = extractarrayfromobj('webusersraw', 'username', webusersraw)


  ///////////////////////////////////////////////



  //taking login details and logging in
  ///////////////////////////////////////
  var loginusername = req.body.usrname
  var loginpassword = req.body.psw

  if (loginusername != undefined && loginpassword != undefined) {
    if (returnbool(loginusername, usersname)) {
      var index = retriveindex(loginusername, usersname)
      global_index = index

      if (webusersraw[index].password == loginpassword) {



        res.render('MusicPage.ejs', {
          
          currentuser: JSON.stringify(webusersraw[index]),
          index:index,
          users:usersname
        })



      } else {
        res.send('Bad Password')


      }

    } else {
      res.send('Bad Password and Username')
    }

  }
////////////////////////////////////////////
//////////saving wislist
  if (req.body.savedlist != undefined && req.body.index != undefined) {
    var updatedsavedarray = JSON.parse(req.body.savedlist)
var index = Number(req.body.index)
    webusersraw[index].wishlist = updatedsavedarray

    replacewholejson('./users.txt', webusersraw)

    res.render('MusicPage.ejs', {
      
      currentuser: JSON.stringify(webusersraw[index]),
          index:index,
          users:usersname
    })



  }






  ////////////////////////////

  ////input string of elements



  // storing signup details
  ////////////////////////////////////////////////
  var signupfullname = req.body.fullnmsignup
  var signupemail = req.body.emlsignup
  var signupusername = req.body.usrnamesignup
  var signuppassword = req.body.pswsignup


  if (signupfullname != undefined && signupemail != undefined && signupusername != undefined && signuppassword != undefined) {

    if (returnbool(signupusername, usersname)==false){
    var userObject = { name: signupfullname, email: signupemail, username: signupusername, password: signuppassword, wishlist: [] }

    updatejson('./users.txt', userObject)

    //////////////////////////////////



    ///////////////////////////


    var customuserobj = { name: signupfullname, email: signupemail, username: signupusername, wishlist: [] }

   


    var newwebusersraw = convertjson('./users.txt')
    console.log(newwebusersraw)

    var newusersname = extractarrayfromobj('webusersraw', 'username', newwebusersraw)
    var newindex = retriveindex(signupusername, newusersname)

    res.render('MusicPage.ejs', {
    
      currentuser: JSON.stringify(customuserobj),
      index:newindex,
      users:usersname
    })
    global_index = newindex

  }else{
    res.send('Please Change UserName')
  }
}
  ////////////////////////////////

})

var defaultelement = { name: 'Visitor', email: '*****@gmail.com', username: 'Visitor', password: '1234', wishlist: [] }

router.get('/MusicPage', function (req, res) {
  var index = '0'
  res.render('MusicPage.ejs', {
 
    currentuser: JSON.stringify(defaultelement),
    index:index,
    users:usersname
  })
})







router.get('/admin', function (req, res) {
  res.render('admin.ejs', {
    image: image,
    mp3: mp3


  })
})


router.post('/admin', function (req, res) {
  res.send('sucess');

  var musicfile = { name: req.body.namegen, Bpm: req.body.Bpmgen, Year: req.body.Yeargen, Duration: req.body.Durationgen, Price: req.body.Pricegen }



  updatejson('./musicfile.txt', musicfile)
})









app.listen(Port, () => {
  console.log('Port connected')
})

app.use('/.netlify/EsjayMusic/Homepage',router);

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


function extractarrayfromobj(webusersraw, username, arrayobject) {

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