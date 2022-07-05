function analytics() {
    firebase.database().ref('Questions/' + 'Question8' + '/').on('value', function (snapshot) {
        // sessionStorage.setItem("googleAnalytics", snapshot.val().Answer);
        // sessionStorage.remove("Answer");
        // setTimeout(function () { validateForm(); }, 3000);
    });
    sessionStorage.setItem("googleAnalytics", "hesoyam");
}

// var mainAnswer = document.getElementById('hintOpened');
// var mainAns;
function validateForm() {
    var x = document.forms["myForm"]["key"].value;
    if (x == sessionStorage.getItem("googleAnalytics")) {
        document.getElementById("balanceID").innerHTML = "Balance: 250,000$";
        // delay(5000);
        // document.getElementById("disableButton").disabled = false;
        var newAnchor = document.createElement("A");
        newAnchor.href = "ending/ending-1.html";
        var newBtn = document.createElement("BUTTON");
        newBtn.textContent = "MAKE THE PAYMENT";
        newBtn.className = "pillBtn"
        const body = document.body;
        body.appendChild(newAnchor);
        newAnchor.appendChild(newBtn);

        // newBtn.onclick = changeLocation();
        // console.log(newBtn)
        return false;
    }
    else {
        alert("Think!! Think!!");
        return false;
    }

    document.getElementsByClassName("pillBtn").onclick = changeLocation();
    function changeLocation() {
        window.location.href = "ending/ending-1.html";
    }

}