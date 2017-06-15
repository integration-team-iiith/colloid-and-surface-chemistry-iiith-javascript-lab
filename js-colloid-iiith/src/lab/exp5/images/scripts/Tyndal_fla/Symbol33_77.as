package Tyndal_fla
{
   import fl.controls.Button;
   import flash.display.MovieClip;
   import flash.text.TextField;
   
   public dynamic class Symbol33_77 extends MovieClip
   {
       
      
      public var ok_btn:Button;
      
      public var results_txt:TextField;
      
      public function Symbol33_77()
      {
         super();
         this.__setProp_ok_btn_Symbol33_Layer2_0();
      }
      
      function __setProp_ok_btn_Symbol33_Layer2_0() : *
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
         this.ok_btn.label = "OK";
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
   }
}
