// The function addButton takes in a participant as parameter. It appends this user's reviews inside boxes of the column they belong to (car,hotel,restaurant,flight..)
//In addition, it also makes the participant's name visible on the bottom of the page to show that this participant is participating.
function addButton(Participantname){

    if(Participantname=="Participant1"){

        //Hotels column
        if(document.getElementById('hotels').childElementCount<6){
        var btn = document.createElement("BUTTON");
        btn.innerHTML="Blueberry Hotel";
        btn.style.height="45px";
        btn.style.background="green";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant1_box";  //linking all participant 1 reviews to the class "Participant1_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Blueberry Hotel  ','Beautiful looking hotel. A few little things let it down. Dirty crockery in room, only one bath towel in double room, shampoo fixed to wall in bath but not in shower and bed not fixed to headboard therefore you keep sliding away from wall when sitting up in bed watching TV.')});
        document.getElementById("hotels").appendChild(btn);
        //Name of Participant 1 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant1_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the  Hotel section of the Collaboration list.")
        }

        //Flights column
        if(document.getElementById('flights').childElementCount<6){
        btn = document.createElement("BUTTON");
        btn.innerHTML="EasyJet";
        btn.style.height="45px";
        btn.style.background="green";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant1_box";//linking all participant 1 reviews to the class "Participant1_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' EasyJet  ','Overall an ok experience for 2hr flight. Easy bag drop and nice staff. Boarding was quick, however the seats are extremely uncomfortable, I wouldnt use this brand for a longer flight.Flight was full and we were three abreast and there was no room.Im an ok flyer but felt very constrained.flights were very cheap and both flights were on time')});
        document.getElementById("flights").appendChild(btn);
        //Name of Participant 1 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant1_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the Flight section of the Collaboration list.")
        }

        //Car rentals column
        if(document.getElementById('carRentals').childElementCount<6){
        btn = document.createElement("BUTTON");
        btn.innerHTML="Priceless";
        btn.style.height="45px";
        btn.style.background="green";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant1_box";//linking all participant 1 reviews to the class "Participant1_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Priceless  ','Southern, have you ever rented from any of these companies? Just curious if you have first hand knowledge or just repeating hearsay when you make that statement about only renting from the majors. You do realize that all rental companies have issues, right?')});
        document.getElementById("carRentals").appendChild(btn);

        btn = document.createElement("BUTTON");
        btn.innerHTML="Hertz";
        btn.style.height="45px";
        btn.style.background="green";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant1_box";//linking all participant 1 reviews to the class "Participant1_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Hertz  ',' Tyme traveler, over the years, we have rented cars from many different agencies located on-site at the Orlando airport and have never had to wait more than 2 minutes or so......that Hertz zoo was just way over the top !!')});
        document.getElementById("carRentals").appendChild(btn);
        //Name of Participant 1 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant1_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the Car Rental section of the Collaboration list.")
        }

        //Restaurants column
        if(document.getElementById('restaurants').childElementCount<6){
        btn = document.createElement("BUTTON");
        btn.innerHTML="Manana";
        btn.style.height="45px";
        btn.style.background="green";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant1_box";//linking all participant 1 reviews to the class "Participant1_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Manana  ','Loved this hidden gem. Great ambiance and music. Very fun date night here and the margaritas were awesome! Feels authentic. And even if it isnt, who cares? It was awesome')});
        document.getElementById("restaurants").appendChild(btn);
        //Name of Participant 1 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant1_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the Restaurant section of the Collaboration list.")
        }
    }

    if(Participantname=="Participant2"){

        //Hotels column
        if(document.getElementById('hotels').childElementCount<6){
        var btn = document.createElement("BUTTON");
        btn.innerHTML="Mercure Santo Domingo Hotel";
        btn.style.height="45px";
        btn.style.background="orange";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant2_box";//linking all participant 1 reviews to the class "Participant2_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Mercure Santo Domingo Hotel   ','Excellent hotel splash out and have a balcony room great cocktails down stairs rooftop best in Madrid if you didnt have plastic glasses but pool means that they have too. Location great for exploring some lovely local tapas bars the food and breakfast at hotel were of a very high standard and the pool a real bonus.')});
        document.getElementById("hotels").appendChild(btn);

        btn = document.createElement("BUTTON");
        btn.innerHTML="CR Hotel ";
        btn.style.height="45px";
        btn.style.background="orange";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant2_box";//linking all participant 1 reviews to the class "Participant2_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' CR Hotel   ','We needed help figuring out where to get dress shoes and outfits for a Vietnamese wedding and where to buy a card. The manager and staff are excellent and SO helpful. They were ready to help with any questions or issues we might have. Really made the stay there feel welcoming and safe. Highly recommend if you want a clean, central, extremely affordable place with a sweet balcony. We were in room 201 and we plan on coming back next time we are in Nha Trang.')});
        document.getElementById("hotels").appendChild(btn);
        //Name of Participant 2 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant2_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the Hotel section of the Collaboration list. ")
        }

        //Flights column
        if(document.getElementById('flights').childElementCount<6){
        btn = document.createElement("BUTTON");
        btn.innerHTML="EasyJet";
        btn.style.height="45px";
        btn.style.background="orange";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant2_box";//linking all participant 1 reviews to the class "Participant2_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' EasyJet  ','Service and punctuality were very good . Placing of cabin holdalls in the hold is super annoying !!! The seating space could not be practically smaller and the non reclining seats make the flight uncomfortable and more tiring . The beverge/snack could be better . The cost is too great for a budget service !')});
        document.getElementById("flights").appendChild(btn);

        btn = document.createElement("BUTTON");
        btn.innerHTML="Ryanair";
        btn.style.height="45px";
        btn.style.background="orange";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant2_box";//linking all participant 1 reviews to the class "Participant2_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Ryanair  ','Flights were on time, the aircraft was clean and the staff were pleasant. The only worry we had was when they announced the flight time to Copenhagen (we were flying to Cologne). Luckily we did arrive at the correct airport! Would recommend and use again.')});
        document.getElementById("flights").appendChild(btn);
        //Name of Participant 2 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant2_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the Flight section of the Collaboration list. ")
        }

        //Car rentals column
        if(document.getElementById('carRentals').childElementCount<6){
        btn = document.createElement("BUTTON");
        btn.innerHTML="Hertz";
        btn.style.height="45px";
        btn.style.background="orange";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant2_box";//linking all participant 1 reviews to the class "Participant2_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Hertz  ','Oh, I forgot the kiosks were all covered with "out of service" signs, that indeed was a major contribution to the bottle neck.......the staff were definitely overcome and rude, though and could have been a lot more helpful......')});
        document.getElementById("carRentals").appendChild(btn);
        //Name of Participant 2 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant2_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the Car Rental section of the Collaboration list. ")
        }
    }

    if(Participantname=="Participant3"){

        //Hotels column
        if(document.getElementById('hotels').childElementCount<6){
        var btn = document.createElement("BUTTON");
        btn.innerHTML="Memories Hotel";
        btn.style.height="45px";
        btn.style.background="brown";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant3_box";//linking all participant 1 reviews to the class "Participant3_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Memories Hotel  ','We have been there march 2018 and it was a nice vacation for us. The staff is so friendly not just waiting for your tip. The food in the buffet and snack bar was different, well cooked and tasty. They had a big selection of food, veggies/ fruits. Even the beach buffet had enough food and most of the time we went there for our lunch. A lot of entertainment for the kids and adults. Both pools were clean and so good. The beach was amazing. A little far from the lobby but still worth it. We love this place and we recommend it 100%.')});
        document.getElementById("hotels").appendChild(btn);
        //Name of Participant 3 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant3_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the Hotel section of the Collaboration list. ")
        }

        //Flights column
        if(document.getElementById('flights').childElementCount<6){
        btn = document.createElement("BUTTON");
        btn.innerHTML="Iberia";
        btn.style.height="45px";
        btn.style.background="brown";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant3_box"; //linking all participant 1 reviews to the class "Participant3_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Iberia ','Great flight experience with friendly staff and on-time performance. The customer service on the phone needs improvement but if you can avoid them or dont need them then the rest is smooth. We shall always be thankful to Iberia as they provided us an opportunity to visit places that would otherwise be too expensive to get to.')});
        document.getElementById("flights").appendChild(btn);

        btn = document.createElement("BUTTON");
        btn.innerHTML="AirCanada";
        btn.style.height="45px";
        btn.style.background="brown";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant3_box"; //linking all participant 1 reviews to the class "Participant3_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' AirCanada ','As SWISS Businness Class Passenger I had access to the Air Canada Lounge. Modern lounge but crowded, at 16 pm there was almost nothing to eat. The pasta station was cosed. The bartender was loud. Not a relaxing place to be.')});
        document.getElementById("flights").appendChild(btn);
        //Name of Participant 3 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant3_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the Flight section of the Collaboration list. ")
        }

        //Car rentals column
        if(document.getElementById('carRentals').childElementCount<6){
        btn = document.createElement("BUTTON");
        btn.innerHTML="Priceless";
        btn.style.height="45px";
        btn.style.background="Brown";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant3_box"; //linking all participant 1 reviews to the class "Participant3_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Priceless ','We also had a terrible experience with this company. I had to purchase insurance because I had not brought my state farm insurance card for proof of insurance. Never mind your credit card has insurance for rental cars. I was informed it was a florida law. It was midnight after a long flight, so I was tired of arguing after 45 minutes. You are taken far away from the airport so you cannot easily go to another rental car company. ')});
        document.getElementById("carRentals").appendChild(btn);
        //Name of Participant 3 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant3_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the Car Rental section of the Collaboration list. ")
        }

    }

    if(Participantname=="Participant4"){

        //Car rentals column
        if(document.getElementById('carRentals').childElementCount<6){
        btn = document.createElement("BUTTON");
        btn.innerHTML="Lotus";
        btn.style.height="45px";
        btn.style.background="Purple";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant4_box"; //linking all participant 1 reviews to the class "Participant4_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Lotus ','I traveled with my family to Iceland last July and rented a car with Lotus for a week. They picked us up at the airport and we filled out the paperwork in no time. The car was wonderful and everything was as we expected. Their service was excellent. I will do business with them again if I travel to Iceland.')});
        document.getElementById("carRentals").appendChild(btn);
        //Name of Participant 4 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant4_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the Car Rental section of the Collaboration list.")
        }

        //Restaurants column
        if(document.getElementById('restaurants').childElementCount<6){
        btn = document.createElement("BUTTON");
        btn.innerHTML="Manana";
        btn.style.height="45px";
        btn.style.background="Purple";
        btn.className="box_me"; //box_me class specifies the appearance of the review boxes
        btn.className+=" Participant4_box"; //linking all participant 1 reviews to the class "Participant4_box" in order to be able to refer to that class to remove the reviews affiliated to that participant
        //When clicking on the review box, a window pops up with the user's review content
        btn.addEventListener("click", function() {boxOpen(' Manana ','Visiting from Vancouver and fans of Mexican food, we took a chance at Mañana’s. The ambiance is cozy and bursting with colour. The food (cooked by Rosa, one of the owners) was flavourful, delicious, and authentic. The greeting was warm and welcoming, the service was always helpful while not being intrusive. We had a delightful experience. At the end of the night we were starting to muse about having to move here so we could come here all the time! Don’t miss out on this little gem')});
        document.getElementById("restaurants").appendChild(btn);
        //Name of Participant 4 will appear to be visible only if reviews have place to be added to the list.
        document.getElementById("Participant4_name").style.visibility="visible";
        }
        else{ // A maximum of participants' reviews has been specified.
            alert("No more space to add more reviews to the Restaurant section of the Collaboration list.")
        }


    }
}

