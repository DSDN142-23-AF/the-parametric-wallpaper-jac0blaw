//your parameter variables go here!
let noiseScale = 20;//resolution
let space = 4; //Size Perlin field;
let size = 2;//size of object
let noiseLevel = 0.2;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 20;
}
  
function wallpaper_background() {
  background(100, 100, 100); //bg
  for (x = 0; x < width; x += space) { //scale input cords
    for (y = 0; y < height; y += space) { //scale input cords
      var n = noiseLevel * noise (x * noiseScale, y * noiseScale);
      stroke(n * 200, n * 200, n * 255, 100);//colour times noise using stroke
      strokeWeight(12); //strokeweight
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