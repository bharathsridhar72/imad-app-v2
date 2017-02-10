console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'new value';
// ,ove the image
var marginLeft = 0;
var id = document.getElementById('madi');
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
    }
madi.onclick = function() {
    var interval = setInterval(moveRight,100);
    madi.style.marginLeft = '100px';
};