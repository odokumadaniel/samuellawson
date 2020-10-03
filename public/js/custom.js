///////////////////////////custom js///////////////////////////////






Cosplay
three_dimension
 picture_frames 
 Manga


 ////"number_balance" this is for callibration
 







function populateelementlist(MangaNum,number_balance){
var index_of_page = document.getElementsByClassName("paginationindex")
for (let index = 0; index < index_of_page.length; index++) {
    index_of_page[index].onclick = function(){

       var indexx = Number(this.innerText-number_balance)
        console.log(indexx)
        try {
            for (var j = 0; j < index_of_page.length; j++) {

                if (indexx == j) {

                    index_of_page[j].className = index_of_page[j].className += ' active'
                }
                else { index_of_page[j].className = index_of_page[j].className.replace(/ active/g, ' ') }

            }
        } catch (err) {
            console.log(err)
        }


///this would give us the index of the array of objects based on the pagination
///we are going to subtract a value of 1 from the innerText of the pagination so that we will be able to callibrate the 0

console.log(Number(this.innerText-1))
var subarray = MangaNum[Number(this.innerText-1)]
var list_elements_in_array = ''

//the subarray will be displayed when a pagination is clicked
for( var i = 0; i<subarray.length;i++){
    console.log(subarray[i].discount_price)
    list_elements_in_array +='<div data-index = '+i+' class="col-lg-4 col-md-6"><div class="single-product"><img   class="img-fluid customcroppedpicture" src=" ../public/img/product/'+subarray[i].image+'.png" alt=""><div class="product-details"><h6>'+subarray[i].name+'</h6><div class="price"><h6>N'+subarray[i].discount_price+'</h6><h6 class="l-through">N'+subarray[i].real_price+'</h6></div><div class="prd-bottom"><a href="./single-product " class="social-info"><span class="ti-bag"></span><p class="hover-text">add to bag</p></a><a href="" class="social-info"><span class="lnr lnr-heart"></span><p class="hover-text">Wishlist</p></a><a href="" class="social-info"><span class="lnr lnr-sync"></span><p class="hover-text">compare</p></a><a href="" class="social-info"><span class="lnr lnr-move"></span><p class="hover-text">view more</p></a></div></div></div></div>'
 
}





document.getElementById("populatedisplayelements").innerHTML = list_elements_in_array


var imageselect =document.getElementsByClassName('img-fluid customcroppedpicture')
var subelements =document.getElementsByClassName('col-lg-4 col-md-6')
for(var j =0;j<subelements.length;j++){
    subelements[j].onclick = function(){

        console.log('subelements')
        var focusarrayindex = Number(this.getAttribute('data-index'))
        var focusarrayindexarray = subarray[focusarrayindex]
        console.log(focusarrayindexarray)
        localStorage.setItem('array_of_elements',JSON.stringify(focusarrayindexarray))
        localStorage.setItem('image_of_current_item',imageselect[focusarrayindex].src)
    }
}

}
    
}
index_of_page[0].click()
}



document.getElementsByClassName("number")[1].click()


function populatepagination(MangaNum,number_balance){

  
   
   //paginationconversion is a function that was created to divide an array into pagination parts
   
   ////////////////////////////
   
   //initialising a value that should contain the number of paginations displayed on the screen
   var number_of_pagination = 0;
   ////////////////////////////
   
  

   if(MangaNum.length>3){
       //there are 3 numbers being displayed first, so when the number 3 plus the number_balance is equal to the array's length, this means that it can display only the last three numbers(if thats what you want)
       if(Number(3+number_balance) != MangaNum.length){
        var paginationtext = ''
        
        //this condition is placed here to remove the left arrow when it is at the initial number balance which is one
        if(number_balance>1){
            paginationtext  =  '<a id="leftarrow" class="prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>'
    
           }

        number_of_pagination = 3
    
        for(var i = 0; i<number_of_pagination;i++){
            paginationtext += '<a class="paginationindex ">'+Number(i+number_balance)+'</a>'
        }
        ///the ... ellipisis
        paginationtext+='<a class="dot-dot"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>'
        
    paginationtext+= '<a class="paginationindex ">'+MangaNum.length+'</a>'
    paginationtext+='<a  id="rightarrow"  class="next-arrow"><i  class="fa fa-long-arrow-right" aria-hidden="true"></i></a>'
    
    
    

       }
       
       
      
       
       
       else{

        number_of_pagination = 4
        paginationtext='<a id="leftarrow" class="prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>'
        for(var i = 0; i<number_of_pagination;i++){
            paginationtext += '<a class="paginationindex">'+Number(i+number_balance)+'</a>'
        }
        
      
    }

 
   }else{
       console.log(MangaNum)
       number_of_pagination = MangaNum.length
       paginationtext=''
       for(var i = 0; i<number_of_pagination;i++){
           paginationtext += '<a class="paginationindex">'+Number(i+number_balance)+'</a>'
       }
       
    
       
   }
   
   document.getElementById("paginationpopulate").innerHTML = paginationtext
   
   try {
    document.getElementById("rightarrow").onclick = function(){

        //this is for the direction button when trying to increase the pagination sequence
        populatepagination(MangaNum,1+number_balance++)
        
        populateelementlist(MangaNum,number_balance++)
    
    }
   } catch (error) {
       
   }
 

   try {
    document.getElementById("leftarrow").onclick = function(){

        //this is for the direction button when trying to increase the pagination sequence
        populatepagination(MangaNum,number_balance-- -1)
        
        populateelementlist(MangaNum,number_balance--)
    
    }
   } catch (error) {
       
   }

   
   }
   













 function paginationconversion(arrayelements, number) {

    var numbers2 = Number(number)

    var element = []
    var divisions = Math.ceil(arrayelements.length / number)



    for (var i = 0; i < divisions; i++) {
        element[i] = arrayelements.slice(0 + numbers2 * i, numbers2 + numbers2 * i);


    }

    return element
}

