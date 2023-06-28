
function back() {
window.location = "activity_1.html";
}

function getScore()
{
	score = localStorage.getItem("score");	
	document.getElementById("update").innerHTML = "<h1>Placar: " + score +"</h1>";
}