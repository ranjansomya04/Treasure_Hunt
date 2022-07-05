
//scoring system using local storage
//LV1 -10; LV2 -30; LV3 -50
// var maxPointsPerPage = 800;
if (typeof (Storage) !== "undefined") {
    localStorage.setItem("score", 800); 
    var scoreKeeper = localStorage.getItem("score");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
var hintChanger = document.getElementById("hint1");
hint1.innerHTML = "HINT 1: -10 Points";
hintChanger.onclick = function showHint1() {
    document.getElementById("hint1desc").style.display = "block";
    scoreKeeper -= 10;
    hint1.innerHTML = "HINT 2: -30 Points";
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("score", scoreKeeper);
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    hintChanger.onclick = function showHint2() {
        document.getElementById("hint2desc").style.display = "block";
        scoreKeeper -= 30;
        hint1.innerHTML = "HINT 3: -50 Points";
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("score", scoreKeeper);
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
        hintChanger.onclick = function showHint3() {
            document.getElementById("hint3desc").style.display = "block";
            scoreKeeper -= 50;
            hint1.innerHTML = "NO MORE HINTS REMAINING";
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("score", scoreKeeper);
            } else {
                document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
            hintChanger.onclick = function removeHint() {
                document.getElementById("hints").remove();
                document.getElementById("hintOpener").remove();
                if (typeof (Storage) !== "undefined") {
                    localStorage.setItem("score", scoreKeeper);
                } else {
                    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
                }
            }
        }
    }
}