package IR_Powder_exp6_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.text.TextField;
   
   public dynamic class MainTimeline extends MovieClip
   {
       
      
      public var nizolTxt:TextField;
      
      public var start_btn:SimpleButton;
      
      public var hiding:SimpleButton;
      
      public var sampleTxt:TextField;
      
      public var Evaluate:SimpleButton;
      
      public var instruct:TextField;
      
      public var mc1:MovieClip;
      
      public var button_2:SimpleButton;
      
      public var button:SimpleButton;
      
      public var createsolventanim:MovieClip;
      
      public var graph_aspirine:MovieClip;
      
      public var button_3:SimpleButton;
      
      public var plateTxt:TextField;
      
      public var btnmordar:SimpleButton;
      
      public var btnplate:SimpleButton;
      
      public var caffeine:SimpleButton;
      
      public var lolhide:MovieClip;
      
      public var btnsample:SimpleButton;
      
      public var scene:MovieClip;
      
      public var powder:SimpleButton;
      
      public var graph_caffeine:MovieClip;
      
      public var zoomanim:MovieClip;
      
      public var mortarTxt:TextField;
      
      public var aspirine:SimpleButton;
      
      public var hide6:MovieClip;
      
      public var lidtoggle_btn:SimpleButton;
      
      public var onoff_btn:SimpleButton;
      
      public var btnsolvent:SimpleButton;
      
      public var sp_cap:MovieClip;
      
      public var graphToChose:Number;
      
      public var startGraph:Number;
      
      public var newanim_state:Number;
      
      public var uniquecolor:Number;
      
      public var powder_selected:Number;
      
      public var solution_selected:Number;
      
      public var pow_which:Number;
      
      public var color:Number;
      
      public function MainTimeline()
      {
         super();
         addFrameScript(0,frame1);
      }
      
      public function show_powder_options(param1:MouseEvent) : void
      {
         if(solution_selected == 0)
         {
            powder_selected = 1;
         }
      }
      
      public function solvent1(param1:MouseEvent) : void
      {
         graphToChose = 2;
         instruct.text = " Click on the sample bottle (the first bottle) to transfer a small quantity of the sample to the mortar.";
         aspirine.visible = false;
         caffeine.visible = false;
      }
      
      public function showactual(param1:Event) : void
      {
      }
      
      public function stop_aspirine(param1:Event) : void
      {
         trace("as" + scene.currentFrame);
         if(scene.currentFrame == 99)
         {
            scene.gotoAndStop(99);
         }
         if(scene.currentFrame == 163)
         {
            scene.gotoAndStop(163);
         }
         if(scene.currentFrame == 221)
         {
            scene.gotoAndStop(221);
         }
      }
      
      public function solvent2(param1:MouseEvent) : void
      {
         graphToChose = 3;
         instruct.text = " Click on the sample bottle (the first bottle) to transfer a small quantity of the sample to the mortar.";
         aspirine.visible = false;
         caffeine.visible = false;
      }
      
      public function button_work(param1:MouseEvent) : void
      {
         if(pow_which == 1)
         {
            scene.gotoAndPlay(223);
         }
         else if(pow_which == 2)
         {
            scene.gotoAndPlay(164);
         }
         instruct.text = "Click on the holder to place the the sample in the spectrometer..";
         button.enabled = false;
      }
      
      public function button_work2(param1:MouseEvent) : void
      {
         hiding.visible = false;
         scene.visible = false;
         zoomanim.visible = true;
         instruct.text = "Click start to run the spectrometer.";
         zoomanim.gotoAndPlay(1);
         button_2.enabled = false;
      }
      
      public function button_work3(param1:MouseEvent) : void
      {
         hiding.visible = false;
         zoomanim.visible = true;
         zoomanim.gotoAndPlay(1);
         button_3.enabled = false;
      }
      
      public function proc1(param1:Event) : void
      {
         trace(mc1.currentFrame);
         if(mc1.currentFrame >= 123)
         {
            mc1.gotoAndStop(124);
            if(startGraph == 0)
            {
               trace(graphToChose);
               if(graphToChose == 3)
               {
                  graph_aspirine.visible = true;
                  graph_caffeine.visible = false;
                  graph_aspirine.gotoAndPlay(2);
               }
               else
               {
                  graph_aspirine.visible = false;
                  graph_caffeine.visible = true;
                  graph_caffeine.gotoAndPlay(2);
               }
               startGraph = 1;
            }
         }
      }
      
      public function lidtoggle(param1:MouseEvent) : void
      {
         var _loc2_:* = undefined;
         if(sp_cap.currentFrame == 2)
         {
            mc1.gotoAndPlay(1);
            sp_cap.gotoAndStop(1);
            hiding.visible = false;
         }
         if(color == 1)
         {
            graph_caffeine.visible = false;
            graph_aspirine.visible = true;
            graph_aspirine.gotoAndPlay(2);
         }
         if(color == 2)
         {
            graph_aspirine.visible = false;
            graph_caffeine.visible = true;
            graph_caffeine.gotoAndPlay(2);
         }
      }
      
      public function gotoPage(param1:MouseEvent) : void
      {
         var _loc2_:URLRequest = null;
         var _loc3_:URLRequest = null;
         if(graphToChose == 2)
         {
            _loc2_ = new URLRequest("aspirin/plot_IR_aspirin_exp6.html");
            navigateToURL(_loc2_);
         }
         if(graphToChose == 3)
         {
            _loc3_ = new URLRequest("caffeine/plot_IR_caffeine_exp6.html");
            navigateToURL(_loc3_);
         }
      }
      
      public function sample1move(param1:MouseEvent) : void
      {
         createsolventanim.fs.visible = true;
         createsolventanim.fs.gotoAndPlay(1);
         instruct.text = " Click on the mortar to grind the sample to fine paste";
         newanim_state = 1;
      }
      
      public function sample1mordar(param1:MouseEvent) : void
      {
         if(newanim_state == 1)
         {
            createsolventanim.mordar.visible = true;
            createsolventanim.mordar.gotoAndPlay(1);
            instruct.text = "Click on the bottle containing Nujol to transfer few drops to the mortar.";
            newanim_state = 2;
         }
         if(newanim_state == 3)
         {
            createsolventanim.mordar.visible = true;
            createsolventanim.mordar.gotoAndPlay(1);
            instruct.text = "Click on mordar to Transfer the sample prepared onto one of the IR discs";
            newanim_state = 4;
         }
         else if(newanim_state == 4)
         {
            createsolventanim.fsplate.gotoAndPlay(1);
            createsolventanim.fsplate.visible = true;
            createsolventanim.plate.visible = true;
            plateTxt.visible = true;
            instruct.text = "Click on IR discs Place carefully the other disc  and press to form a thin film.";
            newanim_state = 5;
         }
      }
      
      public function sample1solvent(param1:MouseEvent) : void
      {
         createsolventanim.fp.visible = true;
         createsolventanim.fp.gotoAndPlay(1);
         instruct.text = " Click on the mortar to make a fine paste of sample";
         newanim_state = 3;
      }
      
      public function sample1plate(param1:MouseEvent) : void
      {
         createsolventanim.visible = false;
         createsolventanim.enabled = false;
         scene.visible = true;
         lolhide.visible = false;
         if(uniquecolor == 1)
         {
            scene.gotoAndPlay(1);
         }
         else if(uniquecolor == 2)
         {
            scene.gotoAndPlay(105);
         }
         instruct.text = "Click the IR discs to Move the IR plates to the plate holder";
         newanim_state = 3;
         btnsample.enabled = false;
         btnsolvent.enabled = false;
         btnmordar.enabled = false;
         btnplate.enabled = false;
         button.enabled = true;
         button_2.enabled = true;
         button_3.enabled = true;
         sampleTxt.visible = false;
         nizolTxt.visible = false;
         mortarTxt.visible = false;
         plateTxt.visible = false;
         pow_which = 2;
      }
      
      function frame1() : *
      {
         graphToChose = 1;
         plateTxt.visible = false;
         button.enabled = false;
         button_2.enabled = false;
         button_3.enabled = false;
         powder.visible = false;
         startGraph = 0;
         newanim_state = 0;
         uniquecolor = 2;
         createsolventanim.visible = true;
         createsolventanim.gotoAndStop(1);
         scene.gotoAndStop(0);
         powder_selected = 0;
         solution_selected = 0;
         zoomanim.visible = false;
         zoomanim.gotoAndStop(1);
         mc1.enabled = false;
         mc1.gotoAndStop(1);
         sp_cap.gotoAndStop(2);
         caffeine.visible = true;
         lolhide.visible = true;
         hiding.visible = false;
         pow_which = 0;
         powder.addEventListener(MouseEvent.CLICK,show_powder_options);
         aspirine.addEventListener(MouseEvent.CLICK,solvent1);
         createsolventanim.addEventListener(Event.ENTER_FRAME,showactual);
         scene.addEventListener(Event.ENTER_FRAME,stop_aspirine);
         caffeine.addEventListener(MouseEvent.CLICK,solvent2);
         button.addEventListener(MouseEvent.CLICK,button_work);
         button_2.addEventListener(MouseEvent.CLICK,button_work2);
         button_3.addEventListener(MouseEvent.CLICK,button_work3);
         mc1.addEventListener(Event.ENTER_FRAME,proc1);
         start_btn.addEventListener(MouseEvent.CLICK,lidtoggle);
         Evaluate.addEventListener(MouseEvent.CLICK,gotoPage);
         btnsample.addEventListener(MouseEvent.CLICK,sample1move);
         btnmordar.addEventListener(MouseEvent.CLICK,sample1mordar);
         btnsolvent.addEventListener(MouseEvent.CLICK,sample1solvent);
         btnplate.addEventListener(MouseEvent.CLICK,sample1plate);
      }
   }
}
