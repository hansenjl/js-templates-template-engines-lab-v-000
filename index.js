function init(){
  //page template
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var templateFn = _.template(pageTemplate);
  
  //post template
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  
  var content = document.getElementsByName("content")[0].value
  var author = document.getElementsByName("author")[0].value

  var main = document.getElementsByTagName('main')[0];
 
  //append rather than replace!
  main.innerHTML += templateFn();
}