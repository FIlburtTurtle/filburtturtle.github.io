//LINE GRAPH FOR THE CRM, DEPENDENT ON RAPHAEL.JS

//Setting up dimensions for the graph

var anchorX = 30,
	anchorY = 275,
	maxX = 450,
	maxY = 20;

//JSON Data: import a data file with the first element containing the percentage based on week. day, month, year, ect...

var returnPoints = [{
    "percentage" : .10,
    "type" : "week"
},
{
    "percentage" : .20,
},
{
    "percentage" : .40,
},
{
    "percentage" : .50,
},
{
    "percentage" : .55,
}];

//Setting up x coordinates

var	totalWeeks = returnPoints.length,
	weekWidth = maxX / totalWeeks,
	midPoint =  weekWidth / 2;

//Paths

var anchors = anchorX + " " + anchorY,
 	yAxis = "M" + anchors + "L" + anchorX + " " + maxY + " " ,
 	xAxis = "M" + anchors + "L" + maxX + " " + anchorY + " ";

//Drawing stuff 

function drawGraph(){
	outline = paper.path(xAxis);
	outline.attr({stroke:"#DDD", "stroke-width": 3})
	// for (var i = 0; i <= 0; i--) {
		
	// };
}

function drawPoints(){
	for (var i = 0; i <= returnPoints.length ; i++) {
		var yCoordinate = (-1 * returnPoints[i].percentage * (anchorY-maxY)) + anchorY;
		var xCoordinate = midPoint + (i * weekWidth) + anchorX;
		var point = paper.rect(xCoordinate, yCoordinate - 3, 5, 5);
		point.attr({fill: "#EEA636", stroke: "#EEA636" });

		// //Path from point to point
		// if(i = 0){
		// 	var start = "M" + anchors + "L" + xCoordinate + " " + yCoordinate;
		// 	var startLine = paper.path(start);
		// }
		//Draw Entire Path
		var nextYCoordinate = (-1 * returnPoints[i + 1].percentage * (anchorY-maxY)) + anchorY,
			nextXCoordinate = midPoint + ((i + 1) * weekWidth) + anchorX,
			draw = "M" + xCoordinate + " " + yCoordinate + "L" + nextXCoordinate + " " + nextYCoordinate;

		var drawAll = paper.path(draw)
		drawAll.attr({stroke: "#EEA636"});
	};
}

//Initiate paper and draw all of the things

var paper = Raphael('returnGraph');
	drawGraph();
	drawPoints();


