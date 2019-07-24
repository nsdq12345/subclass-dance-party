describe('Dancer', function() {

  var blinkyDancer, clock;
  var BigDancer; 
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
    BigDancer = new makeBigDancer(15, 25, timeBetweenSteps);
    BigDancer.lineUp();
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('lineup', function() {
    //
    it('lineUp should move all dancers to the left', function() {
      expect(BigDancer.left).to.be.equal(0);
    });
  });

  describe('distance', function(){
    it('should measure distance between dancers', function(){
      expect(BigDancer.distance(1,0,2,0)).to.be.equal(1);
    });
  });
});
