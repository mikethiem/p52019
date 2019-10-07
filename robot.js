
let r //red color
let g
let b
let mike
function setup(){
createCanvas(600,600 )
mike = new p5.AudioIn()
mike.start()
}
function draw(){
let mikeLevel = mike.getLevel()
background(0)

fill(r,g,b)
circle(150,250,50+ mikeLevel*500)
circle(350,250,50+ mikeLevel*500)
rect(0, 500, 100, -100-mikeLevel *500)
rect(400, 500, 100, -100-mikeLevel *500)
rect(100, 500, 100, -100-mikeLevel *300)
rect(300, 500, 100, -100-mikeLevel *300)
rect(200, 500, 100, -100-mikeLevel *100)
fill(255)
strokeWeight(5)
circle(150,250,20+ mikeLevel*500)
circle(345,250,30+ mikeLevel*500)
noFill()


}
function mousePressed(){
  r = random(256)
  g = random(256)
  b = random(256)

}
