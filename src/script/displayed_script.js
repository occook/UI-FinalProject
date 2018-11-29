function showModal(clicked_id){
    /*A modal pop-up with more information about the restaurant/hotel appears when the user
    clicks on the name in the left column*/
    var name = clicked_id+"Modal";
    var modal = document.getElementById(name);
    var closeName = clicked_id+"Close";
    modal.style.display = "block";
    var x = document.getElementById(closeName);
    //the modal disappears when the user clicks on the "x"
    x.onclick = function() {
        modal.style.display = "none";
    }
    console.log("CLICKED");
}

var modal = document.getElementById('westinModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function(){
  modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function mercureAddFunc(){
  alert("The Mercure Hotel Santo Domingo has been added to your Collaborative List!");
}

function submitFunc(){
  alert("Your review has been submitted!");
}

function bookConfirm(){
  alert("Your booking is complete!")
}

function resConfirm(){
  alert("Your reservation is complete!")
}

function westinAddFunc(){
  alert("The Westin Palace Hotel has been added to your Collaborative List!")
}

function iberiaAddFunc(){
  alert("Iberia Airlines has been added to your Collaborative List!")
}

function europaAddFunc(){
  alert("Air Europa has been added to your Collaborative List!")
}

function hertzAddFunc(){
  alert("Hertz has been added to your Collaborative List!")
}

function avisAddFunc(){
  alert("Avis has been added to your Collaborative List!")
}

function inclanAddFunc(){
  alert("Inclán Brutal Bar has been added to your Collaborative List!")
}

function tigreAddFunc(){
  alert("Sidrería El Tigre has been added to your Collaborative List!")
}
