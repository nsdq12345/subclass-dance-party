var makeBouncyDancer = function(top, left, timeBetweenSteps) {

    Dancer.call(this, top, left, timeBetweenSteps);
    this.top = top;
    this.left = left; 
    this.timeBetweenSteps = 50;
    this.$node.addClass('bouncy-dancer');

    this.isUp = true;
    this.counter = 0;
}

makeBouncyDancer.prototype = Object.create(Dancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer; 


makeBouncyDancer.prototype.step = function(){
    var oldStep = Dancer.prototype.step.bind(this); 
    //console.log(typeof oldStep);
    //var oldStep = this.step;
    oldStep();
    
    if (this.counter == 5) {
        this.counter = 0;
        this.isUp = !this.isUp;
    }

    if (this.isUp) {
        this.top += 5;
    } else {
        this.top -= 5;
    }

    this.counter++;
    this.setPosition(this.top, this.left);
}