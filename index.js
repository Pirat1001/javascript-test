

function changeBackground() {
    document.getElementById("bod").style.backgroundColor = "red";
}

function showh1() {
    document.getElementById("demo").innerText = "Remember that you're awesome!";
}

function showTime() {
    document.getElementById("time").innerText = Date();
}

function changeSrc() {
    document.getElementById("pic").src = "dice-6.png";
}

function showImg() {
    document.getElementById("pic").style.visibility = "visible";
}

function hideImg() {
    document.getElementById("pic").style.visibility = "hidden";
}

function headerOn() {
    document.getElementById("EventDiv").style.backgroundColor = "gray";
    document.getElementById("EventDiv").style.display = "flex";
    document.getElementById("EventDiv").style.justifyContent = "center";
    document.getElementById("EventDiv").style.alignContent = "center";
    document.getElementById("EventDiv").style.height = "40vh";
    document.getElementById("pic").style.border = "10px solid green";
}

function removeHeader() {
    document.getElementById("EventDiv").style.visibility = "hidden";
}

function showHeader() {
    document.getElementById("EventDiv").style.visibility = "visible";
}