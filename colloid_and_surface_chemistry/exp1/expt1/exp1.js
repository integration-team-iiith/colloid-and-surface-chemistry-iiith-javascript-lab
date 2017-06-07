// This file contains all the functions which are used to animate the images in the experiment.
// This function is a general method used to move images from initial position to final position.
var y=0;
var count=0;
var z = 0;
var x = 0;
var w = 0;
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
    setTimeout(moveFlask,3000);
    setTimeout(showfecl3,5000);
}

function moveFlask(){
    setInterval(changeFlask,50);
}

function changeFlask(){
    $('#flask').show();
    $('#liquid').show();
    img = document.getElementById('flask');
    img1 = document.getElementById('liquid');
    var Flask = [];
    
    Flask[0] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/1.png";
    Flask[1] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/2.png";
    Flask[2] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/4.png";
    Flask[3] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/5.png";
    Flask[4] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/6.png";
    Flask[5] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/7.png";
    Flask[6] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/8.png";
    Flask[7] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/9.png";
    Flask[8] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/10.png";
    Flask[9] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/11.png";
    Flask[10] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/12.png";
    Flask[11] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/13.png";
    Flask[12] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/14.png";
    Flask[13] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/15.png";
    Flask[14] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/16.png";
    Flask[15] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/17.png";
    Flask[16] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/18.png";
    Flask[17] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/19.png";
    Flask[18] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/20.png";
    Flask[19] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/21.png";
    Flask[20] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/22.png";
    Flask[21] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/23.png";
    Flask[22] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/24.png";
    Flask[23] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/25.png";
    Flask[24] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/26.png";
    Flask[25] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/27.png";
    Flask[26] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/28.png";
    Flask[27] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/29.png";
    Flask[28] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/30.png";
    Flask[29] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/31.png";
    Flask[30] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/32.png";
    Flask[31] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/33.png";
    Flask[32] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/34.png";
    Flask[33] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/35.png";
    Flask[34] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/36.png";
    Flask[35] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/37.png";
    Flask[36] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/38.png";
    Flask[37] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/39.png";
    Flask[38] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/40.png";
    Flask[39] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/41.png";
    Flask[40] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/42.png";
    Flask[41] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/43.png";
    Flask[42] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/44.png";
    Flask[43] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/45.png";
    Flask[45] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/46.png";
    Flask[46] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/47.png";
    Flask[47] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/48.png";
    Flask[48] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/49.png";
    Flask[49] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/50.png";
    Flask[50] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/51.png";
    Flask[51] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/52.png";
    Flask[52] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/53.png";
    Flask[53] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/54.png";
    Flask[54] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/55.png";
    Flask[55] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/56.png";
    Flask[56] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/57.png";
    Flask[57] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/58.png";
    Flask[58] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/59.png";
    Flask[59] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/60.png";
    Flask[60] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/61.png";
    Flask[61] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/62.png";
    Flask[62] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/63.png";
    Flask[63] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/64.png";
    Flask[64] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/65.png";
    Flask[65] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/66.png";
    Flask[66] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/67.png";
    Flask[67] = "../sprites/DefineSprite_110_colloid_fla.ghhhhhhhhhhhh_18/68.png";

    var Water = [];
    Water[0] = "../sprites/DefineSprite_128_colloid_fla.contet_22/1.png";
    Water[1] = "../sprites/DefineSprite_128_colloid_fla.contet_22/2.png";
    Water[2] = "../sprites/DefineSprite_128_colloid_fla.contet_22/3.png";
    Water[3] = "../sprites/DefineSprite_128_colloid_fla.contet_22/4.png";
    Water[4] = "../sprites/DefineSprite_128_colloid_fla.contet_22/5.png"; 
    Water[5] = "../sprites/DefineSprite_128_colloid_fla.contet_22/6.png";
    Water[6] = "../sprites/DefineSprite_128_colloid_fla.contet_22/7.png";
    Water[7] = "../sprites/DefineSprite_128_colloid_fla.contet_22/8.png";
    Water[8] = "../sprites/DefineSprite_128_colloid_fla.contet_22/9.png";
    Water[9] = "../sprites/DefineSprite_128_colloid_fla.contet_22/10.png";
    Water[10] = "../sprites/DefineSprite_128_colloid_fla.contet_22/11.png";
    Water[11] = "../sprites/DefineSprite_128_colloid_fla.contet_22/12.png";
    Water[12] = "../sprites/DefineSprite_128_colloid_fla.contet_22/13.png";
    Water[13] = "../sprites/DefineSprite_128_colloid_fla.contet_22/14.png";
    Water[14] = "../sprites/DefineSprite_128_colloid_fla.contet_22/15.png";
    Water[15] = "../sprites/DefineSprite_128_colloid_fla.contet_22/16.png";
    Water[16] = "../sprites/DefineSprite_128_colloid_fla.contet_22/17.png";
    Water[17] = "../sprites/DefineSprite_128_colloid_fla.contet_22/18.png";
    Water[18] = "../sprites/DefineSprite_128_colloid_fla.contet_22/19.png";
    Water[19] = "../sprites/DefineSprite_128_colloid_fla.contet_22/20.png";
    Water[20] = "../sprites/DefineSprite_128_colloid_fla.contet_22/21.png";
    Water[21] = "../sprites/DefineSprite_128_colloid_fla.contet_22/22.png";
    Water[22] = "../sprites/DefineSprite_128_colloid_fla.contet_22/23.png";
    Water[23] = "../sprites/DefineSprite_128_colloid_fla.contet_22/24.png";
    Water[24] = "../sprites/DefineSprite_128_colloid_fla.contet_22/25.png";
    Water[25] = "../sprites/DefineSprite_128_colloid_fla.contet_22/26.png";
    Water[26] = "../sprites/DefineSprite_128_colloid_fla.contet_22/27.png";
    Water[27] = "../sprites/DefineSprite_128_colloid_fla.contet_22/28.png";
    Water[28] = "../sprites/DefineSprite_128_colloid_fla.contet_22/29.png";
    Water[29] = "../sprites/DefineSprite_128_colloid_fla.contet_22/30.png";
    Water[30] = "../sprites/DefineSprite_128_colloid_fla.contet_22/31.png";
    Water[31] = "../sprites/DefineSprite_128_colloid_fla.contet_22/32.png";
    Water[32] = "../sprites/DefineSprite_128_colloid_fla.contet_22/33.png";
    Water[33] = "../sprites/DefineSprite_128_colloid_fla.contet_22/34.png";
    Water[34] = "../sprites/DefineSprite_128_colloid_fla.contet_22/35.png";
    Water[35] = "../sprites/DefineSprite_128_colloid_fla.contet_22/36.png";
    Water[36] = "../sprites/DefineSprite_128_colloid_fla.contet_22/37.png";
    Water[37] = "../sprites/DefineSprite_128_colloid_fla.contet_22/38.png";
    Water[38] = "../sprites/DefineSprite_128_colloid_fla.contet_22/39.png";
    Water[39] = "../sprites/DefineSprite_128_colloid_fla.contet_22/40.png";
    Water[40] = "../sprites/DefineSprite_128_colloid_fla.contet_22/41.png";
    Water[41] = "../sprites/DefineSprite_128_colloid_fla.contet_22/42.png";
    Water[42] = "../sprites/DefineSprite_128_colloid_fla.contet_22/44.png";
    Water[43] = "../sprites/DefineSprite_128_colloid_fla.contet_22/45.png";
    Water[45] = "../sprites/DefineSprite_128_colloid_fla.contet_22/46.png";
    Water[46] = "../sprites/DefineSprite_128_colloid_fla.contet_22/47.png";
    Water[47] = "../sprites/DefineSprite_128_colloid_fla.contet_22/48.png";
    Water[48] = "../sprites/DefineSprite_128_colloid_fla.contet_22/49.png";
    Water[49] = "../sprites/DefineSprite_128_colloid_fla.contet_22/50.png";
    Water[50] = "../sprites/DefineSprite_128_colloid_fla.contet_22/51.png";
    Water[51] = "../sprites/DefineSprite_128_colloid_fla.contet_22/52.png";
    Water[52] = "../sprites/DefineSprite_128_colloid_fla.contet_22/53.png";
    Water[53] = "../sprites/DefineSprite_128_colloid_fla.contet_22/54.png";
    Water[54] = "../sprites/DefineSprite_128_colloid_fla.contet_22/55.png";
    Water[55] = "../sprites/DefineSprite_128_colloid_fla.contet_22/56.png";
    Water[56] = "../sprites/DefineSprite_128_colloid_fla.contet_22/57.png";
    Water[57] = "../sprites/DefineSprite_128_colloid_fla.contet_22/58.png";
    Water[58] = "../sprites/DefineSprite_128_colloid_fla.contet_22/59.png";
    Water[59] = "../sprites/DefineSprite_128_colloid_fla.contet_22/60.png";
    Water[60] = "../sprites/DefineSprite_128_colloid_fla.contet_22/61.png";
    
    if(y < Flask.length){
        img.src = Flask[y];
    }
    if(y < Water.length){
        img1.src = Water[y];
    }
        y+=1;
}

