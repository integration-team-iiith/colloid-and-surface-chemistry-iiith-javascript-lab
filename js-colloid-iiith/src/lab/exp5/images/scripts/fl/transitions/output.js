(function(){var Program={};  Program["fl.transitions.easing.Strong"]=function(module, exports){  
    var Strong = function() {
          this.$init();
             null.call(this);
          };
    
    
    
    
    Strong.easeIn = function(param1, param2, param3, param4) {
             return param3 * (param1 = param1 / param4) * param1 * param1 * param1 * param1 + param2;
          };
    Strong.easeOut = function(param1, param2, param3, param4) {
             return param3 * ((param1 = param1 / param4 - 1) * param1 * param1 * param1 * param1 + 1) + param2;
          };
    Strong.easeInOut = function(param1, param2, param3, param4) {
             if((param1 = param1 / (param4 / 2)) < 1)
             {
                return param3 / 2 * param1 * param1 * param1 * param1 * param1 + param2;
             }
             return param3 / 2 * ((param1 = param1 - 2) * param1 * param1 * param1 * param1 + 2) + param2;
          };
    
    Strong.$cinit = function () {
    
    };
    
    Strong.prototype.$init = function() {}
    
    
    module.exports = Strong;
    };if(typeof module !== 'undefined'){module.exports=AS3JS.load({program:Program,entry:"",entryMode:""});}else if(typeof window!=='undefined'&&typeof AS3JS!=='undefined'){window['']=AS3JS.load({program:Program,entry:"",entryMode:""});}})();