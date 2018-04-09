var slideIndex=1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
function currentDiv(n){
    showDivs(slideIndex = n);
}

function openTab(evt, tabName) {
   
    // Declare all variables
    var i, tabcontent, tablinks;
    if(i==0){
        i=1; 
    }
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
} 

// function Register(i){
// if(i=="1"){
// document.getElementsByClassName('Login')[0].style.visibility = 'hidden';
// document.getElementsByClassName('Register')[0].style.visibility = 'visible';
// } else{
//     document.getElementsByClassName('Register')[0].style.visibility = 'hidden';
//     document.getElementsByClassName('Login')[0].style.visibility = 'visible';
// }
// }
function Register(i){
if(i=="1"){
document.getElementsByClassName('Login')[0].style.display = 'none';
document.getElementsByClassName('Register')[0].style.display = 'inline';
} else{
    document.getElementsByClassName('Register')[0].style.display  = 'none';
    document.getElementsByClassName('Login')[0].style.display  = 'inline';
}
}

// function Login(){
//    var UserName="ArnisB"
//    var UserName="JanisM"
//    var PSW

// }
$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
	});
});

function Mesage(){
    if(document.getElementById('Username').value==""){
        alert('Enter UserName !!!');
    }else {
    console.log("Palaižas  mesage funkcija ");
   var n1=document.getElementById('Username').value;
   console.log(n1);
   var n2=document.getElementById('Mtext').value;
   console.log(n2);
// esošo čatu izveido un saglabā 
   var n3= document.getElementById('chat');
   console.log(n3);
   var ul = document.createElement("ul");
   n3.appendChild(ul);

   var time = new Date();
   var N= " Users: "+n1+ "; At: " + time + ";  Wrote: "+ n2+ " "; 
   console.log(N);
   var mesage = document.createTextNode(N);
   var uu = document.createElement("ul");
   uu.appendChild(mesage);
   document.getElementById("chat").appendChild(mesage);
   document.getElementById('Mtext').value ="";
}
}   