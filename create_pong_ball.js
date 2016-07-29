function createPongBall(yPositionInit, xPositionInit){
  var myRectangle = {colorR: Math.floor( Math.random() * 255 ),
    colorG: Math.floor( Math.random() * 255 ),
    colorB: Math.floor( Math.random() * 255 ),
    height: 10,
    width: 10,
    yPos: Math.floor( Math.random() * 300 ) + 50,
    xPos: Math.floor( Math.random() * 700 ) + 50,
    yIncrease: true,
    xIncrease: true,
    speedX: 1,
    speedY: 2,
    tangible: true,
    speedMultiplyer: Math.floor( Math.random() * 1 )+1,
    lastHitBy: {},
    needsToBeRemoved: false
  };

  var randomTangibility = Math.floor(Math.random() * 2);
  // if(randomTangibility == 1){
  //   myRectangle.tangible = false;
  // } else {
  //   myRectangle.tangible = true;
  // }
  return myRectangle;
}
