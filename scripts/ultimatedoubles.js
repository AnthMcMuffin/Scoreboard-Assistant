var fileUrl = "output/ultimatedoubles.xml";
var upSpeed = 5000;
var inSpeed = 1000;
var outSpeed = 500;

var p1, p1a, p1b, p2, p2a, p2b, s1, s2, mm, mma, mmb, gg, gga, ggb, tn1, tn2, tc1, tc2, sc1, sc2;
var c=1;

$(function() {
	checkUpdate();
	setInterval(function() { checkUpdate(); }, upSpeed);
});
//ROUND
function getResponse() {
	p1 = getElement(responseXml, "player1");
	p1a = getElement(responseXml, "player1A");
	p1b = getElement(responseXml, "player1B");
	p2 = getElement(responseXml, "player2");
	p2a = getElement(responseXml, "player2A");
	p2b = getElement(responseXml, "player2B");
	p3 = getElement(responseXml, "player3");
	p3a = getElement(responseXml, "player3A");
	p3b = getElement(responseXml, "player3B");
	p4 = getElement(responseXml, "player4");
	p4a = getElement(responseXml, "player4A");
	p4b = getElement(responseXml, "player4B");
	s1 = getElement(responseXml, "score1");
	s2 = getElement(responseXml, "score2");	
	s3 = getElement(responseXml, "score3");
	s4 = getElement(responseXml, "score4");
	i1 = getElement(responseXml, "image1");
	i2 = getElement(responseXml, "image2");	
	i3 = getElement(responseXml, "image3");
	i4 = getElement(responseXml, "image4");	
	mm = getElement(responseXml, "match");
	mma = getElement(responseXml, "matchA");
	mmb = getElement(responseXml, "matchB");
	gg = getElement(responseXml, "game");
	gga = getElement(responseXml, "gameA");
	ggb = getElement(responseXml, "gameB");
}

