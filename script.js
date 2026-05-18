const btn = document.getElementById('btn-color');
const colorCode = document.getElementById('color-code');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorCode.textContent = `Cor: ${newColor}`;
});

colorCode.addEventListener('click', () => {
    const text = colorCode.textContent.split(': ')[1];
    navigator.clipboard.writeText(text).then(() => {
        alert('Cor copiada para a área de transferência!');
    });
});
