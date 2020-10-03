Tops
Cosplay
three_dimension
 picture_frames 
 Manga
 DVD
 Utensils



console.log(Utensils)





 var Sidebar_Tops =  createsubitems(Tops)
var Sidebar_Cosplay =  createsubitems(Cosplay)
var Sidebar_three_dimension=  createsubitems(three_dimension)
var Sidebar_picture_frames  =  createsubitems(picture_frames)
var Sidebar_Manga =  createsubitems(Manga)
var Sidebar_DVD =  createsubitems(DVD)
var Sidebar_Utensils =  createsubitems(Utensils)

document.getElementById('tops').innerHTML = innerHtml(Sidebar_Tops,'tops');document.getElementById('numbertops').innerText = '('+Sidebar_Tops.length+')'

document.getElementById('cosplay').innerHTML = innerHtml(Sidebar_Cosplay,'cosplay');document.getElementById('numbercosplay').innerText  = '('+Sidebar_Cosplay.length+')'
document.getElementById('threedimension').innerHTML = innerHtml(Sidebar_three_dimension,'threedimension');document.getElementById('number3dprints').innerText = '('+Sidebar_three_dimension.length+')'
document.getElementById('pictureframes').innerHTML = innerHtml(Sidebar_picture_frames,'pictureframes');document.getElementById('numberpictures').innerText  = '('+Sidebar_picture_frames.length;+')'
document.getElementById('manga').innerHTML = innerHtml(Sidebar_Manga,'manga');document.getElementById('numbermanga').innerText  = '('+Sidebar_Manga.length+')'

document.getElementById('dvd').innerHTML = innerHtml(Sidebar_DVD,'dvd');document.getElementById('manga').innerText;;document.getElementById('numberdvd').innerText  = '('+Sidebar_DVD.length+')'
document.getElementById('utensils').innerHTML = innerHtml(Sidebar_Utensils,'utensils');document.getElementById('manga').innerText;;document.getElementById('numberutensils').innerText  = '('+Sidebar_Utensils.length+')'



var Sublist = document.getElementsByClassName("main-nav-list child")
for(var i = 0; i<Sublist.length;i++){
    Sublist[i].onclick = function(){
     var maintitle =    this.getAttribute('data-titleid')
     if(maintitle=='tops'){
        clicksubitems(Sidebar_Tops,this.getAttribute('data-subtitle').toUpperCase())
        


    }
    
        if(maintitle=='cosplay'){
            clicksubitems(Sidebar_Cosplay,this.getAttribute('data-subtitle').toUpperCase())
            


        }
        if(maintitle=='threedimension'){

            clicksubitems(Sidebar_three_dimension,this.getAttribute('data-subtitle').toUpperCase())
            
        }
        if(maintitle=='pictureframes'){

            clicksubitems(Sidebar_picture_frames,this.getAttribute('data-subtitle').toUpperCase())
            
        }
        if(maintitle=='manga'){

            clicksubitems(Sidebar_Manga,this.getAttribute('data-subtitle').toUpperCase())
            
        }

        if(maintitle=='dvd'){

            clicksubitems(Sidebar_DVD,this.getAttribute('data-subtitle').toUpperCase())
            
        }
        if(maintitle=='utensils'){

            clicksubitems(Sidebar_Utensils,this.getAttribute('data-subtitle').toUpperCase())
            
        }
      



 console.log(this.getAttribute('data-subtitle'))
    }
}



//this function locates the object that should be initalized when the sub item is clicked
function clicksubitems(Sidebar_Cosplay,string){
    //'string' should be the innerText of clicked elements
    for(var j = 0; j<Sidebar_Cosplay.length;j++){
        if(Sidebar_Cosplay[j].name.toUpperCase() == string){
     var Cosplay =  Sidebar_Cosplay[j].subitems

    var CosplayNum  = paginationconversion(Cosplay, 3)

 populatepagination(CosplayNum,1)
 populateelementlist(CosplayNum,1)
            
        }
    }
    }




function innerHtml(Sidebar_Cosplay,maintitle){
var itemstext = ''
for(var i = 0 ;i<Sidebar_Cosplay.length;i++){

    //the data-titleid is should equal to the id of the sections like 'anime' and 'threedimensions'  the data-subtitle is equal to the Object's name in the Sidebar_Array
 itemstext +='<li data-titleid='+maintitle+' data-subtitle="'+Sidebar_Cosplay[i].name+'" class="main-nav-list child"><a href="#start">'+Sidebar_Cosplay[i].name.toUpperCase()+'<span class="number">('+Sidebar_Cosplay[i].subitems.length+')</span></a></li>'
}
return itemstext
}



































 function createsubitems (Manga){
/// we use this function to extract arrays from objects =>{'foo','foo','bar'}
var initial_anime_array =  extractarrayfromobj('webusersraw','anime',Manga)

/// then we remove the repeated elements = >{'foo','bar'}
var new_anime_array = removerepeatedelements(initial_anime_array)



//then we create a new array that contains objects which consists of the name and an empty array
var sectioning =  new_anime_array.map(item=>{return {name:item,subitems:[]}})

//then we take the 'sectioning' array
for(var i = 0; i<sectioning.length;i++){
var name = sectioning[i].name
//and find the names that match with the 'Manga' array, then we push matching objects in the 'Manga' array into the 'sectioning' subitems array 
for(var j  =0 ; j<Manga.length;j++){
    if(name==Manga[j].anime){
        sectioning[i].subitems.push(Manga[j])
    
    }
}
}
return sectioning

}




function removerepeatedelements(anime_array){
var logarr = []

anime_array.sort();

var current = null;
var cnt = 0;
for (var i = 0; i < anime_array.length; i++) {
    if (anime_array[i] != current) {
        if (cnt > 0) {
            //console.log(current+' '+cnt)

            logarr.push(current)
        }
        current = anime_array[i]
        cnt = 1
    } else {
        cnt++
    }
}
if (cnt > 0) {
    // console.log(current+' '+cnt)

    logarr.push( current )
}
return logarr
}



 function extractarrayfromobj(webusersraw, username, arrayobject) {

    var jsonconvert = JSON.stringify(arrayobject)
  
    var firstfunction = 'function extractarrayfromobject(){  ' + webusersraw + ' =  JSON.parse(jsonconvert);  var usernamearray = [];for(var i = 0; i<' + webusersraw + '.length;i++){usernamearray.push(' + webusersraw + '[i].' + username + ')};return usernamearray}'
    eval(firstfunction)
  
  
    var lastfunction = 'extractarrayfromobject(' + webusersraw + ')'
    var answer = eval(lastfunction)
    return answer
  
  }