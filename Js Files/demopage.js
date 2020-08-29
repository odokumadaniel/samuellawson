
//iam trying to activate the modal
function clickintitalization(){
var demoitems = document.getElementsByClassName("w3-col l3 s6")
var demotitles = document.getElementsByClassName("title")
var demoimages = document.getElementsByClassName("imagesclass")

for(var i = 0; i<demoitems.length;i++){
    demoitems[i].onclick = function(){
        document.getElementById('id02').style.display='block'
        //we are getting the index of every clicked element
        var indexclicked = Number(this.getAttribute('data-title'))
        //using the data index from the list, we are able to get the text value of the elemem
   var namemodal =  demotitles[indexclicked].childNodes[0].data
//and the images
    var picturemodal = demoimages[indexclicked].src
    var year = this.getAttribute('data-year')
    var bpm = this.getAttribute('data-bpm')
    var ratings = this.getAttribute('data-ratings')


document.getElementById("updatedclick").innerHTML = '<div class="w3-padding-16"><img id="pictureElement" src="'+picturemodal+'" style="width:25%;"><br></div><button id = "previewmodal" style="margin-top: 10px;" class="w3-button w3-blue">Preview</button><br><audio   id="musicmodal" controls><source src="./Musicmp3/'+namemodal+'.mp3" type="audio/mpeg"></audio><div  class="w3-panel w3-leftbar w3-sand  w3-serif"><table class="w3-table-all"><tr><th>Name</th><td id="songname">'+namemodal+'</td></tr><tr><th>Bpm</th><td>'+bpm+'</td></tr><tr><th>Year</th><td>'+year+'</td></tr><tr><th>Ratings</th><td>'+ratings+'</td></tr></table></div>'
var element = extract(shoppingarray)
var elementwishlist = extract(wishlistarray)
var joined =  element.toString()
var joinedwishlist = elementwishlist.toString()


console.log(joined)
console.log(joined.indexOf(namemodal))
console.log(shoppingarray.length)
if(joined.indexOf(namemodal)> -1){ 
    document.getElementById('footer').innerHTML= '<p><button id="addtocartel" class="w3-btn w3-block w3-green">Added To Cart</button></p>'
}else{
    document.getElementById('footer').innerHTML= '<p><button id="addtocartel" class="w3-btn w3-block w3-blue">Add to Cart</button></p>'
}


if(joinedwishlist.indexOf(namemodal)> -1){ 
    document.getElementById('footer2').innerHTML= '<p><button id="addtowishlist" class="w3-btn w3-block w3-black">Added To Wishlist</button></p>'
}else{
    document.getElementById('footer2').innerHTML= '<p><button id="addtowishlist" class="w3-btn w3-block w3-yellow">Add To Wishlist</button></p>'
}



//adding item to cart
document.getElementById("addtocartel").onclick = function(){

if(this.innerText != 'Added To Cart' ){
    var itemtosell = {name:document.getElementById("songname").innerText,
image:document.getElementById("pictureElement").src
}

this.className = this.className.replace('w3-blue', 'w3-green')
this.innerText = 'Added To Cart'
shoppingarray.push(itemtosell)
document.getElementById("shoppingnumbers").innerText = shoppingarray.length
}else{
alert('Item Already included in Cart')
}
      }



      document.getElementById("addtowishlist").onclick = function(){

        if(this.innerText != 'Added To Wishlist' ){
            var itemtosell = {name:document.getElementById("songname").innerText,
        image:document.getElementById("pictureElement").src
        }
        
        this.className = this.className.replace('w3-yellow', 'w3-black')
        this.innerText = 'Added To Wishlist'
        wishlistarray.push(itemtosell)
        document.getElementById("wishnumbers").innerText = wishlistarray.length
        }else{
        alert('Item Already included in Wishlist')
        }
              }
        


try{

document.getElementById('previewmodal').onclick = function(){

  
}
}catch(err){

}
document.getElementById("closemodal").onclick= function(){
document.getElementById('id02').style.display='none'
document.getElementById('musicmodal').pause()
}


}
}

}

