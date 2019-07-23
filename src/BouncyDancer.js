var makeBouncyDancer = function(top, left, timeBetweenSteps) {

    Dancer.call(this, top, left, timeBetweenSteps);
    this.top = top;
    this.left = left; 
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node.addClass('bouncy-dancer');
}

makeBouncyDancer.prototype = Object.create(Dancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer; 


makeBouncyDancer.prototype.step = function(){
    var oldStep = Dancer.prototype.step.bind(this); 
    //console.log(typeof oldStep);
    //var oldStep = this.step;
    oldStep();
    
    this.$node.toggle(); 
}