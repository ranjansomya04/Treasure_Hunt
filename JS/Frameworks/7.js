function analytics() {
    firebase.database().ref('Questions/' + 'Question7' + '/').on('value', function (snapshot) {
        // sessionStorage.setItem("googleAnalytics", snapshot.val().Answer);
        // sessionStorage.remove("Answer");
        // setTimeout(function () { validateForm(); }, 3000);
    });
    sessionStorage.setItem("googleAnalytics", "qxg6");
}

// var mainAnswer = document.getElementById('hintOpened');
// var mainAns;
function validateForm() {
    var x = document.forms["myForm"]["key"].value;
    if (x == sessionStorage.getItem("googleAnalytics")) {
        window.location.href = "level8-story/level-8-story-1.html";
        return false;
    }
    else {
        alert("Think!! Think!!");
        return false;
    }
}