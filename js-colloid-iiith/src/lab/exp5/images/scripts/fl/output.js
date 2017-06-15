(function(){var Program={};  Program["fl.managers.FocusManager"]=function(module, exports){  
    var FocusManager = function(param1) {
          this.$init();
             null.call(this);
             this.focusableObjects = {};
             if(param1 != null)
             {
                this._form = param1;
                this.activate();
             }
          };
    
    
    
    
    
    FocusManager.prototype.get_defaultButton = function() {
             return this._defaultButton;
          };
    FocusManager.prototype.get_defaultButtonEnabled = function() {
             return this._defaultButtonEnabled;
          };
    FocusManager.prototype.get_nextTabIndex = function() {
             return 0;
          };
    FocusManager.prototype.get_showFocusIndicator = function() {
             return this._showFocusIndicator;
          };
    FocusManager.prototype.get_form = function() {
             return this._form;
          };
    FocusManager.prototype.set_defaultButton = function(param1) {
             var _loc2_ = !!param1?Button(param1):null;
             if(_loc2_ != this._defaultButton)
             {
                if(this._defaultButton)
                {
                   this._defaultButton.emphasized = false;
                }
                if(this.defButton)
                {
                   this.defButton.emphasized = false;
                }
                this._defaultButton = _loc2_;
                this.defButton = _loc2_;
                if(_loc2_)
                {
                   _loc2_.emphasized = true;
                }
             }
          };
    FocusManager.prototype.set_defaultButtonEnabled = function(param1) {
             this._defaultButtonEnabled = param1;
          };
    FocusManager.prototype.set_showFocusIndicator = function(param1) {
             this._showFocusIndicator = param1;
          };
    FocusManager.prototype.set_form = function(param1) {
             this._form = param1;
          };
    FocusManager.prototype.$init = function() {
          this._form = null;
          this.focusableObjects = null;
          this.focusableCandidates = null;
          this.lastFocus = null;
          this.defButton = null;
          this._defaultButton = null;};
    FocusManager.prototype._form = null;
    FocusManager.prototype.focusableObjects = null;
    FocusManager.prototype.focusableCandidates = null;
    FocusManager.prototype.activated = false;
    FocusManager.prototype.calculateCandidates = true;
    FocusManager.prototype.lastFocus = null;
    FocusManager.prototype._showFocusIndicator = true;
    FocusManager.prototype.lastAction = null;
    FocusManager.prototype.defButton = null;
    FocusManager.prototype._defaultButton = null;
    FocusManager.prototype._defaultButtonEnabled = true;
    FocusManager.prototype.addedHandler = function(param1) {
             var _loc2_ = DisplayObject(param1.target);
             if(_loc2_.stage)
             {
                this.addFocusables(DisplayObject(param1.target));
             }
          };
    FocusManager.prototype.removedHandler = function(param1) {
             var _loc2_ = 0;
             var _loc4_ = null;
             var _loc3_ = DisplayObject(param1.target);
             if(_loc3_ is IFocusManagerComponent && this.focusableObjects[_loc3_] == true)
             {
                if(_loc3_ == this.lastFocus)
                {
                   IFocusManagerComponent(this.lastFocus).drawFocus(false);
                   this.lastFocus = null;
                }
                _loc3_.removeEventListener(Event.TAB_ENABLED_CHANGE,this.tabEnabledChangeHandler,false);
                delete this.focusableObjects[_loc3_];
                this.calculateCandidates = true;
             }
             else if(_loc3_ is InteractiveObject && this.focusableObjects[_loc3_] == true)
             {
                _loc4_ = _loc3_ as InteractiveObject;
                if(_loc4_)
                {
                   if(_loc4_ == this.lastFocus)
                   {
                      this.lastFocus = null;
                   }
                   delete this.focusableObjects[_loc4_];
                   this.calculateCandidates = true;
                }
                _loc3_.addEventListener(Event.TAB_ENABLED_CHANGE,this.tabEnabledChangeHandler,false,0,true);
             }
             this.removeFocusables(_loc3_);
          };
    FocusManager.prototype.addFocusables = function(param1, param2) {
          param2 = AS3JS.Utils.getDefaultValue(param2, false);
             var focusable = null;
             var io = null;
             var doc = null;
             var i = 0;
             var child = null;
             var o = param1;
             var skipTopLevel = param2;
             if(!skipTopLevel)
             {
                if(o is IFocusManagerComponent)
                {
                   focusable = IFocusManagerComponent(o);
                   if(focusable.focusEnabled)
                   {
                      if(focusable.tabEnabled && this.isTabVisible(o))
                      {
                         this.focusableObjects[o] = true;
                         this.calculateCandidates = true;
                      }
                      o.addEventListener(Event.TAB_ENABLED_CHANGE,this.tabEnabledChangeHandler,false,0,true);
                      o.addEventListener(Event.TAB_INDEX_CHANGE,this.tabIndexChangeHandler,false,0,true);
                   }
                }
                else if(o is InteractiveObject)
                {
                   io = o as InteractiveObject;
                   if(io && io.tabEnabled && this.findFocusManagerComponent(io) == io)
                   {
                      this.focusableObjects[io] = true;
                      this.calculateCandidates = true;
                   }
                   io.addEventListener(Event.TAB_ENABLED_CHANGE,this.tabEnabledChangeHandler,false,0,true);
                   io.addEventListener(Event.TAB_INDEX_CHANGE,this.tabIndexChangeHandler,false,0,true);
                }
             }
             if(o is DisplayObjectContainer)
             {
                doc = DisplayObjectContainer(o);
                o.addEventListener(Event.TAB_CHILDREN_CHANGE,this.tabChildrenChangeHandler,false,0,true);
                if(doc is Stage || doc.parent is Stage || doc.tabChildren)
                {
                   i = 0;
                   while(i < doc.numChildren)
                   {
                      try
                      {
                         child = doc.getChildAt(i);
                         if(child != null)
                         {
                            this.addFocusables(doc.getChildAt(i));
                         }
                      }
                      catch(error:SecurityError)
                      {
                      }
                      i++;
                   }
                }
             }
          };
    FocusManager.prototype.removeFocusables = function(param1) {
             var _loc2_ = null;
             var _loc3_ = null;
             if(param1 is DisplayObjectContainer)
             {
                param1.removeEventListener(Event.TAB_CHILDREN_CHANGE,this.tabChildrenChangeHandler,false);
                param1.removeEventListener(Event.TAB_INDEX_CHANGE,this.tabIndexChangeHandler,false);
                for(_loc2_ in this.focusableObjects)
                {
                   _loc3_ = DisplayObject(_loc2_);
                   if(DisplayObjectContainer(param1).contains(_loc3_))
                   {
                      if(_loc3_ == this.lastFocus)
                      {
                         this.lastFocus = null;
                      }
                      _loc3_.removeEventListener(Event.TAB_ENABLED_CHANGE,this.tabEnabledChangeHandler,false);
                      delete this.focusableObjects[_loc2_];
                      this.calculateCandidates = true;
                   }
                }
             }
          };
    FocusManager.prototype.isTabVisible = function(param1) {
             var _loc2_ = param1.parent;
             while(_loc2_ && !(_loc2_ is Stage) && !(_loc2_.parent && _loc2_.parent is Stage))
             {
                if(!_loc2_.tabChildren)
                {
                   return false;
                }
                _loc2_ = _loc2_.parent;
             }
             return true;
          };
    FocusManager.prototype.isValidFocusCandidate = function(param1, param2) {
             var _loc3_ = null;
             if(!this.isEnabledAndVisible(param1))
             {
                return false;
             }
             if(param1 is IFocusManagerGroup)
             {
                _loc3_ = IFocusManagerGroup(param1);
                if(param2 == _loc3_.groupName)
                {
                   return false;
                }
             }
             return true;
          };
    FocusManager.prototype.isEnabledAndVisible = function(param1) {
             var _loc3_ = null;
             var _loc4_ = null;
             var _loc2_ = DisplayObject(this.get_form()).parent;
             while(param1 != _loc2_)
             {
                if(param1 is UIComponent)
                {
                   if(!UIComponent(param1).enabled)
                   {
                      return false;
                   }
                }
                else if(param1 is TextField)
                {
                   _loc3_ = TextField(param1);
                   if(_loc3_.type == TextFieldType.DYNAMIC || !_loc3_.selectable)
                   {
                      return false;
                   }
                }
                else if(param1 is SimpleButton)
                {
                   _loc4_ = SimpleButton(param1);
                   if(!_loc4_.enabled)
                   {
                      return false;
                   }
                }
                if(!param1.visible)
                {
                   return false;
                }
                param1 = param1.parent;
             }
             return true;
          };
    FocusManager.prototype.tabEnabledChangeHandler = function(param1) {
             this.calculateCandidates = true;
             var _loc2_ = InteractiveObject(param1.target);
             var _loc3_ = this.focusableObjects[_loc2_] == true;
             if(_loc2_.tabEnabled)
             {
                if(!_loc3_ && this.isTabVisible(_loc2_))
                {
                   if(!(_loc2_ is IFocusManagerComponent))
                   {
                      _loc2_.focusRect = false;
                   }
                   this.focusableObjects[_loc2_] = true;
                }
             }
             else if(_loc3_)
             {
                delete this.focusableObjects[_loc2_];
             }
          };
    FocusManager.prototype.tabIndexChangeHandler = function(param1) {
             this.calculateCandidates = true;
          };
    FocusManager.prototype.tabChildrenChangeHandler = function(param1) {
             if(param1.target != param1.currentTarget)
             {
                return;
             }
             this.calculateCandidates = true;
             var _loc2_ = DisplayObjectContainer(param1.target);
             if(_loc2_.tabChildren)
             {
                this.addFocusables(_loc2_,true);
             }
             else
             {
                this.removeFocusables(_loc2_);
             }
          };
    FocusManager.prototype.activate = function() {
             if(this.activated)
             {
                return;
             }
             this.addFocusables(this.get_form());
             this.get_form().addEventListener(Event.ADDED,this.addedHandler,false,0,true);
             this.get_form().addEventListener(Event.REMOVED,this.removedHandler,false,0,true);
             this.get_form().stage.addEventListener(FocusEvent.MOUSE_FOCUS_CHANGE,this.mouseFocusChangeHandler,false,0,true);
             this.get_form().stage.addEventListener(FocusEvent.KEY_FOCUS_CHANGE,this.keyFocusChangeHandler,false,0,true);
             this.get_form().addEventListener(FocusEvent.FOCUS_IN,this.focusInHandler,true,0,true);
             this.get_form().addEventListener(FocusEvent.FOCUS_OUT,this.focusOutHandler,true,0,true);
             this.get_form().stage.addEventListener(Event.ACTIVATE,this.activateHandler,false,0,true);
             this.get_form().stage.addEventListener(Event.DEACTIVATE,this.deactivateHandler,false,0,true);
             this.get_form().addEventListener(MouseEvent.MOUSE_DOWN,this.mouseDownHandler,false,0,true);
             this.get_form().addEventListener(KeyboardEvent.KEY_DOWN,this.keyDownHandler,true,0,true);
             this.activated = true;
             if(this.lastFocus)
             {
                this.setFocus(this.lastFocus);
             }
          };
    FocusManager.prototype.deactivate = function() {
             if(!this.activated)
             {
                return;
             }
             this.focusableObjects = {};
             this.focusableCandidates = null;
             this.lastFocus = null;
             this.defButton = null;
             this.get_form().removeEventListener(Event.ADDED,this.addedHandler,false);
             this.get_form().removeEventListener(Event.REMOVED,this.removedHandler,false);
             this.get_form().stage.removeEventListener(FocusEvent.MOUSE_FOCUS_CHANGE,this.mouseFocusChangeHandler,false);
             this.get_form().stage.removeEventListener(FocusEvent.KEY_FOCUS_CHANGE,this.keyFocusChangeHandler,false);
             this.get_form().removeEventListener(FocusEvent.FOCUS_IN,this.focusInHandler,true);
             this.get_form().removeEventListener(FocusEvent.FOCUS_OUT,this.focusOutHandler,true);
             this.get_form().stage.removeEventListener(Event.ACTIVATE,this.activateHandler,false);
             this.get_form().stage.removeEventListener(Event.DEACTIVATE,this.deactivateHandler,false);
             this.get_form().removeEventListener(MouseEvent.MOUSE_DOWN,this.mouseDownHandler,false);
             this.get_form().removeEventListener(KeyboardEvent.KEY_DOWN,this.keyDownHandler,true);
             this.activated = false;
          };
    FocusManager.prototype.focusInHandler = function(param1) {
             var _loc3_ = null;
             if(!this.activated)
             {
                return;
             }
             var _loc2_ = InteractiveObject(param1.target);
             if(this.get_form().contains(_loc2_))
             {
                this.lastFocus = this.findFocusManagerComponent(InteractiveObject(_loc2_));
                if(this.lastFocus is Button)
                {
                   _loc3_ = Button(this.lastFocus);
                   if(this.defButton)
                   {
                      this.defButton.emphasized = false;
                      this.defButton = _loc3_;
                      _loc3_.emphasized = true;
                   }
                }
                else if(this.defButton && this.defButton != this._defaultButton)
                {
                   this.defButton.emphasized = false;
                   this.defButton = this._defaultButton;
                   this._defaultButton.emphasized = true;
                }
             }
          };
    FocusManager.prototype.focusOutHandler = function(param1) {
             if(!this.activated)
             {
                return;
             }
             var _loc2_ = param1.target as InteractiveObject;
          };
    FocusManager.prototype.activateHandler = function(param1) {
             if(!this.activated)
             {
                return;
             }
             var _loc2_ = InteractiveObject(param1.target);
             if(this.lastFocus)
             {
                if(this.lastFocus is IFocusManagerComponent)
                {
                   IFocusManagerComponent(this.lastFocus).this.setFocus();
                }
                else
                {
                   this.get_form().stage.focus = this.lastFocus;
                }
             }
             this.lastAction = "ACTIVATE";
          };
    FocusManager.prototype.deactivateHandler = function(param1) {
             if(!this.activated)
             {
                return;
             }
             var _loc2_ = InteractiveObject(param1.target);
          };
    FocusManager.prototype.mouseFocusChangeHandler = function(param1) {
             if(!this.activated)
             {
                return;
             }
             if(param1.relatedObject is TextField)
             {
                return;
             }
             param1.preventDefault();
          };
    FocusManager.prototype.keyFocusChangeHandler = function(param1) {
             if(!this.activated)
             {
                return;
             }
             this.set_showFocusIndicator(true);
             if((param1.keyCode == Keyboard.TAB || param1.keyCode == 0) && !param1.isDefaultPrevented())
             {
                this.setFocusToNextObject(param1);
                param1.preventDefault();
             }
          };
    FocusManager.prototype.keyDownHandler = function(param1) {
             if(!this.activated)
             {
                return;
             }
             if(param1.keyCode == Keyboard.TAB)
             {
                this.lastAction = "KEY";
                if(this.calculateCandidates)
                {
                   this.sortFocusableObjects();
                   this.calculateCandidates = false;
                }
             }
             if(this.get_defaultButtonEnabled() && param1.keyCode == Keyboard.ENTER && this.get_defaultButton() && this.defButton.enabled)
             {
                this.sendDefaultButtonEvent();
             }
          };
    FocusManager.prototype.mouseDownHandler = function(param1) {
             if(!this.activated)
             {
                return;
             }
             if(param1.isDefaultPrevented())
             {
                return;
             }
             var _loc2_ = this.getTopLevelFocusTarget(InteractiveObject(param1.target));
             if(!_loc2_)
             {
                return;
             }
             this.set_showFocusIndicator(false);
             if((_loc2_ != this.lastFocus || this.lastAction == "ACTIVATE") && !(_loc2_ is TextField))
             {
                this.setFocus(_loc2_);
             }
             this.lastAction = "MOUSEDOWN";
          };
    FocusManager.prototype.sendDefaultButtonEvent = function() {
             this.defButton.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
          };
    FocusManager.prototype.setFocusToNextObject = function(param1) {
             if(!this.hasFocusableObjects())
             {
                return;
             }
             var _loc2_ = this.getNextFocusManagerComponent(param1.shiftKey);
             if(_loc2_)
             {
                this.setFocus(_loc2_);
             }
          };
    FocusManager.prototype.hasFocusableObjects = function() {
             var _loc1_ = null;
             for(_loc1_ in this.focusableObjects)
             {
                return true;
             }
             return false;
          };
    FocusManager.prototype.getNextFocusManagerComponent = function(param1) {
          param1 = AS3JS.Utils.getDefaultValue(param1, false);
             var _loc8_ = null;
             if(!this.hasFocusableObjects())
             {
                return null;
             }
             if(this.calculateCandidates)
             {
                this.sortFocusableObjects();
                this.calculateCandidates = false;
             }
             var _loc2_ = this.get_form().stage.focus;
             _loc2_ = DisplayObject(this.findFocusManagerComponent(InteractiveObject(_loc2_)));
             var _loc3_ = "";
             if(_loc2_ is IFocusManagerGroup)
             {
                _loc8_ = IFocusManagerGroup(_loc2_);
                _loc3_ = _loc8_.groupName;
             }
             var _loc4_ = this.getIndexOfFocusedObject(_loc2_);
             var _loc5_ = false;
             var _loc6_ = _loc4_;
             if(_loc4_ == -1)
             {
                if(param1)
                {
                   _loc4_ = this.focusableCandidates.length;
                }
                _loc5_ = true;
             }
             var _loc7_ = this.getIndexOfNextObject(_loc4_,param1,_loc5_,_loc3_);
             return this.findFocusManagerComponent(this.focusableCandidates[_loc7_]);
          };
    FocusManager.prototype.getIndexOfFocusedObject = function(param1) {
             var _loc2_ = this.focusableCandidates.length;
             var _loc3_ = 0;
             _loc3_ = 0;
             while(_loc3_ < _loc2_)
             {
                if(this.focusableCandidates[_loc3_] == param1)
                {
                   return _loc3_;
                }
                _loc3_++;
             }
             return -1;
          };
    FocusManager.prototype.getIndexOfNextObject = function(param1, param2, param3, param4) {
             var _loc7_ = null;
             var _loc8_ = null;
             var _loc9_ = 0;
             var _loc10_ = null;
             var _loc11_ = null;
             var _loc5_ = this.focusableCandidates.length;
             var _loc6_ = param1;
             while(true)
             {
                if(param2)
                {
                   param1--;
                }
                else
                {
                   param1++;
                }
                if(param3)
                {
                   if(param2 && param1 < 0)
                   {
                      break;
                   }
                   if(!param2 && param1 == _loc5_)
                   {
                      break;
                   }
                }
                else
                {
                   param1 = (param1 + _loc5_) % _loc5_;
                   if(_loc6_ == param1)
                   {
                      break;
                   }
                }
                if(this.isValidFocusCandidate(this.focusableCandidates[param1],param4))
                {
                   _loc7_ = DisplayObject(this.findFocusManagerComponent(this.focusableCandidates[param1]));
                   if(_loc7_ is IFocusManagerGroup)
                   {
                      _loc8_ = IFocusManagerGroup(_loc7_);
                      _loc9_ = 0;
                      while(_loc9_ < this.focusableCandidates.length)
                      {
                         _loc10_ = this.focusableCandidates[_loc9_];
                         if(_loc10_ is IFocusManagerGroup)
                         {
                            _loc11_ = IFocusManagerGroup(_loc10_);
                            if(_loc11_.groupName == _loc8_.groupName && _loc11_.selected)
                            {
                               param1 = _loc9_;
                               break;
                            }
                         }
                         _loc9_++;
                      }
                   }
                   return param1;
                }
             }
             return param1;
          };
    FocusManager.prototype.sortFocusableObjects = function() {
             var _loc1_ = null;
             var _loc2_ = null;
             this.focusableCandidates = [];
             for(_loc1_ in this.focusableObjects)
             {
                _loc2_ = InteractiveObject(_loc1_);
                if(_loc2_.tabIndex && !isNaN(Number(_loc2_.tabIndex)) && _loc2_.tabIndex > 0)
                {
                   this.sortFocusableObjectsTabIndex();
                   return;
                }
                this.focusableCandidates.push(_loc2_);
             }
             this.focusableCandidates.sort(this.sortByDepth);
          };
    FocusManager.prototype.sortFocusableObjectsTabIndex = function() {
             var _loc1_ = null;
             var _loc2_ = null;
             this.focusableCandidates = [];
             for(_loc1_ in this.focusableObjects)
             {
                _loc2_ = InteractiveObject(_loc1_);
                if(_loc2_.tabIndex && !isNaN(Number(_loc2_.tabIndex)))
                {
                   this.focusableCandidates.push(_loc2_);
                }
             }
             this.focusableCandidates.sort(this.sortByTabIndex);
          };
    FocusManager.prototype.sortByDepth = function(param1, param2) {
             var _loc5_ = 0;
             var _loc6_ = null;
             var _loc7_ = null;
             var _loc3_ = "";
             var _loc4_ = "";
             var _loc8_ = "0000";
             var _loc9_ = DisplayObject(param1);
             var _loc10_ = DisplayObject(param2);
             while(_loc9_ != DisplayObject(this.get_form()) && _loc9_.parent)
             {
                _loc5_ = this.getChildIndex(_loc9_.parent,_loc9_);
                _loc6_ = _loc5_.toString(16);
                if(_loc6_.length < 4)
                {
                   _loc7_ = _loc8_.substring(0,4 - _loc6_.length) + _loc6_;
                }
                _loc3_ = _loc7_ + _loc3_;
                _loc9_ = _loc9_.parent;
             }
             while(_loc10_ != DisplayObject(this.get_form()) && _loc10_.parent)
             {
                _loc5_ = this.getChildIndex(_loc10_.parent,_loc10_);
                _loc6_ = _loc5_.toString(16);
                if(_loc6_.length < 4)
                {
                   _loc7_ = _loc8_.substring(0,4 - _loc6_.length) + _loc6_;
                }
                _loc4_ = _loc7_ + _loc4_;
                _loc10_ = _loc10_.parent;
             }
             return _loc3_ > _loc4_?Number(1):_loc3_ < _loc4_?Number(-1):Number(0);
          };
    FocusManager.prototype.getChildIndex = function(param1, param2) {
             return param1.getChildIndex(param2);
          };
    FocusManager.prototype.sortByTabIndex = function(param1, param2) {
             return param1.tabIndex > param2.tabIndex?1:param1.tabIndex < param2.tabIndex?-1:int(this.sortByDepth(param1,param2));
          };
    FocusManager.prototype.getFocus = function() {
             var _loc1_ = this.get_form().stage.focus;
             return this.findFocusManagerComponent(_loc1_);
          };
    FocusManager.prototype.setFocus = function(param1) {
             if(param1 is IFocusManagerComponent)
             {
                IFocusManagerComponent(param1).this.setFocus();
             }
             else
             {
                this.get_form().stage.focus = param1;
             }
          };
    FocusManager.prototype.showFocus = function() {
          };
    FocusManager.prototype.hideFocus = function() {
          };
    FocusManager.prototype.findFocusManagerComponent = function(param1) {
             var _loc2_ = param1;
             while(param1)
             {
                if(param1 is IFocusManagerComponent && IFocusManagerComponent(param1).focusEnabled)
                {
                   return param1;
                }
                param1 = param1.parent;
             }
             return _loc2_;
          };
    FocusManager.prototype.getTopLevelFocusTarget = function(param1) {
             while(true)
             {
                if(param1 != InteractiveObject(this.get_form()))
                {
                   if(param1 is IFocusManagerComponent && IFocusManagerComponent(param1).focusEnabled && IFocusManagerComponent(param1).mouseFocusEnabled && UIComponent(param1).enabled)
                   {
                      break;
                   }
                   param1 = param1.parent;
                   if(param1 != null)
                   {
                      continue;
                   }
                }
                return null;
             }
             return param1;
          }
    
    
    module.exports = FocusManager;
    };Program["fl.managers.IFocusManager"]=function(module, exports){  
    var IFocusManager = function IFocusManager() {};
    
    
    
    
    IFocusManager.prototype.get_defaultButton = function() {};
    IFocusManager.prototype.get_defaultButtonEnabled = function() {};
    IFocusManager.prototype.get_nextTabIndex = function() {};
    IFocusManager.prototype.get_showFocusIndicator = function() {};
    IFocusManager.prototype.set_defaultButton = function(param1) {};
    IFocusManager.prototype.set_defaultButtonEnabled = function(param1) {};
    IFocusManager.prototype.set_showFocusIndicator = function(param1) {};
    IFocusManager.prototype.$init = function() {};
    IFocusManager.prototype.getFocus = function() {};
    IFocusManager.prototype.setFocus = function(param1) {};
    IFocusManager.prototype.showFocus = function() {};
    IFocusManager.prototype.hideFocus = function() {};
    IFocusManager.prototype.activate = function() {};
    IFocusManager.prototype.deactivate = function() {};
    IFocusManager.prototype.findFocusManagerComponent = function(param1) {};
    IFocusManager.prototype.getNextFocusManagerComponent = function(param1) {
          param1 = AS3JS.Utils.getDefaultValue(param1, false);}
    
    
    module.exports = IFocusManager;
    };Program["fl.managers.IFocusManagerComponent"]=function(module, exports){  
    var IFocusManagerComponent = function IFocusManagerComponent() {};
    
    
    
    
    IFocusManagerComponent.prototype.get_focusEnabled = function() {};
    IFocusManagerComponent.prototype.get_mouseFocusEnabled = function() {};
    IFocusManagerComponent.prototype.get_tabEnabled = function() {};
    IFocusManagerComponent.prototype.get_tabIndex = function() {};
    IFocusManagerComponent.prototype.set_focusEnabled = function(param1) {};
    IFocusManagerComponent.prototype.$init = function() {};
    IFocusManagerComponent.prototype.setFocus = function() {};
    IFocusManagerComponent.prototype.drawFocus = function(param1) {}
    
    
    module.exports = IFocusManagerComponent;
    };Program["fl.managers.IFocusManagerGroup"]=function(module, exports){  
    var IFocusManagerGroup = function IFocusManagerGroup() {};
    
    
    
    
    IFocusManagerGroup.prototype.get_groupName = function() {};
    IFocusManagerGroup.prototype.get_selected = function() {};
    IFocusManagerGroup.prototype.set_groupName = function(param1) {};
    IFocusManagerGroup.prototype.set_selected = function(param1) {};
    IFocusManagerGroup.prototype.$init = function() {}
    
    
    module.exports = IFocusManagerGroup;
    };Program["fl.managers.StyleManager"]=function(module, exports){  
    var StyleManager = function() {
          this.$init();
             null.call(this);
             this.styleToClassesHash = {};
             this.classToInstancesDict = {};
             this.classToStylesDict = {};
             this.classToDefaultStylesDict = {};
             this.globalStyles = UIComponent.getStyleDefinition();
          };
    
    
    
    
    StyleManager._instance = null;
    StyleManager.getInstance = function() {
             if(StyleManager._instance == null)
             {
                StyleManager._instance = new StyleManager();
             }
             return StyleManager._instance;
          };
    StyleManager.registerInstance = function(param1) {
             var target = null;
             var defaultStyles = null;
             var styleToClasses = null;
             var n = null;
             var instance = param1;
             var inst = StyleManager.getInstance();
             var classDef = StyleManager.getClassDef(instance);
             if(classDef == null)
             {
                return;
             }
             if(inst.classToInstancesDict[classDef] == null)
             {
                inst.classToInstancesDict[classDef] = {};
                target = classDef;
                while(defaultStyles == null)
                {
                   if(target["getStyleDefinition"] != null)
                   {
                      defaultStyles = target["getStyleDefinition"]();
                      break;
                   }
                   try
                   {
                      target = instance.loaderInfo.applicationDomain.getDefinition(getQualifiedSuperclassName(target)) as Class;
                   }
                   catch(err:Error)
                   {
                      try
                      {
                         target = getDefinitionByName(getQualifiedSuperclassName(target)) as Class;
                      }
                      catch(e:Error)
                      {
                         defaultStyles = UIComponent.getStyleDefinition();
                         break;
                      }
                      continue;
                   }
                }
                styleToClasses = inst.styleToClassesHash;
                for(n in defaultStyles)
                {
                   if(styleToClasses[n] == null)
                   {
                      styleToClasses[n] = {};
                   }
                   styleToClasses[n][classDef] = true;
                }
                inst.classToDefaultStylesDict[classDef] = defaultStyles;
                if(inst.classToStylesDict[classDef] == null)
                {
                   inst.classToStylesDict[classDef] = {};
                }
             }
             inst.classToInstancesDict[classDef][instance] = true;
             StyleManager.setSharedStyles(instance);
          };
    StyleManager.setSharedStyles = function(param1) {
             var _loc5_ = null;
             var _loc2_ = StyleManager.getInstance();
             var _loc3_ = StyleManager.getClassDef(param1);
             var _loc4_ = _loc2_.classToDefaultStylesDict[_loc3_];
             for(_loc5_ in _loc4_)
             {
                param1.setSharedStyle(_loc5_,StyleManager.getSharedStyle(param1,_loc5_));
             }
          };
    StyleManager.getSharedStyle = function(param1, param2) {
             var _loc3_ = StyleManager.getClassDef(param1);
             var _loc4_ = StyleManager.getInstance();
             var _loc5_ = _loc4_.classToStylesDict[_loc3_][param2];
             if(_loc5_ != null)
             {
                return _loc5_;
             }
             _loc5_ = _loc4_.globalStyles[param2];
             if(_loc5_ != null)
             {
                return _loc5_;
             }
             return _loc4_.classToDefaultStylesDict[_loc3_][param2];
          };
    StyleManager.getComponentStyle = function(param1, param2) {
             var _loc3_ = StyleManager.getClassDef(param1);
             var _loc4_ = StyleManager.getInstance().classToStylesDict[_loc3_];
             return _loc4_ == null?null:_loc4_[param2];
          };
    StyleManager.clearComponentStyle = function(param1, param2) {
             var _loc3_ = StyleManager.getClassDef(param1);
             var _loc4_ = StyleManager.getInstance().classToStylesDict[_loc3_];
             if(_loc4_ != null && _loc4_[param2] != null)
             {
                delete _loc4_[param2];
                StyleManager.invalidateComponentStyle(_loc3_,param2);
             }
          };
    StyleManager.setComponentStyle = function(param1, param2, param3) {
             var _loc4_ = StyleManager.getClassDef(param1);
             var _loc5_ = StyleManager.getInstance().classToStylesDict[_loc4_];
             if(_loc5_ == null)
             {
                _loc5_ = StyleManager.getInstance().classToStylesDict[_loc4_] = {};
             }
             if(_loc5_ == param3)
             {
                return;
             }
             _loc5_[param2] = param3;
             StyleManager.invalidateComponentStyle(_loc4_,param2);
          };
    StyleManager.getClassDef = function(param1) {
             var component = param1;
             if(component is Class)
             {
                return component as Class;
             }
             try
             {
                return getDefinitionByName(getQualifiedClassName(component)) as Class;
             }
             catch(e:Error)
             {
                if(component is UIComponent)
                {
                   try
                   {
                      return component.loaderInfo.applicationDomain.getDefinition(getQualifiedClassName(component)) as Class;
                   }
                   catch(e:Error)
                   {
                   }
                }
             }
             return null;
          };
    StyleManager.invalidateStyle = function(param1) {
             var _loc3_ = null;
             var _loc2_ = StyleManager.getInstance().styleToClassesHash[param1];
             if(_loc2_ == null)
             {
                return;
             }
             for(_loc3_ in _loc2_)
             {
                StyleManager.invalidateComponentStyle(Class(_loc3_),param1);
             }
          };
    StyleManager.invalidateComponentStyle = function(param1, param2) {
             var _loc4_ = null;
             var _loc5_ = null;
             var _loc3_ = StyleManager.getInstance().classToInstancesDict[param1];
             if(_loc3_ == null)
             {
                return;
             }
             for(_loc4_ in _loc3_)
             {
                _loc5_ = _loc4_ as UIComponent;
                if(_loc5_ != null)
                {
                   _loc5_.setSharedStyle(param2,StyleManager.getSharedStyle(_loc5_,param2));
                }
             }
          };
    StyleManager.setStyle = function(param1, param2) {
             var _loc3_ = StyleManager.getInstance().globalStyles;
             if(_loc3_[param1] === param2 && !(param2 is TextFormat))
             {
                return;
             }
             _loc3_[param1] = param2;
             StyleManager.invalidateStyle(param1);
          };
    StyleManager.clearStyle = function(param1) {
             StyleManager.setStyle(param1,null);
          };
    StyleManager.getStyle = function(param1) {
             return StyleManager.getInstance().globalStyles[param1];
          };
    
    StyleManager.$cinit = function () {
      StyleManager._instance = null;
    
    };
    
    StyleManager.prototype.$init = function() {
          this.styleToClassesHash = null;
          this.classToInstancesDict = null;
          this.classToStylesDict = null;
          this.classToDefaultStylesDict = null;
          this.globalStyles = null;};
    StyleManager.prototype.styleToClassesHash = null;
    StyleManager.prototype.classToInstancesDict = null;
    StyleManager.prototype.classToStylesDict = null;
    StyleManager.prototype.classToDefaultStylesDict = null;
    StyleManager.prototype.globalStyles = null
    
    
    module.exports = StyleManager;
    };if(typeof module !== 'undefined'){module.exports=AS3JS.load({program:Program,entry:"",entryMode:""});}else if(typeof window!=='undefined'&&typeof AS3JS!=='undefined'){window['']=AS3JS.load({program:Program,entry:"",entryMode:""});}})();