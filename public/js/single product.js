var MidoriyaObject =  JSON.parse(localStorage.getItem('array_of_elements'))
console.log(MidoriyaObject)


console
var text = ''


 




                        
                        



$(document).ready(function(){
    $("#experiment").click(function(){
        $(this).hide();
      var size = $('.current')[0].innerText;
     var colour =   $('.current')[1].innerText;
      var type =  $('.current')[2].innerText;
      console.log(size, colour,type)
    });

$('#nameofproduct').text(MidoriyaObject.name.toUpperCase());
$('#discountpriceofproduct').text('N'+MidoriyaObject.discount_price);
$('#realpriceofproduct').text('N'+MidoriyaObject.real_price);
$('#category').html( '<span>Category</span> : '+(MidoriyaObject.category.toUpperCase())+'');
$('#availability').text(MidoriyaObject.availability);

$('#addtocart').click(function(){
  var size = $('.current')[0].innerText;
  var colour =   $('.current')[1].innerText;
   var type =  $('.current')[2].innerText;
 var itemobject = {name:MidoriyaObject.name ,discount_price:MidoriyaObject.discount_price, size:size, colour:colour,type:type,image:MidoriyaObject.image,anime:MidoriyaObject.anime,id:MidoriyaObject.id } 
 console.log(itemobject)
try {
  var shoppinglist  = JSON.parse(localStorage.getItem('storageOFarraysformywebsite'))
 
  shoppinglist.push(itemobject)
} catch (error) {
 var shoppinglist = []
 shoppinglist.push(itemobject)
}

 var array =  JSON.stringify(shoppinglist)
 console.log(shoppinglist)
localStorage.setItem('storageOFarraysformywebsite',array)
  })

});



try {
  for(var i = 0; i<MidoriyaObject.comments.length;i++){
    commenttext += `<div class="review_item">
    <div class="media">
      <div class="d-flex">
        <img  src=" ../public/img/`+directory+`/`+MidoriyaObject.comments[i].image+`.png" alt="">
      </div>
      <div class="media-body">
        <h4>`+MidoriyaObject.comments[i].name+`</h4>`
        for(var j = 0;j<MidoriyaObject.comments[i].stars;j++){
          commenttext+=' <i class="fa fa-star"></i>'
        }
    
    commenttext+= ` </div>
    </div>
    <p>`+MidoriyaObject.comments[i].comments+` </p>
    </div>`
    
    }
    
    
    document.getElementById('reviewsid').innerHTML = commenttext
    
      
} catch (error) {
  
}


var commenttext = ''






console.log(deals_of_week)
var dealstext = ''

for(var i =0;i<deals_of_week.length;i++){
  dealstext+=`<div class="col-lg-4 col-md-4 col-sm-6">
  <div class="single-related-product d-flex">
    <a href="#"><img src=" ../public/img/`+deals_of_week[i].name+`.jpg" alt=""></a>
    <div class="desc">
      <a href="#" class="title">`+deals_of_week[i].name+`</a>
      <div class="price">
        <h6>N`+deals_of_week[i].discount_price+`</h6>
        <h6 class="l-through">N`+deals_of_week[i].real_price+`</h6>
      </div>
    </div>
  </div>
  </div>`
}


document.getElementById('dealsid').innerHTML = dealstext






















