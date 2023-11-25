//your parameter variables go here!
let res = 20;//resolution
let t = 10;
let space = 3; //3 for space and size for regular Perlin field;
let size = 2;//size of object
var r = random(255)


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
  background(1, 1, 1); //light honeydew green colour;
  for (x = 0; x < width; x += space) {// x is equal to 0 when x is smaller then width plus or equal space in perlin field
    for (y = 0; y < height; y += space) { //y is equal to 0 when y is smaller then height plus or equal space in perlin field
      var n = noise(x * res, y * res, t);//noise  = n = resolution times y and x and t+= #
      stroke(n * 200, n*20, n*200, 100);//colour
      strokeWeight(12); //stroke
      //fill(n*255,n*255,n*255,255);
      if (n<0.5){
      line(x, y, x + size, y + size); //object
      }
    }    
  }
}

function Draw(){

}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


}