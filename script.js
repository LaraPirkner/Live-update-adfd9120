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
var date = new Date();
document.getElementById("date").innerHTML = date;
