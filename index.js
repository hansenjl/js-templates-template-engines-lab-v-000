function createPost(){
  //page template
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var templateFn = _.template(pageTemplate);

   var main = document.getElementsByTagName('main')[0];
   //append rather than replace!
  main.innerHTML += templateFn();
  
  
  //post template
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  
  var content = document.getElementsByName("content")[0].value
  var author = document.getElementsByName("author")[0].value

 
  
  var commentsDiv = document.getElementById("comments");
 
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
 
  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
 
 
}