//    $("#water_label").attr('src', '../sprites/DefineSprite_134/waterlabel.png'); 
    

function showfecl3(){
    document.getElementById('instr').innerHTML = "click on the ferrous chloride powder to add it to the beaker containing water... "
    $('#instr').show();
    $('#spoon').show();
    $('#pointer_spoon').show();
    $('#arrow_spoon').show();
}

function mixPowder(){
    $('#new_spoon').show();
    $('#Fecl3powder').show();
    $('#pointer_spoon').hide();
    $('#arrow_spoon').hide();
    setTimeout(moveSpoon,1000);
//    setTimeout(movefecl3,2000);
}

function moveSpoon(){
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

/*

function movefecl3(){
    elem = document.getElementById("Fecl3powder");
    initial_top = Math.round($('#Fecl3powder').position().top);
    initial_left = Math.round($('#Fecl3powder').position().left);
    final_top=400;
    step_top=1;
    step_left=-3;
    type_of_movement = 0;

    moveImage();
    
}

*/

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
    $('#glassrod').show();
    img = document.getElementById('glassrod');
    var rod = [];
    rod[0] = "../sprites/DefineSprite_175/1.png";
    rod[1] = "../sprites/DefineSprite_175/2.png";
    rod[2] = "../sprites/DefineSprite_175/3.png";
    rod[3] = "../sprites/DefineSprite_175/4.png";
    rod[4] = "../sprites/DefineSprite_175/5.png"; 
    rod[5] = "../sprites/DefineSprite_175/6.png";
    rod[6] = "../sprites/DefineSprite_175/7.png";
    rod[7] = "../sprites/DefineSprite_175/8.png";
    rod[8] = "../sprites/DefineSprite_175/9.png";
    rod[9] = "../sprites/DefineSprite_175/10.png";
    rod[10] = "../sprites/DefineSprite_175/11.png";
    rod[11] = "../sprites/DefineSprite_175/12.png";
    rod[12] = "../sprites/DefineSprite_175/13.png";
    rod[13] = "../sprites/DefineSprite_175/14.png";
    rod[14] = "../sprites/DefineSprite_175/15.png";
    rod[15] = "../sprites/DefineSprite_175/16.png";
    rod[16] = "../sprites/DefineSprite_175/17.png";
    rod[17] = "../sprites/DefineSprite_175/18.png";
    rod[18] = "../sprites/DefineSprite_175/19.png";
    rod[19] = "../sprites/DefineSprite_175/20.png";
    rod[20] = "../sprites/DefineSprite_175/21.png";
    rod[21] = "../sprites/DefineSprite_175/22.png";
    rod[22] = "../sprites/DefineSprite_175/23.png";
    rod[23] = "../sprites/DefineSprite_175/24.png";
    rod[24] = "../sprites/DefineSprite_175/25.png";
    rod[25] = "../sprites/DefineSprite_175/26.png";
    rod[26] = "../sprites/DefineSprite_175/27.png";
    rod[27] = "../sprites/DefineSprite_175/28.png";
    rod[28] = "../sprites/DefineSprite_175/29.png";
    rod[29] = "../sprites/DefineSprite_175/30.png";
    rod[30] = "../sprites/DefineSprite_175/31.png";
    rod[31] = "../sprites/DefineSprite_175/32.png";
    rod[32] = "../sprites/DefineSprite_175/33.png";
    rod[33] = "../sprites/DefineSprite_175/34.png";
    rod[34] = "../sprites/DefineSprite_175/35.png";
    rod[35] = "../sprites/DefineSprite_175/36.png";
    rod[36] = "../sprites/DefineSprite_175/37.png";
    rod[37] = "../sprites/DefineSprite_175/38.png";
    rod[38] = "../sprites/DefineSprite_175/39.png";
    rod[39] = "../sprites/DefineSprite_175/40.png";
    rod[40] = "../sprites/DefineSprite_175/41.png";
    rod[41] = "../sprites/DefineSprite_175/42.png";
    rod[42] = "../sprites/DefineSprite_175/43.png";
    rod[43] = "../sprites/DefineSprite_175/44.png";
    rod[45] = "../sprites/DefineSprite_175/45.png";
    rod[46] = "../sprites/DefineSprite_175/46.png";
    rod[47] = "../sprites/DefineSprite_175/47.png";
    rod[48] = "../sprites/DefineSprite_175/48.png";
    rod[49] = "../sprites/DefineSprite_175/49.png";
    rod[50] = "../sprites/DefineSprite_175/50.png";
    rod[51] = "../sprites/DefineSprite_175/51.png";
    rod[52] = "../sprites/DefineSprite_175/52.png";
    rod[53] = "../sprites/DefineSprite_175/53.png";
    rod[54] = "../sprites/DefineSprite_175/54.png";
    rod[55] = "../sprites/DefineSprite_175/55.png";
    rod[56] = "../sprites/DefineSprite_175/56.png";
    rod[57] = "../sprites/DefineSprite_175/57.png";
    rod[58] = "../sprites/DefineSprite_175/58.png";
    rod[59] = "../sprites/DefineSprite_175/59.png";
    rod[60] = "../sprites/DefineSprite_175/60.png";
 
if(z < rod.length)
{
    img.src = rod[z];
}
z++;
}


