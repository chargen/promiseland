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
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

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
    if (promiseland._hasModule({ hashStr: "c0ab9a6e613db52443c9c25b0612d516" })){ return promiseland._getModule("c0ab9a6e613db52443c9c25b0612d516"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "c0ab9a6e613db52443c9c25b0612d516", "module": PL$1, promising: true });
var PL$6/*promiseland*/;try{PL$6/*promiseland*/ = promiseland;}catch(e){};
var PL$32/*Promise*/;try{PL$32/*Promise*/ = Promise;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*Map*/;
var PL$7/*classSystem*/;
var PL$8/*basics*/;
var PL$10/*errorFun*/;
var PL$11/*errorMsg*/;
var PL$12/*_stringEncodeStr*/;
var PL$13/*stringEncodeStr*/;
var PL$14/*VariableNames*/;
var PL$15/*mixin*/;
var PL$16/*identifierName*/;
var PL$17/*checkIsFunction*/;
var PL$18/*getExtraFromPar*/;
PL$3(function(){;
PL$5/*Map*/ = PL$6/*promiseland*/["Map"];
PL$7/*classSystem*/ = PL$6/*promiseland*/["classSystem"];
__requireFun("./basics").then(PL$3(function(PL$9){PL$8/*basics*/ = PL$9;
PL$10/*errorFun*/ = PL$8/*basics*/["errorFun"];
PL$11/*errorMsg*/ = PL$8/*basics*/["errorMsg"];
PL$12/*_stringEncodeStr*/ = PL$8/*basics*/["_stringEncodeStr"];
PL$13/*stringEncodeStr*/ = PL$8/*basics*/["stringEncodeStr"];
PL$14/*VariableNames*/ = PL$8/*basics*/["VariableNames"];
PL$15/*mixin*/ = PL$8/*basics*/["mixin"];
PL$16/*identifierName*/ = PL$8/*basics*/["identifierName"];
PL$17/*checkIsFunction*/ = PL$8/*basics*/["checkIsFunction"];
PL$18/*getExtraFromPar*/ = PL$8/*basics*/["getExtraFromPar"];
PL$1.resolve((function(PL$19/*parInstance*/, PL$20/*par*/){
var PL$21/*f*/;
;
PL$21/*f*/ = (function(PL$20/*par*/){
;
this["variables"] = new PL$5/*Map*/()["mixin"](PL$20/*par*/["variables"]);;
this["localVariables"] = new PL$5/*Map*/();;
this["addLocalVariable"] = (function(PL$20/*par*/, PL$22/*parParsed*/){
var PL$23/*self*/;
var PL$24/*name*/;
var PL$25/*newType*/;
var PL$26/*existing*/;
;
PL$23/*self*/ = this;
PL$24/*name*/ = PL$16/*identifierName*/(PL$20/*par*/["name"]);
if(this["localVariables"]["has"](PL$24/*name*/)){
if((! PL$20/*par*/["type"] && ! PL$20/*par*/["typename"])){

}else{
PL$25/*newType*/ = (PL$20/*par*/["type"] || this["getType"](PL$20/*par*/["typename"], PL$22/*parParsed*/));
PL$26/*existing*/ = this["_getVariableType"](this["localVariables"]["get"](PL$24/*name*/));
PL$7/*classSystem*/["definitionPromise"](PL$25/*newType*/)["then"]((function(PL$27/*type1*/){
;
PL$7/*classSystem*/["definitionPromise"](PL$26/*existing*/)["then"]((function(PL$28/*type2*/){
;
if(! PL$7/*classSystem*/["isSameType"](PL$27/*type1*/, PL$28/*type2*/)){
PL$23/*self*/["addError"](PL$22/*parParsed*/, PL$11/*errorMsg*/["variableRedefinition"]);;
};
;
;
}));;
;
}));;
};
;

}else{
this["localVariables"]["set"](PL$24/*name*/, {"typename": PL$20/*par*/["typename"],
"type": PL$20/*par*/["type"],
"name": PL$24/*name*/});;
if((! PL$20/*par*/["typename"] && ! PL$20/*par*/["type"])){
this["localVariables"]["get"](PL$24/*name*/)["type"] = this["getProvisionalType"](PL$22/*parParsed*/);;
this["localVariables"]["get"](PL$24/*name*/)["needsResolving"] = true;;
};
;
};
;
if(PL$20/*par*/["parameter"]){
this["localVariables"]["get"](PL$24/*name*/)["parameter"] = PL$20/*par*/["parameter"];;
};
;
if(PL$20/*par*/["isFunction"]){
this["localVariables"]["get"](PL$24/*name*/)["function"] = PL$20/*par*/["function"];;
};
;
this["variables"]["set"](PL$24/*name*/, this["localVariables"]["get"](PL$24/*name*/));;
;
});;
this["addLocalVariableTemporary"] = (function(PL$20/*par*/, PL$22/*parParsed*/){
var PL$23/*self*/;
var PL$24/*name*/;
var PL$29/*originalEntry*/;
var PL$30/*entry*/;
var PL$31/*resPs*/;
;
PL$23/*self*/ = this;
PL$24/*name*/ = PL$16/*identifierName*/(PL$20/*par*/["name"]);
PL$29/*originalEntry*/;
if(this["variables"]["has"](PL$24/*name*/)){
PL$29/*originalEntry*/ = this["variables"]["get"](PL$24/*name*/);;
};
;
PL$30/*entry*/ = {"typename": PL$20/*par*/["typename"],
"type": PL$20/*par*/["type"],
"name": PL$24/*name*/};
if((! PL$20/*par*/["typename"] && ! PL$20/*par*/["type"])){
PL$30/*entry*/["type"] = this["getProvisionalType"](PL$22/*parParsed*/);;
PL$30/*entry*/["needsResolving"] = true;;
};
;
if(PL$20/*par*/["parameter"]){
PL$30/*entry*/["parameter"] = PL$20/*par*/["parameter"];;
};
;
if(PL$20/*par*/["isFunction"]){
PL$30/*entry*/["function"] = PL$20/*par*/["function"];;
};
;
PL$30/*entry*/["temporary"] = true;;
this["variables"]["set"](PL$24/*name*/, PL$30/*entry*/);;
PL$31/*resPs*/ = new PL$32/*Promise*/();
(function(){
var PL$33 = new __Promise();
var PL$35 = function(code){ return function(res){ try{code(res);}catch(e){ PL$33.reject(e); }; }; };
var PL$36 = function(e){ PL$33.reject(e); };
PL$35(function(){;
PL$31/*resPs*/.then(PL$35(function(PL$37){PL$37;;
if(PL$29/*originalEntry*/){
PL$23/*self*/["variables"]["set"](PL$24/*name*/, PL$29/*originalEntry*/);;

}else{
PL$23/*self*/["variables"]["delete"](PL$24/*name*/);;
};
;
PL$33.resolve(); return;;
}), PL$36);
;})();
return PL$33;
})();;
return PL$31/*resPs*/;;
;
});;
this["_getVariableType"] = (function(PL$38/*parEntry*/){
;
if(PL$38/*parEntry*/["type"]){
return PL$38/*parEntry*/["type"];;
};
;
return this["getType"](PL$38/*parEntry*/["typename"]);;
;
});;
this["getVariableType"] = (function(PL$39/*parName*/, PL$20/*par*/){
var PL$24/*name*/;
var PL$30/*entry*/;
;
PL$24/*name*/ = PL$16/*identifierName*/(PL$39/*parName*/);
this["_addUsedVariable"](PL$24/*name*/);;
if(this["variables"]["has"](PL$24/*name*/)){
PL$30/*entry*/ = this["variables"]["get"](PL$24/*name*/);
return this["_getVariableType"](PL$30/*entry*/);;
};
;
return this["getType"]("var");;
;
});;
this["usedVariables"] = {};;
this["_addUsedVariable"] = (function(PL$20/*par*/){
var PL$24/*name*/;
;
PL$24/*name*/ = PL$16/*identifierName*/(PL$20/*par*/);
if((PL$24/*name*/ === "undefined")){
return;;
};
;
if(this["variables"]["has"](PL$24/*name*/)){
if(this["variables"]["get"](PL$24/*name*/)["temporary"]){
return;;
};
;
};
;
this["usedVariables"][PL$24/*name*/] = true;;
;
});;
this["_getUsedVairables"] = (function(){
;
return this["usedVariables"];;
;
});;
this["getVariableName"] = (function(PL$24/*name*/){
;
return this["common"]["variableNames"]["get"](PL$24/*name*/);;
;
});;
this["findVariables"] = (function(PL$20/*par*/){
var PL$23/*self*/;
var PL$40/*ci*/;
var PL$41/*i*/;
;
PL$23/*self*/ = this;
if((! PL$20/*par*/ || (typeof PL$20/*par*/ == "string"))){
return;;
};
;
if((PL$20/*par*/["type"] == "VariableDeclaration")){
this["addLocalVariable"]({"name": PL$16/*identifierName*/(PL$20/*par*/["id"]),
"typename": PL$16/*identifierName*/(PL$20/*par*/["typename"])}, PL$20/*par*/);;

}else{
if((PL$20/*par*/["type"] == "Class")){
PL$40/*ci*/ = PL$23/*self*/["identifyClass"](PL$20/*par*/);
if(PL$40/*ci*/["hasName"]){
this["addLocalVariable"]({"name": PL$16/*identifierName*/(PL$20/*par*/["name"]),
"typename": "var"}, PL$20/*par*/);;
};
;
return;;

}else{
if(PL$17/*checkIsFunction*/(PL$20/*par*/)){
if((PL$20/*par*/["id"] && (PL$20/*par*/["type"] != "MemberFunction"))){
this["addLocalVariable"]({"name": PL$16/*identifierName*/(PL$20/*par*/["id"]),
"isFunction": true}, PL$20/*par*/);;
};
;
return;;
};
};
};
;
PL$41/*i*/;
for(PL$41/*i*/ in PL$20/*par*/){if((PL$41/*i*/ == "_extrainfo")){
continue;;
};
;
this["findVariables"](PL$20/*par*/[PL$41/*i*/]);;
};
;
;
});;
this["getVariable"] = (function(PL$20/*par*/){
var PL$42/*res*/;
;
PL$42/*res*/ = this["newResult"]();
this["_addUsedVariable"](PL$20/*par*/);;
PL$42/*res*/["push"](this["getVariableName"](PL$20/*par*/));;
PL$42/*res*/["setType"](this["getVariableType"](PL$20/*par*/));;
return PL$42/*res*/;;
;
});;
;
});
PL$21/*f*/["apply"](PL$19/*parInstance*/, [PL$20/*par*/]);;
;
})); return;;
PL$1.resolve(); return;;
}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();