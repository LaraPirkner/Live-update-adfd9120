const pi = Math.PI;

/*calculation perimeter*/
function calculation() {
    var input = document.getElementById('diameter').value;
    var answerPer = input * pi;
    document.getElementById("answerPer").innerText = answerPer;

    var answerSur = input * input * pi * 0.25;
    document.getElementById("answerSur").innerText = answerSur;

}

/*date*/
function clockTick()    {
    currentTime = new Date();
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes(),
    seconds = currentTime.getSeconds(),
    document.getElementById('date').innerHTML= (hours + ':' + minutes + ':' + seconds);
 }
 
 setInterval(function(){clockTick();}, 1000);