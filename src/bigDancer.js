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

    var hoverReact = function() {
        if (this.$node.hasClass("white-dancer") || this.$node.hasClass("big-dancer")) {
            this.$node.addClass("red-dancer");
            this.$node.removeClass("big-dancer");
            this.$node.removeClass("white-dancer");
        } else if (this.$node.hasClass("red-dancer")) {
            this.$node.addClass("white-dancer");
            this.$node.removeClass("big-dancer");
            this.$node.removeClass("red-dancer");
        }
    }
    
    this.$node.hover(hoverReact.bind(this));
}




