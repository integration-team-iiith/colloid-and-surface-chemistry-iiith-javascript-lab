package IR_Powder_exp6_fla
{
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public dynamic class create_solvent_15 extends MovieClip
   {
       
      
      public var ep:MovieClip;
      
      public var fp:MovieClip;
      
      public var es:MovieClip;
      
      public var fs:MovieClip;
      
      public var powder:MovieClip;
      
      public var fsplate:MovieClip;
      
      public var esplate:MovieClip;
      
      public var drops:MovieClip;
      
      public var mordar:MovieClip;
      
      public var plate:MovieClip;
      
      public var solvent:MovieClip;
      
      public var sequence:Number;
      
      public function create_solvent_15()
      {
         super();
         addFrameScript(0,frame1);
      }
      
      public function fillspec(param1:Event) : void
      {
         if(fs.currentFrame == 40)
         {
            fs.visible = false;
            fs.gotoAndStop(1);
            es.visible = true;
            es.gotoAndPlay(1);
            sequence = 2;
         }
      }
      
      public function empspec(param1:Event) : void
      {
         if(es.currentFrame == 40)
         {
            es.visible = false;
            es.gotoAndStop(1);
            sequence = 3;
         }
      }
      
      public function fillpip(param1:Event) : void
      {
         if(fp.currentFrame == 30)
         {
            fp.visible = false;
            fp.gotoAndStop(1);
            ep.visible = true;
            drops.visilble = true;
            drops.gotoAndPlay(1);
            ep.gotoAndPlay(1);
            sequence = 4;
         }
      }
      
      public function emppip(param1:Event) : void
      {
         if(ep.currentFrame == 20)
         {
            drops.visilble = false;
            drops.gotoAndStop(1);
            ep.visible = false;
            ep.gotoAndStop(1);
            sequence = 5;
         }
      }
      
      public function mix(param1:Event) : void
      {
         if(mordar.currentFrame == 40)
         {
            mordar.gotoAndStop(41);
         }
         else if(mordar.currentFrame == 41)
         {
            mordar.gotoAndStop(1);
         }
      }
      
      public function fillspecplate(param1:Event) : void
      {
         if(fsplate.currentFrame == 40)
         {
            fsplate.visible = false;
            fsplate.gotoAndStop(1);
            esplate.visible = true;
            esplate.gotoAndPlay(1);
         }
      }
      
      public function empspecplate(param1:Event) : void
      {
         if(esplate.currentFrame == 40)
         {
            esplate.visible = false;
            esplate.gotoAndStop(1);
            plate.gotoAndPlay(2);
         }
      }
      
      public function platestop(param1:Event) : void
      {
         if(plate.currentFrame == 20)
         {
            plate.gotoAndStop(20);
         }
      }
      
      function frame1() : *
      {
         drops.visilble = false;
         drops.gotoAndStop(1);
         powder.stop();
         powder.visible = true;
         fs.gotoAndStop(1);
         fs.visible = false;
         solvent.stop();
         solvent.visible = true;
         fp.gotoAndStop(1);
         fp.visible = false;
         ep.gotoAndStop(1);
         ep.visible = false;
         es.gotoAndStop(1);
         es.visible = false;
         esplate.gotoAndStop(1);
         esplate.visible = false;
         fsplate.gotoAndStop(1);
         fsplate.visible = false;
         mordar.gotoAndStop(1);
         mordar.visible = true;
         plate.gotoAndStop(1);
         plate.visible = false;
         sequence = 0;
         if(sequence == 1)
         {
            fs.visible = true;
            fs.gotoAndPlay(1);
         }
         fs.addEventListener(Event.ENTER_FRAME,fillspec);
         es.addEventListener(Event.ENTER_FRAME,empspec);
         fp.addEventListener(Event.ENTER_FRAME,fillpip);
         ep.addEventListener(Event.ENTER_FRAME,emppip);
         mordar.addEventListener(Event.ENTER_FRAME,mix);
         fsplate.addEventListener(Event.ENTER_FRAME,fillspecplate);
         esplate.addEventListener(Event.ENTER_FRAME,empspecplate);
         plate.addEventListener(Event.ENTER_FRAME,platestop);
      }
   }
}
