//This function adds click events to all clickable objects
function addclickEvents(){
    document.getElementById("action").addEventListener("click", function() {
        callAction();
    }, false);
}

function move(id,left,top,time){
        $(id).velocity({translateX: left+"%",translateY: top+"%"},{duration: time});
}

function callAction() {
		$("#buttons").hide();
		$("#div_btn1").show();
}

