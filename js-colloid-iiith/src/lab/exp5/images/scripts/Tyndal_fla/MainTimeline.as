package Tyndal_fla
{
   import fl.transitions.Tween;
   import fl.transitions.easing.Strong;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.events.ProgressEvent;
   import flash.text.TextField;
   
   public dynamic class MainTimeline extends MovieClip
   {
       
      
      public var water_mc:MovieClip;
      
      public var ag_mc:MovieClip;
      
      public var sugar_btn:SimpleButton;
      
      public var loader_txt:TextField;
      
      public var salt_mc:MovieClip;
      
      public var watr_mc:MovieClip;
      
      public var loaderref_txt:TextField;
      
      public var light_mc:MovieClip;
      
      public var soap_btn:SimpleButton;
      
      public var one_mc:MovieClip;
      
      public var water_btn:SimpleButton;
      
      public var soap_mc:MovieClip;
      
      public var ag_btn:SimpleButton;
      
      public var fe_mc:MovieClip;
      
      public var salt_btn:SimpleButton;
      
      public var two_mc:MovieClip;
      
      public var fe_btn:SimpleButton;
      
      public var three_mc:MovieClip;
      
      public var five_mc:MovieClip;
      
      public var instruction_mc:MovieClip;
      
      public var sugar_mc:MovieClip;
      
      public var four_mc:MovieClip;
      
      public function MainTimeline()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2);
      }
      
      public function plLoading(param1:ProgressEvent) : void
      {
         var _loc2_:int = param1.bytesLoaded / param1.bytesTotal * 100;
         this.loader_txt.text = "Loading.." + String(_loc2_) + "%";
         this.loaderref_txt.text = "Loading.." + String(_loc2_) + "%";
         if(_loc2_ == 100)
         {
            gotoAndStop(2);
         }
      }
      
      public function effects() : *
      {
         new Tween(this.light_mc,"alpha",Strong.easeOut,0,1,1,true);
         this.light_mc.mask_mc.gotoAndPlay(2);
      }
      
      public function fnwater(param1:MouseEvent) : *
      {
         this.water_mc.gotoAndPlay(2);
         this.water_btn.mouseEnabled = false;
         this.watr_mc.alpha = 1;
         this.instruction_mc.gotoAndStop(2);
         this.salt_btn.mouseEnabled = true;
      }
      
      public function fnsalt(param1:MouseEvent) : *
      {
         this.salt_mc.gotoAndPlay(2);
         this.sugar_btn.mouseEnabled = true;
         this.salt_btn.mouseEnabled = false;
         this.one_mc.alpha = 1;
         this.instruction_mc.gotoAndStop(3);
      }
      
      public function fnsugar(param1:MouseEvent) : *
      {
         this.sugar_mc.gotoAndPlay(2);
         this.soap_btn.mouseEnabled = true;
         this.sugar_btn.mouseEnabled = false;
         this.instruction_mc.gotoAndStop(4);
         this.two_mc.alpha = 1;
      }
      
      public function fnsoap(param1:MouseEvent) : *
      {
         this.soap_mc.gotoAndPlay(2);
         this.fe_btn.mouseEnabled = true;
         this.soap_btn.mouseEnabled = false;
         this.instruction_mc.gotoAndStop(5);
         this.three_mc.alpha = 1;
      }
      
      public function fnfe(param1:MouseEvent) : *
      {
         this.fe_mc.gotoAndPlay(2);
         this.fe_btn.mouseEnabled = false;
         this.four_mc.alpha = 1;
         this.ag_btn.mouseEnabled = true;
         this.instruction_mc.gotoAndStop(6);
      }
      
      public function fnag(param1:MouseEvent) : *
      {
         this.ag_mc.gotoAndPlay(2);
         this.ag_btn.mouseEnabled = false;
         this.five_mc.alpha = 1;
         this.instruction_mc.gotoAndStop(7);
      }
      
      public function fnclose(param1:MouseEvent) : *
      {
         this.light_mc.x = 1500;
         this.light_mc.alpha = 0;
      }
      
      public function saltlight(param1:MouseEvent) : *
      {
         this.light_mc.gotoAndStop(2);
         this.effects();
         this.light_mc.x = 411.95;
         this.light_mc.alpha = 1;
         this.light_mc.finaloutput_mc.gotoAndStop(1);
         this.light_mc.finaloutput_mc.solution_txt.text = "Salt Solution";
      }
      
      public function sugarlight(param1:MouseEvent) : *
      {
         this.light_mc.gotoAndStop(3);
         this.effects();
         this.light_mc.x = 411.95;
         this.light_mc.alpha = 1;
         this.light_mc.finaloutput_mc.gotoAndStop(1);
         this.light_mc.finaloutput_mc.solution_txt.text = "Sugar Solution";
      }
      
      public function soaplight(param1:MouseEvent) : *
      {
         this.light_mc.gotoAndStop(4);
         this.effects();
         this.light_mc.x = 411.95;
         this.light_mc.alpha = 1;
         this.light_mc.finaloutput_mc.gotoAndStop(2);
         this.light_mc.finaloutput_mc.solution_txt.text = "Soap Solution";
      }
      
      public function felight(param1:MouseEvent) : *
      {
         this.light_mc.gotoAndStop(5);
         this.effects();
         this.light_mc.x = 411.95;
         this.light_mc.alpha = 1;
         this.light_mc.finaloutput_mc.gotoAndStop(3);
         this.light_mc.finaloutput_mc.solution_txt.text = "Fe(OH)3 Colloid";
      }
      
      public function aglight(param1:MouseEvent) : *
      {
         this.light_mc.gotoAndStop(6);
         this.effects();
         this.light_mc.x = 411.95;
         this.light_mc.alpha = 1;
         this.light_mc.finaloutput_mc.gotoAndStop(3);
         this.light_mc.finaloutput_mc.solution_txt.text = "Ag-Colloid";
      }
      
      public function waterlight(param1:MouseEvent) : *
      {
         this.light_mc.gotoAndStop(1);
         this.effects();
         this.light_mc.x = 411.95;
         this.light_mc.alpha = 1;
         this.light_mc.finaloutput_mc.gotoAndStop(1);
         this.light_mc.finaloutput_mc.solution_txt.text = "Water Solution";
      }
      
      function frame1() : *
      {
         stop();
         loaderInfo.addEventListener(ProgressEvent.PROGRESS,this.plLoading);
      }
      
      function frame2() : *
      {
         this.sugar_btn.mouseEnabled = false;
         this.soap_btn.mouseEnabled = false;
         this.fe_btn.mouseEnabled = false;
         this.ag_btn.mouseEnabled = false;
         this.salt_btn.mouseEnabled = false;
         this.light_mc.x = 1500;
         this.one_mc.alpha = 0;
         this.two_mc.alpha = 0;
         this.three_mc.alpha = 0;
         this.four_mc.alpha = 0;
         this.five_mc.alpha = 0;
         this.watr_mc.alpha = 0;
         this.water_btn.addEventListener(MouseEvent.CLICK,this.fnwater);
         this.salt_btn.addEventListener(MouseEvent.CLICK,this.fnsalt);
         this.sugar_btn.addEventListener(MouseEvent.CLICK,this.fnsugar);
         this.soap_btn.addEventListener(MouseEvent.CLICK,this.fnsoap);
         this.fe_btn.addEventListener(MouseEvent.CLICK,this.fnfe);
         this.ag_btn.addEventListener(MouseEvent.CLICK,this.fnag);
         this.light_mc.close_btn.addEventListener(MouseEvent.CLICK,this.fnclose);
         this.salt_mc.solsalt_btn.addEventListener(MouseEvent.CLICK,this.saltlight);
         this.sugar_mc.solsugar_btn.addEventListener(MouseEvent.CLICK,this.sugarlight);
         this.soap_mc.solsoap_btn.addEventListener(MouseEvent.CLICK,this.soaplight);
         this.fe_mc.solfe_btn.addEventListener(MouseEvent.CLICK,this.felight);
         this.ag_mc.solag_btn.addEventListener(MouseEvent.CLICK,this.aglight);
         this.water_mc.solwater_btn.addEventListener(MouseEvent.CLICK,this.waterlight);
      }
   }
}
