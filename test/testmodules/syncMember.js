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
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "f6eb2f32b4cecef1b45032dd98625bfa" })){ return promiseland._getModule("f6eb2f32b4cecef1b45032dd98625bfa"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "f6eb2f32b4cecef1b45032dd98625bfa", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$9 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$10 = function(e){ PL$1.reject(e); };
var PL$11/*isClient*/;
var PL$4/*C1*/;
var PL$7/*C2*/;
var PL$12/*local*/;
var _TPL$12/*local*/;
var PL$13/*doInit*/;
var PL$14/*init*/;
var PL$25/*x*/;
var PL$30/*getLocalTB*/;
var PL$33/*tempRes*/;
var PL$3/*type:C1*/ = classSystem._createProvisionalClass();
PL$4/*C1*/ = PL$3/*type:C1*/;
var PL$5/*C1-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:C1*/).then(function(parType){PL$3/*type:C1*/ = parType;PL$5/*C1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C1*/);});var PL$6/*type:C2*/ = classSystem._createProvisionalClass();
PL$7/*C2*/ = PL$6/*type:C2*/;
var PL$8/*C2-constructor*/ = undefined;classSystem.readyPromise(PL$6/*type:C2*/).then(function(parType){PL$6/*type:C2*/ = parType;PL$8/*C2-constructor*/ = classSystem.getTypeConstructor(PL$6/*type:C2*/);});var PL$13/*doInit*/ = function(){
;
/*temp tracked assign*/(function(vAr){
if (_TPL$12/*local*/){ _TPL$12/*local*/(); };
if(vAr){
var v = vAr[0];
PL$12/*local*/ = v;
_TPL$12/*local*/ = vAr[1];
return v;
}else{
PL$12/*local*/ = undefined; _TPL$12/*local*/ = undefined;
return;
}; })(new PL$8/*C2-constructor*/())/*end temp assign*/
;;
(function(s, vAr){ vAr = s[12](vAr); var v = vAr[0]; s[11] = v; if(s[13]){ s[13](); }; s[13] = v[3](s[1]); vAr[1](); return v; })(PL$12/*local*/, new PL$5/*C1-constructor*/());;
;
};
var PL$25/*x*/ = (function(f){
promiseland.registerRemote("server", "f6eb2f32b4cecef1b45032dd98625bfa", "PL$24", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [PL$6/*type:C2*/]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("f6eb2f32b4cecef1b45032dd98625bfa", "PL$24", arguments);
}
};
})(function(PL$20/*par1*/){
var PL$21 = new __Promise();
var PL$22 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$20/*par1*/){ _TPL$20/*par1*/();};PL$21.reject(e); }; }; };
var PL$23 = function(e){ if (_TPL$20/*par1*/){ _TPL$20/*par1*/();};PL$21.reject(e); };
var _TPL$20/*par1*/;
if(PL$20/*par1*/){ _TPL$20/*par1*/ = PL$20/*par1*/[1];
PL$20/*par1*/ = PL$20/*par1*/[0];}
PL$22(function(){;
/*tracked assign*/(function(v){
if (_TPL$12/*local*/){ _TPL$12/*local*/(); };
PL$12/*local*/ = v;
if (v){
_TPL$12/*local*/ = v[2]();
}else{
_TPL$12/*local*/ = undefined;
};
return v;
})(PL$20/*par1*/)/*end assign*/
;;
if (_TPL$20/*par1*/){ _TPL$20/*par1*/();};PL$21.resolve(); return;;
})();
return PL$21;
});
var PL$30/*getLocalTB*/ = (function(f){
promiseland.registerRemote("server", "f6eb2f32b4cecef1b45032dd98625bfa", "PL$29", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("f6eb2f32b4cecef1b45032dd98625bfa", "PL$29", arguments);
}
};
})(function(){
var PL$26 = new __Promise();
var PL$27 = function(code){ return function(res){ try{code(res);}catch(e){ PL$26.reject(e); }; }; };
var PL$28 = function(e){ PL$26.reject(e); };
PL$27(function(){;
PL$26.resolve(PL$12/*local*/[11][9]); return;;
PL$26.resolve(); return;;
})();
return PL$26;
});
PL$9(function(){;
PL$11/*isClient*/ = false;
(function(){
if (!promiseland.profileHas("client")){
return;
};
;
PL$11/*isClient*/ = true;;
;
})();;
classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":9,"column":12,"offset":87}, "hashStr": "f6eb2f32b4cecef1b45032dd98625bfa", "name": "C1"}, {"a": 1, "b": 2}));PL$4/*C1*/;;
classSystem._resolveProvisional(PL$6/*type:C2*/, classSystem.createClass({members: [{"name":"c","type":classSystem.getBuiltinType("var")},{"name":"d","type":classSystem.getBuiltinType("var")},{"name":"t1","type":PL$3/*type:C1*/}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":14,"column":12,"offset":129}, "hashStr": "f6eb2f32b4cecef1b45032dd98625bfa", "name": "C2"}, {"c": 3, "d": 4, "t1": undefined}));PL$7/*C2*/;;
PL$12/*local*/;
PL$13/*doInit*/;
;
PL$14/*init*/ = ((function(f){
promiseland.registerRemote("server", "f6eb2f32b4cecef1b45032dd98625bfa", "PL$19", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("f6eb2f32b4cecef1b45032dd98625bfa", "PL$19", arguments);
}
};
})(function(){
var PL$15 = new __Promise();
var PL$17 = function(code){ return function(res){ try{code(res);}catch(e){ PL$15.reject(e); }; }; };
var PL$18 = function(e){ PL$15.reject(e); };
PL$17(function(){;
PL$13/*doInit*/();;
PL$15.resolve(); return;;
})();
return PL$15;
}));
PL$25/*x*/;
;
PL$30/*getLocalTB*/;
;
if(! PL$11/*isClient*/){
PL$1.resolve({"success": true}); return;;
};
;
PL$14/*init*/().then(PL$9(function(PL$31){PL$31;;
PL$13/*doInit*/();;
PL$30/*getLocalTB*/().then(PL$9(function(PL$32){if((PL$32 !== 2)){
PL$1.resolve({"success": false}); return;;
};
;
(function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$12/*local*/[11], 6);;
PL$25/*x*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$12/*local*/)).then(PL$9(function(PL$34){PL$33/*tempRes*/ = PL$34;
PL$30/*getLocalTB*/().then(PL$9(function(PL$35){if((PL$35 !== 6)){
PL$1.resolve({"success": false}); return;;
};
;
PL$1.resolve({"success": true}); return;;
PL$1.resolve(); return;;
}), PL$10);
;}), PL$10);
;}), PL$10);
;}), PL$10);
;})();
return PL$1;
})();
;;
return PL$1});
})();