//this function is used for extracting the 'name' values from an object
function extract(shoppingarray){
var emptyarray = []
for(var i = 0; i<shoppingarray.length;i++){
emptyarray.push(shoppingarray[i].name)
}
return emptyarray
}

//a pagination solution


var arrayelements = [{name:"Super Bass",image:"jeans1", bpm:"128kbps", year:'2020',ratings:'50%', price:'N300'}]
var numberelements = [{name:"Proud Vibes",image:"jeans2", bpm:"320kbps", year:'2020',ratings:'50%',price:'N400'}]

function paginationconversion(arrayelements,number){

var numbers2 = Number(number)

var element = []
var divisions  = Math.ceil(arrayelements.length/5)


console.log(divisions)
for(var i = 0; i<divisions;i++){
    element[i] = arrayelements.slice(0 +numbers2*i , numbers2 +numbers2*i);


    }
    console.log(element)
    return element
}
var element = paginationconversion(arrayelements,4)
var numelement = paginationconversion(numberelements,4)

//this is a function creatted for selecting pagination
function paginationselect(element){
var index
var pagination = document.getElementsByClassName("w3-bar-item no w3-button  w3-hover-black")

for(var i = 0; i<pagination.length;i++){
    pagination[i].onclick = function(){
     
        
 index = Number(this.innerText)
 console.log("numeberr",index)
 console.log(pagination)
 try{
 for(var j = 0;j<pagination.length;j++){

 if(index == j){
    console.log(j) 
    pagination[j].className = pagination[j].className +=' w3-black'}
 else{pagination[j].className=pagination[j].className.replace(/ w3-black/g,' ')}

 }
}catch(err){
    console.log(err)
}
    //this is for loading content with pagination
var loadingpage = element[Number(this.innerText)-1]


        var figures = ''
for(var i = 0; i<loadingpage.length;i++){
    figures += '<div data-bpm = "'+loadingpage[i].bpm+'"  data-price = "'+loadingpage[i].price+'" data-year = "'+loadingpage[i].year+'"   data-ratings = "'+loadingpage[i].ratings+'"  data-title = '+i+' class="w3-col l3 s6 w3-animate-opacity"><div class="w3-container"><div class="w3-display-container"><span class="w3-tag w3-display-topleft">Free</span><img class = "imagesclass" src="./Homepage_files/'+loadingpage[i].image+'.jpg" style="width:200px;height:250px;object-fit: cover;"><p class = "title">'+loadingpage[i].name+'<br><b>'+loadingpage[i].price+'</b></p></div></div></div>'

}
document.getElementById('imagegallery').innerHTML = figures
clickintitalization()
    }


}
}



//this is for clicking the section buttons
var majorbutton = document.getElementsByClassName('w3-button w3-white major')

for(var i = 0; i<majorbutton.length;i++){

majorbutton[i].onclick = function(){
  var section =  this.getAttribute('data-title')
if(section == 'firstbutton'){
    populatepagination(numberelements)
    paginationselect(numelement)

    document.getElementById('firstpage1').click() 
    clickintitalization()
    majorbutton[0].className = majorbutton[0].className +=' w3-black'
}else{
    
    majorbutton[0].className = majorbutton[0].className.replace(/ w3-black/g,' ')
}

if(section == 'secondbutton'){
    populatepagination(arrayelements)
    paginationselect(element)
  
    document.getElementById('firstpage1').click()  
    clickintitalization()
    majorbutton[1].className = majorbutton[1].className +=' w3-black'
}else{
    
    majorbutton[1].className = majorbutton[1].className.replace(/ w3-black/g,' ')
}

if(section == 'thirdbutton'){
    document.getElementById('firstpage1').click()  
}

var sectionindex = Number(this.getAttribute('data-index'))
console.log(sectionindex)



}

}


//click the firstbutton


