var fileUrl = "output/ultimate.xml";
var upSpeed = 5000;
var inSpeed = 1000;
var outSpeed = 500;

var p1, p1a, p1b, p2, p2a, p2b, s1, s2, mm, mma, mmb, gg, gga, ggb;
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
	s1 = getElement(responseXml, "score1");
	s2 = getElement(responseXml, "score2");	
	mm = getElement(responseXml, "match");
	mma = getElement(responseXml, "matchA");
	mmb = getElement(responseXml, "matchB");
	gg = getElement(responseXml, "game");
	gga = getElement(responseXml, "gameA");
	ggb = getElement(responseXml, "gameB");
}

function runUpdate() {
	if (timeOld == timeNew) return;

	
	//MATCH
	if ($('#mm').get("innerHTML") != mm) {
		updating = true;
		anime({
		targets: '.matches',
		opacity: [
		{value:1, duration:0, delay:0},
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
		width: [
		{value:0, duration:0},
		{value:265, duration:2000}
		],
		easing: 'easeInOutQuad',		
		});
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
		
		//PLAYER 1
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
		width: [
		{value:0, duration:0},
		{value:265, duration:2000}
		],
		easing: 'easeInOutQuad',		
		});
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
	
	//SCORES
	if ($('#s1txt').get("innerHTML") != s1) {
		updating = true;
		anime({
		targets: '.score1',
		rotate: [
		{value:-0, duration:0},
		{value:-26, duration:0}
		],
		translateX: [
		{value: 30, duration:500}
		],
		scaleX:[
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',
			});
			
		$('.score1').animate({$top: '0px'}, outSpeed).then(function() {
			
		$('#s1txt').set("innerHTML", s1);
		anime({
		targets: '.score1',
		rotate: [
		{value:-0, duration:0},
		{value:-26, duration:0}
		],
		translateX: [
		{value: 0, duration:500, delay:500}
		],
		scaleX:[
		{value:1, duration:500, delay:500}
		],
		easing: 'easeInOutQuad',
			});

		$('.score1').animate({$top: '0px'}, inSpeed).then(function() { updating = false; });
		});
	}
		if ($('#s2txt').get("innerHTML") != s2){
		updating = true;
		anime({
		targets: '.score2',
		rotate: [
		{value:-0, duration:0},
		{value:-26, duration:0}
		],
		translateX: [
		{value: 30, duration:500}
		],
		scaleX:[
		{value:0, duration:500}
		],
		easing: 'easeInOutQuad',
			});
			
		$('.score2').animate({$top: '0px'}, outSpeed).then(function() {
			
		$('#s2txt').set("innerHTML", s2);
		anime({
		targets: '.score2',
		rotate: [
		{value:-0, duration:0},
		{value:-26, duration:0}
		],
		translateX: [
		{value: 0, duration:500, delay:500}
		],
		scaleX:[
		{value:1, duration:500, delay:500}
		],
		easing: 'easeInOutQuad',
			});

		$('.score2').animate({$top: '0px'}, inSpeed).then(function() { updating = false; });
		});
	}
	
	
	//GAME
	if ($('#gg').get("innerHTML") != gg) {
		updating = true;
		anime({
		targets: '.games',
		opacity: [
		{value:1, duration:0, delay:0},
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