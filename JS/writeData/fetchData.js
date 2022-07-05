// Ready data
var questionV, rollV, secV, genV;

function Ready() {
    questionV = document.getElementById('questionbox').value;
    hint1V = document.getElementById('hint1box').value;
    hint2V = document.getElementById('hint2box').value;
    hint3V = document.getElementById('hint3box').value;
    answerV = document.getElementById('answerbox').value;
}

document.getElementById("select").onclick = function () {
    Ready();
    firebase.database().ref('Questions/'+questionV+'/'+'Hints/').on('value', function(snapshot){
        document.getElementById('hint1box').value = snapshot.val().Hint1;
        document.getElementById('hint2box').value = snapshot.val().Hint2;
        document.getElementById('hint3box').value = snapshot.val().Hint3;
    });
    firebase.database().ref('Questions/'+questionV+'/').on('value', function(snapshot){
        document.getElementById('answerbox').value = snapshot.val().Answer;
    }); 
}