




var latestext = ''

for(var i = 0;i<latestarray.length;i++){

latestext += `<div class="col-lg-3 col-md-6">
<div class="single-product">
    <img class="img-fluid customcroppedpicture" src="../public/img/product/`+latestarray[i].image+`.png" alt="">
    <div class="product-details">
        <h6>`+latestarray[i].name+`</h6>
        <div class="price">
            <h6>N`+latestarray[i].discount_price+`</h6>
            <h6 class="l-through">N`+latestarray[i].real_price+`</h6>
        </div>
        <div class="prd-bottom">

            <a href="" class="social-info">
                <span class="ti-bag"></span>
                <p class="hover-text">add to bag</p>
            </a>
           
        </div>
    </div>
</div>
</div>`

}


document.getElementById("latestproducts").innerHTML = latestext



///////////////////////////////////////////////////




var comingsoontext = ''

for(var i = 0;i<comingsoonarray.length;i++){

    comingsoontext += `<div class="col-lg-3 col-md-6">
<div class="single-product">
    <img class="img-fluid customcroppedpicture"  src="../public/img/product/`+comingsoonarray[i].image+`.png" alt="">
    <div class="product-details">
        <h6>`+comingsoonarray[i].name+`</h6>
        <div class="price">
            <h6>N`+comingsoonarray[i].discount_price+`</h6>
            <h6 class="l-through">N`+comingsoonarray[i].real_price+`</h6>
        </div>
      
    </div>
</div>
</div>`

}


document.getElementById("comingsoon").innerHTML = comingsoontext