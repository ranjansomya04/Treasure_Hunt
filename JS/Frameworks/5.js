function analytics() {
    firebase.database().ref('Questions/' + 'Question5' + '/').on('value', function (snapshot) {
        // sessionStorage.setItem("googleAnalytics", snapshot.val().Answer);
        // sessionStorage.remove("Answer");
        // setTimeout(function () { validateForm(); }, 3000);
    });
    sessionStorage.setItem("googleAnalytics", "34567");
}

// var mainAnswer = document.getElementById('hintOpened');
// var mainAns;
function validateForm() {
    var x = document.forms["myForm"]["key"].value;
    if (x == sessionStorage.getItem("googleAnalytics")) {
        window.location.href = "level6-story/level-6-story-1.html";
        return false;
    }
    else {
        alert("Think!! Think!!");
        return false;
    }
}