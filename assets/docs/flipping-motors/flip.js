/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
;if("document" in self&&!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false;do{r=t[s]+"";var q=g(this,r);if(q!==-1){this.splice(q,1);o=true}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}return !o};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))};

function click(el, fn){
  el = document.querySelector(el);
  el.addEventListener('click', fn);
}

function Flipper(){
  var self = this;
  this.mirobot = new Mirobot();
  this.updateConnectionState();
  this.setupInit();
  click('#flipper .flip', function(){ self.flipMotors(); });
}

Flipper.prototype = {
  connected: false,
  moveCal: 1,
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

  getMoveCal: function(){
    var self = this;
    document.querySelector('#flipper .message').innerHTML = "Reading current state";
    this.mirobot.moveCalibration(function(e, msg){
      if(msg.status === 'complete'){
        self.moveCal = Number(msg.msg);
        console.log(self.moveCal);
        document.querySelector('#flipper .flip').disabled = false;
        if(self.moveCal > 0){
          document.querySelector('#flipper .message').innerHTML = "Motors are normal";
        }else{
          document.querySelector('#flipper .message').innerHTML = "Motors are reversed";
        }
      }
    });
  },
  flipMotors: function(){
    var self = this;
    document.querySelector('#flipper .flip').disabled = true;
    self.mirobot.calibrateMove(-this.moveCal, function(e){
      if(e === 'complete'){
        self.getMoveCal();
      }
    })
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
    var self = this;
    if(e.state === 'connected'){
      this.connected = true;
      this.updateConnectionState();
      this.mirobot.version(function(e, msg){
        if(/^\d+\.\d+\.\d+$/.test(msg.msg)){
          if(msg.msg < '2.0.9'){
            alert("Please upgrade your Arduino firmware to version 2.0.9 or greater in order to fix the motors")
          }
        }
        self.getMoveCal();
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
    window.cal = new Flipper();
  }else{
    window.setTimeout(load, 500);
  }
}

load();