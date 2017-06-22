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
          showCtrls({start: false, next: true, back: true, repeat: !this.shouldLoop, loop: true});
        }
      }
    }
  }
  
  this.gotoStep = function(step, play){
    if(loopDelay) window.clearTimeout(loopDelay);
    this.shouldLoop ? showCtrls('loop') : hideAllCtrls();
    this.currentStep = step;
    this.video.currentTime = this.times[step] + 0.1;
    this.displayStep(step);
    if(play) this.video.play();
  }
  
  this.displayStep = function(step){
    if(this.displayedStep !== step){
      console.log("Moving to step " + step);
      this.displayedStep = step;
      this.steps.querySelectorAll('li').forEach(function(step){
        step.classList.remove('active');
      });
      this.steps.querySelector('.step' + step).classList.add('active');
      this.instructions.querySelectorAll('.instruction').forEach(function(instruction){
        instruction.classList.remove('active');
      });
      this.instructions.querySelector('.step' + step).classList.add('active');
      this.displayedStep = step;
    }
  }
  
  this.initTiming = function(){
    this.steps.querySelectorAll('li').forEach(function(step){
      self.steps[step.getAttribute('data-time')] = {step: step.getAttribute('data-step'), time: step.getAttribute('data-time')};
    });
    this.times = Object.keys(this.steps).map(function(k){return Number(k)}).sort(function (a, b) {  return a - b;  });
  }
  
  this.initSteps = function(){
    this.steps.querySelectorAll('li').forEach(function(step){
      step.addEventListener('click', function(el){
        self.controls.classList.add('small');
        self.gotoStep(Number(el.srcElement.getAttribute('data-step')), true);
        return false;
      });
    })
  }

  var hideAllCtrls = function(el){
    self.controls.querySelectorAll('button').forEach(function(el){
      el.style.display = 'none';
    });
  }
  
  var showCtrls = function(conf){
    if(conf === 'loop') conf = {start: false, back: self.shouldLoop, next: self.shouldLoop, loop: self.shouldLoop, repeat: false}
    Object.keys(conf).forEach(function(key){
      self.controls.querySelector('.' + key).style.display = (conf[key] ? 'inline-block' : 'none');
    });
  }
  
  this.start = function(){
    window.scrollTo(0, this.element.getBoundingClientRect().top - document.getElementById('header').getBoundingClientRect().bottom + window.scrollY);
    this.gotoStep(0, true);
    this.controls.classList.add('small');
    hideAllCtrls();
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
      showCtrls({start: false, next: true, back: true, repeat: true, loop: true});
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