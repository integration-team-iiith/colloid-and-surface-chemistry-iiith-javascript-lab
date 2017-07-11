var view={
	
	button_no:1,
	index1:0,
	step_no:1,

// setInnerHtml: Calls this method to set the innerText to an element.
setInnerHTML: function (id, innerHTML) {
    document.getElementById(id).innerHTML = innerHTML;
},

// addClickEvent: Calls this method to add EventListener to an element.
addClickEvent: function(id, method){
    var element = document.getElementById(id);
    element.addEventListener('click', method);
},

//removeClickEvent: Calls this method to remove EventListener for an element.
removeClickEvent: function(id){
    document.getElementById(id).style.pointerEvents = 'none';
},

//enableClickEvent: Calls this method to enable EventListener for an element.
enableClickEvent: function(id){
	document.getElementById(id).style.pointerEvents = 'auto';
},

// animateDirection_1: Calls this method to move an element in a straight line.
animate: function(id,top,left,time){
        $(id).velocity({translateX: top,translateY: left},{duration: time});
},

// resetPage: Calls this method to reset the page on clicking the button.
resetPage: function(){
        location.reload();
},

//removes click events for all functions
removeClickAll: function(){
	for(i=1;i<=18;i++){
		id4="piece"+ i;
		view.removeClickEvent(id4);
	}
},

//enable click events for all functions
enableClickAll: function(){
	for(i=1;i<=18;i++){
		id4="piece"+ i;
		view.enableClickEvent(id4);
	}
},


/* activateEvents: Calls this method to add EventListener to an elements. When an element is 
clicked corresponding function gets executed. */
activateEvents: function(){
	this.addClickEvent("button1", function() { view.func1()});
	this.addClickEvent("button2",function(){view.func2()});
	this.addClickEvent("button3",function(){view.func3()});
	this.addClickEvent("button4",function(){view.func4()});
	this.addClickEvent("button5",function(){view.func5()});
	this.addClickEvent("button6",function(){view.func6()});
	this.addClickEvent("button7",function(){view.func7()});
	this.addClickEvent("button8",function(){view.func8()});
	this.addClickEvent("button9",function(){view.func9()});
	this.addClickEvent("button10",function(){view.func10()});
	this.addClickEvent("button11",function(){view.func11()});
	this.addClickEvent("button12",function(){view.func12()});
	this.addClickEvent("button13",function(){view.func13()});
	this.addClickEvent("button14",function(){view.func14()});
	this.addClickEvent("button15",function(){view.func15()});
	this.addClickEvent("button16",function(){view.func16()});
	this.addClickEvent("button17",function(){view.func17()});
	this.addClickEvent("button18",function(){view.func18()});
	this.addClickEvent("rod_button1",function(){view.movement1()});
	this.addClickEvent("rod_button2",function(){view.movement2()});
},

func1: function(){
	$("#piece"+view.button_no).css("opacity","0");
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	view.button_no=1;
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func2: function(){
	$("#piece"+view.button_no).css("opacity","0");
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	view.button_no=2;
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func3: function(){
	$("#piece"+view.button_no).css("opacity","0");
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	view.button_no=3;
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func4: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=4;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func5: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=5;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#conc").hide();
	$("#hand1").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func6: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=6;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func7: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=7;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func8: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=8;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func9: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=9;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func10: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=10;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func11: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=11;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func12: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=12;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func13: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=13;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func14: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=14;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func15: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=15;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func16: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=16;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func17: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=17;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

func18: function(){
	$("#piece"+view.button_no).css("opacity","0");
	view.button_no=18;
	$("#pour").attr("src","images/sprites/flask_pour/pouring.gif");
	setTimeout(function() {
		$("#beak_water").attr("src","images/sprites/beak_fill_water/filling.gif");
	}, 700);
	$("#piece"+view.button_no).css("opacity","0.5 ");
	view.removeClickAll();
	view.step_no=2;
	$("#hand1").hide();
	$("#conc").hide();
	setTimeout(function(){
		$("#hand2").show();
		$("#cell").show();
	},3000);
},

rotate: function(){
	$("#hand1").rotate({angle: 100});
},

movement1: function(){
	if(view.step_no == 2){
		$("#hand2").hide();
		$("#cell").hide();
		this.index1=1;
		id2=setInterval(function(){
			images=[];
			for(i=1;i<=64;i++){
				images[i]="images/sprites/anims/" + i + ".png";
			}
			if(view.index1 < images.length){
				$("#rod").attr("src",images[view.index1]);
			}
			view.index1++;
			if(view.index1 == 65){
				view.index1=1;
				clearInterval(id2);
				view.enableClickAll();
				link = "images/sprites/readings/read" + view.button_no + ".png";
				$("#readings").attr("src",link);
				$("#click").show();
				$("#hand3").show();
			}
		},50);
		view.step_no++;
	}
},

movement2: function(){
	if(view.step_no == 3){
		this.index1=65;
		$("#click").hide();
		$("#hand3").hide();
		setTimeout(function() {$("#readings").attr("src","images/sprites/readings/read1.png");}, 100);
		id8=setInterval(function(){
			images=[];
			for(i=65;i<=140;i++){
				images[i]="images/sprites/anims/" + i + ".png";
			}
			if(view.index1 < images.length){
				$("#rod").attr("src",images[view.index1]);
			}
			view.index1++;
			if(view.index1 == 141){
				view.index1=1;
				clearInterval(id8);
				$("#piece"+view.button_no).css("opacity","1");
				view.enableClickAll();
				$("#beak_water").attr("src","images/sprites/beak_fill_water/22.png");
				$("#pour").attr("src","images/sprites/flask_pour/0.png");
				$("#hand1").show();
				$("#conc").show();
			}
		},50);
		view.step_no++;

	}
},

}

window.onload=function () {
        view.activateEvents();
        view.rotate();
};