//this function is used for populating the numbers in pagination
function populatepagination(arrayelements){
var divisions  = Math.ceil(arrayelements.length/5)
var pages = '<a id="firstpage1" href="./MusicPage.html#" class="w3-bar-item no w3-button  w3-hover-black ">1</a>'

for(var i =1; i<divisions;i++){
    console.log(divisions)
pages += ' <a  href="./MusicPage.html#" class="w3-bar-item no w3-button w3-hover-black">'+(i+1)+'</a>'
console.log('working..')
}
document.getElementById('paginationcontent').innerHTML = pages

}




//shopping items function

// number of lists = "shoppingnumbers"

var shoppingarray = []
var wishlistarray = []


      document.getElementById("shoppingnumbers").innerText = shoppingarray.length

      
      
//opening the shopping cart
document.getElementById("shoppingcart").onclick = function(){
    console.log(shoppingarray)
      document.getElementById('id03').style.display='block'
var shoppinghtml = ''
if(shoppingarray.length>0){
for(var i = 0;i<shoppingarray.length;i++){
    shoppinghtml += '<li class="w3-bar w3-card-2 mb-2"><span  data-item = '+i+'  class="bg-light closingx w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span><img src="'+shoppingarray[i].image+'" class="w3-bar-item w3-circle " style="width:85px;height:75px"><div class="w3-bar-item"><span class="w3-large">'+shoppingarray[i].name+'</span><br><span>N200</span></div></li>'


    



}


}else{
    shoppinghtml += '<h>There is Currently No item</h>'
  
}
document.getElementById('shoppingtable').innerHTML = shoppinghtml




//the x button in the shopping cart items
var closing = document.getElementsByClassName('bg-light closingx w3-bar-item ')
var shoppingitem = document.getElementsByClassName('w3-bar w3-card-2 mb-2')

for(var i = 0; i<closing.length;i++){

    closing[i].onclick = function(){
       var index=  Number(this.getAttribute('data-item'))
       shoppingitem[index].style.display = 'none'

       shoppingarray = deleteitem(index,shoppingarray)
      populateshoppinglist()

  for(var j = 0; j<shoppingarray.length;j++){
console.log(shoppingarray[j])
  }

       document.getElementById("shoppingnumbers").innerText = shoppingarray.length
    }
}

}


//this function was created so that when an x was pressed to cancel an item , we could popultae the list with the right amount of items
function populateshoppinglist(){
var shoppinghtml = ''
for(var i = 0;i<shoppingarray.length;i++){
 shoppinghtml += '<li class="w3-bar w3-card-2 mb-2"><span  data-item = '+i+'  class="bg-light closingx w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span><img src="'+shoppingarray[i].image+'" class="w3-bar-item w3-circle " style="width:85px;height:75px"><div class="w3-bar-item"><span class="w3-large">'+shoppingarray[i].name+'</span><br><span>N200</span></div></li>'

}
document.getElementById('shoppingtable').innerHTML = shoppinghtml 

//the x button in the shopping cart items
var closing = document.getElementsByClassName('bg-light closingx w3-bar-item ')
var shoppingitem = document.getElementsByClassName('w3-bar w3-card-2 mb-2')

for(var i = 0; i<closing.length;i++){

    closing[i].onclick = function(){
       var index=  Number(this.getAttribute('data-item'))
       shoppingitem[index].style.display = 'none'
  
       shoppingarray = deleteitem(index,shoppingarray)
      populateshoppinglist()

  for(var j = 0; j<shoppingarray.length;j++){
console.log(shoppingarray[j])
  }

       document.getElementById("shoppingnumbers").innerText = shoppingarray.length
    }
}



}

function deleteitem(index, shoppingarray ){
var newarray = []
for(var j = 0;j<shoppingarray.length;j++){
if(j!=index){
 newarray.push(shoppingarray[j])

}

}
return newarray
}



