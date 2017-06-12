// This file contains all the functions which are used to animate the images in the experiment.
// This function is a general method used to move images from initial position to final position.
var y=0;
var count=0;
var count1 = 0;
var z = 0;
var x = 0;
var w = 0;
var p = 0;
function moveImage(){
    id = setInterval(frame, 5);
    function frame() {
        if(type_of_movement == 0){
            if (initial_top > final_top) {
                clearInterval(id);
                count++;
            } else {
                initial_top+=step_top; 
                initial_left+=step_left;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
            }
        }
        else if(type_of_movement == 1){
            if (initial_top < final_top) {
                clearInterval(id);
                count++;
            } else {
                initial_top+=step_top; 
                initial_left+=step_left;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
                
            }
        }
    } 
}



//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
}

function moveBeaker(){
    elem = document.getElementById("beaker");
    // detect position of beaker
    initial_top = Math.round($('#beaker').position().top);
    initial_left = Math.round($('#beaker').position().left);
    final_top=420;
    step_top=1;
    step_left=0.5;
    type_of_movement = 0;
    //move beaker to desired location
    moveImage();
    removeArrow();
 }

function removeArrow(){
    $('#arrow_sign,#initial_instruction').remove();
    setTimeout(showWaterTag,2000);
    setTimeout(moveFlask,4000);
    setTimeout(changeFlask,3000);
    setTimeout(removeFlask,5000);
    setTimeout(showfecl3,6000);
}

function showWaterTag(){
    $('#yellowtag').show();
    $('#pour_water').show();
    $('#flask').show();
    setTimeout(Watertag2,1000);
}

function Watertag2(){
    $('#watertag').show();
    $('#waterlabel').show();
    setTimeout(removeWatertag2,1500);
}

function removeWatertag2(){
    $('#waterlabel').hide();
    $('#watertag').hide();
}

function moveFlask(){
    $('#flask').show();
}

function changeFlask(){
    $('#liquid').show();
}

function removeFlask(){
    $('#yellowtag').hide();
    $('#pour_water').hide();
    $('#flask').hide();
    $('#liquid').show();
    img = document.getElementById('liquid');
    img.src = "../sprites/DefineSprite_128_colloid_fla.contet_22/67.png";
}

    

function showfecl3(){
    document.getElementById('instr').innerHTML = "click on the ferrous chloride powder to add it to the beaker containing water... "
    $('#instr').show();
    $('#spoon').show();
    $('#pointer_spoon').show();
    $('#arrow_spoon').show();
}

function mixPowder(){
    document.getElementById('spoon').onclick = false;
    $('#fillfecl3').show();
    $('#yellowtag2').show();
    $('#new_spoon').show();
    $('#Fecl3powder').show();
    $('#pointer_spoon').hide();
    $('#arrow_spoon').hide();
    setTimeout(moveSpoon,1000);
//    setTimeout(movefecl3,2000);
}

function moveSpoon(){
    $('#fillfecl3').hide();
    $('#yellowtag2').hide();
    elem = document.getElementById("new_spoon");
    initial_top = Math.round($('#new_spoon').position().top);
    initial_left = Math.round($('#new_spoon').position().left);
    final_top=350;
    step_top=0.5;
    step_left=-2.5;
    type_of_movement = 0;

    moveImage();
    setTimeout(dropPowder,2000);
    
}


function dropPowder(){
    $('#powder').show();
    elem = document.getElementById("powder");
    initial_top = Math.round($('#powder').position().top);
    initial_left = Math.round($('#powder').position().top);
    final_top = 480;
    step_top = 0.5;
    step_left = 0;
    moveImage();
    $('#new_spoon').hide();
    setTimeout(relaxPowder,1000);
    document.getElementById('instr').innerHTML = "Click on the Glass rod to stirr the Fecl3 sol..."
    $('#instr').show();
    
}

function relaxPowder(){
    $('#powder').hide();
    $('#liquid').hide();
    $('#orangeLiquid').show();
    setTimeout(mixSpoon,500);
    
}

function mixSpoon(){
    $('#glassRod').show();
    $('#glassrod').show();
    $('#glass_rod_arrow').show();
}

