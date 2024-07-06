function getRandomNumber() {
    return Math.floor(Math.random() * 255) + 1;
}

function changeBackgroundColor() {
    var red = getRandomNumber();
    var green = getRandomNumber();
    var blue = getRandomNumber();
    document.querySelector("body").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.querySelectorAll(".rangeSlider").forEach(element => {
        element.style.color = `rgb(${255-red}, ${255-green}, ${255-blue})`;
    });
    document.querySelectorAll(".sliderValue").forEach(element => {
        element.style.color = `rgb(${255-red}, ${255-green}, ${255-blue})`;
    });
}

// Change background color every 500 milliseconds (0.5 seconds)
setInterval(changeBackgroundColor, 2000);


function updateSliderValues() {
    document.getElementById("redValue").textContent = document.getElementById("redRangeSlider").value;
    document.getElementById("greenValue").textContent = document.getElementById("greenRangeSlider").value;
    document.getElementById("blueValue").textContent = document.getElementById("blueRangeSlider").value;
    var red = document.getElementById("redRangeSlider").value;
    var green = document.getElementById("greenRangeSlider").value;
    var blue = document.getElementById("blueRangeSlider").value;
    document.getElementsByClassName("screen")[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

document.getElementById("redRangeSlider").addEventListener("input", updateSliderValues);
document.getElementById("greenRangeSlider").addEventListener("input", updateSliderValues);
document.getElementById("blueRangeSlider").addEventListener("input", updateSliderValues);


updateSliderValues();
