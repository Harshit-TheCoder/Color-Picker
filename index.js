



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
    document.getElementById("redValue").textContent = (document.getElementById("redRangeInput").value)?document.getElementById("redRangeInput").value:document.getElementById("redValue").textContent;
    document.getElementById("greenValue").textContent = (document.getElementById("greenRangeInput").value)?document.getElementById("greenRangeInput").value:document.getElementById("greenValue").textContent;
    document.getElementById("blueValue").textContent = (document.getElementById("blueRangeInput").value)?document.getElementById("blueRangeInput").value:document.getElementById("blueValue").textContent;
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
    const red = document.getElementById("redValue").textContent;
    const green = document.getElementById("greenValue").textContent;
    const blue = document.getElementById("blueValue").textContent;
    const hexColor = rgbToHex(red, green, blue);
    copyToClipboard(hexColor);
});

updateSliderValues();
