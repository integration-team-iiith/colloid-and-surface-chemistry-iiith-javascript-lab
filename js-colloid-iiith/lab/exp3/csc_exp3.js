
var event=0;
var time;

window.onload = function(){ 
	addPointer("#struc");
	addPointer("#action");
	addPointer("#form");
	addPointer("#close_btn1");
    addclickEvents();
}

// addPointer: Adds a pointer to the object to be clicked
function addPointer(Id){
	$(Id).css("cursor","pointer");
}

//This function adds click events to all clickable objects
function addclickEvents(){
    document.getElementById("struc").addEventListener("click", function() {
        callStruc();
    }, false);
    document.getElementById("action").addEventListener("click", function() {
        callAction();
    }, false);
    document.getElementById("spoon").addEventListener("click", function() {
        callSpoon();
    }, false);
    document.getElementById("rod").addEventListener("click", function() {
        callRod();
    }, false);
    document.getElementById("mol").addEventListener("click", function() {
        callMol();
    }, false);
    document.getElementById("close_btn1").addEventListener("click", function() {
        callClose1();
    }, false);
    document.getElementById("close_btn2").addEventListener("click", function() {
        callClose2();
    }, false);
}

function move(id,left,top,time){
        $(id).velocity({translateX: left+"%",translateY: top+"%"},{duration: time});
}

function callStruc() {
	$("#buttons").hide();
	$("#div_btn1").show();
	setTimeout(function() {
		$("#head").on("mouseout",function(){
			$("#head_red").velocity({opacity: 0},{duration: 500});
			$("#infoh").hide();
		})
		$("#head").on("mouseover",function(){
			$("#head_red").velocity({opacity: 0.9},{duration: 1000});
			$("#infoh").show();
		})
		$("#tail").on("mouseout",function(){
			$("#tail_red").velocity({opacity: 0},{duration: 500});
			$("#infotl").hide();
		})
		$("#tail").on("mouseover",function(){
			$("#tail_red").velocity({opacity: 0.9},{duration: 1000});
			$("#infotl").show();
		})
	}, 1500);
	move("#infobg",0,100,1500);
}

function callAction() {
	$("#buttons").hide();
	$("#div_btn2").show();
}

function callSpoon() {
	$("#dtr_arw").hide();
	$("#spoon").velocity({translateY: "190%",translateX: "-193%"},{duration:1500});
	setTimeout(function() {
		$("#spoon").hide();
		$("#pow").show();
		$("#pow").velocity({translateX: "-20%", translateY: "380%",width: "7%",height: "140%",opacity: 0.7},
			{duration: 1000})
	}, 1500);
	setTimeout(function() {
		$("#rod").show();
		$("#str_rod").show();
	}, 2500);
}

function callClose1(){
	$("#div_btn1").hide();
	$("#buttons").show();
}

function callRod() {
	$("#str_rod").hide();
	$("#rod").hide();
	$("#stir").show();
	$("#pow").velocity({opacity:0},{duration: 4300});
	setTimeout(function() {
		$("#stir").hide();
		$("#mol").show();
	}, 4100);
}

function callMol() {
	$("#blue_back").show();
	$("#micl1").rotate({angle:90});
	$("#micl1").animate({top:"+=30%"},500);
	$("#micl1").animate({top:"-=30%"},500);
	$("#micl2").rotate({angle:30});
	$("#micl2").animate({top: "+=30%", left: "+=5%"},500);
	$("#micl2").animate({top: "-=30%", left: "-=5%"},500);
	$("#micl3").rotate({angle:345});
	$("#micl3").animate({top: "-=20%", left: "+=15%"},500);
	$("#micl3").animate({top: "+=20%", left: "-=15%"},500);
	$("#micl4").rotate({angle:330});
	$("#micl4").animate({top: "-=20%", left: "+=25%"},500);
	$("#micl4").animate({top: "+=20%", left: "-=25%"},500);
	$("#micl5").rotate({angle:300});
	$("#micl5").animate({top: "-=20%", left: "+=5%"},500);
	$("#micl5").animate({top: "+=20%", left: "-=5%"},500);
	$("#micl6").animate({left: "+=15%"},500);
	$("#micl6").animate({left: "-=15%"},500);
	$("#micl7").rotate({angle:120});
	$("#micl7").animate({top: "+=20%", left: "-=10%"},500);
	$("#micl7").animate({top: "-=20%", left: "+=10%"},500);
	$("#micl8").rotate({angle:150});
	$("#micl8").animate({top: "+=25%", left: "-=15%"},500);
	$("#micl8").animate({top: "-=25%", left: "+=15%"},500);
	$("#micl9").rotate({angle:40});
	$("#micl9").animate({top: "+=10%", left: "+=15%"},500);
	$("#micl9").animate({top: "-=10%", left: "-=15%"},500);
	$("#micl10").rotate({angle:340});
	$("#micl10").animate({top: "-=20%", left: "+=10%"},500);
	$("#micl10").animate({top: "+=20%", left: "-=10%"},500);
	$("#micl11").rotate({angle:320});
	$("#micl11").animate({top: "-=20%", left: "+=10%"},500);
	$("#micl11").animate({top: "+=20%", left: "-=10%"},500);

	time = setInterval(function repeat() {
		$("#micl1").animate({
			top: "+=30%"	
		},500);
		$("#micl1").animate({
			top: "-=30%"
		},500);
		$("#micl2").animate({
			top: "+=20%",
			left: "+=15%"
		},500);
		$("#micl2").animate({
			top: "-=20%", 
			left: "-=15%"
		},500);
		$("#micl3").animate({
			top: "-=20%",
			left: "+=25%"
		},500);
		$("#micl3").animate({
			top: "+=20%", 
			left: "-=25%"
		},500);
		$("#micl4").animate({
			top: "-=30%",
			left: "+=5%"
		},500);
		$("#micl4").animate({
			top: "+=30%", 
			left: "-=5%"
		},500);
		$("#micl5").animate({
			top: "-=20%",
			left: "+=5%"
		},500);
		$("#micl5").animate({
			top: "+=20%", 
			left: "-=5%"
		},500);
		$("#micl6").animate({
			left: "+=15%"
		},500);
		$("#micl6").animate({
			left: "-=15%"
		},500);
		$("#micl7").animate({
			top: "+=20%", 
			left: "-=10%"
		},500);
		$("#micl7").animate({
			top: "-=20%", 
			left: "+=10%"
		},500);
		$("#micl8").animate({
			top: "+=25%", 
			left: "-=15%"
		},500);
		$("#micl8").animate({
			top: "-=25%", 
			left: "+=15%"
		},500);
		$("#micl9").animate({
			top: "+=10%", 
			left: "+=15%"
		},500);
		$("#micl9").animate({
			top: "-=10%", 
			left: "-=15%"
		},500);
		$("#micl10").animate({
			top: "-=20%", 
			left: "+=10%"
		},500);
		$("#micl10").animate({
			top: "+=20%", 
			left: "-=10%"
		},500);
		$("#micl11").animate({
			top: "-=20%", 
			left: "+=10%"
		},500);
		$("#micl11").animate({
			top: "+=20%", 
			left: "-=10%"
		},500);
	},1000)
}

function callClose2() {
	clearInterval(time);
	$("#blue_back").hide();
	$("#mol").hide();
}