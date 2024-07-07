function getRandomNumber() {
    return Math.floor(Math.random() * 255) + 1;
}

// function changeBackgroundColor() {
//     var red = getRandomNumber();
//     var green = getRandomNumber();
//     var blue = getRandomNumber();
//     // document.querySelector("body").style.backgroundColor = '#040406';
//     // document.querySelectorAll(".rangeSlider").forEach(element => {
//     //     element.style.color = `rgb(${255-red}, ${255-green}, ${255-blue})`;
//     // });
//     // document.querySelectorAll(".sliderValue").forEach(element => {
//     //     element.style.color = `rgb(${255-red}, ${255-green}, ${255-blue})`;
//     // });
// }

// // Change background color every 500 milliseconds (0.5 seconds)
// setInterval(changeBackgroundColor, 2000);


function updateSliderValues() {
    document.getElementById("redValue").textContent = document.getElementById("redRangeSlider").value;
    document.getElementById("greenValue").textContent = document.getElementById("greenRangeSlider").value;
    document.getElementById("blueValue").textContent = document.getElementById("blueRangeSlider").value;
    var red = document.getElementById("redRangeSlider").value;
    var green = document.getElementById("greenRangeSlider").value;
    var blue = document.getElementById("blueRangeSlider").value;
    document.getElementsByClassName("screen")[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function updateTextValues(){
    var red = (document.getElementById("redRangeInput").value)?document.getElementById("redRangeInput").value:255;
    var green = (document.getElementById("greenRangeInput").value)?document.getElementById("greenRangeInput").value:255;
    var blue = (document.getElementById("blueRangeInput").value)?document.getElementById("blueRangeInput").value:255;
    document.getElementsByClassName("screen")[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function rgbToHex(r,g,b){
    return '#' + [r,g,b].map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1? "0"+hex:hex;
    }).join("");
}

function copyToClipboard(text){
    navigator.clipboard.writeText(text).then(function() {
        alert(`Copied ${text} to clipboard`);
    }, function(err) {
        alert('Could not copy text: ', err);
    });
}
document.getElementById("redRangeSlider").addEventListener("input", updateSliderValues);
document.getElementById("greenRangeSlider").addEventListener("input", updateSliderValues);
document.getElementById("blueRangeSlider").addEventListener("input", updateSliderValues);

document.getElementById("redRangeInput").addEventListener("input", updateTextValues);
document.getElementById("greenRangeInput").addEventListener("input", updateTextValues);
document.getElementById("blueRangeInput").addEventListener("input", updateTextValues);

document.getElementById("copyButton").addEventListener("click", function() {
    const red = document.getElementById("redRangeSlider").value;
    const green = document.getElementById("greenRangeSlider").value;
    const blue = document.getElementById("blueRangeSlider").value;
    const hexColor = rgbToHex(red, green, blue);
    copyToClipboard(hexColor);
});

updateSliderValues();