function setcolour (array){
    text=''
for(var i = 0; i<array.length;i++){
    text += `	<div class="mySlides customfade">
    <img class="custompicture" src=" ../public/img/`+directory+`/`+array[i].image+`.png" style="width:100%">
    <div class="text-dark">`+array[i].colour.toUpperCase()+`</div>
  </div>`

}
text += `<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
					<a id="next" class="next" onclick="plusSlides(1)">&#10095;</a>
				  </div>
				  `


document.getElementById("putimages").innerHTML = text
document.getElementById("next").click()
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


function extractarrayfromobj(webusersraw, username, arrayobject) {

    var jsonconvert = JSON.stringify(arrayobject)
  
    var firstfunction = 'function extractarrayfromobject(){  ' + webusersraw + ' =  JSON.parse(jsonconvert);  var usernamearray = [];for(var i = 0; i<' + webusersraw + '.length;i++){usernamearray.push(' + webusersraw + '[i].' + username + ')};return usernamearray}'
    eval(firstfunction)
  
  
    var lastfunction = 'extractarrayfromobject(' + webusersraw + ')'
    var answer = eval(lastfunction)
    return answer
}  

function simulate(){

var size =  arguments[0][0].innerText
var colour =  arguments[0][1].innerText
var type =  arguments[0][2].innerText

var colourlink = ''
console.log(colour)

if(colour.toUpperCase() == ('white').toUpperCase()){
  colourlink = 'white front.jpg'
}

if(colour.toUpperCase() == ('black').toUpperCase()){
  colourlink = 'black front.jpg'
}


var imagelink =  ' ../public/img/AnimeClothes/'+type+'/'+colourlink+''
document.getElementById("clothescolour").src = imagelink
document.getElementById("demopic").src = localStorage.getItem('image_of_current_item')


}




document.getElementById("previewbutton").onclick = function(){
  var mainitems = document.getElementsByClassName("current")
  console.log(mainitems)

  
  
  simulate(mainitems)



var transformbutton =   `	
  <a id="transformpreviewbutton" class="bg-dark btn text-light mb-5" onclick='
  
  myCanvas({
    idofcanvas:"endresult",
    idofshirt:"clothescolour",
    idoflogo:"demopic",
    size:2,
    widthofshirt:`+ MidoriyaObject.stickerwidth+`, 
    lengtthofshirt:`+MidoriyaObject.stickerheight+`,
    xaxis:`+ MidoriyaObject.stickerx+`,
    yaxis:`+MidoriyaObject.stickery+`
    });
    retransform();

  '>View Image</a>


`




document.getElementById('transform').innerHTML = transformbutton




}


function retransform(){

 var innerhtml =  `<a id="previewbutton" class="bg-dark btn text-light mb-5" onclick='transform()'>Preview</a>`
 document.getElementById('transform').innerHTML = innerhtml

 
document.getElementById("previewbutton").onclick = function(){
  var mainitems = document.getElementsByClassName("current")
  console.log(mainitems)

  
  
  simulate(mainitems)


var transformbutton =   `	
  <a id="transformpreviewbutton" class="bg-dark btn text-light mb-5" onclick='
  
  myCanvas({
    idofcanvas:"endresult",
    idofshirt:"clothescolour",
    idoflogo:"demopic",
    size:2,
    widthofshirt:`+ MidoriyaObject.stickerwidth+`, 
    lengtthofshirt:`+MidoriyaObject.stickerheight+`,
    xaxis:`+ MidoriyaObject.stickerx+`,
    yaxis:`+MidoriyaObject.stickery+`
    });
    retransform();

  '>View Image</a>


`




document.getElementById('transform').innerHTML = transformbutton




}
}






var itemss  = document.getElementsByClassName("option")

for(var i = 0 ; i<itemss.length;i++){
  itemss[i].onclick = function(){
    console.log(this.innerText)
  }
}






var experimental =`<table class="table">
<tbody>
  <tr>
    <td>
      <h5 class="sorting">Size</h5>
    </td>
    <td>
      <div>
        <div class="nice-select" tabindex="0">
        <span class="current">X</span>
        <ul class="list">
        <li data-value="1" class="option">Select Size</li>
        <li data-value="1" class="option selected">X</li>
        <li data-value="1" class="option focus">XX</li>
        <li data-value="1" class="option">XXL</li>
        <li data-value="1" class="option">XXXL</li>
        <li data-value="1" class="option">Select Size</li>
        </ul>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <h5 class="sorting">Colour</h5>
    </td>
    <td>
      <div>
        <div class="nice-select" tabindex="0">
        <span class="current">Red</span>
        <ul class="list">
        <li data-value="1" class="option">Select Colour</li>
        <li data-value="1" class="option focus">White</li>
        <li data-value="1" class="option">Black</li>
        <li data-value="1" class="option selected">Red</li>
        <li data-value="1" class="option">Blue</li>
        <li data-value="1" class="option">Select Colour</li>
        </ul>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <h5 class="sorting">Type</h5>
    </td>
    <td>
      <div>
        <div class="nice-select" tabindex="0">
        <span class="current">T shirts south east</span>
        <ul class="list"><li data-value="1" class="option focus">Select Type</li>
        <li data-value="1" class="option">T Shirts</li>
        <li data-value="1" class="option selected">T shirts south east</li>
        <li data-value="1" class="option">Select Type</li>
        </ul>
        </div>
      </div>
    </td>
  </tr>

</tbody>
</table>`




















