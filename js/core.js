playing = false;
pn = 0;
inital = true;
direction = true;
playingduration = 1500;
$(document).ready(function(){
    core(0,false);
    
});

var scrollFunc=function(event){
    event=event || window.event;
    if (!playing) {
    	if (event.wheelDelta < 0) {
    		motion(true);
    	}else{
    		motion(false);
    	}
    };
}
//FF使用DOMMouseScroll，其他浏览器都是用mousewheel
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}
//js滚轮事件
document.onmousewheel=scrollFunc;
document.onkeydown = function(event) {
		event=event || window.event;
		var c = event.keyCode;
		if (c==40||c==32||c==39) {
			motion(true);
		}else if (c==38||c==37) {
			motion(false);
		}
	}
function playingdelay(){
	playing = true;
	setTimeout(function(){playing = false;},playingduration);
}
function motion (direction) {
	if (direction == true) {
		if (pn == 3) {
			pn = 0;
			core(0,true);
			playingdelay();
		}else{
			pnsnap = pn;
			pn += 1;
			core(pn,false);
			playingdelay();
		}
	}else{
		if (pn == 0) {
		}else{
			pnsnap = pn;
			pn -= 1;
			core(pn,false);
			playingdelay();
		}
	}

}
function core (pn,loop){
	if(typeof(pgvMain) == 'function') {
		pgvSendClick({hottag:'browser.qb8.scroll'+(pn+1)});
	}
	// var bg = $('#container');
	$('#add_nav div').removeClass('on');
	$('#add_nav div:nth-child('+(pn+1)+')').addClass('on');
	var bg = $('#bg');
	var bgimg = $('#bgimg');
	var pub_t = 1000;
	var p0 = $('#p0');
	var p1 = $('#p1');
	var p2 = $('#p2');
	var p3 = $('#p3');
	var p081 = $('#p0_8_1');
	var p082 = $('#p0_8_2');
	var p0t1 = $('#p0_t_1');
	var p0t2 = $('#p0_t_2');
	var slogan1 = $('#slogan_1');
	var slogan2 = $('#slogan_2');
	var slogan3 = $('#slogan_3');
	var slogan4 = $('#slogan_4');
	var p0btn = $('#p0_btn');

	var p1t1 = $('#p1_t_1');
	var p1t2 = $('#p1_t_2');
	var p1ui0 = $('#p1_ui_0');

	var p2t1 = $('#p2_t_1');
	var p2t2 = $('#p2_t_2');
	var p2pop = $('#p2_pop');
	var p2pop1 = $('#p2_pop_1');
	var p2pop2 = $('#p2_pop_2');
	var p2pop3 = $('#p2_pop_3');
	var p2pop4 = $('#p2_pop_4');
	var p2popicon = $('#p2_pop img');

	var p3t1 = $('#p3_t_1');
	var p3t2 = $('#p3_t_2');
	var p3def = $('#p3_defence');
	var p3list = $('#p3_list');
	var bgspeed = pub_t*4;
	//bgimg.velocity({opacity:1,scale:1.6,translateX:'0px',translateY:'0px',rotateZ:'0deg'},{duration:pub_t*3,easing:'ease-in-out'});
	if(pn == 0) {
		$('#add_lefttop').velocity({opacity:1},{duration:pub_t});
		if(inital == true){
			p1.css('visibility','hidden');
			p2.css('visibility','hidden');
			p3.css('visibility','hidden');
			inital = false;
		}
		var p2away = function(){
			p2t1.velocity({rotateY:'30deg',translateZ:'1300px',rotateX:'0deg',opacity:0},{duration:pub_t});
			p2t2.velocity({opacity:0},{duration:pub_t/2});
			p2pop1.velocity({rotateY:'60deg',translateZ:'1300px',rotateX:'90deg',scale:0.1},{duration:pub_t});
			p2pop2.velocity({rotateY:'60deg',translateZ:'1400px',rotateX:'90deg',scale:0.1},{duration:pub_t*1.2});
			p2pop3.velocity({rotateY:'60deg',translateZ:'1500px',rotateX:'90deg',scale:0.1},{duration:pub_t*1.4});
			p2pop4.velocity({rotateY:'60deg',translateZ:'1600px',rotateX:'90deg',scale:0.1},{duration:pub_t*1.6});
		}
		p2away();
		$('#add_links').css('display','none');
		$('#add_scrolling').velocity({opacity:1},{duration:1000});
		slogan1.velocity({translateZ:'1000px',rotateY:'-60deg',translateY:'500px',opacity:1},{duration:0});
		slogan1.velocity({translateZ:'0px',rotateY:'0deg',translateY:'0px'},{duration:pub_t*2});
		slogan2.velocity({translateZ:'1300px',rotateY:'-60deg',translateY:'500px',opacity:1},{duration:0});
		slogan3.velocity({translateZ:'1600px',rotateY:'-60deg',translateY:'500px',opacity:1},{duration:0});
		slogan2.velocity({translateZ:'0px',rotateY:'0deg',translateY:'0px'},{duration:pub_t*2,delay:pub_t*0.6});
		slogan3.velocity({translateZ:'0px',rotateY:'0deg',translateY:'0px'},{duration:pub_t*2.2,delay:pub_t*0.6});
		bg.velocity({opacity:1,scale:0.6,translateX:'0px',translateY:'0px',rotateZ:'0deg'},{duration:pub_t*3,easing:'ease-in-out'});
		p1ui0.velocity({rotateY:'30deg',translateZ:'1000px',opacity:0},{duration:pub_t*1});
		p1t1.velocity({rotateX:'0deg',translateZ:'0px',rotateY:'20deg',opacity:0},{duration:pub_t*1});
		p1t2.velocity({opacity:0},{duration:pub_t*1});
		//bgimg.velocity({opacity:1,scale:0.5,translateX:'0px',translateY:'0px',rotateZ:'0deg'},{duration:pub_t*3,easing:'ease-in-out'});
		
	
	}else if (pn == 1) {
		p1.css('visibility','visible');
		//$('#add_scrolling').velocity({opacity:0},{duration:500});
		p1ui0.velocity({rotateX:'0deg',rotateY:'0deg',translateZ:'0px',translateY:0,opacity:1},{duration:pub_t*1.5});
		p1t1.velocity({rotateX:'0deg',rotateY:'0deg',translateZ:'0px',translateY:0,opacity:1},{duration:pub_t*1,delay:pub_t*1.1});
		p1t2.velocity({opacity:1},{duration:pub_t*1,delay:pub_t*1});
		slogan1.velocity({opacity:0},{duration:pub_t*1});
		slogan2.velocity({opacity:0},{duration:pub_t*1});
		slogan3.velocity({opacity:0},{duration:pub_t*1});
		$('#gotomac').css('display','none');
		// p2 back
		
		var p3back = function () {
			p3t1.velocity({rotateY:'-60deg',scale:0.7,opacity:0},{duration:pub_t*0.5});
			p3t2.velocity({rotateY:'0deg',opacity:0},{duration:pub_t*0.5});
			p3def.velocity({rotateY:'-30deg',scale:0.7,opacity:0},{duration:pub_t*0.5});
			p3list.velocity({opacity:0},{duration:pub_t*1});
			$('#p3_point .pt1').velocity({scale:1,rotateY:'-15deg',translateZ:'1000px'},{duration:pub_t*1.4}).velocity({opacity:0});
			$('#p3_point .pt2').velocity({scale:2,rotateY:'-14deg',translateZ:'1000px'},{duration:pub_t*1.3}).velocity({opacity:0});
			$('#p3_point .pt3').velocity({scale:3,rotateY:'-13deg',translateZ:'1000px'},{duration:pub_t*1.2}).velocity({opacity:0});
			$('#p3_point .pt4').velocity({scale:4,rotateY:'-12deg',translateZ:'1000px'},{duration:pub_t*1.1}).velocity({opacity:0});
			$('#p3_point .pt5').velocity({scale:5,rotateY:'-11deg',translateZ:'1000px'},{duration:pub_t}).velocity({opacity:0});
		}
		p3back();
		bg.velocity('stop').velocity({scale:1,translateX:'-200px',translateY:'300px',rotateZ:'-60deg'},{duration:pub_t*3,easing:'ease-in-out'});
		//bgimg.velocity('stop').velocity({scale:1,translateX:'-200px',translateY:'300px',rotateZ:'-60deg'},{duration:pub_t*3,easing:'ease-in-out'});
	}else if (pn == 2) {
		p3.velocity({scale:1},{duration:pub_t*2});
		p3.css('visibility','visible');
		
		$('#add_links').velocity({opacity:0},{duration:1500});
		var p2back = function(){
			p2t1.velocity({rotateY:'-60deg',translateZ:'800px',rotateX:'0deg',opacity:0},{duration:pub_t*1});
			p2t2.velocity({opacity:0},{duration:pub_t/2});
			p2pop1.velocity({rotateY:'-60deg',translateZ:'800px',rotateX:'120deg',scale:0.1},{duration:pub_t*1});
			p2pop2.velocity({rotateY:'-60deg',translateZ:'900px',rotateX:'120deg',scale:0.1},{duration:pub_t*1.2});
			p2pop3.velocity({rotateY:'-60deg',translateZ:'1000px',rotateX:'120deg',scale:0.1},{duration:pub_t*1.4});
			p2pop4.velocity({rotateY:'-60deg',translateZ:'1100px',rotateX:'120deg',scale:0.1},{duration:pub_t*1.6});
		}
		p2back();
		
		p1ui0.velocity({rotateY:'0deg',translateZ:'1000px',opacity:0},{duration:pub_t*1});
		p1t1.velocity({rotateX:0,translateZ:'0px',rotateY:'-20deg',opacity:0},{duration:pub_t*0.6});
		p1t2.velocity({opacity:0},{duration:pub_t*0.6});
		var p3in = function () {
			p3t1.velocity({translateZ:0,opacity:1,rotateY:0,scale:1},{duration:pub_t,delay:pub_t/2});
			p3t2.velocity({translateZ:0,opacity:1,rotateY:0},{duration:pub_t/2,delay:pub_t});
			p3def.velocity({rotateY:0,opacity:1,scale:1},{duration:pub_t*1,delay:pub_t*1});
			p3list.velocity({opacity:1},{duration:pub_t*1});
			$('#p3_point .pt1,#p3_point .pt2,#p3_point .pt3,#p3_point .pt4,#p3_point .pt5').velocity({opacity:1},{duration:0});
			$('#p3_point .pt1').velocity({scale:1,rotateY:0,translateZ:'0px'},{duration:pub_t});
			$('#p3_point .pt2').velocity({scale:1,rotateY:0,translateZ:'0px'},{duration:pub_t*1.2});
			$('#p3_point .pt3').velocity({scale:1,rotateY:0,translateZ:'0px'},{duration:pub_t*1.4});
			$('#p3_point .pt4').velocity({scale:1,rotateY:0,translateZ:'0px'},{duration:pub_t*1.6});
			$('#p3_point .pt5').velocity({scale:1,rotateY:0,translateZ:'0px'},{duration:pub_t*1.8});
		}
		p3in();
		
		p2.velocity({rotateZ:'-45deg'},{duration:pub_t*1.5});
		// bg.velocity('stop').velocity({translateX:'-300px',translateY:'200px',rotateZ:'0deg'},{duration:pub_t*4,easing:'ease-in-out'});
	}else if (pn == 3) {
		// p2 away
		p3.velocity({scale:0.6},{duration:pub_t*1.5});
		p2.css('visibility','visible');
		p2t1.css('visibility','visible');
		p2.velocity({rotateZ:'0deg'},{duration:pub_t*2});
		
		
		var p2in = function(){
			p2t1.velocity({rotateY:0,translateZ:0,rotateX:0,opacity:1},{duration:pub_t*2})
			p2t2.velocity({opacity:1},{duration:pub_t,delay:pub_t*1.5});
			p2pop1.velocity({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration:pub_t*2});
			p2pop2.velocity({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration:pub_t*2});
			p2pop3.velocity({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration:pub_t*2});
			p2pop4.velocity({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration:pub_t*2});
			// p2popicon.velocity({opacity:1,scale:1,rotateZ:'-30deg'},{duration:pub_t*0.5,delay:pub_t*1.5,easing:'easeOutBack'});
		}
		p2in();

		var p3back = function () {
				p3t1.velocity({rotateY:'-60deg',opacity:0},{duration:pub_t*0.5});
				p3t2.velocity({rotateY:'0deg',opacity:0},{duration:pub_t*0.5});
				p3def.velocity({rotateY:'-30deg',opacity:0},{duration:pub_t*0.5});
				
				p3list.velocity({opacity:0},{duration:pub_t*1});
				$('#p3_point .pt1').velocity({scale:1,rotateY:'15deg',translateZ:'1000px'},{duration:pub_t*1}).velocity({opacity:0});
				$('#p3_point .pt2').velocity({scale:1,rotateY:'14deg',translateZ:'1000px'},{duration:pub_t*1.05}).velocity({opacity:0});
				$('#p3_point .pt3').velocity({scale:1,rotateY:'13deg',translateZ:'1000px'},{duration:pub_t*1.1}).velocity({opacity:0});
				$('#p3_point .pt4').velocity({scale:1,rotateY:'12deg',translateZ:'1000px'},{duration:pub_t*1.15}).velocity({opacity:0});
				$('#p3_point .pt5').velocity({scale:1,rotateY:'11deg',translateZ:'1000px'},{duration:pub_t*1.2}).velocity({opacity:0});
			}
				p3back();
		$('#add_links').css('display','block').velocity({opacity:1},{duration:1500});
		// bg.velocity('stop').velocity({translateX:'-400px',translateY:'300px',rotateZ:'-30deg'},{duration:pub_t*4,easing:'ease-in-out'});
	};

}