//iam trying to activate the modal
var demoitems = document.getElementsByClassName("w3-col l3 s6")
for(var i = 0; i<demoitems.length;i++){
    demoitems[i].onclick = function(){
        document.getElementById('id01').style.display='block'
    }
}