//Add functionality to remove boxes as well (by classes or id)
// Hiding the name of the participant on the bottom of the page to show that they are no longer collaborating.
function removeParticipant(Participantname){

    if(Participantname=="Participant1"){
        Array.from(document.getElementsByClassName('Participant1_box')).forEach(function(e){
            e.parentNode.removeChild(e); //removing all review boxes relating to participant1_box
        }); //hiding participant name
        document.getElementById("Participant1_name").style.visibility="hidden";
    }
    if(Participantname=="Participant2"){
        Array.from(document.getElementsByClassName('Participant2_box')).forEach(function(e){
            e.parentNode.removeChild(e);
        });
        document.getElementById("Participant2_name").style.visibility="hidden";
    }
    if(Participantname=="Participant3"){
        Array.from(document.getElementsByClassName('Participant3_box')).forEach(function(e){
            e.parentNode.removeChild(e);
        });
        document.getElementById("Participant3_name").style.visibility="hidden";
    }
    if(Participantname=="Participant4"){
        Array.from(document.getElementsByClassName('Participant4_box')).forEach(function(e){
            e.parentNode.removeChild(e);
        });
        document.getElementById("Participant4_name").style.visibility="hidden";
    }

}

//Function that is responsible for making a popup window with content visible upon clicking a participant's review box
function boxOpen(title, message){
    document.getElementById("ratings_popUp").style.visibility="visible";
    document.getElementById("title").innerHTML=title; //title of the review can be modified in the code for code re-use
    document.getElementById("msg").innerHTML=message; // message of the review can be modified in the code for code re-use
    document.getElementById("collaboration_list").style.opacity="0.5";

}

//Function is responsible for closing the popup review window when user clicks on "x" (close)
function hide_popup(){
    document.getElementById("ratings_popUp").style.visibility="hidden";
    document.getElementById("participants_popUp").style.visibility="hidden";
    document.getElementById("collaboration_list").style.opacity="1";
}

//Function is responsible for showing a window with all participants. In this window, the main user can choose to add these participants to the collaborative list.
function inviteParticipants(){
    document.getElementById("participants_popUp").style.visibility="visible";
    document.getElementById("collaboration_list").style.opacity="0.5";
}
