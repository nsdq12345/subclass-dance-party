var makePopDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.top = top;
    this.left = left; 
    this.timeBetweenSteps = 150;
    this.$node.addClass('pop-dancer');

    this.counter = 1;
    this.isUp = true; 
    this.isExpand = false;
}

makePopDancer.prototype = Object.create(Dancer.prototype);
makePopDancer.prototype.constructor = makePopDancer; 


makePopDancer.prototype.step = function(){
    var oldStep = Dancer.prototype.step.bind(this); 
    //console.log(typeof oldStep);
    //var oldStep = this.step;
    oldStep();
    
    if (this.counter == 6) {
        this.counter = 1;
        this.isUp = !this.isUp;
    }

    if (this.isUp) {
        // var styleSettings = {border: '100px solid yellow'};
        var styleSettings = {transform: 'scale(' + 1 * this.counter+ ')'};
        this.$node.css(styleSettings);
    } else {
        //var styleSettings = {border: '10px solid yellow'};
        var styleSettings = {transform: 'scale(' + 1 * (1/this.counter+1) + ')'};
        this.$node.css(styleSettings);
    }

    this.counter++;
}