function mixsol(){
    $('#beaker_with_rod').show();
    img = document.getElementById('beaker_with_rod');
    var rod = [];
    rod[0] = "../glass_rod/1.png";
    rod[1] = "../glass_rod/2.png";
    rod[2] = "../glass_rod/3.png";
    rod[3] = "../glass_rod/4.png";
    rod[4] = "../glass_rod/5.png"; 
    rod[5] = "../glass_rod/6.png";
    rod[6] = "../glass_rod/7.png";
    rod[7] = "../glass_rod/8.png";
    rod[8] = "../glass_rod/9.png";
    rod[9] = "../glass_rod10.png";
    rod[10] = "../glass_rod/11.png";
    rod[11] = "../glass_rod/12.png";
    rod[12] = "../glass_rod/13.png";
    rod[13] = "../glass_rod/14.png";
    rod[14] = "../glass_rod/15.png";
    rod[15] = "../glass_rod/16.png";
    rod[16] = "../glass_rod/17.png";
    rod[17] = "../glass_rod/18.png";
    rod[18] = "../glass_rod/19.png";
    rod[19] = "../glass_rod/20.png";
    rod[20] = "../glass_rod/21.png";
    rod[21] = "../glass_rod/22.png";
    rod[22] = "../glass_rod/23.png";
    rod[23] = "../glass_rod/24.png";
    rod[24] = "../glass_rod/25.png";
    rod[25] = "../glass_rod/26.png";
    rod[26] = "../glass_rod/27.png";
    rod[27] = "../glass_rod/28.png";
    rod[28] = "../glass_rod/29.png";
    rod[29] = "../glass_rod/30.png";
    rod[30] = "../glass_rod/31.png";
    rod[31] = "../glass_rod/32.png";
    rod[32] = "../glass_rod/33.png";
    rod[33] = "../glass_rod/34.png";
    rod[34] = "../glass_rod/35.png";
    rod[35] = "../glass_rod/36.png";
    rod[36] = "../glass_rod/37.png";
    rod[37] = "../glass_rod/38.png";
    rod[38] = "../glass_rod/39.png";
    rod[39] = "../glass_rod/40.png";
    rod[40] = "../glass_rod/41.png";
    rod[41] = "../glass_rod/42.png";
    rod[42] = "../glass_rod/43.png";
    rod[43] = "../glass_rod/44.png";
 
if(z < rod.length)
{
    img.src = rod[z];
}
z++;
}


function removeSpoon(){
    $('#glassRod').hide();
    document.getElementById('instr').innerHTML = "Click on the conical flask containing water, to place it on the magnetic stirrer/heater"
}


function helper(){
$('#glass_rod_arrow').hide();
$('#glassRod').hide();
$('#glassrod').hide();
$('#beaker').hide();
$('#orangeLiquid').hide();
$('#spoon').hide();
setTimeout(removeSpoon,3000);
setInterval(mixsol,50);
setTimeout(heatFlask,3100);
}


function heatFlask(){
    $('#fecl3text').show();
    $('#glassrod').hide()
    $('#conical').show();
    $('#conical_arrow').show();
    $('#final_flask').show();
}

function moveConical(){
    $('#conical').hide();
    $('#conical_arrow').hide();
    elem = document.getElementById("final_flask");
    initial_top = Math.round($('#final_flask').position().top);
    initial_left = Math.round($('#final_flask').position().left);
    final_top = 302;
    step_top = 1;
    step_left = 0;
    type_of_movement = 0;
    moveImage();

    setTimeout(showCoin,1000);
    $('#stirrer_btn').show();
    
}

function showCoin(){
document.getElementById("instr").innerHTML = "Click on the Magnetic Bead to drop it into the Flask";
$('#coin').show();
$('#coin_arrow').show();
$('#magnetic_bead').show();
}

function dropCoin(){
    $('#coin_arrow').hide();
    $('#magnetic_bead').hide();
    elem = document.getElementById("coin");
    initial_top = Math.round($('#coin').position().top);
    initial_left = Math.round($('#coin').position().left);
    final_top = 380;
    step_top = 1;
    step_left = 0;
    type_of_movement = 0;
    moveImage();
    $('#heat_btn').show();
    setTimeout(showArrow,500);
}

function showArrow(){
    document.getElementById('instr').innerHTML = "Switch on the Heater of the Magnetic Stirrer & Heater";
    $('#heat_arrow').show();
    $('#heat_instr').show();
}

function red_button(){
    document.getElementById('heat_btn').onclick = false;
    document.getElementById('instr').innerHTML = "Switch on the Stirrer of the Magnetic Stirrer & Heater";
    $('#red_btn').show();
    $('#stirrer_instr').show();
    $('#stirrer_arrow').show();
    $('#heat_arrow').hide();
    $('#heat_instr').hide();
}

function boilSol1(){
    document.getElementById('instr').innerHTML = "Wait till Water starts boiling";
    $('#stirrer_instr').hide();
    $('#stirrer_arrow').hide();
    setInterval(boilSol,50);
    setTimeout(bubbleSol1,1000);
    $("#heat_btn1").show();
}

function bubbleSol1(){
    document.getElementById('instr').innerHTML = "Now that the water gas started boiling,switchoff heater...";
    setInterval(bubbleSol,200);
    $('#heat_arrow').show();
    $('#heat_instr').show();
}


