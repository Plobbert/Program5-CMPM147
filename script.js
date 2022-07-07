/* exported p4_inspirations, p4_initialize, p4_render, p4_mutate */


function p4_inspirations() {
    const inspiration = new Object();
    inspiration.name = "Earth";
    inspiration.assetUrl = 'https://github.com/Plobbert/Program5-CMPM147/blob/main/assets/earth.jpg';
  return [inspiration];
}

function p4_initialize(inspiration) {
    inspiration.image = loadImage(inspiration.assetUrl);
    resizeCanvas(inspiration.image.width / 4, inspiration.image.height / 4);
  return {inspiration};
}

function p4_render(design, inspiration) {}

function p4_mutate(design, inspiration, rate) {}
