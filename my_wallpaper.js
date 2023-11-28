//your parameter variables go here!
let noiseScale = 100;//noise scale
let space = 5; //Size Perlin field;
let size = 10; //size of object
let noiseLevel = 1;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(A4);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}
  
function wallpaper_background() {
  background(113, 100, 155); //bg
  for (x = 0; x < width; x += space) { //scale input cords
    for (y = 0; y < height; y += space) { //scale input cords
      var n = noiseLevel * noise (x * noiseScale, y * noiseScale);
      stroke(n * 105, n * 200, n * 10, 20);//colour times noise using stroke
      strokeWeight(15); //strokeweight
      if (n<0.5){ //if noise is less than
      line(x, y, x + size, y + size); //object
      }
    }    
  }
}

function Draw(){

}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //textSize(23);
  //textAlign(RIGHT);
  //text('a', 50, 30);
  //textAlign(CENTER);
  //text('b', 50, 50);
  //textAlign(LEFT);
  //text('c', 50, 70);

 
}