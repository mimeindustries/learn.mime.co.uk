var initSolution = function(){
  var sols = document.querySelectorAll('.solution');
  for(var i = 0; i< sols.length; i++){
    var el = sols[i];
    var button = document.createElement('button');
    var title = document.createElement('h4');
    title.innerHTML = "The solution";
    button.innerHTML = "Show Solution";
    button.onclick = function(){ this.parentNode.className = 'revealed' }
    sols[i].insertBefore(button, sols[i].firstChild);
    sols[i].insertBefore(title, sols[i].firstChild);
  }
}

if(window.addEventListener){
  window.addEventListener('load', initSolution, false);
}else{
  window.attachEvent('onload', initSolution);
}