function runUpdate() {
	if (timeOld == timeNew) return;
		if(i1==i2){
			sc1=s1;
			sc2=s3;
		}
		else {
			sc1=s1;
			sc2=s2;
		}	
	
	//MATCH
	if ($('#mm').get("innerHTML") != mm) {
		updating = true;
		anime({
		targets: '.matches',
		opacity: [
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.matcha',
		opacity: [
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.matchb',
		opacity: [
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});	
		$('.btm').animate({$bottom: '0px'}, outSpeed).then(function() {
		$('#mm').set("innerHTML", mm);
		$('#mma').set("innerHTML", mma);
		$('#mmb').set("innerHTML", mmb);
		anime({
		targets: '.matches',
		opacity: [
		{value:0, duration:0, delay:0},
		{value:1, duration:2000}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.matcha',
		opacity: [		
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:0},
		{value:0, duration:1000, delay:10000, endDelay:12000}
		],
		loop: true		
		});	
		anime({
		targets: '.matchb',
		opacity: [
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:12000},
		{value:0, duration:1000, delay:10000}
		],
		loop: true		
		});				
			$('.btm').animate({$bottom: '0'}, inSpeed).then(function() { updating = false; });
		});
	}
	
	
	//PLAYER 1
	if ($('#p1').get("innerHTML") != p1) {
		
		updating = true;
		
		anime({
		targets: '.player1a',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.player1b',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],		
		easing: 'easeInOutQuad',		
		});		
		
		anime({
		targets: '.player1bg',
		width: [
		{value:265, duration:0},
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		
		$('.top').animate({$bottom: '0px'}, outSpeed).then(function() {
				
		anime({
		targets: '.player1bg',
		opacity: [
		{value:1, duration:0}
		],
		width: [
		{value:0, duration:0},
		{value:265, duration:2000}
		],
		easing: 'easeInOutQuad',		
		});
		document.getElementById("p1bg").style.background = "url(images/ultimate-player"+i1+".png)";		
		$('#p1').set("innerHTML", p1);
		$('#p1a').set("innerHTML", p1a);
		$('#p1b').set("innerHTML", p1b);
		//llll
		anime({
		targets: '.player1a',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.player1b',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.player1a',
		opacity: [		
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:0},
		{value:0, duration:1000, delay:10000, endDelay:12000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:0},
		{value:50, duration:1000, delay:10000, endDelay:12000}
		],
		loop: true		
		});	
		anime({
		targets: '.player1b',
		opacity: [
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:12000},
		{value:0, duration:1000, delay:10000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:12000},
		{value:50, duration:1000, delay:10000}
		],	
		loop: true		
		});				
		anime({
		targets: '.player1a',
		opacity: [		
		{value:0, duration:0, delay:0, endDelay:2000},
		{value:1, duration:1000, delay:0},
		],		
		translateX: [
		{value:-50, duration:0, delay:0, endDelay:2000},
		{value:0, duration:1000, delay:0}
		],			
		});			
		$('.top').animate({$bottom: '0'}, inSpeed).then(function() { updating = false; });
		});
	}
		
		//PLAYER 2
	if ($('#p2').get("innerHTML") != p2) {
		
		updating = true;
		
		anime({
		targets: '.player2a',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.player2b',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],		
		easing: 'easeInOutQuad',		
		});		
		
		anime({
		targets: '.player2bg',
		width: [
		{value:265, duration:0},
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		
		$('.top').animate({$bottom: '0px'}, outSpeed).then(function() {
				
		anime({
		targets: '.player2bg',
		opacity: [
		{value:1, duration:0}
		],
		width: [
		{value:0, duration:0},
		{value:265, duration:2000}
		],
		easing: 'easeInOutQuad',		
		});
		document.getElementById("p2bg").style.background = "url(images/ultimate-player"+i2+".png)";
		$('#p2').set("innerHTML", p2);
		$('#p2a').set("innerHTML", p2a);
		$('#p2b').set("innerHTML", p2b);
		//llll
		anime({
		targets: '.player2a',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.player2b',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.player2a',
		opacity: [		
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:0},
		{value:0, duration:1000, delay:10000, endDelay:12000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:0},
		{value:50, duration:1000, delay:10000, endDelay:12000}
		],
		loop: true		
		});	
		anime({
		targets: '.player2b',
		opacity: [
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:12000},
		{value:0, duration:1000, delay:10000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:12000},
		{value:50, duration:1000, delay:10000}
		],	
		loop: true		
		});				
		anime({
		targets: '.player2a',
		opacity: [		
		{value:0, duration:0, delay:0, endDelay:2000},
		{value:1, duration:1000, delay:0},
		],		
		translateX: [
		{value:-50, duration:0, delay:0, endDelay:2000},
		{value:0, duration:1000, delay:0}
		],		
		});			
		$('.top').animate({$bottom: '0'}, inSpeed).then(function() { updating = false; });
		});
	}	
	
	//PLAYER 3
	if ($('#p3').get("innerHTML") != p3) {
		
		updating = true;
		
		anime({
		targets: '.player3a',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.player3b',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],		
		easing: 'easeInOutQuad',		
		});		
		
		anime({
		targets: '.player3bg',
		width: [
		{value:265, duration:0},
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		
		$('.top').animate({$bottom: '0px'}, outSpeed).then(function() {
				
		anime({
		targets: '.player3bg',
		opacity: [
		{value:1, duration:0}
		],
		width: [
		{value:0, duration:0},
		{value:265, duration:2000}
		],
		easing: 'easeInOutQuad',		
		});
		document.getElementById("p3bg").style.background = "url(images/ultimate-player"+i3+".png)";		
		$('#p3').set("innerHTML", p3);
		$('#p3a').set("innerHTML", p3a);
		$('#p3b').set("innerHTML", p3b);
		//llll
		anime({
		targets: '.player3a',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.player3b',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.player3a',
		opacity: [		
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:0},
		{value:0, duration:1000, delay:10000, endDelay:12000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:0},
		{value:50, duration:1000, delay:10000, endDelay:12000}
		],
		loop: true		
		});	
		anime({
		targets: '.player3b',
		opacity: [
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:12000},
		{value:0, duration:1000, delay:10000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:12000},
		{value:50, duration:1000, delay:10000}
		],	
		loop: true		
		});				
		anime({
		targets: '.player3a',
		opacity: [		
		{value:0, duration:0, delay:0, endDelay:2000},
		{value:1, duration:1000, delay:0},
		],		
		translateX: [
		{value:-50, duration:0, delay:0, endDelay:2000},
		{value:0, duration:1000, delay:0}
		],			
		});			
		$('.top').animate({$bottom: '0'}, inSpeed).then(function() { updating = false; });
		});
	}
		
		//PLAYER 4
	if ($('#p4').get("innerHTML") != p4) {
		
		updating = true;
		
		anime({
		targets: '.player4a',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.player4b',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],		
		easing: 'easeInOutQuad',		
		});		
		
		anime({
		targets: '.player4bg',
		width: [
		{value:265, duration:0},
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		
		$('.top').animate({$bottom: '0px'}, outSpeed).then(function() {
				
		anime({
		targets: '.player4bg',
		opacity: [
		{value:1, duration:0}
		],
		width: [
		{value:0, duration:0},
		{value:265, duration:2000}
		],
		easing: 'easeInOutQuad',		
		});
		document.getElementById("p4bg").style.background = "url(images/ultimate-player"+i4+".png)";
		$('#p4').set("innerHTML", p4);
		$('#p4a').set("innerHTML", p4a);
		$('#p4b').set("innerHTML", p4b);
		//llll
		anime({
		targets: '.player4a',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.player4b',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.player4a',
		opacity: [		
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:0},
		{value:0, duration:1000, delay:10000, endDelay:12000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:0},
		{value:50, duration:1000, delay:10000, endDelay:12000}
		],
		loop: true		
		});	
		anime({
		targets: '.player4b',
		opacity: [
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:12000},
		{value:0, duration:1000, delay:10000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:12000},
		{value:50, duration:1000, delay:10000}
		],	
		loop: true		
		});				
		anime({
		targets: '.player4a',
		opacity: [		
		{value:0, duration:0, delay:0, endDelay:2000},
		{value:1, duration:1000, delay:0},
		],		
		translateX: [
		{value:-50, duration:0, delay:0, endDelay:2000},
		{value:0, duration:1000, delay:0}
		],		
		});			
		$('.top').animate({$bottom: '0'}, inSpeed).then(function() { updating = false; });
		});
	}
	
	//ASIGN TEAMS
	if ($('#p1').get("innerHTML") != p1 || $('#p2').get("innerHTML") != p2 || $('#p3').get("innerHTML") != p3 || $('#p4').get("innerHTML") != p4  || $('#i1').get("innerHTML") != i1 || $('#i2').get("innerHTML") != i2 || $('#i3').get("innerHTML") != i3 || $('#i4').get("innerHTML") != i4) {
		tn1a=p1b;
		t1c=i1;
		if(i1==i2){
			tn1b=p1a+" & "+p2a;
			tn2a=p3b;
			tn2b=p3a+" & "+p4a;
			t2c=i3;
		}
		if(i1==i3){
			tn1b=p1a+" & "+p3a;
			tn2a=p2b;
			tn2b=p2a+" & "+p4a;
			t2c=i2;
		}
		if(i1==i4){
			tn1b=p1a+" & "+p4a;
			tn2a=p2b;
			tn2b=p2a+" & "+p3a;
			t2c=i2;
		}
	}
		//TEAMNAME 1
	if ($('#p1').get("innerHTML") != p1 || $('#p2').get("innerHTML") != p2 || $('#p3').get("innerHTML") != p3 || $('#p4').get("innerHTML") != p4 || $('#t1c').get("innerHTML") != t1c) {
		
		updating = true;
		
		anime({
		targets: '.teamname1a',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.teamname1b',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],		
		easing: 'easeInOutQuad',		
		});		
		
		anime({
		targets: '.teamname1bg',
		width: [
		{value:265, duration:0},
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		
		$('.top').animate({$bottom: '0px'}, outSpeed).then(function() {
				
		anime({
		targets: '.teamname1bg',
		opacity: [
		{value:1, duration:0}
		],
		width: [
		{value:0, duration:0},
		{value:265, duration:2000}
		],
		easing: 'easeInOutQuad',		
		});
		document.getElementById("tn1bg").style.background = "url(images/doubles-team"+t1c+".png)";
		$('#tn1a').set("innerHTML", tn1a);
		$('#tn1b').set("innerHTML", tn1b);
		$('#t1c').set("innerHTML", t1c);
		//llll
		anime({
		targets: '.teamname1a',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.teamname1b',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.teamname1a',
		opacity: [		
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:0},
		{value:0, duration:1000, delay:10000, endDelay:12000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:0},
		{value:50, duration:1000, delay:10000, endDelay:12000}
		],
		loop: true		
		});	
		anime({
		targets: '.teamname1b',
		opacity: [
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:12000},
		{value:0, duration:1000, delay:10000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:12000},
		{value:50, duration:1000, delay:10000}
		],	
		loop: true		
		});				
		anime({
		targets: '.teamname1a',
		opacity: [		
		{value:0, duration:0, delay:0, endDelay:2000},
		{value:1, duration:1000, delay:0},
		],		
		translateX: [
		{value:-50, duration:0, delay:0, endDelay:2000},
		{value:0, duration:1000, delay:0}
		],		
		});			
		$('.top').animate({$bottom: '0'}, inSpeed).then(function() { updating = false; });
		});
	}
		//TEAMNAME 2
	if ($('#p1').get("innerHTML") != p1 || $('#p2').get("innerHTML") != p2 || $('#p3').get("innerHTML") != p3 || $('#p4').get("innerHTML") != p4 || $('#t2c').get("innerHTML") != t2c) {
		
		updating = true;
		
		anime({
		targets: '.teamname2a',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.teamname2b',
		opacity: [
		{value:0, duration:500}
		],
		translateX: [
		{value:-100, duration:1000}
		],		
		easing: 'easeInOutQuad',		
		});		
		
		anime({
		targets: '.teamname2bg',
		width: [
		{value:265, duration:0},
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		
		$('.top').animate({$bottom: '0px'}, outSpeed).then(function() {
				
		anime({
		targets: '.teamname2bg',
		opacity: [
		{value:1, duration:0}
		],
		width: [
		{value:0, duration:0},
		{value:265, duration:2000}
		],
		easing: 'easeInOutQuad',		
		});
		document.getElementById("tn2bg").style.background = "url(images/doubles-team"+t2c+".png)";
		$('#tn2a').set("innerHTML", tn2a);
		$('#tn2b').set("innerHTML", tn2b);
		$('#t2c').set("innerHTML", t2c);
		//llll
		anime({
		targets: '.teamname2a',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.teamname2b',
		translateX: [
		{value:0, duration:0, delay:0}
		],
		opacity: [		
		{value:0, duration:0, delay:0},
		],		
		});	
		anime({
		targets: '.teamname2a',
		opacity: [		
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:0},
		{value:0, duration:1000, delay:10000, endDelay:12000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:0},
		{value:50, duration:1000, delay:10000, endDelay:12000}
		],
		loop: true		
		});	
		anime({
		targets: '.teamname2b',
		opacity: [
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:12000},
		{value:0, duration:1000, delay:10000}
		],
				translateY: [
		{value:0, duration:1000, delay:1000}
		],
		translateX: [
		{value:-50, duration:0, delay:0},
		{value:0, duration:1000, delay:12000},
		{value:50, duration:1000, delay:10000}
		],	
		loop: true		
		});				
		anime({
		targets: '.teamname2a',
		opacity: [		
		{value:0, duration:0, delay:0, endDelay:2000},
		{value:1, duration:1000, delay:0},
		],		
		translateX: [
		{value:-50, duration:0, delay:0, endDelay:2000},
		{value:0, duration:1000, delay:0}
		],		
		});			
		$('.top').animate({$bottom: '0'}, inSpeed).then(function() { updating = false; });
		});
	}
	
	//SCORE1
	if ($('#s1txt').get("innerHTML") != sc1) {
		updating = true;		
		anime({
		targets: '.score1txt',
		opacity: [
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.score1',
		width: [
		{value:78, duration:0},
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		
		$('.top').animate({$bottom: '0px'}, outSpeed).then(function() {
		$('#s1txt').set("innerHTML", sc1);
		anime({
		targets: '.score1',
		opacity: [
		{value:1, duration:0}
		],
		width: [
		{value:0, duration:0},
		{value:78, duration:2000, delay:1500}
		],
		easing: 'easeInOutQuad',		
		});
		
		anime({
		targets: '.score1txt',
		opacity: [		
		{value:0, duration:0, delay:3000},
		{value:1, duration:1000, delay:0}
		]
		});	

		$('.top').animate({$bottom: '0px'}, inSpeed).then(function() { updating = false; });
		});
	}
		
	//SCORE2
	if ($('#s2txt').get("innerHTML") != sc2) {
		updating = true;		
		anime({
		targets: '.score2txt',
		opacity: [
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.score2',
		width: [
		{value:78, duration:0},
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		
		$('.top').animate({$bottom: '0px'}, outSpeed).then(function() {
		$('#s2txt').set("innerHTML", sc2);
		anime({
		targets: '.score2',
		opacity: [
		{value:1, duration:0}
		],
		width: [
		{value:0, duration:0},
		{value:78, duration:2000, delay:1500}
		],
		easing: 'easeInOutQuad',		
		});
		
		anime({
		targets: '.score2txt',
		opacity: [		
		{value:0, duration:0, delay:3000},
		{value:1, duration:1000, delay:0}
		]
		});	

		$('.top').animate({$bottom: '0px'}, inSpeed).then(function() { updating = false; });
		});
	}
	
	//GAME
	if ($('#gg').get("innerHTML") != gg) {
		updating = true;
		anime({
		targets: '.games',
		opacity: [
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.gamea',
		opacity: [
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.gameb',
		opacity: [
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',		
		});	
		$('.btm').animate({$bottom: '0px'}, outSpeed).then(function() {
		$('#gg').set("innerHTML", gg);
		$('#gga').set("innerHTML", gga);
		$('#ggb').set("innerHTML", ggb);
		anime({
		targets: '.games',
		opacity: [
		{value:0, duration:0, delay:0},
		{value:1, duration:2000}
		],
		easing: 'easeInOutQuad',		
		});
		anime({
		targets: '.gamea',
		opacity: [		
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:0},
		{value:0, duration:1000, delay:10000, endDelay:12000}
		],
		loop: true		
		});	
		anime({
		targets: '.gameb',
		opacity: [
		{value:0, duration:0, delay:0},
		{value:1, duration:1000, delay:12000},
		{value:0, duration:1000, delay:10000}
		],
		loop: true		
		});				
			$('.btm').animate({$bottom: '0'}, inSpeed).then(function() { updating = false; });
		});
	}
}
