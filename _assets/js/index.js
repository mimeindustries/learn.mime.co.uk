var hidden = [];
var tags = [];
var hw = [];

var docHidden = function(doc){
  // Check the tags
  if(tags.length > 0){
    var docTags = doc.getAttribute("data-tags").split('|');
    var hide = true;
    for(var tag in tags){
      if(docTags.indexOf(tags[tag]) > -1){
        hide = false;
      }
    }
    if(hide) return true;
  }
  // Check the hardware tags
  if(hw.length > 0){
    var docTags = doc.getAttribute("data-hw").split('|');
    var hide = true;
    for(var tag in hw){
      if(docTags.indexOf(hw[tag]) > -1){
        hide = false;
      }
    }
    if(hide) return true;
  }
  // See if it's hidden
  for(var d in hidden){
    if(doc.className.indexOf(hidden[d]) > -1){
      return true;
    }
  }
  return false;
}

var filterDocs = function(){
  var docs = document.querySelectorAll("#docs .doc");
  for(var i = 0; i< docs.length; i++){
    if(docHidden(docs[i])){
      docs[i].style.display = 'none';
    }else{
      docs[i].style.display = '';
    }
  }
  setUrl();
}

var setUrl = function(){
  var url = [];
  if(hidden.length > 0) url.push("hidden=" + hidden.join('|'));
  if(tags.length > 0) url.push("tags=" + tags.join('|'));
  if(hw.length > 0) url.push("hw=" + hw.join('|'));
  if(url.length === 0){
    history.replaceState({}, document.title, '/');
  }else{
    history.replaceState({}, document.title, '/#' + url.join('&'));
  }
}

var enumFilter = function(e, list){
  if(e.srcElement.className == "selected"){
    list.push(e.srcElement.getAttribute("data-filter"));
    e.srcElement.className = "unselected";
  }else{
    var i = list.indexOf(e.srcElement.getAttribute("data-filter"));
    if(i != -1) { list.splice(i, 1); }
    e.srcElement.className = "selected";
  }
  filterDocs();
  e.preventDefault();
  return false;
}

var tagFilter = function(e, list){
  var siblings = e.srcElement.parentElement.getElementsByTagName('a');
  var first_click = true;
  for(var i=0; i< siblings.length; i++){
    if(siblings[i].className !== 'selected'){
      first_click = false;
      break;
    }
  }
  if(first_click){
    // just select this tag and deselect the others
    for(var i=0; i< siblings.length; i++){
      siblings[i].className = 'unselected';
    }
    e.srcElement.className = 'selected';
    list.push(e.srcElement.getAttribute("data-filter"));
  }else{
    // toggle this tag
    if(e.srcElement.className == "selected"){
      var i = list.indexOf(e.srcElement.getAttribute("data-filter"));
      if(i != -1) { list.splice(i, 1); }
      e.srcElement.className = "unselected";
    }else{
      list.push(e.srcElement.getAttribute("data-filter"));
      e.srcElement.className = "selected";
    }
  }
  
  // Generate the list
  list.length = 0;
  var selected = e.srcElement.parentElement.querySelectorAll('a.selected');
  for(var i = 0; i < selected.length; i++){
    list.push(selected[i].getAttribute("data-filter"));
  };
  
  // Select all if all are unselected
  if(list.length === 0){
    for(var i=0; i< siblings.length; i++){
      siblings[i].className = 'selected';
    }
  }
  filterDocs();
  e.preventDefault();
  return false;
}

var setupFilter = function(type, fn, list, enabledFn){
  var links = document.querySelectorAll("#" + type + " a");
  for(var i=0; i<links.length; i++){
    links[i].addEventListener('click', function(e){ return fn(e, list) });
    links[i].className = enabledFn(links[i], list) ? "selected" : "unselected";
  }
}

var parseUrl = function(){
  if(window.location.hash.length <= 1) return;
  var params = window.location.hash.replace('#', '').split('&').map(function(p){
    var s = p.split('=');
    window[s[0]] = s[1].split('|');
  });
}

var filterLinkEnabled = function(link){
  if(hidden.length == 0){
    return true;
  }else{
    for(var i = 0; i< hidden.length; i++){
      if(link.getAttribute('data-filter').indexOf(hidden[i]) > -1){
        return false;
      }
    }
    return true;
  }
}

var tagLinkEnabled = function(link, list){
  if(list.length == 0){
    return true;
  }else{
    for(var i = 0; i< list.length; i++){
      if(link.getAttribute('data-filter').indexOf(list[i]) > -1){
        return true;
      }
    }
    return false;
  }
}

var checkShortcuts = function(){
  if(typeof type !== 'undefined'){
    // Shortcut to a document type so hide the others
    var links = document.querySelectorAll("#type-filter a");
    for(var i=0; i<links.length; i++){
      if(links[i].getAttribute('data-filter') !== 'type-' + type){
        hidden.push(links[i].getAttribute('data-filter'));
      }
    }
  }
  if(typeof level !== 'undefined'){
    // Shortcut to a skill level so hide the others
    var links = document.querySelectorAll("#level-filter a");
    for(var i=0; i<links.length; i++){
      if(links[i].getAttribute('data-filter') !== 'level-' + level){
        hidden.push(links[i].getAttribute('data-filter'));
      }
    }
  }
}

var setupFilters = function(){
  parseUrl();
  checkShortcuts();
  setupFilter('type-filter', enumFilter, hidden, filterLinkEnabled);
  setupFilter('level-filter', enumFilter, hidden, filterLinkEnabled);
  setupFilter('tag-filter', tagFilter, tags, tagLinkEnabled);
  setupFilter('hw-filter', tagFilter, hw, tagLinkEnabled);
  filterDocs();
}

if (window.addEventListener) {
    window.addEventListener('load', setupFilters, false);
} else {
    window.attachEvent('onload', setupFilters);
}