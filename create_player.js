function createPlayer(xPosition, yPosition, rotation){
  var myNewPlayer = {
    colorR: Math.floor( Math.random() * 255 ),
    colorG: Math.floor( Math.random() * 255 ),
    colorB: Math.floor( Math.random() * 255 ),
    yPos: yPosition,
    xPos: xPosition,
    newXPos: xPosition,
    newYPos: yPosition,
    size: playerDefaultSize,
    angle: 90,
    visible: true,
    destroyed: false,
    movingDown: true,
    powerups: [],
    rotation: 0
    };

  if(rotation){
    myNewPlayer.rotation = rotation;
  }

  return myNewPlayer;
}
