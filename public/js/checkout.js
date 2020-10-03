var sampleobjectarray = [{
    name:'midoriya happy',
    totalprice:'8000',
    multplier:'3',
    tax:'50',
  

},
{
    name:'David West',
    totalprice:'2000',
    multplier:'3',
  

},
{
    name:'Miracle',
    totalprice:'3000',
    multplier:'2',
  

},
{
    name:'Miracle',
    totalprice:'3000',
    multplier:'2',
  

},
{
    name:'Blackberry',
    totalprice:'3000',
    multplier:'2',
  

},
{
    name:'J',
    totalprice:'4000',
    multplier:'2',
  

}


]


var total = extractarrayfromobj('webusersraw','totalprice',sampleobjectarray)

var set = total.map(item=>{return Number(item)})

var subtotal = set.reduce((acc,cur)=>acc+cur)





var shippingvalue = 50


var fullvalue = shippingvalue*set.length

var  finaltotal = fullvalue + subtotal


document.getElementById("shippingid").innerText = 'Flat rate: N'+shippingvalue+''

document.getElementById("subtotal").innerText = 'N'+subtotal+''

document.getElementById("totalid").innerText = 'N'+finaltotal+''




console.log(set)


var checklist=''
for(var i = 0;i<sampleobjectarray.length;i++){

    checklist +='<li><a href="#">'+sampleobjectarray[i].name+'<span class="middle">x 0'+sampleobjectarray[i].multplier+'</span> <span class="last">N'+sampleobjectarray[i].totalprice+'</span></a></li>'
}








document.getElementById("namesofchecklist").innerHTML = checklist





function extractarrayfromobj(webusersraw, username, arrayobject) {

    var jsonconvert = JSON.stringify(arrayobject)
  
    var firstfunction = 'function extractarrayfromobject(){  ' + webusersraw + ' =  JSON.parse(jsonconvert);  var usernamearray = [];for(var i = 0; i<' + webusersraw + '.length;i++){usernamearray.push(' + webusersraw + '[i].' + username + ')};return usernamearray}'
    eval(firstfunction)
  
  
    var lastfunction = 'extractarrayfromobject(' + webusersraw + ')'
    var answer = eval(lastfunction)
    return answer
}  