var model={

	instruction1:'1. Select water from the apparatus.',
	instruction2:'2. Make a salt solution using the salt container in the apparatus.',
	instruction3:'3. Make a sugar solution using the sugar container in the apparatus.',
	instruction4:'4. Make a soap solution using the detergent in the apparatus.',
	instruction5:'5. Make a Fe(OH)<sub>3</sub> colloid using the Fe(OH)<sub<3</sub> in the apparatus.',
	instruction6:'6. Make an Ag colloid using the Ag in the apparatus.',
	instruction7:'7. Tyndal effect is observed when light is passed through the solution.' 
	   		+	'Click on any of the beakers for detailed observtion.',
}

var view={

	// hideElements: Calls this method to make an element hidden. 
	hideElements: function(id){
		document.getElementById(id).style.visibility = 'hidden';
	},

	// showElements: Calls this method to make an element visible.
	showElements: function(id){
		document.getElementById(id).style.visibility = 'visible';
	},

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

	// resetPage: Calls this method to reset the page on clicking the button.
	resetPage: function(){
		location.reload();
	},

	/* activateEvents: Calls this method to add EventListener to an elements. When an element is 
	clicked corresponding function gets executed. */
	activateEvents: function() {
		this.addClickEvent('reset_btn', function() { view.resetPage(); });
	},

	init:function(){

	}
}

window.onload=function () {
	view.init();
}