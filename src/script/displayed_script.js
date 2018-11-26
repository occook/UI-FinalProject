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
