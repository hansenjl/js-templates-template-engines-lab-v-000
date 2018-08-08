function init(){
  //page template
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var templateFn = _.template(pageTemplate);
  
  //post template
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  
  var 

  var main = document.getElementsByTagName('main')[0];
 
  //append rather than replace!
  main.innerHTML += templateFn();
}