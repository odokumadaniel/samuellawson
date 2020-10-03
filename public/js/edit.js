





function Table (Tops, string){
    var grid = ''
    for(var i = 0; i<Tops.length;i++){
    grid +=`<tr data-index = `+i+` class = "itemsection">
    <td><input data-related =`+string+` data-value='namevalue' data-index = `+i+` class="form-control " value='`+Tops[i].name+`' type="text"></td>
    <td><input data-related =`+string+` data-value='imagevalue' class="form-control " value='`+Tops[i].image+`' type="text"></td>
    <td><input data-related =`+string+` data-value='imagevalue' class="form-control " value='`+Tops[i].stickerimage+`' type="text"></td>
    <td><input data-related =`+string+` data-value='imagevalue' class="form-control " value='`+Tops[i].stickerwidth+`' type="text"></td>
    <td><input data-related =`+string+` data-value='imagevalue' class="form-control " value='`+Tops[i].stickerheight+`' type="text"></td>
    <td><input data-related =`+string+` data-value='imagevalue' class="form-control " value='`+Tops[i].stickerx+`' type="text"></td>
    <td><input data-related =`+string+` data-value='imagevalue' class="form-control " value='`+Tops[i].stickery+`' type="text"></td>
    <td><input data-related =`+string+` data-value='discountvalue' class="form-control " value='`+Number(Tops[i].real_price)*50/100+`' type="text"></td>
    <td><input data-related =`+string+` data-value='realpricevalue' class="form-control " value='`+Tops[i].real_price+`'  type="text"></td>
    <td><input data-related =`+string+` data-value='categoryvalue' class="form-control  " value='`+Tops[i].category+`' type="text"></td>
    <td><input data-related =`+string+` data-value='animevalue' class="form-control " value='`+Tops[i].anime+`' type="text"></td>
    <td><input data-related =`+string+` data-value='idvalue' class="form-control " value='`+Tops[i].id+`'  type="text"></td>
    <td><input data-related =`+string+` data-value='availabilityvalue' class="form-control " value='`+Tops[i].availability+`' type="text"></td>
    <td><p data-related =`+string+` data-index=`+i+` class = "btn btn-primary closingbutton">X<p></td>
    
    </tr>
    `
    }
    return grid
    }
    
function removeitem(sectionid){
    var datasect  =  document.getElementById(''+sectionid+'')
var remove =  datasect.getElementsByClassName("closingbutton")

var datasection =  datasect.getElementsByClassName("itemsection")


for(var i=0;i<remove.length;i++){
remove[i].onclick = function(){
var index = Number(this.getAttribute('data-index'))

for(var j = 0;j<datasection.length;j++){
    if(Number(datasection[j].getAttribute('data-index'))==index){
datasection[j].style.display = 'none'
datasection[j].className +=  ' closedfromit'
    }
}
}
}
}


function extractvaluesitem(sectionid){
    var datasect  =  document.getElementById(''+sectionid+'')
var previoussection =  datasect.getElementsByClassName("itemsection")
var section = []
for( var k = 0; k<previoussection.length;k++){

    if((previoussection[k].className.indexOf('closedfromit'))==-1){
    
section.push(previoussection[k])
    }
}
var demoarray = []
for(j = 0; j<section.length;j++){
  var iteminformation = section[j].getElementsByClassName("form-control")
            demoarray.push({name:iteminformation[0].value,
            image:iteminformation[1].value,

            stickerimage:iteminformation[2].value,
            stickerwidth:iteminformation[3].value,
            stickerheight:iteminformation[4].value,
            stickerx:iteminformation[5].value,
            stickery:iteminformation[6].value,

            discount_price:iteminformation[7].value,
            real_price:iteminformation[8].value,
            category:iteminformation[9].value, 
            anime:iteminformation[10].value,
            id:iteminformation[11].value,
            availability:iteminformation[12].value})
    }
    return demoarray    
}






document.getElementById("populatelementstops").innerHTML =Table(Tops,'Tops')
document.getElementById("populatelementsframe").innerHTML =Table(picture_frames,'picture_frames')
document.getElementById("populatelementsprints").innerHTML =Table(three_dimension,'three_dimension')
document.getElementById("populatelementscosplay").innerHTML =Table(Cosplay,'Cosplay')
document.getElementById("populatelementsmanga").innerHTML =Table(Manga,'Manga')
document.getElementById("populatelementsdvd").innerHTML =Table(DVD,'DVD')
document.getElementById("populatelementsutensils").innerHTML =Table(Utensils,'Utensils')

document.getElementById("populatelementscomingsoon").innerHTML =Table(Coming_Soon,'Coming_Soon') 
document.getElementById("populatelementslatestproducts").innerHTML =Table(Latest_Products,'Latest_Products')


removeitem('populatelementstops')
removeitem('populatelementsframe')
removeitem('populatelementsprints')
removeitem('populatelementscosplay')
removeitem('populatelementsmanga')
removeitem('populatelementsdvd')
removeitem('populatelementsutensils')
removeitem('populatelementscomingsoon')
removeitem('populatelementslatestproducts')


document.getElementById('submitbtn').onclick = function(){
var finalobject = {tops:extractvaluesitem('populatelementstops'),
picture_frames:extractvaluesitem('populatelementsframe') ,
three_dimension: extractvaluesitem('populatelementsprints'),
cosplay:extractvaluesitem('populatelementscosplay') ,
utensils: extractvaluesitem('populatelementsutensils'),
dvd:extractvaluesitem('populatelementsdvd'),
manga: extractvaluesitem('populatelementsmanga'),
latestproducts:extractvaluesitem('populatelementslatestproducts'),
comingsoon:extractvaluesitem('populatelementscomingsoon')
}

var string_of_finalobject = JSON.stringify(finalobject)


var generatedform = `<form action="http://localhost:4000/edit" method="POST">


<form action="http://localhost:4000/edit" method="POST">
<input style="display: none;" value='`+string_of_finalobject+`' class="form-control" name="editedvalues" type="text">

<button  style="display: none;" id="Submitbutton" type="submit" class="btn btn-primary">Submit</button>
</form>
`
document.getElementById('createquickform').innerHTML =generatedform

document.getElementById("Submitbutton").click()



}




