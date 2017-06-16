var y = 0;

function vanish1(){
	y = 1;
	$('#yellowbtn').hide();
	$('#yellowtxt').hide();
	$('#redbtn').hide();
	$('#redtxt').hide();
	$('#sampl').on('click',function(){sampleTransffer();});
	document.getElementById('instr').innerHTML = "Click on the sample  to transfer small amount (2-5mg) of the substance into the empty sample bottle."
}


function vanish2(){
	$('#yellowbtn').hide();
	$('#yellowtxt').hide();
	$('#redbtn').hide();
	$('#redtxt').hide();
	$('#sampl').on('click',function(){sampleTransffer();});
	document.getElementById('instr').innerHTML = "Click on the sample  to transfer small amount (2-5mg) of the substance into the empty sample bottle."
}


function sampleTransffer(){
	$('#yellow').show();
	document.getElementById('instr').innerHTML = "Click on the solvent bottle to transfer 2 to 3ml of the solvent (methylene chloride) to the sample to prepared a clear solution."
	$('#solvent').on('click',function(){solventTransffer();});
}

function solventTransffer(){
	$('#fillsolution').show();
	document.getElementById('instr').innerHTML = "Click on the desicator to take out the 'solution IR cell'."
	setTimeout(helper,1000);
}

function helper(){
	$('#fillsolution').hide();
	$('#fullsolution').show();
	$('#desicator').on('click',function(){showSlide();});
}

function showSlide(){
	$('#slide').show();
	$('#fullsolution').on('click', function(){fillSlide();});
	document.getElementById('instr').innerHTML = "Click on the sample solution to draw 1ml of the solution with a syringe";
}

function fillSlide(){
	document.getElementById('instr').innerHTML = "Click on the solution IR cell to transfer the sample solution until all the air is expelled from the solution cell."
	$('#fillsirinj').show();
	$('#sirinj').show();
	setTimeout(helper1,900);
}


function helper1(){
	$('#fillsirinj').hide();
	$('#sirinj').hide();
	$('#slide').on('click',function(){fillSlide1();});
}

function fillSlide1(){
	$('#sirinj2').show();
	$('#empty').show();
	$('#fillslide').show();
	setTimeout(helper2,600);
}


function helper2(){
	$('#sirinj2').hide();
	$('#empty').hide();
	$('#fillslide').hide();
	$('#fullslide').show();
	$('#fullslide').on('click',function(){spectro();});
	document.getElementById('instr').innerHTML ="Click on the solution IR cell to place the cell inside the spectrometer."
}

function spectro(){
	$('#machine').show();
    setTimeout(spectro1,3700);
}

function spectro1(){
	$('#machine').show();
	var img = document.getElementById('machine');
	img.src = "last2.png";
	document.getElementById('instr').innerHTML = "Click on 'start' button to start the spectrometer.";
    $('#strtbtn').on('click',function(){ evaluate() ;});
}

function evaluate(){
	$('#mirror').show();
    $('#exp').show();
    var img = document.getElementById('exp');
    img.src = "light.gif";
    setTimeout(showGraph,5000);
}


function showGraph(){
	$('#mirror').hide();
    $('#exp').show();
    var img1 = document.getElementById('exp');
    img1.src = "sprites/DefineSprite_20_IR_Sol_exp7_fla.Animation_1_1/124.png"
    setTimeout(stopgraph,4000);    
    $('#graph').show();
    var img = document.getElementById('graph');
    if(y==1){
        img.src = "greengraph.gif";
    }
    else{
        img.src = "yellowgraph.gif"
    }
}

function stopgraph(){
	document.getElementById('instr').innerHTML = "Click on the evaluate button to spectral analysis"
    $('#graph.show');
    var img =  document.getElementById('graph');
    if(y==1){
        img.src = "greenf.png";
    }
    else{
        img.src = "yellowf.png";
    }
}


/*
var model = {
	instr4: ,
	instr5: "Click on the solution IR cell to transfer the sample solution until all the air is expelled from the solution cell.",
*/