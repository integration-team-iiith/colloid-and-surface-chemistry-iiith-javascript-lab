var model={

	instruction1:'1. Select water from the apparatus.',
	instruction2:'2. Make a salt solution using the salt container in the apparatus.',
	instruction3:'3. Make a sugar solution using the sugar container in the apparatus.',
	instruction4:'4. Make a soap solution using the detergent in the apparatus.',
	instruction5:'5. Make a Fe(OH)<sub>3</sub> colloid using the Fe(OH)<sub<3</sub> in the apparatus.',
	instruction6:'6. Make an Ag colloid using the Ag in the apparatus.',
	instruction7:'7. Tyndal effect is observed when light is passed through the solution.' 
	   		+	'Click on any of the beakers for detailed observtion.',
};

var view={

	step_no:0,
	x:0,
	y:0,
	z:0,
	a:0,
	b:0,
	c:0,
	
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

  	// replaceElements: Calls this method to replace the element with an other element.
	replaceElements: function(id, image) {
		var element = document.getElementById(id);
		element.src = image;
	},

	// animateDirection_1: Calls this method to move an element in a straight line.
	animateDirection_1: function(id,top,left,time){
		$('#'+id).animate({
			top: top+'%', 
			left: left+'%'
		}, {
			duration: time
		});
	},

	// animateDirection_2: Calls this method to move the element to the top first and then to the left.
	animateDirection_2: function(id,top,left,time){
		$('#'+id).animate({
			top: top+'%'
		}, {
			duration: time
		})
				.animate({
			left: left+'%'
		}, {
			duration: time
		});
	},

	/* animateDirection_3: Calls this method to move the element in a straight line along with the width 
	and height of the element increasing/decreasing. */
	animateDirection_3: function(id, top, left, width, height,time){
		$('#'+id).animate({
			top: top+'%',
			left: left+'%',
			width: width+'%',
			height: height+'%'
		}, {
			duration: time
		});
	},

	// resetPage: Calls this method to reset the page on clicking the button.
	resetPage: function(){
		location.reload();
	},

	/* activateEvents: Calls this method to add EventListener to an elements. When an element is 
	clicked corresponding function gets executed. */
	activateEvents: function() {
		this.addClickEvent('reset_btn', function() { view.resetPage(); });
		this.addClickEvent('flsk',function(){ view.water();});
		this.addClickEvent('salt',function(){ view.callSalt();});
		this.addClickEvent('sgr',function(){ view.callSugar();});
		this.addClickEvent('dtr',function(){ view.callDeter();});
		this.addClickEvent('feoh',function(){ view.callFeoh();});
	},

	water: function(){
		if(this.step_no == 0)
		{
			$("#back1").show();
			$("#beak1").show();
			this.animateDirection_1('beak1', '+=38', '-=5', '1000');
			this.step_no++;
			setTimeout(function(){
			$("#flask1").show();
			$("#arrow1").show();
			$("#ar1_txt").show();
			},1000);
			setTimeout(function(){
				this.x=1;
				$("#arrow1").hide();
				$("#ar1_txt").hide();
				time1=setInterval(function(){
					images=[];
					for(i=1;i<=69;i++)
					{
						images[i]= "images/sprites/water_flasks/"  + i + ".png";
					}
					if(this.x<images.length)
					{
						$("#flask1").attr("src",images[this.x]);
					}
					this.x++;
					if(this.x ==70){
						$("#flask1").hide();
						clearInterval(time1);
					}
				},50);
			},3000);
			setTimeout(function(){
				this.y=1;
				time2=setInterval(function(){
					water=[];
					for(j=0;j<=48;j++)
					{
						water[j]="images/sprites/water_beak/" + j + ".png";
					}
					if(this.y<water.length){
						$("#beak1_water").attr("src",water[this.y]);
					}
					this.y++;
					if(this.y == 49){
						clearInterval(time2);
						$("#tag1").show();
						$("#water_txt").show();
						setTimeout(function(){
							view.animateDirection_1('tag1', '-=3', '-=0', '1000');
						},500);
						setTimeout(function(){
							view.animateDirection_1('water_txt', '-=3', '-=0', '1000');
						},500);
					}
				},50)
			},2800)
		}
	},

	callSalt: function(){
		if(this.step_no == 1)
		{
			$("#back2").show();
			$("#beak2").show();
			this.animateDirection_1('beak2', '+=38', '-=63', '1000');
			this.step_no++;
			setTimeout(function(){
			$("#flask2").show();
			$("#arrow2").show();
			$("#ar2_txt").show();
			},1000);
			setTimeout(function(){
				this.x=1;
				$("#arrow2").hide();
				$("#ar2_txt").hide();
				time3=setInterval(function(){
					images=[];
					for(i=1;i<=69;i++)
					{
						images[i]= "images/sprites/water_flasks/"  + i + ".png";
					}
					if(this.x<images.length)
					{
						$("#flask2").attr("src",images[this.x]);
					}
					this.x++;
					if(this.x ==70){
						$("#flask2").hide();
						clearInterval(time3);
					}
				},50);
			},3000);
			setTimeout(function(){
				this.y=1;
				time4=setInterval(function(){
					water=[];
					for(j=0;j<=48;j++)
					{
						water[j]="images/sprites/water_beak/" + j + ".png";
					}
					if(this.y<water.length){
						$("#beak2_water").attr("src",water[this.y]);
					}
					this.y++;
					if(this.y == 49){
						clearInterval(time4);
					}
				},50)
			},2800);
			setTimeout(function(){
				$("#beak2").css("top","-2%");
				$("#beak2").css("left","22.7%");
				this.z=205;
				time5=setInterval(function(){
					water=[];
					for(k=205;k<=294;k++)
					{
						water[k]="images/sprites/sugar_salt/" + k + ".png";
					}
					if(this.z<water.length){
						$("#beak2").attr("src",water[this.z]);
					}
					if(this.z==213)
					{
						$("#ar3_txt").show();
					}
					if(this.z == 265){
						$("#ar3_txt").hide();
					}
					this.z++;
					if(this.z == 295){
					 	$("#rod1").show();
						clearInterval(time5);
					}
				},50)
			},6000)
			 setTimeout(function(){
			 	this.x=0;
			 	time6=setInterval(function(){
			 		for(j=0;j<=59;j++)
					{
						water[j]="images/sprites/stirring/" + j + ".png";
					}
					if(this.x<water.length){
						$("#rod1").attr("src",water[this.x]);
					}
					this.x++;
					if(this.x == 60){
						$("#rod1").hide();
						clearInterval(time6);
						$("#tag2").show();
						$("#salt2_txt").show();
						setTimeout(function(){
							view.animateDirection_1('tag2', '-=3', '-=0', '1000');
						},500);
						setTimeout(function(){
							view.animateDirection_1('salt2_txt', '-=3', '-=0', '1000');
						},500);
					}
				},50)
			 },10000)
		}
	},

	callSugar: function(){
		if(this.step_no == 2)
		{
			$("#back3").show();
			$("#beak3").show();
			this.animateDirection_1('beak3', '+=38', '-=52', '1000');
			this.step_no++;
			setTimeout(function(){
			$("#flask3").show();
			$("#arrow4").show();
			$("#ar4_txt").show();
			},1000);
			setTimeout(function(){
				this.x=1;
				$("#arrow4").hide();
				$("#ar4_txt").hide();
				time7=setInterval(function(){
					images=[];
					for(i=1;i<=69;i++)
					{
						images[i]= "images/sprites/water_flasks/"  + i + ".png";
					}
					if(this.x<images.length)
					{
						$("#flask3").attr("src",images[this.x]);
					}
					this.x++;
					if(this.x ==70){
						$("#flask3").hide();
						clearInterval(time7);
					}
				},50);
			},3000);
			setTimeout(function(){
				this.y=1;
				time8=setInterval(function(){
					water=[];
					for(j=0;j<=48;j++)
					{
						water[j]="images/sprites/water_beak/" + j + ".png";
					}
					if(this.y<water.length){
						$("#beak3_water").attr("src",water[this.y]);
					}
					this.y++;
					if(this.y == 49){
						clearInterval(time8);
					}
				},50)
			},2800);
			setTimeout(function(){
				$("#beak3").css("top","-2%");
				$("#beak3").css("left","33.8%");
				this.z=205;
				time9=setInterval(function(){
					water=[];
					for(k=205;k<=294;k++)
					{
						water[k]="images/sprites/sugar_salt/" + k + ".png";
					}
					if(this.z<water.length){
						$("#beak3").attr("src",water[this.z]);
					}
					if(this.z==213)
					{
						$("#ar5_txt").show();
					}
					if(this.z == 265){
						$("#ar5_txt").hide();
					}
					this.z++;
					if(this.z == 295){
					 	$("#rod2").show();
						clearInterval(time9);
					}
				},50)
			},6000)
			setTimeout(function(){
			 	this.x=0;
			 	time10=setInterval(function(){
			 		for(j=0;j<=59;j++)
					{
						water[j]="images/sprites/stirring/" + j + ".png";
					}
					if(this.x<water.length){
						$("#rod2").attr("src",water[this.x]);
					}
					this.x++;
					if(this.x == 60){
						$("#rod2").hide();
						clearInterval(time10);
						$("#tag3").show();
						$("#sugar_txt").show();
						setTimeout(function(){
							view.animateDirection_1('tag3', '-=3', '-=0', '1000');
						},500);
						setTimeout(function(){
							view.animateDirection_1('sugar_txt', '-=3', '-=0', '1000');
						},500);
					}
				},50)
			 },10000)
		}
	},

	callDeter: function(){
		if(this.step_no == 3)
		{
			$("#back4").show();
			$("#beak4").show();
			this.animateDirection_1('beak4', '+=38', '-=40', '1000');
			this.step_no++;
			setTimeout(function(){
			$("#flask4").show();
			$("#arrow5").show();
			$("#ar6_txt").show();
			},1000);
			setTimeout(function(){
				this.x=1;
				$("#arrow5").hide();
				$("#ar6_txt").hide();
				time11=setInterval(function(){
					images=[];
					for(i=1;i<=69;i++)
					{
						images[i]= "images/sprites/water_flasks/"  + i + ".png";
					}
					if(this.x<images.length)
					{
						$("#flask4").attr("src",images[this.x]);
					}
					this.x++;
					if(this.x ==70){
						$("#flask4").hide();
						clearInterval(time11);
					}
				},50);
			},3000);
			setTimeout(function(){
				this.y=1;
				time12=setInterval(function(){
					water=[];
					for(j=0;j<=48;j++)
					{
						water[j]="images/sprites/water_beak/" + j + ".png";
					}
					if(this.y<water.length){
						$("#beak4_water").attr("src",water[this.y]);
					}
					this.y++;
					if(this.y == 49){
						clearInterval(time12);
					}
				},50)
			},2800);
			setTimeout(function(){
				$("#beak4").css("top","-2%");
				$("#beak4").css("left","45.8%");
				this.z=205;
				time13=setInterval(function(){
					water=[];
					for(k=205;k<=294;k++)
					{
						water[k]="images/sprites/detergent_mixing/" + k + ".png";
					}
					if(this.z<water.length){
						$("#beak4").attr("src",water[this.z]);
					}
					if(this.z==213)
					{
						$("#ar7_txt").show();
					}
					if(this.z == 265){
						$("#ar7_txt").hide();
					}
					this.z++;
					if(this.z == 295){
					 	$("#rod3").show();
						clearInterval(time13);
					}
				},50)
			},6000)
			setTimeout(function(){
			 	this.x=0;
			 	this.a=100;
			 	this.b=0;
			 	time14=setInterval(function(){
			 		for(j=0;j<=59;j++)
					{
						water[j]="images/sprites/stirring/" + j + ".png";
					}
					if(this.x<water.length){
						$("#rod3").attr("src",water[this.x]);
						this.a-=1.8;
						if(this.a<0)
							this.a=0;
						this.b=this.a +"%"; 
						$("#beak4_water").css("-webkit-filter","grayscale("+this.b+")");
					}
					this.x++;
					if(this.x == 55){
						$("#beak4_water").css("top","58.6%");
						$("#beak4_water").attr("src","images/shapes/457.png");
					}
					if(this.x == 70)
					{
						$("#rod3").hide();
						clearInterval(time14);
						$("#tag4").show();
						$("#deter_txt").show();
						setTimeout(function(){
							view.animateDirection_1('tag4', '-=3', '-=0', '1000');
						},500);
						setTimeout(function(){
							view.animateDirection_1('deter_txt', '-=3', '-=0', '1000');
						},500);
					}
				},50)
			 },10000)
		}
	},

	callFeoh: function(){
		if(this.step_no == 4)
		{
			$("#back5").show();
			$("#beak5").show();
			this.animateDirection_1('beak5', '+=38', '-=28', '1000');
			this.step_no++;
			setTimeout(function(){
			$("#flask5").show();
			$("#arrow6").show();
			$("#ar8_txt").show();
			},1000);
			setTimeout(function(){
				this.x=1;
				$("#arrow6").hide();
				$("#ar8_txt").hide();
				time15=setInterval(function(){
					images=[];
					for(i=1;i<=69;i++)
					{
						images[i]= "images/sprites/feoh_flasks/"  + i + ".png";
					}
					if(this.x<images.length)
					{
						$("#flask5").attr("src",images[this.x]);
					}
					this.x++;
					if(this.x ==70){
						$("#flask5").hide();
						clearInterval(time15);
					}
				},50);
			},3000);
			setTimeout(function(){
				this.y=1;
				time12=setInterval(function(){
					water=[];
					for(j=0;j<=48;j++)
					{
						water[j]="images/sprites/water_beak/" + j + ".png";
					}
					if(this.y<water.length){
						$("#beak5_water").attr("src",water[this.y]);
					}
					this.y++;
					if(this.y == 49){
						clearInterval(time12);
					}
				},50)
			},2800);
			// setTimeout(function(){
			// 	$("#beak4").css("top","-2%");
			// 	$("#beak4").css("left","45.8%");
			// 	this.z=205;
			// 	time13=setInterval(function(){
			// 		water=[];
			// 		for(k=205;k<=294;k++)
			// 		{
			// 			water[k]="images/sprites/detergent_mixing/" + k + ".png";
			// 		}
			// 		if(this.z<water.length){
			// 			$("#beak4").attr("src",water[this.z]);
			// 		}
			// 		if(this.z==213)
			// 		{
			// 			$("#ar7_txt").show();
			// 		}
			// 		if(this.z == 265){
			// 			$("#ar7_txt").hide();
			// 		}
			// 		this.z++;
			// 		if(this.z == 295){
			// 		 	$("#rod3").show();
			// 			clearInterval(time13);
			// 		}
			// 	},50)
			// },6000)
			// setTimeout(function(){
			//  	this.x=0;
			//  	this.a=100;
			//  	this.b=0;
			//  	time14=setInterval(function(){
			//  		for(j=0;j<=59;j++)
			// 		{
			// 			water[j]="images/sprites/stirring/" + j + ".png";
			// 		}
			// 		if(this.x<water.length){
			// 			$("#rod3").attr("src",water[this.x]);
			// 			this.a-=1.8;
			// 			if(this.a<0)
			// 				this.a=0;
			// 			this.b=this.a +"%"; 
			// 			$("#beak4_water").css("-webkit-filter","grayscale("+this.b+")");
			// 		}
			// 		this.x++;
			// 		if(this.x == 55){
			// 			$("#beak4_water").css("top","58.6%");
			// 			$("#beak4_water").attr("src","images/shapes/457.png");
			// 		}
			// 		if(this.x == 70)
			// 		{
			// 			$("#rod3").hide();
			// 			clearInterval(time14);
			// 			$("#tag4").show();
			// 			$("#deter_txt").show();
			// 			setTimeout(function(){
			// 				view.animateDirection_1('tag4', '-=3', '-=0', '1000');
			// 			},500);
			// 			setTimeout(function(){
			// 				view.animateDirection_1('deter_txt', '-=3', '-=0', '1000');
			// 			},500);
			// 		}
			// 	},50)
			//  },10000)
		}
	},
};

 window.onload=function () {
	 view.activateEvents();
 };