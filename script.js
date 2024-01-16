const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
	e.preventDefault();

	const height = parseInt(document.querySelector("#height").value);
	const weight = parseInt(document.querySelector("#weight").value);
	const result = document.querySelector("#results");

	if (height === "" || height < 0 || isNaN(height)) {
		result.innerHTML = `Please enter a valid value ${height}`;
	} else if (weight === "" || weight < 0 || isNaN(weight)) {
		result.innerHTML = `Please enter a valid value ${weight}`;
	} else {
		const bmi = (weight / ((height * height) / 10000)).toFixed(2);
		if (bmi < 18.6) {
			results.innerHTML = `<span>Under weight :${bmi}</span>`;
		} else if (bmi > 18.6 && bmi < 24.9) {
			results.textContent = `Normal Weight:${bmi}`;
		} else {
			results.textContent = `Over Weight : ${bmi}`;
		}
	}
});
