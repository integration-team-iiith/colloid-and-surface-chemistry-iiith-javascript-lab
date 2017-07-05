// This file contains all general functions used in the experiment
// Variables necessary to obtain motion of all the images
var elem;
var step_no=0; /*This variable is used to perform all the actions in the required sequence. 
                     Depending on the value of this variable the part of the method is called.*/
var x=1;
/*This method is called when the page is loaded.*/

window.onload = function(){ 
    initial_function();
    addclickEvents();
}

function initial_function(){
	$("#magnet_arrow").rotate({angle:260});
	addPointer("flask");
}

// animateDirection_1: Calls this method to move an element in a straight line.
function animate(id,left,top,time){
        $(id).velocity({translateX: left,translateY: top},{duration: time});
}
	
function addPointer(Id){
	$(Id).css("cursor","pointer");
}


function removePointer(Id){
	$(Id).css("cursor","auto");
}

//This function adds click events to all clickable objects
function addclickEvents(){
    document.getElementById("flask").addEventListener("click", function() {
            callFlask();
    }, false);
    document.getElementById("magnet").addEventListener("click", function() {
    	callMagnet();
    }, false);
    document.getElementById("button2").addEventListener("click", function() {
    	callHeater2();
    }, false);
    document.getElementById("button1").addEventListener("click", function() {
    	callHeater1();
    }, false);
    document.getElementById("pipette").addEventListener("click", function() {
    	callPipette();
    }, false);
}

function callFlask(){
	if(step_no == 0){
		step_no++;
		$("#flsk_arrow").hide();
		$("#flsk_txt").hide();
		animate("#flask",519.1,79.5,1500);
		setTimeout(function(){
			$("#change").html("Click on the Magnetic Bead to drop it in the Flask..");
			$("#magnet").show();
			$("#magnet_txt").show();
			$("#magnet_arrow").show();
		},1500);
		removePointer(flask);
		addPointer(magnet);
	}
}

function callMagnet(){
	if(step_no == 1){
		step_no++;
		$("#magnet_arrow").hide();
		$("#magnet_txt").hide();
		animate("#magnet",0,184.5,800);
		setTimeout(function() {
			$("#change").html("Click on the Heater Switch to turn the Magnetic Heater On....");
			$("#heater_txt").show();
			$("#heater_arrow").show();
		}, 800);
		removePointer(magnet);
		addPointer(button2);
	}
}

function callHeater2(){
	if(step_no == 2){
		step_no++;	
		$("#heater_arrow").hide();
		$("#heater_txt").hide();
		$("#stir_txt").show();
		$("#stir_arrow").show();
		$("#change").html("Click on the Stirrer Switch to turn the Magnetic Stirrer On..");
		removePointer(button2);
		addPointer(button1);
	}
}

function callHeater1(){
	if(step_no == 3){
		step_no++;	
		$("#stir_arrow").hide();
		$("#stir_txt").hide();
		$("#change").html("Wait till the AgNO<sub>3</sub> Solution starts boiling");
		$("#magnet").attr("src","images/shapes/magnet.gif");
		setTimeout(function() {
			$("#bubbles").show();
			$("#change").html("Click on the pipette to move it into the beaker containing tri-sodium citrate solution...");
			$("#pipette").show();
			$("#pipette_txt").show();
			$("#pipette_arrow").show();
			$("#beaker").show();
			$("#beaker_water").show();
			$("#beaker_txt").show();
		}, 1500);
		removePointer(button1);
		addPointer(pipette);
	}
}

function callPipette(){
	if(step_no == 4){
		step_no++;
		$("#pipette_arrow").hide();
		$("#pipette_arrow").rotate({angle:160});
		$("#pipette_arrow").css("top","185%");
		$("#pipette_arrow").css("left","39%");
		$("#pipette_txt").css("top","130%");
		$("#pipette_txt").css("left","53%");
		$("#pipette_txt").hide();
		setTimeout(function() {
			$("#pipette_txt").show();
			$("#pipette_arrow").show();
			$("#change").html("Click on the pipette to draw 10ml of tri-sodium citrate solution from the beaker...");
		}, 1000);
		animate("#pipette",-197.2,150.5,1000);
	}
	else if(step_no == 5){
		$("#beaker_water").velocity({ 
			height: "15%",
			translateY: 18.6,},
			{ duration: 1000});
		step_no++;
		$("#pipette_arrow").hide();
		$("#pipette_txt").hide();
		$("#pipette_arrow").rotate({angle:0});
		$("#pipette_arrow").css("top","161%");
		$("#pipette_arrow").css("left","33%");
		$("#pipette_txt").css("top","220%");
		$("#pipette_txt").css("left","30%");
		setTimeout(function() {
			animate("#pipette",5,-10,1000);
			setTimeout(function() {
				$("#pipette_txt").show();
				$("#pipette_arrow").show();
				$("#change").html("Click on the pipette to move it over to the Flask containing boiling AgNO<sub>3</sub> solution..");	
			}, 1000);
		}, 1000);
	}
	else if( step_no == 6){
		step_no++;
		$("#pipette_arrow").hide();
		$("#pipette_arrow").css("top","120%");
		$("#pipette_arrow").css("left","44%");
		$("#pipette_txt").hide();
		$("#pipette_txt").css("top","180%");
		$("#pipette_txt").css("left","41%");
		animate("#pipette",165,-50,1000);
		setTimeout(function() {
			$("#change").html("Click on the pipette to add tri-sodium citrate solution, drop by drop to boiling AgNO<sub>3</sub> solution in the flask...");	
			$("#drop").show();
			$("#pipette_arrow").show();
			$("#pipette_txt").show();
		}, 1000);
	}
	else if( step_no == 7){
		$("#pipette_arrow").hide();
		$("#pipette_txt").hide();
		removePointer(pipette);
		step_no++;
		$("#drop").animate({ top: 306.7},500);
		setTimeout(function() {
			$("#drop").animate({ top: 241.4},1);
			$("#drop").animate({ top: 306.7},500);
			setTimeout(function() {
				$("#drop").animate({ top: 241.4},1);
				$("#drop").animate({ top: 306.7},500);
				setTimeout(function() {
					$("#drop").animate({ top: 241.4},1);
					$("#drop").animate({ top: 306.7},500);
					setTimeout(function() {
						$("#drop").animate({ top: 241.4},1);
						$("#drop").animate({ top: 306.7},500);
						setTimeout(function() {
							$("#drop").animate({ top: 241.4},1);
							$("#drop").animate({ top: 306.7},500);
							setTimeout(function() {
								$("#drop").hide();
								$("#txt").show();
								$("#change").html("Golden coloured Silver colloid formed....<br> Click on RESET to start the experiment again...")
							}, 500);
						}, 500);
					}, 500);
				}, 500);
			}, 500);
		}, 500);
		$("#color").animate({opacity:0.8},3000);
	}
}
