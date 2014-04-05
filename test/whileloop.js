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
if (!promiseland._registerModule("14b6f31abad6dca33694f096a369ac7a", __module.promise.then)){ return promiseland._getModule("14b6f31abad6dca33694f096a369ac7a"); };
(function(){
var somefun;
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
__module.resolve({"fun": function(){
var _returnPs = new __Promise();
try{var a;
var i;
a = 1;
i = 0;
var __UNIQUENAME3 = new __Promise();
var __UNIQUENAME2 = function(){var __UNIQUENAME4 = new __Promise();
if((i < 4)){somefun(i).then(function(__UNIQUENAME5){try{i = __UNIQUENAME5;
a = (a + 1);
__UNIQUENAME4.resolve(true); return __UNIQUENAME4;
}catch(__returnError){_returnPs.reject(__returnError);
 }; });}else{__UNIQUENAME4.resolve(false); return __UNIQUENAME4;
};
__UNIQUENAME4;
return __UNIQUENAME4;
};
var __UNIQUENAME6 = function(){__UNIQUENAME2().then(function(contLoop){
if (contLoop){__UNIQUENAME6();}else{__UNIQUENAME3.resolve();};
});
};
__UNIQUENAME6();
__UNIQUENAME3.then(function(){;
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