function removeSpoon(){
    $('#spoon').hide();
    $('#glassRod').hide();
}


function helper(){
$('#glass_rod_arrow').hide();
$('#glassRod').hide();
setTimeout(removeSpoon,4000);
setInterval(mixsol,50);
setTimeout(heatFlask,3100);

//setTimeout(shiftBeaker,4100);
}

/*
function shiftBeaker(){
    $('#glassrod').hide();
    elem = document.getElementById("beaker");
    initial_top = Math.round($('#beaker').position().top);
    initial_left = Math.round($('#beaker').position().left);
    final_left = 100;
    step_top = 0;
    step_left = -1;
    type_of_movement = 0;
    moveImage();

  }
*/

function heatFlask(){
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
$('#coin').show();
}

function dropCoin(){
    elem = document.getElementById("coin");
    initial_top = Math.round($('#coin').position().top);
    initial_left = Math.round($('#coin').position().left);
    final_top = 380;
    step_top = 1;
    step_left = 0;
    type_of_movement = 0;
    moveImage();
    $('#heat_btn').show();
}


function red_button(){
    $('#red_btn').show();
}

function boilSol1(){
    setInterval(boilSol,50);
    setInterval(bubbleSol,200);
    setTimeout(heaterOff,3000);
    $("#heat_btn1").show();
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
    }
