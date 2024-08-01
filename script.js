let container = document.getElementById('container');

for (let i = 0; i < 16*16 ; i++) {
    let smallDiv = document.createElement('div');
    smallDiv.className  = 'small-div';
    container.appendChild(smallDiv);
    smallDiv.addEventListener('mouseenter', () => {
    smallDiv.style.backgroundColor = "red";
})
}



