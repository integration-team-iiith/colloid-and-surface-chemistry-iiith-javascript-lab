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
        callAction();
    }, false);
    document.getElementById("close_btn1").addEventListener("click", function() {
        callClose1();
    }, false);
}

function move(id,left,top,time){
        $(id).velocity({translateX: left+"%",translateY: top+"%"},{duration: time});
}

function callAction() {
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
		move("#infobg",0,134,1500);
}

function callClose1(){
	$("#div_btn1").hide();
	$("#buttons").show();
}