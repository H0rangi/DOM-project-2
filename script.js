document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    
   
    function getRandomHue() {
        return Math.floor(Math.random() * 360);
    }

    function getRandomRainbowColor() {
        const hue = getRandomHue();
        const saturation = '100%';
        const lightness = '50%'; 

        return `hsl(${hue}, ${saturation}, ${lightness})`;
    }

    // rainbow box function
    function changeColor() {
        const randomColor = getRandomRainbowColor();
        colorBox.style.backgroundColor = randomColor;
    }

    //event listener
    changeColorBtn.addEventListener('click', changeColor);
});
