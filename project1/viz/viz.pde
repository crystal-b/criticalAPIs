
int latitude = 90;
int longitude = 180;
int spacing = 50;
int increment = 45;
int incrementV = 35;
int hash = 10;
int hashHor = 20;
//declare PFont variable
PFont f;

void setup() {
  size(900, 700);
  //load font
  f=createFont("Arial", 16, true);
  //specify font and color
  textFont(f, 14);
  fill(100);
  line(spacing, 0, spacing, height-spacing);
  line(spacing, height-spacing, width, height-spacing);
  //horizontal hash marks
  for(int x = spacing; x < width; x+=increment) {
      line(x, height-spacing-hash, x, height-spacing+hash);
  }
 //horizontal labels
 text(-180, spacing-20, height-spacing/4);
 text(0, width/2, height-spacing/4);
 text(180, width-spacing, height-spacing/4);
 //vertical hash marks
 for(int y = height-spacing; y > 0; y-=incrementV) {
      line(spacing-hash, y, spacing+hash, y);
  }
 //vertical labels
 text(-90, 5, height-45);
 text(0, 5, height/2-10);
 text(90, 5, 25);
}

void draw() {


  }
