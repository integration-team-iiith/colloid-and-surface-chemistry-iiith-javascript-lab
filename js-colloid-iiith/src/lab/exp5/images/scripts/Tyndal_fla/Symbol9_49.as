package Tyndal_fla
{
   import fl.controls.Button;
   import fl.controls.RadioButton;
   import fl.controls.RadioButtonGroup;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.utils.Dictionary;
   
   public dynamic class Symbol9_49 extends MovieClip
   {
       
      
      public var done_btn:SimpleButton;
      
      public var colloidc1:RadioButton;
      
      public var results_mc:MovieClip;
      
      public var ok_btn:Button;
      
      public var colloid:RadioButton;
      
      public var error_txt:TextField;
      
      public var get_mc:MovieClip;
      
      public var noc1:RadioButton;
      
      public var mask_mc:MovieClip;
      
      public var yes:RadioButton;
      
      public var yesc1:RadioButton;
      
      public var trues:RadioButton;
      
      public var finaloutput_mc:MovieClip;
      
      public var no:RadioButton;
      
      public var close_btn:SimpleButton;
      
      public var truesc1:RadioButton;
      
      public var trans_mc:MovieClip;
      
      public var __setPropDict:Dictionary;
      
      public var __lastFrameProp:int = -1;
      
      public var myradioGroup1:RadioButtonGroup;
      
      public var myradioGroup2:RadioButtonGroup;
      
      public var myradioGroup11:RadioButtonGroup;
      
      public var myradioGroup22:RadioButtonGroup;
      
      public function Symbol9_49()
      {
         this.__setPropDict = new Dictionary(true);
         super();
         addFrameScript(0,this.frame1,3,this.frame4);
         this.__setProp_ok_btn_Symbol9_Layer13_0();
         addEventListener(Event.FRAME_CONSTRUCTED,this.__setProp_handler,false,0,true);
      }
      
      public function okk(param1:MouseEvent) : *
      {
         this.results_mc.x = 1500;
         this.finaloutput_mc.x = -14;
         this.done_btn.x = -13.55;
      }
      
      public function select(param1:MouseEvent) : *
      {
         this.get_mc.x = 1500;
      }
      
      public function resul(param1:MouseEvent) : *
      {
         this.results_mc.x = 0;
         if(this.yes.selected == true && this.colloid.selected == true)
         {
            this.results_mc.results_txt.text = "your answer is wrong";
         }
         if(this.no.selected == true && this.trues.selected == true)
         {
            this.results_mc.results_txt.text = "your answer is right";
         }
         if(this.yes.selected == false && this.no.selected == false && this.colloid.selected == false && this.trues.selected == false)
         {
            trace("pls select the type of solution");
            this.results_mc.x = 1500;
            this.error_txt.text = "pleas select the type of solution";
         }
      }
      
      public function closewidow(param1:MouseEvent) : *
      {
         this.finaloutput_mc.x = 1000;
         this.x = 1500;
         this.done_btn.x = 900;
      }
      
      public function okkk(param1:MouseEvent) : *
      {
         this.results_mc.x = 1500;
         this.finaloutput_mc.x = -14;
         this.done_btn.x = -13.55;
      }
      
      public function selects(param1:MouseEvent) : *
      {
         this.get_mc.x = 1500;
      }
      
      public function resuls(param1:MouseEvent) : *
      {
         this.results_mc.x = 0;
         if(this.yesc1.selected == true && this.colloidc1.selected == true)
         {
            this.results_mc.results_txt.text = "your answer is right";
            trace("your answer is right");
         }
         if(this.noc1.selected == true && this.truesc1.selected == true)
         {
            this.results_mc.results_txt.text = "your answer is wrong";
            trace("your answer is wrong");
         }
         if(this.yesc1.selected == false && this.noc1.selected == false && this.colloidc1.selected == false && this.truesc1.selected == false)
         {
            trace("pls select the type of solution");
            this.results_mc.x = 1500;
            this.error_txt.text = "pleas select the type of solution";
         }
      }
      
      public function closewidows(param1:MouseEvent) : *
      {
         this.finaloutput_mc.x = 1000;
         this.x = 1500;
         this.done_btn.x = 900;
      }
      
      function __setProp_ok_btn_Symbol9_Layer13_0() : *
      {
         try
         {
            this.ok_btn["componentInspectorSetting"] = true;
         }
         catch(e:Error)
         {
         }
         this.ok_btn.emphasized = false;
         this.ok_btn.enabled = true;
         this.ok_btn.label = "Check";
         this.ok_btn.labelPlacement = "right";
         this.ok_btn.selected = false;
         this.ok_btn.toggle = false;
         this.ok_btn.visible = true;
         try
         {
            this.ok_btn["componentInspectorSetting"] = false;
            return;
         }
         catch(e:Error)
         {
            return;
         }
      }
      
      function __setProp_yes_Symbol9_Layer2_0(param1:int) : *
      {
         var curFrame:int = param1;
         if(this.yes != null && curFrame >= 1 && curFrame <= 3 && (this.__setPropDict[this.yes] == undefined || !(int(this.__setPropDict[this.yes]) >= 1 && int(this.__setPropDict[this.yes]) <= 3)))
         {
            this.__setPropDict[this.yes] = curFrame;
            try
            {
               this.yes["componentInspectorSetting"] = true;
            }
            catch(e:Error)
            {
            }
            this.yes.enabled = true;
            this.yes.groupName = "RadioButtonGroup";
            this.yes.label = "Yes";
            this.yes.labelPlacement = "right";
            this.yes.selected = false;
            this.yes.value = "";
            this.yes.visible = true;
            try
            {
               this.yes["componentInspectorSetting"] = false;
               return;
            }
            catch(e:Error)
            {
               return;
            }
         }
      }
      
      function __setProp_no_Symbol9_Layer2_0(param1:int) : *
      {
         var curFrame:int = param1;
         if(this.no != null && curFrame >= 1 && curFrame <= 3 && (this.__setPropDict[this.no] == undefined || !(int(this.__setPropDict[this.no]) >= 1 && int(this.__setPropDict[this.no]) <= 3)))
         {
            this.__setPropDict[this.no] = curFrame;
            try
            {
               this.no["componentInspectorSetting"] = true;
            }
            catch(e:Error)
            {
            }
            this.no.enabled = true;
            this.no.groupName = "RadioButtonGroup";
            this.no.label = "No";
            this.no.labelPlacement = "right";
            this.no.selected = false;
            this.no.value = "";
            this.no.visible = true;
            try
            {
               this.no["componentInspectorSetting"] = false;
               return;
            }
            catch(e:Error)
            {
               return;
            }
         }
      }
      
      function __setProp_trues_Symbol9_Layer2_0(param1:int) : *
      {
         var curFrame:int = param1;
         if(this.trues != null && curFrame >= 1 && curFrame <= 3 && (this.__setPropDict[this.trues] == undefined || !(int(this.__setPropDict[this.trues]) >= 1 && int(this.__setPropDict[this.trues]) <= 3)))
         {
            this.__setPropDict[this.trues] = curFrame;
            try
            {
               this.trues["componentInspectorSetting"] = true;
            }
            catch(e:Error)
            {
            }
            this.trues.enabled = true;
            this.trues.groupName = "RadioButtonGroup";
            this.trues.label = "True";
            this.trues.labelPlacement = "right";
            this.trues.selected = false;
            this.trues.value = "";
            this.trues.visible = true;
            try
            {
               this.trues["componentInspectorSetting"] = false;
               return;
            }
            catch(e:Error)
            {
               return;
            }
         }
      }
      
      function __setProp_colloid_Symbol9_Layer2_0(param1:int) : *
      {
         var curFrame:int = param1;
         if(this.colloid != null && curFrame >= 1 && curFrame <= 3 && (this.__setPropDict[this.colloid] == undefined || !(int(this.__setPropDict[this.colloid]) >= 1 && int(this.__setPropDict[this.colloid]) <= 3)))
         {
            this.__setPropDict[this.colloid] = curFrame;
            try
            {
               this.colloid["componentInspectorSetting"] = true;
            }
            catch(e:Error)
            {
            }
            this.colloid.enabled = true;
            this.colloid.groupName = "RadioButtonGroup";
            this.colloid.label = "Colloid";
            this.colloid.labelPlacement = "right";
            this.colloid.selected = false;
            this.colloid.value = "";
            this.colloid.visible = true;
            try
            {
               this.colloid["componentInspectorSetting"] = false;
               return;
            }
            catch(e:Error)
            {
               return;
            }
         }
      }
      
      function __setProp_yesc1_Symbol9_Layer2_3(param1:int) : *
      {
         var curFrame:int = param1;
         if(this.yesc1 != null && curFrame >= 4 && curFrame <= 6 && (this.__setPropDict[this.yesc1] == undefined || !(int(this.__setPropDict[this.yesc1]) >= 4 && int(this.__setPropDict[this.yesc1]) <= 6)))
         {
            this.__setPropDict[this.yesc1] = curFrame;
            try
            {
               this.yesc1["componentInspectorSetting"] = true;
            }
            catch(e:Error)
            {
            }
            this.yesc1.enabled = true;
            this.yesc1.groupName = "RadioButtonGroup";
            this.yesc1.label = "Yes";
            this.yesc1.labelPlacement = "right";
            this.yesc1.selected = false;
            this.yesc1.value = "";
            this.yesc1.visible = true;
            try
            {
               this.yesc1["componentInspectorSetting"] = false;
               return;
            }
            catch(e:Error)
            {
               return;
            }
         }
      }
      
      function __setProp_noc1_Symbol9_Layer2_3(param1:int) : *
      {
         var curFrame:int = param1;
         if(this.noc1 != null && curFrame >= 4 && curFrame <= 6 && (this.__setPropDict[this.noc1] == undefined || !(int(this.__setPropDict[this.noc1]) >= 4 && int(this.__setPropDict[this.noc1]) <= 6)))
         {
            this.__setPropDict[this.noc1] = curFrame;
            try
            {
               this.noc1["componentInspectorSetting"] = true;
            }
            catch(e:Error)
            {
            }
            this.noc1.enabled = true;
            this.noc1.groupName = "RadioButtonGroup";
            this.noc1.label = "No";
            this.noc1.labelPlacement = "right";
            this.noc1.selected = false;
            this.noc1.value = "";
            this.noc1.visible = true;
            try
            {
               this.noc1["componentInspectorSetting"] = false;
               return;
            }
            catch(e:Error)
            {
               return;
            }
         }
      }
      
      function __setProp_truesc1_Symbol9_Layer2_3(param1:int) : *
      {
         var curFrame:int = param1;
         if(this.truesc1 != null && curFrame >= 4 && curFrame <= 6 && (this.__setPropDict[this.truesc1] == undefined || !(int(this.__setPropDict[this.truesc1]) >= 4 && int(this.__setPropDict[this.truesc1]) <= 6)))
         {
            this.__setPropDict[this.truesc1] = curFrame;
            try
            {
               this.truesc1["componentInspectorSetting"] = true;
            }
            catch(e:Error)
            {
            }
            this.truesc1.enabled = true;
            this.truesc1.groupName = "RadioButtonGroup";
            this.truesc1.label = "True";
            this.truesc1.labelPlacement = "right";
            this.truesc1.selected = false;
            this.truesc1.value = "";
            this.truesc1.visible = true;
            try
            {
               this.truesc1["componentInspectorSetting"] = false;
               return;
            }
            catch(e:Error)
            {
               return;
            }
         }
      }
      
      function __setProp_colloidc1_Symbol9_Layer2_3(param1:int) : *
      {
         var curFrame:int = param1;
         if(this.colloidc1 != null && curFrame >= 4 && curFrame <= 6 && (this.__setPropDict[this.colloidc1] == undefined || !(int(this.__setPropDict[this.colloidc1]) >= 4 && int(this.__setPropDict[this.colloidc1]) <= 6)))
         {
            this.__setPropDict[this.colloidc1] = curFrame;
            try
            {
               this.colloidc1["componentInspectorSetting"] = true;
            }
            catch(e:Error)
            {
            }
            this.colloidc1.enabled = true;
            this.colloidc1.groupName = "RadioButtonGroup";
            this.colloidc1.label = "Colloid";
            this.colloidc1.labelPlacement = "right";
            this.colloidc1.selected = false;
            this.colloidc1.value = "";
            this.colloidc1.visible = true;
            try
            {
               this.colloidc1["componentInspectorSetting"] = false;
               return;
            }
            catch(e:Error)
            {
               return;
            }
         }
      }
      
      function __setProp_handler(param1:Object) : *
      {
         var _loc2_:int = currentFrame;
         if(this.__lastFrameProp == _loc2_)
         {
            return;
         }
         this.__lastFrameProp = _loc2_;
         this.__setProp_yes_Symbol9_Layer2_0(_loc2_);
         this.__setProp_no_Symbol9_Layer2_0(_loc2_);
         this.__setProp_trues_Symbol9_Layer2_0(_loc2_);
         this.__setProp_colloid_Symbol9_Layer2_0(_loc2_);
         this.__setProp_yesc1_Symbol9_Layer2_3(_loc2_);
         this.__setProp_noc1_Symbol9_Layer2_3(_loc2_);
         this.__setProp_truesc1_Symbol9_Layer2_3(_loc2_);
         this.__setProp_colloidc1_Symbol9_Layer2_3(_loc2_);
      }
      
      function frame1() : *
      {
         this.myradioGroup1 = new RadioButtonGroup("Group 1");
         this.myradioGroup2 = new RadioButtonGroup("Group 2");
         stop();
         this.yes.group = this.myradioGroup1;
         this.no.group = this.myradioGroup1;
         this.trues.group = this.myradioGroup2;
         this.colloid.group = this.myradioGroup2;
         this.results_mc.x = 1500;
         this.finaloutput_mc.x = 1000;
         this.done_btn.x = 900;
         this.get_mc.x = 112.85;
         this.results_mc.ok_btn.addEventListener(MouseEvent.CLICK,this.okk);
         this.yes.addEventListener(MouseEvent.CLICK,this.select);
         this.no.addEventListener(MouseEvent.CLICK,this.select);
         this.ok_btn.addEventListener(MouseEvent.CLICK,this.resul);
         this.done_btn.addEventListener(MouseEvent.CLICK,this.closewidow);
      }
      
      function frame4() : *
      {
         this.myradioGroup11 = new RadioButtonGroup("Group 11");
         this.myradioGroup22 = new RadioButtonGroup("Group 22");
         stop();
         this.yesc1.group = this.myradioGroup11;
         this.noc1.group = this.myradioGroup11;
         this.truesc1.group = this.myradioGroup22;
         this.colloidc1.group = this.myradioGroup22;
         this.results_mc.x = 1500;
         this.finaloutput_mc.x = 1000;
         this.done_btn.x = 900;
         this.get_mc.x = 112.85;
         this.results_mc.ok_btn.addEventListener(MouseEvent.CLICK,this.okkk);
         this.yesc1.addEventListener(MouseEvent.CLICK,this.selects);
         this.noc1.addEventListener(MouseEvent.CLICK,this.selects);
         this.ok_btn.addEventListener(MouseEvent.CLICK,this.resuls);
         this.done_btn.addEventListener(MouseEvent.CLICK,this.closewidows);
      }
   }
}
