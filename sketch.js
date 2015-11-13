//============================
//  Paint
//============================

var drawingCanvas

var data;
var complaints;

var streets = [];
var sortedStreets;

function preload(){
    complaints = loadJSON("complaints2.json");
} 


function setup() {

  
    
    //Make the canvas and then insert it into a div
    drawingCanvas = createCanvas(800, 500);
    drawingCanvas.parent('drawingContainer');
    background("white");  

    countComplaints(complaints);
    drawComplaints();

}

function draw() {

    

}

function countComplaints(d){
   
   //count the complaints per street
    for (var i = 0; i < d.data.length; i++) {
        streets[d.data[i][12]] = 1 + (streets[d.data[i][12]] || 0);
    }

    //sort them least to most
    sortedStreets = sortProperties(streets);
}

function drawComplaints(){
    var numberofstreets = sortedStreets.length-1;

    for(var s = 0; s < 10; s++){
        fill("red");
        // ellipse(50,50,100, 100);
        // fill("white");
        console.log(s);
        text(sortedStreets[s][0],70,50*s);
        text(sortedStreets[s][1],90,50*s);
    }
   
}

function sortProperties(obj)
{
  // convert object into array
    var sortable=[];
    for(var key in obj)
        if(obj.hasOwnProperty(key))
            sortable.push([key, obj[key]]); // each item is an array in format [key, value]

    // sort items by value
    sortable.sort(function(a, b)
    {
      return b[1]-a[1]; // compare numbers
    });
    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}


