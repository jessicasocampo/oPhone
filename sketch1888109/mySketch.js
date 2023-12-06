//Name: Jessica Ocampo
//Student ID: 21018677

let groceryList = {};
let lockScreenBoolean = true;
let notesBoolean = false;
let nums = [];

//colours
let blueBackground = "#99CCFF";
let greenMountain = "#E5FFCC";
let blueApp = "#3399FF";
let yellowApp = "#FFFF99";
let greenApp = "#b2FF66";
let blueNotif = "#66B2FF";

//mountain 
let vStart = 10;
let vInc = 0.01;
let xoff = 0;
let v;

//butterfly
let x = 0;
let y = 0;
let angle = 0;
let radius = 50;
let pace = 0.01;

function setup() {
	createCanvas(300, 600);
	
	//arrays & strings
	//print password
	let password = passwordGenerator(20);
	print("Phone password: " + password.join(""));
}

function preload() {
	groceryList = loadJSON("list.json");
	butterfly = loadImage("butterflyImage.png");
	boing = loadSound("boingSound.wav");
}

//arrays & strings
function passwordGenerator(n) {
	for (i = 0; i < n + 1; i++){
		if (i % 6 === 0)
			nums.unshift(i)
	}
	return(nums)
}

function draw () {
	homeScreen();
	
	//geomatic context
	//draw app 1
	fill(greenApp);
	app();
	
	//messages
	fill(255);
	ellipse(70, 60, 35, 25);
	triangle(55, 73, 58, 68, 73, 73);
	
	//draw app 2
	push();
	translate(85, 0);
	fill(blueApp);
	app();
	pop();
	
	//weather
	fill(yellowApp);
	circle(165, 60, 20);
	fill(255);
	circle(155, 70, 15);
	circle(145, 65, 15);
	circle(145, 70, 15);
	circle(138, 70, 15);
	
	//draw app 3
	push();
	translate(165, 0);
	fill(yellowApp);
	app();
	pop();
	
	//notes
	fill(255);
	rect(210, 50, 50, 40);
	fill(255, 0, 0);
	circle(260, 45, 18);
	fill(255);
	text("1", 260, 50);
	stroke(200);
	strokeWeight(0.5);
	line(210, 60, 260, 60);
	line(210, 70, 260, 70);
	line(210, 80, 260, 80);
	
	noStroke();
	
	//draw lockscreen
	if (lockScreenBoolean === true) {
		lockScreen();
	}
	
	//draw notes app
	if (notesBoolean === true) {
		notesApp();
	}
}

function lockScreen() {
	background(blueBackground);
	
	//advanced shapes & geometric context
	push();
  translate(width / 2, height / 2);
  x = radius * tan(angle);
  y = radius * sin(angle);
  
  noStroke();
  fill(0);
	scale(0.15);
  image(butterfly, x, y);
  
  angle += pace;
  radius += sin(angle/10);
	pop();
	
	//sun
	fill(yellowApp);
	circle(0, 0, 100);
	
	//randomness & noise
	//draw mountain
	v = vStart + xoff;
	fill(greenMountain);
	
	beginShape();
	for (let i = 0; i < width; i++) {
		vertex(i, height / 2 + (noise(v) * 150));
		v = v + vInc;
	}
	vertex(width, height);
	vertex(0, height);
	endShape();
	xoff = xoff + 0.02;
	
	//advanced shapes
	//draw wifi
	strokeCap(ROUND);
	fill(255);
	stroke(255);
	strokeWeight(3);
	line(250, 17, 250, 20);
	line(255, 15, 255, 20);
	line(260, 13, 260, 20);
	
	//draw battery
	strokeWeight(2);
	rect(270, 13, 15, 7);
	line(288, 15, 288, 18);
	
	//draw time
	noStroke();
	textSize(60);
	textAlign(CENTER);
	textStyle(BOLD);
	text("11:15", width / 2, 110);
	
	//draw date
	textSize(15);
	textStyle(NORMAL);
	text("Tuesday, April 4", width / 2, 50);
	
	//draw unlock
	fill(blueBackground);
	rect(0, 500, 300, 300);
	textSize(10);
	fill(255);
	text("Return key to unlock", width / 2, 560);
	noStroke();
	rect(100, 570, 100, 4);
	
	//draw notification
	fill(blueNotif);
	rect(45, 435, 205, 60);
	fill(255);
	textStyle(BOLD);
	text("Notes", 120, 450);
	textStyle(NORMAL);
	text("Notification", 132, 465);
	textSize(8);
	text("1h ago", 230, 450);
	
	//draw app 3
	push();
	translate(5, 400);
	fill(yellowApp);
	app();
	pop();
	
	//notes
	fill(255);
	rect(50, 450, 50, 40);
	stroke(200);
	strokeWeight(0.5);
	line(50, 460, 100, 460);
	line(50, 470, 100, 470);
	line(50, 480, 100, 480);
}

