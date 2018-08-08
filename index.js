function init(){
   var pageTemplate = document.getElementById("page-template").innerHTML;
 
  //create template function
  var templateFn = _.template(pageTemplate);

  var main = document.getElementByTagName('main');
 
  //append rather than replace!
  commentsDiv.innerHTML = templateFn();
}