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
  var __modulePromise = new __Promise();
  var __requireFun = function(parModule){
    var returnPromise = new __Promise();
    try{__require([parModule], function(m){
    if (promiseland.isPromiseLandPromisingModule(m)){
      m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
    }else{
      returnPromise.resolve(m);
    };
    });
    }catch(e){returnPromise.reject(e);};
  return returnPromise.promise;};
  
  
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "b9fe70e2292feba8038c937139fbc428" })){ return promiseland._getModule("b9fe70e2292feba8038c937139fbc428"); };
var __UNIQUENAME1 = (function(){
"use strict";
return {"fun": function(){
var __UNIQUENAME2 = new __Promise();
try{var __UNIQUENAME3 = new __Promise();
if((1 < 0)){
b.then(function(__UNIQUENAME4){try{__UNIQUENAME4;
__UNIQUENAME3.resolve();}catch(__returnError){__UNIQUENAME2.reject(__returnError);
 }; });
}else{
__UNIQUENAME3.resolve();}; __UNIQUENAME3.then(function(){;
;
__UNIQUENAME2.resolve(4); return __UNIQUENAME2;
});}catch(__returnError){
__UNIQUENAME2.reject(__returnError);
};
return __UNIQUENAME2;
}};
})();
promiseland._registerModule({ hashStr: "b9fe70e2292feba8038c937139fbc428", "module": __UNIQUENAME1, promising: false });
return __UNIQUENAME1;
});
})();