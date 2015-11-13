//===============================
//  Streets sorted by Categories
//===============================

var complaints;
var complaintCodes;
var sortedStreets;
var whichStreet = 0;
var code;
var complaintCodes;

function preload(){
    complaints = loadJSON("data/complaints.json");
    complaintCodes = loadJSON("data/complaintCodes.json");
} 

function setup() {
 
    //Make the canvas and then insert it into a div
    createCanvas(windowWidth, windowHeight);
    background("white");  
    textAlign(CENTER);
    rectMode(CORNER);
      
   //count the complaints per street
    var streets = {};
    for (var i = 0; i < complaints.data.length; i++) {
        var cCode = complaints.data[i][16];
        streets[cCode] = 1 + (streets[cCode] || 0);
    }

    //sort them
    sortedStreets = sortHighLow(streets);   

}

function draw() {

    code = sortedStreets[whichStreet][0];

    background("#E6EBE0");

    textSize(50);
    
    fill("#5CA4A9");
    text("There have been",windowWidth/2,100);

    fill("#ED6A5A");
    text(sortedStreets[whichStreet][1],windowWidth/2,150);

    fill("#5CA4A9");
    text("complaints about",windowWidth/2,200);

    fill("#ED6A5A");
    text(complaintCodes[code]["category"],0,260,windowWidth, 250);


    // TRYING TO FIGURE OUT HOW TO CHANGE THE BG IN RELATION TO THE PRIORITY


    if (complaintCodes[code]["priority"][A]) {
        background(red);
    } else {
        background(orange);
    } else{
        background(yellow);
    } else{
        background(green);
    }

}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    if(whichStreet !==sortedStreets.length-1){
        whichStreet++;
    }

  } else if (keyCode === UP_ARROW) {
    if(whichStreet !== 0){
        whichStreet--;
    }
  }
}


