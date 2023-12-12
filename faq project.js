var plus1 = document.getElementById("plus-minus-1");
var plus2 = document.getElementById("plus-minus-2");
var plus3 = document.getElementById("plus-minus-3");
var plus4 = document.getElementById("plus-minus-4");
var minus1 = document.getElementById("minus-1");
var minus2 = document.getElementById("minus-2");
var minus3 = document.getElementById("minus-3");
var minus4 = document.getElementById("minus-4");
var para1 = document.getElementById("para-1");
var para2 = document.getElementById("para-2");
var para3 = document.getElementById("para-3");
var para4 = document.getElementById("para-4");
plus1.addEventListener("click", function(){
    plus1.style.display = "none";
    minus1.style.display = "block";
    para1.style.display = "block";
});
minus1.addEventListener("click", function(){
    minus1.style.display = "none";
    plus1.style.display = "block";
    para1.style.display = "none";
});

plus2.addEventListener("click", function(){
    plus2.style.display = "none";
    minus2.style.display = "block";
    para2.style.display = "block";
});
minus2.addEventListener("click", function(){
    minus2.style.display = "none";
    plus2.style.display = "block";
    para2.style.display = "none";
});

plus3.addEventListener("click", function(){
    plus3.style.display = "none";
    minus3.style.display = "block";
    para3.style.display = "block";
});
minus3.addEventListener("click", function(){
    minus3.style.display = "none";
    plus3.style.display = "block";
    para3.style.display = "none";
});

plus4.addEventListener("click", function(){
    plus4.style.display = "none";
    minus4.style.display = "block";
    para4.style.display = "block";
});
minus4.addEventListener("click", function(){
    minus4.style.display = "none";
    plus4.style.display = "block";
    para4.style.display = "none";
});