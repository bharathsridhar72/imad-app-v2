var button = document.getElementById('counter');

button.onclick = function () {
    //create a  request to the counter endpoint
    var request = new XMLHttpRequest();
    //Captre the response and store it in a variable
    request.onreadystatechange =  function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status = 200) {
                var counter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString()
            }
        }
    };
  
   
    //Make a response
    request.open('GET','http://bharathsridhar72.imad.hasura-app.io/counter',true);
    request.send(null);
};
// submit the name
var nameInput = document.getElementById('name');
var name = nameInput.value();
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    // should make a request to the server
    
    // capture the list of name and render it as names
    
}
