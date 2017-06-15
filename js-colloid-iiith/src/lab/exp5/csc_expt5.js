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
		// 	setTimeout(function(){
		// 		$("#beak2").css("top","-2%");
		// 		$("#beak2").css("left","22.7%");
		// 		this.z=205;
		// 		time5=setInterval(function(){
		// 			water=[];
		// 			for(k=205;k<=294;k++)
		// 			{
		// 				water[k]="images/sprites/sugar_salt/" + k + ".png";
		// 			}
		// 			if(this.z<water.length){
		// 				$("#beak2").attr("src",water[this.z]);
		// 			}
		// 			if(this.z==213)
		// 			{
		// 				$("#ar3_txt").show();
		// 			}
		// 			if(this.z == 265){
		// 				$("#ar3_txt").hide();
		// 			}
		// 			this.z++;
		// 			if(this.z == 295){
		// 			 	$("#rod1").show();
		// 				clearInterval(time5);
		// 			}
		// 		},50)
		// 	},6000)
		// 	 setTimeout(function(){
		// 	 	this.x=0;
		// 	 	time6=setInterval(function(){
		// 	 		for(j=0;j<=59;j++)
		// 			{
		// 				water[j]="images/sprites/stirring/" + j + ".png";
		// 			}
		// 			if(this.x<water.length){
		// 				$("#rod1").attr("src",water[this.x]);
		// 			}
		// 			this.x++;
		// 			if(this.x == 60){
		// 				$("#rod1").hide();
		// 				clearInterval(time6);
		// 				$("#tag2").show();
		// 				$("#salt2_txt").show();
		// 				setTimeout(function(){
		// 					view.animateDirection_1('tag2', '-=3', '-=0', '1000');
		// 				},500);
		// 				setTimeout(function(){
		// 					view.animateDirection_1('salt2_txt', '-=3', '-=0', '1000');
		// 				},500);
		// 			}
		// 		},50)
		// 	 },10000)
		}
	},
};

 window.onload=function () {
	 view.activateEvents();
 };