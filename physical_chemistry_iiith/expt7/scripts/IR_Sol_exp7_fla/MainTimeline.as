package IR_Sol_exp7_fla
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
       
      
      public var start_btn:SimpleButton;
      
      public var dropper_bottom:MovieClip;
      
      public var uponcell:SimpleButton;
      
      public var dropper1:MovieClip;
      
      public var Evaluate:SimpleButton;
      
      public var powder_final_yellow:MovieClip;
      
      public var below:MovieClip;
      
      public var dropper_up:MovieClip;
      
      public var cell:MovieClip;
      
      public var instruct:TextField;
      
      public var mc1:MovieClip;
      
      public var smallcell:MovieClip;
      
      public var solution1:MovieClip;
      
      public var button_2:SimpleButton;
      
      public var button:SimpleButton;
      
      public var moving_mirror1:MovieClip;
      
      public var solution:SimpleButton;
      
      public var goingup:MovieClip;
      
      public var graph_aspirine:MovieClip;
      
      public var button_3:SimpleButton;
      
      public var caffeine:SimpleButton;
      
      public var coming_down:MovieClip;
      
      public var moving_up1:MovieClip;
      
      public var powder:MovieClip;
      
      public var graph_caffeine:MovieClip;
      
      public var zoomanim:MovieClip;
      
      public var aspirine:SimpleButton;
      
      public var liquid:SimpleButton;
      
      public var lidtoggle_btn:SimpleButton;
      
      public var onoff_btn:SimpleButton;
      
      public var upondropper:SimpleButton;
      
      public var box:MovieClip;
      
      public var sp_cap:MovieClip;
      
      public var dropper2:MovieClip;
      
      public var graphToChose:Number;
      
      public var startGraph:Number;
      
      public var count:Number;
      
      public function MainTimeline()
      {
         super();
         addFrameScript(0,frame1);
      }
      
      public function gosolution(param1:MouseEvent) : void
      {
         liquid.enabled = false;
         moving_up1.visible = true;
         powder_final_yellow.visible = false;
         moving_up1.gotoAndPlay(1);
         instruct.text = "Click on the desicator to take out the \'solution IR cell\'.";
      }
      
      public function gopowder(param1:MouseEvent) : void
      {
         powder_final_yellow.visible = true;
         instruct.text = "Click on the solvent bottle to transfer 2 to 3ml of the solvent (methylene chloride) to the sample to prepared a clear solution. ";
      }
      
      public function showcell(param1:MouseEvent) : void
      {
         cell.visible = true;
         solution.visible = true;
         solution.enabled = true;
         instruct.text = "Click on the sample solution to draw 1ml of the solution with a syringe";
      }
      
      public function hidedropper(param1:Event) : void
      {
         if(coming_down.currentFrame == 20)
         {
            dropper1.visible = false;
            dropper_up.visible = false;
         }
      }
      
      public function hidedropper2(param1:Event) : void
      {
         if(goingup.currentFrame == 20)
         {
            dropper2.visible = false;
            dropper_bottom.visible = false;
         }
      }
      
      public function showcellanimation(param1:MouseEvent) : void
      {
         if(count == 1)
         {
            goingup.visible = true;
            goingup.gotoAndPlay(1);
            dropper2.visible = true;
            dropper_bottom.visible = true;
            dropper_bottom.gotoAndPlay(1);
            count++;
            uponcell.enabled = true;
            uponcell.visible = true;
            instruct.text = "Click on the solution IR cell to place the cell inside the spectrometer.";
         }
      }
      
      public function showcellanimation_bottom(param1:MouseEvent) : void
      {
         cell.visible = false;
         goingup.visible = false;
         zoomanim.gotoAndPlay(1);
         zoomanim.visible = true;
         smallcell.visible = true;
         instruct.text = "Click on \'start\' button to start the spectrometer.";
      }
      
      public function showanimation_final(param1:MouseEvent) : void
      {
         moving_up1.visible = false;
         coming_down.visible = true;
         coming_down.gotoAndPlay(1);
         solution.visible = false;
         solution.enabled = false;
         dropper1.visible = true;
         dropper_up.visible = true;
         dropper_up.gotoAndPlay(1);
         instruct.text = "Click on the solution IR cell to transfer the sample solution until all the air is expelled from the solution cell.";
      }
      
      public function function1(param1:MouseEvent) : void
      {
         mc1.gotoAndPlay(1);
         sp_cap.gotoAndStop(1);
         moving_mirror1.gotoAndPlay(1);
         smallcell.visible = false;
         below.visible = false;
         instruct.text = "Click on the evaluate button to spectral analysis";
      }
      
      public function proc1(param1:Event) : void
      {
         trace(mc1.currentFrame);
         if(mc1.currentFrame >= 123)
         {
            mc1.gotoAndStop(124);
            if(startGraph == 0)
            {
               if(graphToChose == 2)
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
      
      public function gotoPage(param1:MouseEvent) : void
      {
         var _loc2_:URLRequest = null;
         var _loc3_:URLRequest = null;
         if(graphToChose == 2)
         {
            _loc2_ = new URLRequest("benzoic/benzoic_acid_IR_expt10.html");
            navigateToURL(_loc2_);
         }
         if(graphToChose == 3)
         {
            _loc3_ = new URLRequest("nitrophenol/2-nitrophenol_IR_expt10.html");
            navigateToURL(_loc3_);
         }
      }
      
      public function solvent2(param1:MouseEvent) : void
      {
         graphToChose = 3;
         instruct.text = "Click on the sample  to transfer small amount (2-5mg) of the substance into the empty sample bottle.";
         aspirine.visible = false;
         caffeine.visible = false;
      }
      
      public function solvent1(param1:MouseEvent) : void
      {
         graphToChose = 2;
         instruct.text = "Click on the sample  to transfer small amount (2-5mg) of the substance into the empty sample bottle.";
         aspirine.visible = false;
         caffeine.visible = false;
      }
      
      function frame1() : *
      {
         graphToChose = 1;
         startGraph = 0;
         zoomanim.visible = false;
         zoomanim.gotoAndStop(1);
         smallcell.gotoAndStop(1);
         smallcell.visible = false;
         solution.visible = false;
         solution.enabled = false;
         goingup.visible = false;
         goingup.gotoAndStop(1);
         coming_down.visible = false;
         coming_down.gotoAndStop(1);
         moving_up1.gotoAndStop(1);
         moving_up1.visible = false;
         cell.visible = false;
         dropper1.visible = false;
         dropper2.visible = false;
         count = 1;
         dropper_up.gotoAndStop(1);
         dropper_up.visible = false;
         dropper_bottom.gotoAndStop(1);
         dropper_bottom.visible = false;
         moving_mirror1.gotoAndStop(1);
         uponcell.visible = false;
         uponcell.enabled = false;
         mc1.enabled = false;
         mc1.gotoAndStop(1);
         sp_cap.gotoAndStop(2);
         powder_final_yellow.visible = false;
         liquid.addEventListener(MouseEvent.CLICK,gosolution);
         powder.addEventListener(MouseEvent.CLICK,gopowder);
         box.addEventListener(MouseEvent.CLICK,showcell);
         coming_down.addEventListener(Event.ENTER_FRAME,hidedropper);
         goingup.addEventListener(Event.ENTER_FRAME,hidedropper2);
         upondropper.addEventListener(MouseEvent.CLICK,showcellanimation);
         uponcell.addEventListener(MouseEvent.CLICK,showcellanimation_bottom);
         solution.addEventListener(MouseEvent.CLICK,showanimation_final);
         start_btn.addEventListener(MouseEvent.CLICK,function1);
         mc1.addEventListener(Event.ENTER_FRAME,proc1);
         Evaluate.addEventListener(MouseEvent.CLICK,gotoPage);
         caffeine.addEventListener(MouseEvent.CLICK,solvent2);
         aspirine.addEventListener(MouseEvent.CLICK,solvent1);
      }
   }
}
