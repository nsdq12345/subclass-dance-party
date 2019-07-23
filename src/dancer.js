// // // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>')
  this.step();
  this.setPosition(top, left);

  //Dancer.prototype.touch();
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};



Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  //console.log("CSS: " + this.top);
  this.$node.css(styleSettings);
}

Dancer.prototype.lineUp = function(){
  var styleSettings = {
    left: 0,
  };
  this.$node.css(styleSettings);
}

Dancer.prototype.touch = function() {
  var coordinates = [];

  var diff = function(num1, num2){
    if (num1 > num2){
      return (num1 - num2);
    }else{
      return (num2 - num1);
    }
  }

  var distance = function (x1, y1, x2, y2){
    var deltaX = diff(x1, x2);
    var deltaY = diff(y1, y2);
    var dist = Math.sqrt(Math.pow((deltaX), 2) + Math.pow((deltaY), 2));
    return dist; 
  };

  for (var i = 0; i < window.dancers.length; i++) {
    coordinates.push([window.dancers[i].left, window.dancers[i].top]);
  }
  for (var i = 0; i < coordinates.length; i++){
    var dist = distance(coordinates[i][0], coordinates[i][1], this.left, this.top);
  
    if (dist <35 && dist > 0){
      console.log(dist);
      var styleSettings = {border: '10px solid pink'}; 
      this.$node.css(styleSettings);
      }
  }
  //console.log("Distance: " + Math.distance([0,0], [1,1]))
  //var dist = Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2)); 
  //console.log("Distance: " + Math.sqrt(Math.pow((0-1), 2) + Math.pow((0-1), 2)));
}



