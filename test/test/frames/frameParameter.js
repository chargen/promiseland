(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  
defineFun(["promiseland"], function(promiseland){ var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "0c947407ff38e76631b10777c446fe92" })){ return promiseland._getModule("0c947407ff38e76631b10777c446fe92"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "0c947407ff38e76631b10777c446fe92", "module": _V1, promising: true });
var _V17/*undefined*/;try{_V17/*undefined*/ = undefined;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*x*/;
var _V16/*resPs*/;
var _V18/*res*/;
_V3(function(){;
_V5/*x*/ = ((function(f){
promiseland.registerRemote("server", "0c947407ff38e76631b10777c446fe92", "_V15", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("0c947407ff38e76631b10777c446fe92", "_V15", arguments);
}
};
})(function(_V6/*par1*/, _V7/*par2*/, _V8/*par3*/, _V9/*par4*/, _V10/*par5*/){
var _V11 = new __Promise();
var _V13 = function(code){ return function(res){ try{code(res);}catch(e){ _V11.reject(e); }; }; };
var _V14 = function(e){ _V11.reject(e); };
_V13(function(){;
_V11.resolve({"par1": _V6/*par1*/,
"par2": _V7/*par2*/,
"par3": _V8/*par3*/,
"par4": _V9/*par4*/,
"par5": _V10/*par5*/}); return;;
_V11.resolve(); return;;
})();
return _V11;
}));
_V16/*resPs*/ = _V5/*x*/(1, {"a": "b"}, null, _V17/*undefined*/);
_V16/*resPs*/.then(_V3(function(_V19){_V18/*res*/ = _V19;
if(((((_V18/*res*/["par1"] == 1) && (_V18/*res*/["par2"]["a"] == "b")) && (_V18/*res*/["par3"] === null)) && ! _V18/*res*/["par4"])){
_V1.resolve({"success": true}); return;;
};
;
_V1.resolve({"success": false}); return;;
_V1.resolve(); return;;
}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();