document.getElementById("signupage").onclick = function(){
    document.getElementById('id04').style.display='block'

var loginpagehtml = '<label><b>Username</b></label><input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="usrname" required><label><b>Password</b></label><input class="w3-input w3-border" type="text" placeholder="Enter Password" name="psw" required><button class="w3-button w3-block btn w3-green w3-section w3-padding" type="submit">Login</button><a id="signupgenerator" class="text-white w3-button w3-block btn btn-primary  w3-padding" >Sign UP</a>'

    document.getElementById('signupsection').innerHTML =  loginpagehtml  
    document.getElementById("signupgenerator").onclick = function(){
   var signuppagehtml = '<label><b>Full Name</b></label><input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Full Name" name="usrname" required><label><b>Email</b></label><input class="w3-input w3-border" type="text" placeholder="Enter Email" name="psw" required><label><b>Username</b></label><input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="usrname" required><label><b>Password</b></label><input class="w3-input w3-border" type="text" placeholder="Enter Password" name="psw" required><button class="w3-button w3-block btn w3-green w3-section w3-padding" type="submit">Sign UP</button>'
document.getElementById('signupsection').innerHTML = signuppagehtml
    }
}


document.getElementById("wishlist").onclick = function(){
    console.log("clicked")
    document.getElementById('id05').style.display='block'


    var wishlisthtml = ''
if(wishlistarray.length>0){
for(var i = 0;i<wishlistarray.length;i++){
    wishlisthtml += '<li class="w3-bar wish w3-card-2 mb-2"><span  data-item = '+i+'  class="bg-light wish closingx w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span><img src="'+wishlistarray[i].image+'" class="w3-bar-item w3-circle " style="width:85px;height:75px"><div class="w3-bar-item"><span class="w3-large">'+wishlistarray[i].name+'</span><br><span>N200</span> <span><br></span></div></li>'


    



}


}else{
    wishlisthtml += '<h>There is Currently No item</h>'
  
}
document.getElementById('wishtable').innerHTML = wishlisthtml

//the x button in the shopping cart items
var closingwishlist = document.getElementsByClassName('bg-light wish closingx w3-bar-item ')
var wishitem = document.getElementsByClassName('w3-bar wish w3-card-2 mb-2')

for(var i = 0; i<closingwishlist.length;i++){

    closingwishlist[i].onclick = function(){
       var index=  Number(this.getAttribute('data-item'))
       wishitem[index].style.display = 'none'

       wishlistarray = deleteitem(index,wishlistarray)
       populatewishlist()

  for(var j = 0; j<wishlistarray.length;j++){
console.log(wishlistarray[j])
  }

  document.getElementById("wishnumbers").innerText = wishlistarray.length

    }
}

}




//this function was created so that when an x was pressed to cancel an item , we could popultae the list with the right amount of items
function populatewishlist(){
    var wishlisthtml = ''
    for(var i = 0;i<wishlistarray.length;i++){
        wishlisthtml += '<li class="w3-bar wish w3-card-2 mb-2"><span  data-item = '+i+'  class="bg-light wish closingx w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span><img src="'+wishlistarray[i].image+'" class="w3-bar-item w3-circle " style="width:85px;height:75px"><div class="w3-bar-item"><span class="w3-large">'+wishlistarray[i].name+'</span><br><span>N200</span></div></li>'
    
    }
    document.getElementById('wishtable').innerHTML = wishlisthtml 
    
    //the x button in the shopping cart items
    var closingwishlist = document.getElementsByClassName('bg-light wish closingx w3-bar-item ')
    var wishitem = document.getElementsByClassName('w3-bar wish w3-card-2 mb-2')
    
    for(var i = 0; i<closingwishlist.length;i++){
    
        closingwishlist[i].onclick = function(){
           var index=  Number(this.getAttribute('data-item'))
           wishitem[index].style.display = 'none'
      
           wishlistarray = deleteitem(index,wishlistarray)
           populatewishlist()
    
      for(var j = 0; j<wishlistarray.length;j++){
    console.log(wishlistarray[j])
      }
    
           document.getElementById("wishnumbers").innerText = wishlistarray.length
        }
    }
    
    
    
    }






document.getElementById('firstbutton').click()



