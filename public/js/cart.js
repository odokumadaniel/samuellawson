
function CartProcess(){
var shoppinglistarray  = JSON.parse(localStorage.getItem('storageOFarraysformywebsite'))
var demoarray = [Cosplay,Tops, three_dimension, picture_frames,Manga,DVD,Utensils]

var backendextract =  extractAllvalues({
    frontendarray:shoppinglistarray,
    backendarray:demoarray
}) 

document.getElementById("cartelements").innerHTML = tohtml(backendextract)





var reducedbutton = document.getElementsByClassName('reduced items-count')
var inputext = document.getElementsByClassName('input-text qty')
var increasedbutton = document.getElementsByClassName('increase items-count')
var calculatedprice = document.getElementsByClassName("calculatedprice")
var multiplication = document.getElementsByClassName("multiplicationclass")



for (var i = 0; i < reducedbutton.length; i++) {


    reducedbutton[i].onclick = function () {
        var index;
        index = this.getAttribute("data-index")
        if (Number(calculatedprice[index].innerText) > 0 && inputext[index].value.indexOf('-')!=0) {


            inputext[index].value = Number(inputext[index].value) - 1
            calculatedprice[index].innerText = Number(multiplication[index].innerText) * Number(inputext[index].value)
        }
    }

    increasedbutton[i].onclick = function () {
        var index;
        index = this.getAttribute("data-index")

if(inputext[index].value.indexOf('-')!=0 ){
        inputext[index].value = Number(inputext[index].value) + 1
        calculatedprice[index].innerText = Number(multiplication[index].innerText) * Number(inputext[index].value)
    }
    }

}


for (var i = 0; i < inputext.length; i++) {
    inputext[i].onkeyup = function () {
        var index = this.getAttribute("data-index")
        if (inputext[index].value.indexOf('-')!=0 ) {
          
            calculatedprice[index].innerText = Number(multiplication[index].innerText) * Number(inputext[index].value)
        }
    }
}


var checkoutbtn = document.getElementById('checkoutbtn')
var nameofitem = document.getElementsByClassName('customfontsize name')

checkoutbtn.onclick = function(){
    var detailselements = document.getElementsByClassName("detailselements")
    var demoobject = []
    for( var index= 0; index<nameofitem.length;index++){
         demoobject.push( {
            name:nameofitem[index].innerText,
            multiplier:inputext[index].value,
            calculated:calculatedprice[index].innerText,
            id:detailselements[index].getAttribute('data-id')
        })

    }
    localStorage.setItem('checkoutstorageOFarraysformywebsite', JSON.stringify(demoobject)) 


}







//closing button method
var detailselements = document.getElementsByClassName("detailselements")
var closebutton = document.getElementsByClassName("btn bg-success text-white")
for( var i = 0; i<closebutton.length;i++){
    closebutton[i].onclick = function(){
       var index = Number(this.getAttribute('data-index'))
       detailselements[index].style.display = 'none'

   var newarray =   deleteindex(backendextract,index)
   var array =  JSON.stringify(newarray)

  localStorage.setItem('storageOFarraysformywebsite',array)
 CartProcess()


}
}

}


CartProcess()


//joining all the values in the server
function extractAllvalues({
    frontendarray:shoppinglistarray,
    backendarray:demoarray
}){
var newarray = []
for( var i = 0; i<demoarray.length;i++){
 extractCleanvalues({
    frontendarray:shoppinglistarray,
    backendarray:demoarray[i]
}).map(item => {return newarray.push(item)})
}
return newarray
}





//function for extracting original values from server

function extractCleanvalues({
    frontendarray: shoppinglistarray,
    backendarray: Tops
}) {

    var arrayofextracteditem = []
    for (var i = 0; i < shoppinglistarray.length; i++) {
        var idofitem = shoppinglistarray[i].id
        var sizeofitem = shoppinglistarray[i].size
         var typeofitem = shoppinglistarray[i].type
        
        for (var j = 0; j < Tops.length; j++) {
            if (Tops[j].id == idofitem) {
                var imageofitem = Tops[j].image
                var discount_price = Tops[j].discount_price
                arrayofextracteditem.push({ name: Tops[j].name, id: idofitem, image: imageofitem, size: sizeofitem, type: Tops[j].category,discount_price:discount_price })
            }
        }

    }



    return arrayofextracteditem
}


function tohtml(backendextract){

    var dealstext = ''
    for(var i = 0;i<backendextract.length;i++){
       
    dealstext += `<tr data-id="`+backendextract[i].id+`" class = "detailselements" data-index = '`+i+`' >
    <td>
    
    <div class="media">
            <div class="d-flex">
                <img class = "customcroppedpicture2"  src=" ../public/img/product/`+backendextract[i].image+`.png" alt="">
            </div>
            
        </div>
    </td>
    <td>
    <div class="media-body">
                <p class ="customfontsize "><b  >NAME</b> :<span class ="customfontsize name"> `+backendextract[i].name.toUpperCase()+`</span></p>
                <p class = "customfontsize " > <b>SIZE</b>:<span  class = "customfontsize size"> `+backendextract[i].size.toUpperCase()+`</span></p>
                <p class="customfontsize " ><b>TYPE</b>:<span class="customfontsize type">`+backendextract[i].type.toUpperCase()+`</span></p>
            </div>
    </td>
    <td>
        <h5 >N<span  class= "multiplicationclass" >`+backendextract[i].discount_price+`</span></h5>
    </td>
    <td>
        <div class="product_count">
            <input data-index = '`+i+`'  onkeyup="calculate()" type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                class="input-text qty">
            <button data-index = '`+i+`' class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
            <button data-index = '`+i+`' class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
        </div>
    </td>
    <td>
        <h5>N<span class="calculatedprice">`+backendextract[i].discount_price+`</span></h5>
    </td>
    
    <td><button data-index = '`+i+`' class = "btn bg-success text-white">X </button></td>
    
    </tr>`
    
    }
    return dealstext
    }
    

    function deleteindex(array,index){
   
    
     
    var arr1 = []
    for(var i = 0; i<array.length;i++){
    if(i!=index){
        arr1.push(array[i])
    }
    
    }
    
    return arr1
}