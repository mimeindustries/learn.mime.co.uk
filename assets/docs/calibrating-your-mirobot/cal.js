/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
;if("document" in self&&!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false;do{r=t[s]+"";var q=g(this,r);if(q!==-1){this.splice(q,1);o=true}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}return !o};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))};

function click(el, fn){
  el = document.querySelector(el);
  el.addEventListener('click', fn);
}

function Calibrator(){
  this.mirobot = new Mirobot();
  this.updateConnectionState();
  this.setupInit();
  this.setupSlack();
  this.setupDistance();
  this.setupTurn();
}

Calibrator.prototype = {
  connected: false,
  slackCal: 0,
  moveCal: 1,
  turnCal: 1,
  devices: [],
  connectType: undefined,
  setupInit: function(){
    var self = this;
    this.mirobot.fetchDevices(function(res){
      for(var dev in res){
        if(res.hasOwnProperty(dev)){
          self.devices.push(res[dev]);
        }
      }
      if(self.devices.length === 0){
        // show the manual connection pane
        document.querySelector('#init #manualAddress').classList.remove('hidden');
        self.connectType = 'manual';
      }else{
        // put the devices into the device menu
        var options = ''
        for(var i = 0; i< self.devices.length; i++){
          options += '<option value="' + self.devices[i].address + '">' + self.devices[i].name + '</option>';
        }
        options += '<option value="manual">Connect manually...</option>';
        document.querySelector('#autoAddress').innerHTML = options;
        document.querySelector('#autoAddress').addEventListener('change', function(e){
          var val = document.querySelector('#autoAddress').value;
          if(val === 'manual'){
            self.connectType = 'manual';
            document.querySelector('#init #manualAddress').classList.remove('hidden');
            document.querySelector('#init #autoAddress').classList.add('hidden');
          }
        });
        // show the auto connection pane
        document.querySelector('#init #autoAddress').classList.remove('hidden');
        self.connectType = 'auto';
      }
    });
    click('#init #connect', function(){ self.connect(); });
  },

  setupSlack: function(){
    var self = this;
    click('#slack #start', function(){ self.setSlackCal(self.slackCal); });
    click('#slack #stop', function(){ self.mirobot.stop(); });
    click('#slack #more', function(){ self.setSlackCal(self.slackCal + 1); });
    click('#slack #less', function(){ self.setSlackCal(self.slackCal - 1); });
  },
  showSlackCal: function(){
    document.querySelector('#slack .steps').innerHTML = this.slackCal;
  },
  setSlackCal: function(amount){
    if(amount < 0) amount = 0;
    this.slackCal = amount;
    this.showSlackCal();
    this.mirobot.calibrateSlack(amount);
  },
  getSlackState: function(){
    var self = this;
    this.mirobot.slackCalibration(function(e, msg){
      self.slackCal = Number(msg.msg);
      self.showSlackCal();
    });
  },

  setupDistance: function(){
    var self = this;
    click('#distance #draw', function(){ self.distanceDraw(); });
    click('#distance #calibrate', function(){ self.distanceCalibrate(); });
  },
  distanceDraw: function(){
    var self=this;
    var distance = Number(document.querySelector('#distance .desired').value);
    document.querySelector('#distance .stepone').classList.add('hidden');
    document.querySelector('#distance .steptwo').classList.remove('hidden');
    this.mirobot.pendown(function(e){
      if(e === 'complete'){
        self.mirobot.forward(distance, function(e){
          if(e === 'complete'){
            document.querySelector('#distance .steptwo').classList.add('hidden');
            document.querySelector('#distance .stepthree').classList.remove('hidden');
          }
        })
      }
    })
  },
  getDistanceState: function(){
    var self = this;
    this.mirobot.moveCalibration(function(e, msg){
      self.moveCal = Number(msg.msg);
    });
  },
  distanceCalibrate: function(){
    var self = this;
    var desired = Number(document.querySelector('#distance .desired').value);
    var actual = Number(document.querySelector('#distance .actual').value);
    var correctedActual = actual / this.moveCal;
    var newCal = desired / correctedActual;
    self.mirobot.calibrateMove(newCal, function(e){
      if(e === 'complete'){
        self.mirobot.calibrateTurn(newCal, function(e){
          if(e === 'complete'){
            document.querySelector('#distance .stepthree').classList.add('hidden');
            document.querySelector('#distance .stepfour').classList.remove('hidden');
          }
        })
      }
    })
  },

  setupTurn: function(){
    var self = this;
    click('#turn #draw', function(){ self.turnDraw(); });
    click('#turn #calibrate', function(){ self.turnCalibrate(); });
  },
  turnDraw: function(){
    var self=this;
    document.querySelector('#turn .stepone').classList.add('hidden');
    document.querySelector('#turn .steptwo').classList.remove('hidden');
    self.mirobot.pendown(function(e){
      if(e === 'complete'){
        self.mirobot.forward(50, function(e){
          if(e === 'complete'){
            self.mirobot.right(360, function(e){
              if(e === 'complete'){
                self.mirobot.forward(50, function(e){
                  if(e === 'complete'){
                    document.querySelector('#turn .steptwo').classList.add('hidden');
                    document.querySelector('#turn .stepthree').classList.remove('hidden');
                  }
                });
              }
            });
          }
        });
      }
    });
  },
  getTurnState: function(){
    var self = this;
    this.mirobot.turnCalibration(function(e, msg){
      self.turnCal = Number(msg.msg);
    });
  },
  turnCalibrate: function(){
    var diff = Number(document.querySelector('#turn .diff').value);
    var newCal = ((360 + diff) / 360) * this.turnCal;
    this.mirobot.calibrateTurn(newCal, function(e){
      if(e === 'complete'){
        document.querySelector('#turn .stepthree').classList.add('hidden');
        document.querySelector('#turn .stepfour').classList.remove('hidden');
      }
    });
  },

  connect: function(){
    var self = this;
    if(this.connected) this.mirobot.disconnect();
    var address = document.querySelector('#' + this.connectType + 'Address').value;
    if(address === ''){
      document.querySelector('#init .message').innerHTML = "Please enter a valid address";
      return;
    }
    this.mirobot.connect('ws://' + address + ':8899/websocket');
    this.mirobot.addEventListener('connectedStateChange', function(e){ self.mirobotHandler(e); })
  },
  mirobotHandler: function(e){
    if(e.state === 'connected'){
      this.connected = true;
      this.updateConnectionState();
      this.getSlackState();
      this.getDistanceState();
      this.getTurnState();
      this.mirobot.version(function(e, msg){
        if(/^\d+\.\d+\.\d+$/.test(msg.msg)){
          if(msg.msg < '2.0.4'){
            alert("Please upgrade your Arduino firmware to version 2.0.4 or greater in order to support calibration")
          }
        }
      });
      document.querySelector('#init .message').innerHTML = "Successfully connected";
    }
  },
  updateConnectionState: function(){
    var setDisabled = function(state){
      var buttons = document.querySelectorAll('.cal.connectrequired button');
      for(var i = 0; i< buttons.length; i++){
        buttons[i].disabled = state;
      }
    }
    document.body.classList.toggle('connected', this.connected);
    setDisabled(!this.connected);
  }
}


function load(){
  if(!!window.Mirobot){
    window.cal = new Calibrator();
  }else{
    window.setTimeout(load, 500);
  }
}

load();