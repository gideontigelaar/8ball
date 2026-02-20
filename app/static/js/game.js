let cnv;
let aspectRatio = 16/9;
const margin = convertRemToPixels(8);
let container = document.getElementById("main");

function setup() 
{
    cnv = createCanvas((windowHeight - margin) * aspectRatio, windowHeight - margin);
    cnv.parent("canvas")
    cnv.position((windowWidth - width)/2,(windowHeight - height)/2, "inherit")

    container.width = (windowHeight - margin) * aspectRatio;
    container.height = windowHeight - margin;
}

function draw() 
{
    background(220);
    //when mouse button is pressed, circles turn black
    if (mouseIsPressed === true) 
    {
        fill(0);
    } 
    else 
    {
        fill(255);
    }

    //white circles drawn at mouse position
    circle(mouseX, mouseY, 100);
}

function windowResized() 
{
    let availableWidth = windowWidth - margin;
    let availableHeight = windowHeight - margin;

    let canvasWidth = availableWidth;
    let canvasHeight = canvasWidth / aspectRatio;

    // If height is too big, fit by height instead
    if (canvasHeight > availableHeight) 
    {
        canvasHeight = availableHeight;
        canvasWidth = canvasHeight * aspectRatio;
    }

    resizeCanvas(canvasWidth, canvasHeight);
    cnv.position((windowWidth - width)/2,(windowHeight - height)/2, "static")

    container.width = canvasWidth;
    container.height = canvasHeight;    
}

// Source - https://stackoverflow.com/a/42769683
// Posted by etham
// Retrieved 2026-02-19, License - CC BY-SA 3.0

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