function homeScreen() {
	background(blueBackground);
	
	fill(255);
	text("Shift key to return to lockscreen", width / 2, 560);
	noStroke();
	rect(100, 570, 100, 4);
	
	//advanced shapes
	//draw wifi
	strokeCap(ROUND);
	fill(255);
	stroke(255);
	strokeWeight(3);
	line(250, 17, 250, 20);
	line(255, 15, 255, 20);
	line(260, 13, 260, 20);
	
	//draw battery
	strokeWeight(2);
	rect(270, 13, 15, 7);
	line(288, 15, 288, 18);
	
	//draw time
	strokeWeight(0.5);
	textSize(12);
	text("11:15", width / 2, 18);
}

function app() {
	//advanced shapes
	noStroke();
	beginShape();
	vertex(45, 40);
	vertex(95, 40);
	vertex(95, 90);
	vertex(45, 90);
	endShape();
}

function notesApp() {
	background(255);
	
	//advanced shapes
	//draw wifi
	strokeCap(ROUND);
	fill(0);
	stroke(0);
	strokeWeight(3);
	line(250, 17, 250, 20);
	line(255, 15, 255, 20);
	line(260, 13, 260, 20);
	
	//draw battery
	strokeWeight(2);
	rect(270, 13, 15, 7);
	line(288, 15, 288, 18);
	
	//draw time
	strokeWeight(0.5);
	textSize(12);
	text("11:15", width / 2, 18);
	
	//title
	strokeWeight(1);
	textSize(30);
	text("Notes", 80, 60);
	stroke(200);
	line(40, 75, 220, 75);
	
	//Trees(JSON)
	//Groceries list
	textAlign(LEFT);
	strokeWeight(0.5);
	textSize(15);
	text("Groceries:", 60, 100);
	
	textSize(12);
	text("Toiletries:", 65, 120);
	
	//list
	textSize(10);
	let tp = groceryList.toiletries[0].tp;
	text("- " + tp, 65, 140);
	let toiletp = groceryList.toiletries[0].toiletp;
	text("- " + toiletp, 65, 150);
	let soap = groceryList.toiletries[0].soap;
	text("- " + soap, 65, 160);
	let cond = groceryList.toiletries[0].cond;
	text("- " + cond, 65, 170);
	
	textSize(12);
	text("Food:", 60, 220);
	
	//list
	textSize(10);
	let chick = groceryList.food[0].chick;
	text("- " + chick, 65, 240);
	let oj = groceryList.food[0].oj;
	text("- " + oj, 65, 250);
	let cel = groceryList.food[0].cel;
	text("- " + cel, 65, 260);
	
	textSize(12);
	text("Utilities:", 65, 320);
	
	//list
	textSize(10);
	let charg = groceryList.utilities[0].charg;
	text("- " + charg, 65, 340);
	let wine = groceryList.utilities[0].wine;
	text("- " + wine, 65, 350);
	let hair = groceryList.utilities[0].hair;
	text("- " + hair, 65, 360);
	
		//draw home screen
		textAlign(CENTER);
		textSize(10);
		fill(0);
		text("Return key to home screen", width / 2, 560);
		noStroke();
		rect(100, 570, 100, 4);
	}

function keyPressed () {
	if (keyCode === RETURN) {
		lockScreenBoolean = false;
		notesBoolean = false;
		boing.play();
	} else if (keyCode === SHIFT) {
		lockScreenBoolean = true;
		boing.play();
	} else if (key === "3") {
		notesBoolean = true;
		boing.play();
	} 
}
