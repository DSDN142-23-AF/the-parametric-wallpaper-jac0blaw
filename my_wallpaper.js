//your parameter variables go here!
let noiseScale = 100;//NoiseScale
let space = 10; //Size Perlin field;
let size = 10; //Size of object
let noiseLevel = 0.9; //NoiseLevel
//update colour(26), strokeweight(27), bg(22) on lines mentioned



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}
  
function wallpaper_background() {
  background(20, 255, 255); //bg
  for (x = 0; x < width; x += space) { //scale x input cords
    for (y = 0; y < height; y += space) { //scale y input cords
      var n = noiseLevel * noise (x * noiseScale, y * noiseScale);
      stroke(n * 10, n * 25, n * 50, 25);//colour the noise algorithm
      strokeWeight(15); //strokeweight
      if (n<0.5){ //if noise is less than
      line(x, y, x + size, y + size); //object
      }
    }    
  }
}