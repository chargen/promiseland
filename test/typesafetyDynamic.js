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

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "e1f0833736acaa653e77399b8fc0fa66" })){ return promiseland._getModule("e1f0833736acaa653e77399b8fc0fa66"); };
var _V1 = (function(){
"use strict";
var _V3/*T1*/;
var _V6/*T2*/;
var _V8/*a*/;
var _V25/*b*/;
var _V28/*catched*/;
var _V2/*type:T1*/ = classSystem._createProvisionalClass();
_V3/*T1*/ = _V2/*type:T1*/;
var _V4/*T1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:T1*/).then(function(parType){_V2/*type:T1*/ = parType;_V4/*T1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:T1*/);});var _V5/*type:T2*/ = classSystem._createProvisionalClass();
_V6/*T2*/ = _V5/*type:T2*/;
var _V7/*T2-constructor*/ = undefined;classSystem.readyPromise(_V5/*type:T2*/).then(function(parType){_V5/*type:T2*/ = parType;_V7/*T2-constructor*/ = classSystem.getTypeConstructor(_V5/*type:T2*/);});;
classSystem._resolveProvisional(_V2/*type:T1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"a": 1, "b": 2}));_V3/*T1*/;;
classSystem._resolveProvisional(_V5/*type:T2*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"a": 3, "b": 4}));_V6/*T2*/;;
_V8/*a*/ = ((function(){var _V9/*type:Tx*/ = _V3/*T1*/;
var _V10/*Tx*/ = _V9/*type:Tx*/
;var _V11/*Tx-constructor*/ = undefined;
classSystem.readyPromise(_V9/*type:Tx*/).then(function(parType){_V9/*type:Tx*/ = parType;_V11/*Tx-constructor*/ = classSystem.getTypeConstructor(_V9/*type:Tx*/);});var _V12/*type:Ty*/ = _V6/*T2*/;
var _V13/*Ty*/ = _V12/*type:Ty*/
;var _V14/*Ty-constructor*/ = undefined;
classSystem.readyPromise(_V12/*type:Ty*/).then(function(parType){_V12/*type:Ty*/ = parType;_V14/*Ty-constructor*/ = classSystem.getTypeConstructor(_V12/*type:Ty*/);});var communicator = {fun: undefined};
var /*extratyperender*/ _V16/*type:Tx::temporaryTracked*/ = classSystem._createTemporaryTrackedClass(_V9/*type:Tx*/);
var /*extratyperender*/ _V18/*type:Tx::temporaryTracked::temporaryTrackedResolved*/ = classSystem.getClassFromTemporaryTracked(_V16/*type:Tx::temporaryTracked*/);
var /*extratyperender*/ _V17/*type:Tx::property::constructor*/ = classSystem.getConstructorType({"type":_V9/*type:Tx*/, property: "constructor"});
var /*extratyperender*/ _V20/*type:Ty::temporaryTracked*/ = classSystem._createTemporaryTrackedClass(_V12/*type:Ty*/);
var /*extratyperender*/ _V22/*type:Ty::temporaryTracked::temporaryTrackedResolved*/ = classSystem.getClassFromTemporaryTracked(_V20/*type:Ty::temporaryTracked*/);
var /*extratyperender*/ _V21/*type:Ty::property::constructor*/ = classSystem.getConstructorType({"type":_V12/*type:Ty*/, property: "constructor"});
var /*extratyperender*/ _V23/*type:Ty::temporaryTrackedResolved*/ = classSystem.getClassFromTemporaryTracked(_V12/*type:Ty*/);
var /*extratyperender*/ _V24/*type:Ty::temporaryTrackedResolved::temporaryTrackedResolved*/ = classSystem.getClassFromTemporaryTracked(_V23/*type:Ty::temporaryTrackedResolved*/);
eval("communicator.fun = function(){\n" + classSystem.getDeclareVariableCode({"type":_V9/*type:Tx*/, "name":"_V15/*x*/"}) + "" + classSystem.getDeclareVariableCode({"type":_V12/*type:Ty*/, "name":"_V19/*y*/"}) + "" + ((classSystem.isTrackedClass(_V9/*type:Tx*/) && classSystem.isTrackedClass(_V12/*type:Ty*/)) ? ("try{") : ("")) + ";\n" + classSystem.getSetVariableCode({"instance":"_V15/*x*/", "type":_V9/*type:Tx*/, "value":"new _V11/*Tx-constructor*/()", "valueType":_V16/*type:Tx::temporaryTracked*/, "operator":"=", "assignmentType":"Identifier"}) + ";\n" + classSystem.getSetVariableCode({"instance":"_V19/*y*/", "type":_V12/*type:Ty*/, "value":"new _V14/*Ty-constructor*/()", "valueType":_V20/*type:Ty::temporaryTracked*/, "operator":"=", "assignmentType":"Identifier"}) + ";\n" + classSystem.getDestroyTemporaryClassCode({"value":"" + classSystem.getSetVariableCode({"instance":"_V15/*x*/", "type":_V9/*type:Tx*/, "value":"_V19/*y*/", "valueType":_V12/*type:Ty*/, "operator":"=", "assignmentType":"Identifier"}) + "", "valueType":_V23/*type:Ty::temporaryTrackedResolved*/}) + ";;\n" + ((classSystem.isTrackedClass(_V9/*type:Tx*/) && classSystem.isTrackedClass(_V12/*type:Ty*/)) ? ("" + ((classSystem.isTrackedClass(_V9/*type:Tx*/)) ? ("" + classSystem.getDestroyVariableCode({"type":_V9/*type:Tx*/, "name":"_V15/*x*/"}) + "") : ("")) + "" + ((classSystem.isTrackedClass(_V12/*type:Ty*/)) ? ("" + classSystem.getDestroyVariableCode({"type":_V12/*type:Ty*/, "name":"_V19/*y*/"}) + "") : ("")) + "") : ("")) + "" + ((classSystem.isTrackedClass(_V9/*type:Tx*/) && classSystem.isTrackedClass(_V12/*type:Ty*/)) ? ("}catch(e){" + ((classSystem.isTrackedClass(_V9/*type:Tx*/)) ? ("" + classSystem.getDestroyVariableCode({"type":_V9/*type:Tx*/, "name":"_V15/*x*/"}) + "") : ("")) + "" + ((classSystem.isTrackedClass(_V12/*type:Ty*/)) ? ("" + classSystem.getDestroyVariableCode({"type":_V12/*type:Ty*/, "name":"_V19/*y*/"}) + "") : ("")) + "throw e};") : ("")) + ";\n};"); return communicator.fun; })());
_V25/*b*/ = ((function(){var _V9/*type:Tx*/ = _V3/*T1*/;
var _V10/*Tx*/ = _V9/*type:Tx*/
;var _V26/*Tx-constructor*/ = undefined;
classSystem.readyPromise(_V9/*type:Tx*/).then(function(parType){_V9/*type:Tx*/ = parType;_V26/*Tx-constructor*/ = classSystem.getTypeConstructor(_V9/*type:Tx*/);});var _V12/*type:Ty*/ = _V3/*T1*/;
var _V13/*Ty*/ = _V12/*type:Ty*/
;var _V27/*Ty-constructor*/ = undefined;
classSystem.readyPromise(_V12/*type:Ty*/).then(function(parType){_V12/*type:Ty*/ = parType;_V27/*Ty-constructor*/ = classSystem.getTypeConstructor(_V12/*type:Ty*/);});var communicator = {fun: undefined};
var /*extratyperender*/ _V16/*type:Tx::temporaryTracked*/ = classSystem._createTemporaryTrackedClass(_V9/*type:Tx*/);
var /*extratyperender*/ _V18/*type:Tx::temporaryTracked::temporaryTrackedResolved*/ = classSystem.getClassFromTemporaryTracked(_V16/*type:Tx::temporaryTracked*/);
var /*extratyperender*/ _V17/*type:Tx::property::constructor*/ = classSystem.getConstructorType({"type":_V9/*type:Tx*/, property: "constructor"});
var /*extratyperender*/ _V20/*type:Ty::temporaryTracked*/ = classSystem._createTemporaryTrackedClass(_V12/*type:Ty*/);
var /*extratyperender*/ _V22/*type:Ty::temporaryTracked::temporaryTrackedResolved*/ = classSystem.getClassFromTemporaryTracked(_V20/*type:Ty::temporaryTracked*/);
var /*extratyperender*/ _V21/*type:Ty::property::constructor*/ = classSystem.getConstructorType({"type":_V12/*type:Ty*/, property: "constructor"});
var /*extratyperender*/ _V23/*type:Ty::temporaryTrackedResolved*/ = classSystem.getClassFromTemporaryTracked(_V12/*type:Ty*/);
var /*extratyperender*/ _V24/*type:Ty::temporaryTrackedResolved::temporaryTrackedResolved*/ = classSystem.getClassFromTemporaryTracked(_V23/*type:Ty::temporaryTrackedResolved*/);
eval("communicator.fun = function(){\n" + classSystem.getDeclareVariableCode({"type":_V9/*type:Tx*/, "name":"_V15/*x*/"}) + "" + classSystem.getDeclareVariableCode({"type":_V12/*type:Ty*/, "name":"_V19/*y*/"}) + "" + ((classSystem.isTrackedClass(_V9/*type:Tx*/) && classSystem.isTrackedClass(_V12/*type:Ty*/)) ? ("try{") : ("")) + ";\n" + classSystem.getSetVariableCode({"instance":"_V15/*x*/", "type":_V9/*type:Tx*/, "value":"new _V26/*Tx-constructor*/()", "valueType":_V16/*type:Tx::temporaryTracked*/, "operator":"=", "assignmentType":"Identifier"}) + ";\n" + classSystem.getSetVariableCode({"instance":"_V19/*y*/", "type":_V12/*type:Ty*/, "value":"new _V27/*Ty-constructor*/()", "valueType":_V20/*type:Ty::temporaryTracked*/, "operator":"=", "assignmentType":"Identifier"}) + ";\n" + classSystem.getDestroyTemporaryClassCode({"value":"" + classSystem.getSetVariableCode({"instance":"_V15/*x*/", "type":_V9/*type:Tx*/, "value":"_V19/*y*/", "valueType":_V12/*type:Ty*/, "operator":"=", "assignmentType":"Identifier"}) + "", "valueType":_V23/*type:Ty::temporaryTrackedResolved*/}) + ";;\n" + ((classSystem.isTrackedClass(_V9/*type:Tx*/) && classSystem.isTrackedClass(_V12/*type:Ty*/)) ? ("" + ((classSystem.isTrackedClass(_V9/*type:Tx*/)) ? ("" + classSystem.getDestroyVariableCode({"type":_V9/*type:Tx*/, "name":"_V15/*x*/"}) + "") : ("")) + "" + ((classSystem.isTrackedClass(_V12/*type:Ty*/)) ? ("" + classSystem.getDestroyVariableCode({"type":_V12/*type:Ty*/, "name":"_V19/*y*/"}) + "") : ("")) + "") : ("")) + "" + ((classSystem.isTrackedClass(_V9/*type:Tx*/) && classSystem.isTrackedClass(_V12/*type:Ty*/)) ? ("}catch(e){" + ((classSystem.isTrackedClass(_V9/*type:Tx*/)) ? ("" + classSystem.getDestroyVariableCode({"type":_V9/*type:Tx*/, "name":"_V15/*x*/"}) + "") : ("")) + "" + ((classSystem.isTrackedClass(_V12/*type:Ty*/)) ? ("" + classSystem.getDestroyVariableCode({"type":_V12/*type:Ty*/, "name":"_V19/*y*/"}) + "") : ("")) + "throw e};") : ("")) + ";\n};"); return communicator.fun; })());
_V28/*catched*/ = false;
try
{_V8/*a*/();;
}catch(_V29/*e*/){_V28/*catched*/ = true;;
};
if(! _V28/*catched*/){
return {"success": false};;
};
;
try
{_V25/*b*/();;
}catch(_V29/*e*/){return {"success": false};;
};
return {"success": true};;
;
})();
;return _V1;
});
})();