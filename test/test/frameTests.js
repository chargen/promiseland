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
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "eb47be501c7c70e03737e6c93c539e5d" })){ return promiseland._getModule("eb47be501c7c70e03737e6c93c539e5d"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "eb47be501c7c70e03737e6c93c539e5d", "module": _V1, promising: true });
var _V18/*console*/;try{_V18/*console*/ = console;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*testObj*/;
var _V7/*successFun*/;
var _V10/*successFunDbg*/;
var _V11/*createTest*/;
_V3(function(){;
__requireFun("./testObj").then(_V3(function(_V6){_V5/*testObj*/ = _V6;
_V7/*successFun*/ = (function(_V8/*mod*/, _V9/*success*/){
;
if((_V8/*mod*/ && _V8/*mod*/["success"])){
_V9/*success*/();;
};
;
;
});
_V10/*successFunDbg*/ = (function(_V8/*mod*/, _V9/*success*/){
;
debugger;
if((_V8/*mod*/ && _V8/*mod*/["success"])){
_V9/*success*/();;
};
;
;
});
_V11/*createTest*/ = (function(_V12/*parModuleName*/, _V13/*parFun*/){
var _V14 = new __Promise();
var _V16 = function(code){ return function(res){ try{code(res);}catch(e){ _V14.reject(e); }; }; };
var _V17 = function(e){ _V14.reject(e); };
var _V19/*sFun*/;
var _V8/*mod*/;
_V16(function(){;
_V18/*console*/["log"](("running " + _V12/*parModuleName*/));;
if(! _V13/*parFun*/){
_V13/*parFun*/ = _V7/*successFun*/;;
};
;
_V5/*testObj*/[_V12/*parModuleName*/] = false;;
_V19/*sFun*/ = (function(){
;
_V5/*testObj*/[_V12/*parModuleName*/] = true;;
;
});
var _V20 = new __Promise();
var _V21 = new __Promise();
var _V22/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V21.resolve(e); }; }; };
var _V23 = function(e){ _V21.resolve(e); };
_V22/*try catch*/(function(){__requireFun(("./frames/" + _V12/*parModuleName*/)).then(_V22/*try catch*/(function(_V24){_V8/*mod*/ = _V24;
_V13/*parFun*/(_V8/*mod*/, _V19/*sFun*/);;
_V20.resolve();
}), _V23);
;})();
_V21.then(_V16(function(_V25/*e*/){_V18/*console*/["log"]("something went wrong");;
_V18/*console*/["log"](_V25/*e*/);;
_V20.resolve();;
}));
_V20.then(_V16(function(){;
;
_V14.resolve(); return;;
}), _V17)})();
return _V14;
});
_V11/*createTest*/("clientServer").then(_V3(function(_V26){_V26;;
_V11/*createTest*/("emptyReturn").then(_V3(function(_V27){_V27;;
_V11/*createTest*/("frameParameter").then(_V3(function(_V28){_V28;;
_V11/*createTest*/("exclusive").then(_V3(function(_V29){_V29;;
_V11/*createTest*/("syncReturn").then(_V3(function(_V30){_V30;;
_V11/*createTest*/("syncServerDestroy").then(_V3(function(_V31){_V31;;
_V11/*createTest*/("syncServerDestroy2").then(_V3(function(_V32){_V32;;
_V11/*createTest*/("syncServe").then(_V3(function(_V33){_V33;;
_V11/*createTest*/("syncServe2").then(_V3(function(_V34){_V34;;
_V11/*createTest*/("syncParameter").then(_V3(function(_V35){_V35;;
_V11/*createTest*/("syncMember").then(_V3(function(_V36){_V36;;
_V1.resolve(_V5/*testObj*/); return;;
_V1.resolve(); return;;
}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();