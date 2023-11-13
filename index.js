//Player 1

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage1 = "dice" + randomNumber1 + ".png";

var randomImageSrc = "images/" + randomImage1;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSrc); 


//Player 2 

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSrc = "images/" + randomImage2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSrc); 


//Winner Declaration

if(randomNumber1 > randomNumber2)
{
    document.querySelector('h1').innerHTML = "<em> Player1 win! </em>";
}

else if(randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "<em> Player2 wins!  </em>";
}

else 
{
    document.querySelector('h1').innerHTML = "<em> Draw! </em>";   
}
