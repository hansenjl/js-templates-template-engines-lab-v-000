function init(){
   var pageTemplate = document.getElementById("page-template").innerHTML;
 
  //create template function
  var templateFn = _.template(pageTemplate);
 
  
 
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
 
  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}