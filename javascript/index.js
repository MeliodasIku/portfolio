function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

function hideMenu() {
	document.getElementById("main-nav").checked = false;
}

document.addEventListener("DOMContentLoaded", function (event) {
	const nbStar = 80;
	const sky = document.querySelector("sky");
	for (let i = 0; i < nbStar; i++) {
		const star = document.createElement("star");
		sky.appendChild(star);
		const size = getRandom(0, 8) + 3;
		star.style.width = size + "px";
		star.style.height = size + "px";
		let top = getRandom(0, 101) - 1 + "vh";
		star.style.top = top;
		star.style["WebkitAnimationDuration"] = getRandom(0, 30) + 15 + "s";
		star.style["WebkitAnimationDelay"] = getRandom(0, 40) - 40 + "s";
		//console.log(top,star.style.top,star.style["WebkitAnimationDuration "]);
	}

	function showEveryXMs(selector, text, ms, end) {
		for (let i = 1; i < text.length + 1; i++)
			setTimeout(() => {
				document.querySelector(selector).innerHTML = text.substring(0, i);
				if (i == text.length && end) end();
			}, ms + (i - 1) * ms);
	}
	showEveryXMs("#dorian", "Dorian", 100, () => {
		showEveryXMs("#herelli", "Herelli", 100);
	});
});
