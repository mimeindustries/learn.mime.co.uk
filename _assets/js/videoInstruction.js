var videoInstruction = function(conf){
  var self = this;
  this.currentStep = null;
  this.steps = {};
  this.times = null;
  this.autoadvance = false;
  this.shouldLoop = false;
  var loopDelay;
  
  var identifyStep = function(){
    for(var i=0; i<self.times.length; i++){
      if(self.times[i] > self.video.currentTime){
        // this is the active step
        return i-1;
      }
    }
    return self.times.length - 1;
  }
  
  this.timeUpdated = function(e){
    var step = identifyStep();
    if(step < 0){
      // go to beginning placeholder
      this.gotoStep(0);
    }else{
      if(this.currentStep !== step){
        // it's a step change so pause if necessary
        if(this.shouldLoop && !loopDelay){
          this.video.pause();
          loopDelay = window.setTimeout(function(){
            self.gotoStep(self.currentStep, true);
            loopDelay = null;
          }, 1500);
        }else{
          this.video.pause();
        }
      }
    }
  }

  this.scrollChapters = function(step){
    var topPos = this.steps.querySelector('.step' + step).offsetTop;
    this.steps.querySelector('ul').scrollTop = topPos;
  }

  this.gotoStep = function(step, play){
    window.scrollTo(0, this.element.getBoundingClientRect().top - document.getElementById('header').getBoundingClientRect().bottom + window.scrollY);
    if(loopDelay) window.clearTimeout(loopDelay);
    this.shouldLoop ? showCtrls('loop') : showCtrls('normal');
    this.currentStep = step;
    this.video.currentTime = this.times[step] + 0.1;
    this.displayStep(step);
    this.scrollChapters(step);
    if(play) this.video.play();
  }
  
  this.displayStep = function(step){
    if(this.displayedStep !== step){
      this.displayedStep = step;
      var els = this.steps.querySelectorAll('li')
      for(var i=0; i< els.length; i++){
        els[i].classList.remove('active');
      }
      this.steps.querySelector('.step' + step).classList.add('active');
      var els = this.instructions.querySelectorAll('.instruction')
      for(var i=0; i< els.length; i++){
        els[i].classList.remove('active');
      }
      this.instructions.querySelector('.step' + step).classList.add('active');
      this.displayedStep = step;
    }
  }
  
  this.initTiming = function(){
    var els = this.steps.querySelectorAll('li')
    for(var i=0; i< els.length; i++){
      self.steps[els[i].getAttribute('data-time')] = {step: els[i].getAttribute('data-step'), time: els[i].getAttribute('data-time')};
    }
    this.times = Object.keys(this.steps).map(function(k){return Number(k)}).sort(function (a, b) {  return a - b;  });
  }
  
  this.initSteps = function(){
    var els = this.steps.querySelectorAll('li')
    for(var i=0; i< els.length; i++){
      els[i].addEventListener('click', function(e){
        var el = e.target || e.srcElement;
        self.controls.classList.add('small');
        self.gotoStep(Number(el.getAttribute('data-step')), true);
        return false;
      });
    }
  }
  
  var showCtrls = function(conf){
    if(conf === 'loop') conf = {start: false, back: self.shouldLoop, next: self.shouldLoop, loop: self.shouldLoop, repeat: false}
    if(conf === 'normal') conf = {start: false, back: true, next: true, loop: true, repeat: true}
    var els = Object.keys(conf)
    for(var i=0; i< els.length; i++){
      self.controls.querySelector('.' + els[i]).style.display = (conf[els[i]] ? 'inline-block' : 'none');
    }
  }
  
  this.start = function(){
    this.gotoStep(0, true);
    this.controls.classList.add('small');
    showCtrls('normal');
  }
  
  this.back = function(){
    var prev = this.currentStep - 1;
    if(prev >= 0){
      this.gotoStep(prev, true);
    }
  }
  
  this.next = function(){
    var next = this.currentStep + 1;
    if(next < this.times.length){
      this.gotoStep(next, true);
    }
  }
  
  this.repeat = function(){
    this.gotoStep(this.currentStep, true);
  }
  
  this.loop = function(){
    if(loopDelay) window.clearTimeout(loopDelay);
    var loopText = this.controls.querySelector('.loop span');
    this.shouldLoop = !this.shouldLoop;
    showCtrls('loop');
    loopText.innerHTML = (this.shouldLoop ? "Stop Looping" : "Loop");
    if(this.shouldLoop){
      this.gotoStep(this.currentStep, true);
    }else{
      showCtrls('normal');
      this.video.pause();
    }
  }
  
  this.initControls = function(){
    this.controls.querySelector('.start').addEventListener('click', function(e){ self.start()});
    this.controls.querySelector('.back').addEventListener('click', function(e){ self.back()});
    this.controls.querySelector('.next').addEventListener('click', function(e){ self.next()});
    this.controls.querySelector('.repeat').addEventListener('click', function(e){ self.repeat()});
    this.controls.querySelector('.loop').addEventListener('click', function(e){ self.loop()});
  }
  
  this.init = function(conf){
    this.video = conf.video;
    this.steps = conf.steps;
    this.instructions = conf.instructions;
    this.controls = conf.controls;
    this.element = conf.element;
    this.initTiming();
    this.initSteps();
    this.initControls();
    this.video.addEventListener('timeupdate', function(e){ self.timeUpdated(e); }, false);
  }
  
  this.init(conf);
  return this;
}