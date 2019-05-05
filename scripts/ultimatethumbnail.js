var fileUrl = "output/ultimate.xml";
var upSpeed = 5000;
var inSpeed = 1000;
var outSpeed = 500;

var p1, p2, s1, s2, mm, gg, i1, i2, w1, w2;

$(function() {
	checkUpdate();
	setInterval(function() { checkUpdate(); }, upSpeed);
});

function getResponse() {
	i1 = getElement(responseXml, "image1");
	i2 = getElement(responseXml, "image2");
}

function runUpdate() {
	if (timeOld == timeNew) return;
	
//IMAGE1
	if ($('#i1').get("alt") != i1) {
		updating = true;
		anime({
		targets: '.image1',
		translateY: [
		{value:2000, duration:1000, delay:0},
		],
		easing: 'easeInOutQuad',		
		});

		$('.players').animate({$top: '0px'}, outSpeed).then(function() {			
		$('#i1').set("alt", i1);
		$('#i1').set("src", "images/Ultimate Portraits/chara_3/chara_3_"+i1+".png");
			anime({
			targets: '.image1',
			translateY: [
			{value:0, duration:1000, delay:0},
			],
			easing: 'easeInOutQuad',		
			});
			$('.players').animate({$top: '0'}, inSpeed).then(function() { updating = false; });
		});
	}
//IMAGE2
	if ($('#i2').get("alt") != i2) {
		updating = true;
		anime({
		targets: '.image2',
			scaleX: [
			{value:-1, duration:0, delay:0},
			],	
		translateY: [
		{value:2000, duration:1000, delay:0},
		],
		easing: 'easeInOutQuad',		
		});

		$('.players').animate({$top: '0px'}, outSpeed).then(function() {			
		$('#i2').set("alt", i2);
		$('#i2').set("src", "images/Ultimate Portraits/chara_3/chara_3_"+i2+".png");
			anime({
			targets: '.image2',
			translateY: [
			{value:0, duration:1000, delay:0},
			],
			scaleX: [
			{value:-1, duration:0, delay:0},
			],
			easing: 'easeInOutQuad',		
			});
			$('.players').animate({$top: '0'}, inSpeed).then(function() { updating = false; });
		});
	}
}