var makePopDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.top = top;
    this.left = left; 
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node.addClass('pop-dancer');
}

makePopDancer.prototype = Object.create(Dancer.prototype);
makePopDancer.prototype.constructor = makePopDancer; 


makePopDancer.prototype.step = function(){
    var oldStep = Dancer.prototype.step.bind(this); 
    //console.log(typeof oldStep);
    //var oldStep = this.step;
    oldStep();
    this.$node.toggle(); 
}