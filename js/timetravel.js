/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* Bronnen images:
Planeet1 https://pngimg.com/imgs/nature/mars_planet/
Planeet2 http://pluspng.com/planet-png-hd-7273.html
planeet3 http://www.stickpng.com/cat/nature/space/planets?page=1
aarde http://www.pngall.com/earth-png
galifrey http://www.jollybengali.net/tag/astronomy/
galaxy https://www.istockphoto.com/es/v%C3%ADdeos/particulas-polvo?page=6&sort=mostpopular&offlinecontent=include&phrase=particulas%20polvo
tardis http://www.sclance.com/pngs/tardis-transparent-png/view-page-3.htm

ik kon niet helemaal uitvogelen waarom de getElemenstByClassName de error 'addEventListener is not a function gaf' met deze site heb ik dat probleem op kunnen lossen https://stackoverflow.com/questions/32027935/addeventlistener-is-not-a-function-why-does-this-error-occur/32027957 */

var buttonToe = document.getElementsByClassName("toekomst")[0];
var buttonVer = document.getElementsByClassName("verleden")[0];


function verleden() {
    var randomPlan = Math.floor((Math.random() * 5) + 1);

    var imagesArray = ['img/earth.png', 'img/gallifrey.png', 'img/planeet1.png', 'img/planeet2.png', 'img/planeet3.png'];

    var planeetArray = ['Aarde', 'Gallifrey', 'Mars', 'Skaro', 'De maan'];

    var planeten = imagesArray[randomPlan - 1];
    var planeetNaam = planeetArray[randomPlan - 1];
    console.log(planeten);

    document.getElementById("earth").src = planeten;

    var randomNum = Math.floor((Math.random() * 2018) + 1);
    var jaartal = [randomNum - 1];

    var tekst = document.getElementById("waar");
    tekst.textContent = ('Je bent in het jaar ' + jaartal + ' op ' + planeetNaam + ' geland');

}


function toekomst() {
    var randomPlan = Math.floor((Math.random() * 5) + 1);

    var imagesArray = ['img/earth.png', 'img/gallifrey.png', 'img/planeet1.png', 'img/planeet2.png', 'img/planeet3.png'];

    var planeetArray = ['Aarde', 'Gallifrey', 'Mars', 'Skaro', 'De maan'];

    var planeten = imagesArray[randomPlan - 1];
    var planeetNaam = planeetArray[randomPlan - 1];
    console.log(planeten);

    document.getElementById("earth").src = planeten;
    /* De 2018-3000)) +2018 heb ik gevonden met behulp van https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range */
    var randomNum = Math.floor((Math.random() * (2018 - 3000)) + 2018);
    var jaartal = [randomNum+2018];

    var tekst = document.getElementById("waar");
    tekst.textContent = ('Je bent in het jaar ' + jaartal + ' op ' + planeetNaam + ' geland');
}

buttonToe.addEventListener("click", toekomst, false);
buttonVer.addEventListener("click", verleden, false);
