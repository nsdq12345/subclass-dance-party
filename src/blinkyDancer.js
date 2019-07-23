// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
    //console.log("BlinkyThis: " + this);  
    Dancer.call(this, top, left, timeBetweenSteps);
    this.top = top;
    this.left = left; 
    // this.timeBetweenSteps = timeBetweenSteps;
    //this.oldStep = this.step;
    this.$node.addClass('blinky-dancer');
    this.$node.removeClass('dancer');
    this.counter = 0; 
}

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer; 

makeBlinkyDancer.prototype.step = function(){
    //var oldStep = Dancer.prototype.step.bind(this); 
    //var oldStep = this.step;
    //oldStep();
    Dancer.prototype.step.call(this);
    this.$node.toggle(); 


    if (this.counter == 36) {
        this.counter = 0;
    }
    var styleSettings = {transform: 'rotate(' + 10*this.counter + 'deg)'};
    this.$node.css(styleSettings);
    this.counter++
}


//transform: rotate(45deg);