function boilSol(){
    $('#coin').show();
    img = document.getElementById('coin');
    Coin = [];
    Coin[0] = "../sprites/DefineSprite_10_Bead/1.png";
    Coin[1] = "../sprites/DefineSprite_10_Bead/2.png";
    Coin[2] = "../sprites/DefineSprite_10_Bead/3.png";
    Coin[3] = "../sprites/DefineSprite_10_Bead/4.png";
    Coin[4] = "../sprites/DefineSprite_10_Bead/5.png"; 
    Coin[5] = "../sprites/DefineSprite_10_Bead/6.png";
    Coin[6] = "../sprites/DefineSprite_10_Bead/7.png";
    Coin[7] = "../sprites/DefineSprite_10_Bead/8.png";
    Coin[8] = "../sprites/DefineSprite_10_Bead/9.png";
    Coin[9] = "../sprites/DefineSprite_10_Bead/10.png";
    Coin[10] = "../sprites/DefineSprite_10_Bead/11.png";
    Coin[11] = "../sprites/DefineSprite_10_Bead/12.png";
    Coin[12] = "../sprites/DefineSprite_10_Bead/13.png";
    Coin[13] = "../sprites/DefineSprite_10_Bead/14.png";
    Coin[14] = "../sprites/DefineSprite_10_Bead/15.png";
    Coin[15] = "../sprites/DefineSprite_10_Bead/16.png";
    Coin[16] = "../sprites/DefineSprite_10_Bead/17.png";
    Coin[17] = "../sprites/DefineSprite_10_Bead/18.png";
    Coin[18] = "../sprites/DefineSprite_10_Bead/19.png";
    Coin[19] = "../sprites/DefineSprite_10_Bead/20.png";
    Coin[20] = "../sprites/DefineSprite_10_Bead/21.png";

    if(x < Coin.length && x>=0){
        img.src  = Coin[x];
        x++;
    }
    if(x>=Coin.length)
    {
        x=0;
    }
}

function bubbleSol(){
    $('#bubble_in_mgnt').show();
    img1 = document.getElementById("bubble_in_mgnt");
    Bubble = [];
    Bubble[0] = "../shapes/204.png";
    Bubble[1] = "../shapes/205.png";
    Bubble[2] = "../shapes/206.png";
    Bubble[3] = "../shapes/207.png";
    Bubble[4] = "../shapes/208.png"; 
    Bubble[5] = "../shapes/209.png";
    Bubble[6] = "../shapes/210.png";
    Bubble[7] = "../shapes/211.png";
    Bubble[8] = "../shapes/212.png";
    Bubble[9] = "../shapes/213.png";
    Bubble[10] = "../shapes/214.png";
    if(w<Bubble.length && w>=0){
        img1.src = Bubble[w];
        w++;
    }
    if(w>=Bubble.length){
        w = 0;
    }
}


function heaterOff(){
    w=-1;
    document.getElementById('stirrer_btn').onclick = false;
    document.getElementById('instr').innerHTML = "Click on the pippet to take 10ml conc. Fecl3 from the Beaker";
    $('#heat_arrow').hide();
    $('#heat_instr').hide();
    $('#red_btn').hide();
    $('#pippet').show();
    $('#pippet_sign').show();
    $('#pippet_arrow').show();
    $('#heat_btn1').hide();
}


function movePippet(){
    $('#pippet_sign').hide();
    $('#pippet_arrow').hide();
    elem = document.getElementById("pippet");
    initial_top = Math.round($('#pippet').position().top);
    initial_left = Math.round($('#pippet').position().left);
    final_top = 380;
    step_top = 1;
    step_left = -0.65;
    type_of_movement = 0;
    moveImage();
    setTimeout(moveBack,4000);
}

function moveBack(){
    elem = document.getElementById("pippet");
    initial_top = Math.round($('#pippet').position().top);
    initial_left = Math.round($('#pippet').position().left);
    final_top = 145;
    step_top = -1;
    step_left = +0.75;
    type_of_movement = 1;
    moveImage();
    setTimeout(showPippet,2000);
}


function showPippet(){
    document.getElementById('instr').innerHTML = "Click on the pipette again to add the FeCl3 taken from the beaker, to the hot water in conical flask, drop by drop......";
    $('#pippet1').show();
    $('#pippet').hide();
}

function movePippet2(){
    elem = document.getElementById("pippet1");
    initial_top = Math.round($('#pippet1').position().top);
    initial_left = Math.round($('#pippet1').position().left);
    final_top = 200;
    step_top = 1;
    step_left = 3;
    type_of_movement = 0;
    moveImage();
    setTimeout(showDrop,2000);
}



function showDrop(){
    document.getElementById('instr').innerHTML = "Click on the drop Add again to add the FeCl3 taken from the beaker, to the hot water in conical flask, drop by drop......";
    $('#drop').show();
}

function moveDrop(){
    elem = document.getElementById("drop");
    initial_top = Math.round($('#drop').position().top);
    initial_left = Math.round($('#drop').position().left);
    final_top = 370;
    step_top = 1;
    step_left = 0;
    type_of_movement = 0;
    moveImage();
    $('#red_flask').show();
    $('#feohSol').show();
    document.getElementById('instr').innerHTML = "the Sol is Thus obtained";
}

function showSol(){
    $('#round').show();
    moveSol();
}


function moveSol(){
    $('#bbl1').show();
    $('#bbl2').show();
    $('#bbl3').show();
    $('#bbl4').show();
    $('#bbl5').show();
}







