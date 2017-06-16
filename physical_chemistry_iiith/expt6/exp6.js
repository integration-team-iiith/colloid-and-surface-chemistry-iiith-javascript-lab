// This file contains all the functions which are used to animate the images in the experiment.
// This function is a general method used to move images from initial position to final position.
var y = 0;
var x = 1;
var z = 101;
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


/* If a person clicks on aspirin btn then this function is called, function hides both buttons when someone clicks on aspirin button
*/
function removeBtn1(){
    $('#aspirin').hide();
    $('#asprntxt').hide();
    $('#cafine').hide();
    $('#cafintxt').hide();
    y = 0;
    $('#sampl').on("click", function(){clickSampl(); }); 
    document.getElementById('instr').innerHTML = "click on the sample bottle to transffer a small quantity of the sample to the mortar."
}


/* If a person clicks on caffine btn then this function is called, function hides both buttons when someone clicks on caffine button
*/
function removeBtn2(){
    $('#aspirin').hide();
    $('#asprntxt').hide();
    $('#cafine').hide();
    $('#cafintxt').hide();
    y = 1;
    $('#sampl').on("click", function(){clickSampl(); });
    document.getElementById('instr').innerHTML = "click on the sample bottle to transffer a small quantity of the sample to the mortar."
}


/* function simply transffers some amount of sample to mortar*/

function clickSampl(){
    $('#spoonfill').show();
    setTimeout(emptySpoon,3000);
    document.getElementById('instr').innerHTML = "click on the bottol containing nozal to transffer few drops to mortar."
}

/* function pours sample solution into moratr*/

function emptySpoon(){
    $('#spoonfill').hide();
    $('#emptyspoon').show();
    setTimeout(removeSpoon,2800);
}

/* just to hide spoon */

function removeSpoon(){
    $('#emptyspoon').hide();
    $('#nizol').on("click",function(){ sirinj() ;})
}

/* function fills sirinj with nozal solution */

function sirinj(){
    $('#fillsirinj').show();
    setTimeout(replaceSirinj,2400);
}

/* function empties sirinj */

function replaceSirinj(){
    $('#fillsirinj').hide();
    $('#emptysirinj').show();
    setTimeout(removeSirinj,2800);
}

/* to hide sirinj*/
function removeSirinj(){
    $('#emptysirinj').hide();
    $('#mortar').on("click", function(){ mix() ;});
    document.getElementById('instr').innerHTML = "click on the mortar to make a fine paste of sample"
}

/* to mix the solution in mortar*/

function mix(){
    $('#mortar').show();
    var img =  document.getElementById('mortar');
    img.src = "bowl.gif";
    setTimeout(offMortar,3000); 
}


function offMortar(){
    $('#mortar').hide();
    $('#mortar1').show();
    var img =  document.getElementById('mortar');
    img.src = "sprites/DefineSprite_82/1.png";
    $('#mortar1').on('click',function(){putinplat();});
    document.getElementById('instr').innerHTML = "click on the mortar to transffer the sample prepared onto one of the IR discs"
}


function putinplat(){
    $('#spoonfill2').show();
    $('#plate').show();
    setTimeout(fillplate,2500);
}

function fillplate(){
    $('#spoonfill2').hide();
    $('#emptyspoon2').show();
    setTimeout(removeSpoon2,2500);
}

function removeSpoon2(){
    document.getElementById('instr').innerHTML = "Click on IR discs Place carefully the other disc  and press to form a thin film."
    $('#emptyspoon2').hide();
    $('#fill').show();
    $('#plate').on("click",function(){ startexp() ;});
    $('#fill').on('click',function(){startexp() ;});
}

function startexp(){
    if(y==1){
        $('#green1').show();
        setInterval(green1,50);
        setTimeout(green21,3300);
    }
    else {
        $('#green1').show();
        setInterval(red1,50);
        setTimeout(green21,3200);
    }

    $('#mortartxt').hide();
    $('#mortar1').hide();
    $('#nizol').hide();
    $('#sampl').hide();
    $('#plate').hide();
    $('#fill').hide();
    $('#sampltxt').hide();
    $('#nizoltxt').hide();
    document.getElementById('instr').innerHTML = "Click on the holder to place the the sample in the spectrometer."
}

function green1(){
    var flask = [];
    var i;
    $('#green1').show();
    var img = document.getElementById("green1");
    for(i=1;i<=65;i++){
        flask[i] = "sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/" + i + '.png' 
    }
    if(x <= 65){
        img.src = flask[x];
        x++;
    }
    else{
        x = 223;
    }
}


function red1(){
    $('#green1').show();
    var img = document.getElementById("green1");
    var flask = [];
    var i;
    for(i=101;i<=163;i++){
        flask[i] = "sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/" + i + ".png" 
    }
    if(z <= 163){
        img.src = flask[z];
        z++;
    }
    else{
        z = 165;
    }
}

function green21(){
    if(y==1){
        $('#green2').show();
        $('#green2').on('click',function(){ green22();});
    }
    else{
        $('#red2').show();
        $('#red2').on('click',function(){ green22();});
    }

    
}

function green22(){
    if(y==1){
        $('#green1').hide();
        $('#green3').show()
        setTimeout(green23,3600);
    }
    else{
        $('#green1').hide();
        $('#red3').show();
        setTimeout(green23,2600);
    }
}

function green23(){
    if(y==1){
        $('#green3').show();
        var img = document.getElementById('green3');
        img.src = "sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/320.png"
        $('#green3').on('click',function(){ spectro() ;});
    }
    else{
        $('#red3').show();
        var img = document.getElementById('red3');
        img.src = "sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/221.png"
        $('#red3').on('click',function(){ spectro() ;});
    }
}


function spectro1(){
    $('#machine').show();
    var img = document.getElementById("machine");
    img.src = "binaryData/last2.png";
    $('#strtbtn').on('click',function(){ evaluate() ;});
}

function spectro(){
    document.getElementById('instr').innerHTML = "Click start to run the spectrometer."
    $('#machine').show();
    setTimeout(spectro1,3500);
}

function evaluate(){
    $('#exp').show();
    var img = document.getElementById('exp');
    img.src = "binaryData/light.gif";
    setTimeout(showGraph,5500);
}

function showGraph(){
    $('#exp').show();
    var img1 = document.getElementById('exp');
    img1.src = "sprites/DefineSprite_20/124.png"    
    $('#graph').show();
    var img = document.getElementById('graph');
    if(y==1){
        setTimeout(stopgraph,10500);
        img.src = "binaryData/bluegraph.gif";
    }
    else{
        setTimeout(stopgraph,10500);
        img.src = "binaryData/yellowgraph.gif"
    }
}

function stopgraph(){
    $('#graph.show');
    var img =  document.getElementById('graph');
    if(y==1){
        img.src = "sprites/DefineSprite_133_IR_Powder_exp6_fla.graph_aspirine_45/105.png";
    }
    else{
        img.src = "sprites/DefineSprite_136_IR_Powder_exp6_fla.graph_caffeine_46/105.png";
    }
}