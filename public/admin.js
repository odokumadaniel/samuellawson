var filehtml=''
document.getElementById("buttonimage").onclick =  function(){
  
        for(var i = 0; i<imagenamecommarray.length;i++){
            filehtml += ' <div class="column " style=""><img src="../public/img/product/'+imagenamecommarray[i]+'" class="w3-round" alt="Norway" style="width:100px;height: 100px;object-fit: cover;"><div class = " w3-panel "><p class="text-dark" style="text-overflow: ellipsis; width: 100px;text-align: middle;overflow: hidden">'+imagenamecommarray[i]+'</p></div></div>'
            }

            document.getElementById('imagepopulation').innerHTML = filehtml
        }