var polygon1 = [{x:10, y:0}, {x:10, y:80}, {x:20, y:80}, {x:20,y:0}]
var polygon2 = [{x:36, y:398}, {x:36, y:408}, {x:46, y:408}, {x:46,y:398}]
function checkCollision(polygon1, polygon2){

  var sideToCompare = 1;
  for(var side = 0; side < polygon1.length; side++){

    var slopeOfSide = (polygon1[sideToCompare].y - polygon1[side].y) / (polygon1[sideToCompare].x - polygon1[side].x);
    var inverseSlopeOfSide = -1/slopeOfSide;
    var midPointOfSide1 = {x: (polygon1[sideToCompare].y + polygon1[side].y)/2, y: (polygon1[sideToCompare].x + polygon1[side].x)/2};

    var unknown = midPointOfSide1.y - midPointOfSide1.x*inverseSlopeOfSide;

    // console.log("Slope: " + slopeOfSide);
    // console.log("Inverse Slope: " + inverseSlopeOfSide);
    // console.log("Midpoint: " + midPointOfSide1.x + ", " + midPointOfSide1.y);
    // console.log("Equation for Projection: f(x)=" + inverseSlopeOfSide + "x" + " + " + unknown);

    var highestXForPolygon1 = undefined;
    var lowestXForPolygon1 = undefined;
    for(var i = 0; i < polygon1.length; i++){
      if(inverseSlopeOfSide == Number.POSITIVE_INFINITY || inverseSlopeOfSide == Number.NEGATIVE_INFINITY){
        var newPoint = {x: polygon2[i].y};
      } else if (inverseSlopeOfSide == 0){
        var newPoint = {x: polygon1[i].x};
      } else {
        var unknown2 = polygon1[i].y - polygon1[i].x*slopeOfSide;
        var newPoint = {x: (unknown2 - unknown) / (inverseSlopeOfSide-slopeOfSide)};
      }

      if(newPoint.x > highestXForPolygon1 || typeof highestXForPolygon1 == 'undefined'){
        highestXForPolygon1 = newPoint.x;
      }
      if(newPoint.x < lowestXForPolygon1 || typeof lowestXForPolygon1 == 'undefined'){
        lowestXForPolygon1 = newPoint.x;
      }
    }
    var highestXForPolygon2 = undefined;
    var lowestXForPolygon2 = undefined;
    for(var i = 0; i < polygon2.length; i++){
      if(inverseSlopeOfSide == Number.POSITIVE_INFINITY || inverseSlopeOfSide == Number.NEGATIVE_INFINITY){
        var newPoint = {x: polygon2[i].y};
      } else if (inverseSlopeOfSide == 0){
        var newPoint = {x: polygon2[i].x};
      } else {
        var unknown2 = polygon2[i].y - polygon2[i].x*slopeOfSide;
        var newPoint = {x: (unknown2 - unknown) / (inverseSlopeOfSide-slopeOfSide)};
      }
      if(newPoint.x > highestXForPolygon2 || typeof highestXForPolygon2 == 'undefined'){
        highestXForPolygon2 = newPoint.x;
      }
      if(newPoint.x < lowestXForPolygon2 || typeof lowestXForPolygon2 == 'undefined'){
        lowestXForPolygon2 = newPoint.x;
      }
    }

    if(lowestXForPolygon2 > highestXForPolygon1 && lowestXForPolygon1 < highestXForPolygon2){
      return false;
    }

    // console.log("Lowest Polygon1X: ");
    // console.log(lowestXForPolygon1);
    // console.log("Highest Polygon1X: ");
    // console.log(highestXForPolygon1);
    // console.log("Lowest Polygon2X: ");
    // console.log(lowestXForPolygon2);
    // console.log("Highest Polygon2X: ");
    // console.log(highestXForPolygon2);

    sideToCompare++;
    if(sideToCompare >= polygon1.length){
      sideToCompare = 0;
    }
  }

  sideToCompare = 1;
  for(var side = 0; side < polygon2.length; side++){

    var slopeOfSide = (polygon2[sideToCompare].y - polygon2[side].y) / (polygon2[sideToCompare].x - polygon2[side].x);
    var inverseSlopeOfSide = -1/slopeOfSide;
    var midPointOfSide1 = {x: (polygon2[sideToCompare].y + polygon2[side].y)/2, y: (polygon2[sideToCompare].x + polygon2[side].x)/2};

    //f(x) = slopeOfSidex + unknown
    var unknown = midPointOfSide1.y - midPointOfSide1.x*inverseSlopeOfSide;

    // console.log("Slope: " + slopeOfSide);
    // console.log("Inverse Slope: " + inverseSlopeOfSide);
    // console.log("Midpoint: " + midPointOfSide1.x + ", " + midPointOfSide1.y);
    // console.log("Equation for Projection: f(x)=" + inverseSlopeOfSide + "x" + " + " + unknown);

    var highestXForPolygon1 = undefined;
    var lowestXForPolygon1 = undefined;

    for(var i = 0; i < polygon1.length; i++){
      var newPoint = {};

      if(inverseSlopeOfSide == Number.POSITIVE_INFINITY || inverseSlopeOfSide == Number.NEGATIVE_INFINITY){
        newPoint.x = polygon1[i].y;
      } else if (inverseSlopeOfSide == 0){
        newPoint.x = polygon1[i].x;
      } else {
        var unknown2 = polygon1[i].y - polygon1[i].x*slopeOfSide;
        newPoint.x = (unknown2 - unknown) / (inverseSlopeOfSide-slopeOfSide);
      }

      if(newPoint.x > highestXForPolygon1 || typeof highestXForPolygon1 == 'undefined'){
        highestXForPolygon1 = newPoint.x;
      }
      if(newPoint.x < lowestXForPolygon1 || typeof lowestXForPolygon1 == 'undefined'){
        lowestXForPolygon1 = newPoint.x;
      }
    }
    var highestXForPolygon2 = undefined;
    var lowestXForPolygon2 = undefined;
    for(var i = 0; i < polygon2.length; i++){
      var newPoint
      if(inverseSlopeOfSide == Number.POSITIVE_INFINITY || inverseSlopeOfSide == Number.NEGATIVE_INFINITY){
        newPoint = {x: polygon2[i].y};
      } else if (inverseSlopeOfSide == 0){
        newPoint = {x: polygon2[i].x};
      } else {
        var unknown2 = polygon2[i].y - polygon2[i].x*slopeOfSide;
        newPoint = {x: (unknown2 - unknown) / (inverseSlopeOfSide-slopeOfSide)};
      }
      if(newPoint.x > highestXForPolygon2 || typeof highestXForPolygon2 == 'undefined'){
        highestXForPolygon2 = newPoint.x;
      }
      if(newPoint.x < lowestXForPolygon2 || typeof lowestXForPolygon2 == 'undefined'){
        lowestXForPolygon2 = newPoint.x;
      }
    }

    if(lowestXForPolygon1 > highestXForPolygon2 && lowestXForPolygon2 < highestXForPolygon1){
      return false;
    }

    // console.log("Lowest Polygon1X: ");
    // console.log(lowestXForPolygon1);
    // console.log("Highest Polygon1X: ");
    // console.log(highestXForPolygon1);
    // console.log("Lowest Polygon2X: ");
    // console.log(lowestXForPolygon2);
    // console.log("Highest Polygon2X: ");
    // console.log(highestXForPolygon2);

    sideToCompare++;
    if(sideToCompare >= polygon2.length){
      sideToCompare = 0;
    }
  }
  return true;
}

console.log(checkCollision(polygon1, polygon2));
