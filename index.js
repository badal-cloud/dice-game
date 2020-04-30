
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomdiceImage ="dice" + randomNumber1 + ".jpeg";

var randomImagesource="images/"+ randomdiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);


var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomdiceImage2="dice" + randomNumber2 + ".jpeg";

var randomImagesource2="images/"+ randomdiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImagesource2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="👍Player 1 wins!";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="👍Player 2 wins!";
}
else{

    document.querySelector("h1").innerHTML="😲Draw!";
}