
const fizik = document.getElementById("fizik");
const yama = document.getElementById("yama");

document.addEventListener("click", function(event) {
	jump()
});

function jump () {
	if (fizik.classList != "jump") {
		fizik.classList.add("jump")
	}
	setTimeout( function() {
		fizik.classList.remove("jump")
	}, 300)
}  
	let isAlive = setInterval (function() {
		let fizikTop = parseInt(window.getComputedStyle(fizik).getPropertyValue("top"));
		let yamaLeft = parseInt(window.getComputedStyle(yama).getPropertyValue("left"));

		if (yamaLeft < 42 && yamaLeft > 0 && fizikTop >= 100) {
			alert("Гру завершено!")
		}
	}, 10)