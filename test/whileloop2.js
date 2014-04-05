(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback){
      var i = 0;
      var l = modulesAr.length;
      var args = [];
      for (i; i < l; ++i){
        args.push(require(modulesAr[i]));
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
  var __module = new __Promise();
  var __requireFun = function(parModule){
    var returnPromise = new __Promise();
    try{__require([parModule], function(m){
    if (promiseland.isPromiseLandModule(m)){
      m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
    }else{
      returnPromise.resolve(m);
    };
    });
    }catch(e){returnPromise.reject(e);};
  return returnPromise.promise;};
  
  
var Callback = promiseland.Callback;
if (!promiseland._registerModule("9c6570a898dcb766ee6ffe5c83918b6e", __module.promise.then)){ return promiseland._getModule("9c6570a898dcb766ee6ffe5c83918b6e"); };
(function(){
var somefun;
var fourfun;
somefun = function(par){
var _returnPs = new __Promise();
try{var c;
c = new Callback();
setTimeout(c["callback"], 100);
c["promise"].then(function(__UNIQUENAME1){try{__UNIQUENAME1;
_returnPs.resolve((par + 1)); return _returnPs;
}catch(__returnError){_returnPs.reject(__returnError);
 }; });}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
};
fourfun = function(){
var _returnPs = new __Promise();
try{_returnPs.resolve(4); return _returnPs;
}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
};
__module.resolve({"fun": function(){
var _returnPs = new __Promise();
try{var a;
var i;
a = 1;
i = 0;
var __UNIQUENAME4 = new __Promise();
var __UNIQUENAME3 = function(){var __UNIQUENAME5 = new __Promise();
fourfun().then(function(__UNIQUENAME2){try{if((i < __UNIQUENAME2)){somefun(i).then(function(__UNIQUENAME6){try{i = __UNIQUENAME6;
a = (a + 1);
__UNIQUENAME5.resolve(true); return __UNIQUENAME5;
}catch(__returnError){_returnPs.reject(__returnError);
 }; });}else{__UNIQUENAME5.resolve(false); return __UNIQUENAME5;
};
}catch(__returnError){_returnPs.reject(__returnError);
 }; });__UNIQUENAME5;
return __UNIQUENAME5;
};
var __UNIQUENAME7 = function(){__UNIQUENAME3().then(function(contLoop){
if (contLoop){__UNIQUENAME7();}else{__UNIQUENAME4.resolve();};
});
};
__UNIQUENAME7();
__UNIQUENAME4.then(function(){;
;
if((a == 5)){
_returnPs.resolve(4); return _returnPs;
};
;
_returnPs.resolve(0); return _returnPs;
});}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
}}); return __module;
})();
return __module.promise.then;});
})();