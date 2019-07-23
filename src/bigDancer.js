var makeBigDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.top = top;
    this.left = left; 
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node.addClass('big-dancer');
}

makeBigDancer.prototype = Object.create(Dancer.prototype);
makeBigDancer.prototype.constructor = makeBigDancer; 


makeBigDancer.prototype.step = function(){
    var oldStep = Dancer.prototype.step.bind(this); 
    //console.log(typeof oldStep);
    //var oldStep = this.step;
    oldStep();
    this.$node.toggle(); 
    this.$node.hover(function() {
        console.log(this);
        this.$node.css('background-color', 'white');
    });
    //})
}




