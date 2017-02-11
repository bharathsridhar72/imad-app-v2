var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //create a  request to the counter endpoint
    var request = XMLhttpsrequest();
    //Captre the response and store it in a variable
    request.onreadystatechange =  function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status = 200){
                var couter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString()
            }
        }
    };
  
   
    //Make a response
    request.open('GET','http://bharathsridhar72.imad.hasura-app.io/counter',true);
    request.send(null);
};
