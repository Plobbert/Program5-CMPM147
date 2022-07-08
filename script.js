/* exported p4_inspirations, p4_initialize, p4_render, p4_mutate */


function p4_inspirations() {
    const inspiration = new Object();
    inspiration.name = "Earth";
    inspiration.assetUrl = 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=pexels-pixabay-87651.jpg&fm=jpg';
  return [inspiration];
}

function p4_initialize(inspiration, design) {
    /*design.globeDiameter = 400;
    design.globeColorRed = 144;
    design.globeColorGreen = 144;
    design.globeColorBlue = 144;
    design.globeDetailX = currentCanvas.width / 2;
    design.globeDetailY = currentCanvas.height / 2;
    design.globeDetailX1 = currentCanvas.width / 2;
    design.globeDetailY1 = currentCanvas.height / 2;
    design.cloudWidth1 = 30;
    design.cloudWidth2 = 30;
    design.cloudHeight1 = 30;
    design.cloudHeight2 = 30; */

    for (let i = 0; i < 100; i++) {
        design.X[i] = currentCanvas.width / 2;
        design.Y[i] = currentCanvas.height / 2;
        design.width[i] = 50;
        design.height[i] = 50;
        design.R[i] = 100;
        design.G[i] = 100;
        design.B[i] = 100;
    }
    return {design};
}

function p4_render(design, inspiration) {
    /* fill(design.globeColorRed, design.globeColorGreen, design.globeColorBlue);
    beginShape();
    ellipse(currentCanvas.width / 2, currentCanvas.height / 2, design.globeDiameter, design.globeDiameter);
    endShape(CLOSE);
    fill(255, 255, 255);
    noStroke();
    beginShape();
    ellipse(design.globeDetailX, design.globeDetailY, design.cloudWidth1, design.cloudHeight1);
    endShape(CLOSE);
    beginShape();
    ellipse(design.globeDetailX1, design.globeDetailY1, design.cloudWidth2, design.cloudHeight2);
    endShape(CLOSE); */

    for (let i = 0; i < 100; i++) {
        fill(design.R[i], design.G[i], design.B[i]);
        beginShape();
        ellipse(design.X[i], design.Y[i], design.width[i], design.height[i]);
        endShape(CLOSE);
    }
}

function p4_mutate(design, inspiration, rate) {
    /* design.globeDiameter = constrain(randomGaussian(design.globeDiameter, (rate * (150 - 75)) / 20), 75, 400);
    design.globeColorRed = constrain(randomGaussian(design.globeColorRed, (rate * (255 - 0)) / 20), 0, 255);
    design.globeColorGreen = constrain(randomGaussian(design.globeColorGreen, (rate * (255 - 0)) / 20), 0, 255);
    design.globeColorBlue = constrain(randomGaussian(design.globeColorBlue, (rate * (255 - 0)) / 20), 0, 255);
    design.globeDetailX = constrain(randomGaussian(design.globeDetailX, (rate * (currentCanvas.width - 0)) / 20), 0, currentCanvas.width);
    design.globeDetailY = constrain(randomGaussian(design.globeDetailY, (rate * (currentCanvas.height - 0)) / 20), 0, currentCanvas.height);
    design.globeDetailX1 = constrain(randomGaussian(design.globeDetailX1, (rate * (currentCanvas.width - 0)) / 20), 0, currentCanvas.width);
    design.globeDetailY1 = constrain(randomGaussian(design.globeDetailY1, (rate * (currentCanvas.height - 0)) / 20), 0, currentCanvas.height);
    design.cloudWidth1 = constrain(randomGaussian(design.cloudWidth1, (rate * (50 - 10)) / 20), 10, 50);
    design.cloudWidth2 = constrain(randomGaussian(design.cloudWidth2, (rate * (50 - 10)) / 20), 10, 50);
    design.cloudHeight1 = constrain(randomGaussian(design.cloudHeight1, (rate * (50 - 10)) / 20), 10, 50);
    design.cloudHeight2 = constrain(randomGaussian(design.cloudHeight2, (rate * (50 - 10)) / 20), 10, 50); */
    for (let i = 0; i < 100; i++) {
        console.log(design.X);
        console.log('fart');
        design.X[i] = constrain(randomGaussian(design.X[i], (rate * (currentCanvas.width - 0)) / 20), 0, currentCanvas.width);
        design.Y[i] = constrain(randomGaussian(design.X[i], (rate * (currentCanvas.height - 0)) / 20), 0, currentCanvas.height);
        design.width[i] = constrain(randomGaussian(design.width[i], (rate * (150 - 0)) / 20), 0, 150);
        design.height[i] = constrain(randomGaussian(design.height[i], (rate * (150 - 0)) / 20), 0, 150);
        design.R[i] = constrain(randomGaussian(design.R[i], (rate * (255 - 0)) / 20), 0, 255);
        design.G[i] = constrain(randomGaussian(design.G[i], (rate * (255 - 0)) / 20), 0, 255);
        design.B[i] = constrain(randomGaussian(design.B[i], (rate * (255 - 0)) / 20), 0, 255);
    }
    return {design};
}
