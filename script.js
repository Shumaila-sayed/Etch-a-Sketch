let container = document.getElementById('container');

function random(number) {
	return Math.floor(Math.random() * (number + 1));
}

for (let i = 0; i < 16 * 16; i++) {
	let smallDiv = document.createElement('div');
	smallDiv.className = 'small-div';
	container.appendChild(smallDiv);
	smallDiv.addEventListener('mouseenter', () => {
		smallDiv.style.backgroundColor = `rgb(${random(255)} ${random(
			255
		)} ${random(255)})`;
	});
}

let btn = document.createElement('BUTTON');
btn.className = 'btn';
document.body.insertBefore(btn, container);
btn.textContent = 'Change Grid Size';

function reSize() {
	let num = prompt('Enter size: (not more than 100)');

	if (num > 100) {
		alert('Not over 100!!!');
		return;
	} else {
		container.replaceChildren();
		for (let i = 0; i < num * num; i++) {
			let smallDiv = document.createElement('div');
			smallDiv.className = 'small-div';
			smallDiv.style.height = 600 / num + 'px';
			smallDiv.style.width = 600 / num + 'px';
			container.appendChild(smallDiv);
			smallDiv.addEventListener('mouseenter', () => {
				smallDiv.style.backgroundColor = `rgb(${random(255)} ${random(
					255
				)} ${random(255)})`;
			});
		}
	}
}
btn.addEventListener('click', reSize);