var allProducts = document.querySelectorAll("#parentt .fro .btn")
 var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var Product = document.querySelector(".Product")
var preesss = document.querySelector("#pres-shoo-1")
var totalPrice = 0 ;
allProducts.forEach( function (item){
    item.onclick = function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML +=    Product.textContent + "        /\\ + \\/           " ;
        if (content.innerHTML != "" ){
            btn.style.display = "block";
            btn.style.backgroundColor = "blue"
            btn.style.color = "white"
        }
    }
})
btn.onclick = function (){
    // console.log(totalPrice)
    preesss.innerHTML =totalPrice
}


var alertttttt = document.querySelector("#btt-allerrtt")
var alerttttt2 = document.querySelector("#allertt")

alertttttt.onclick = function(){
    {
        alerttttt2.style.display= "none" ;
    }
}