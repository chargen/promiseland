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
    if (promiseland._hasModule({ hashStr: "5805bc1e5c884dbb989f6f22232b3c20" })){ return promiseland._getModule("5805bc1e5c884dbb989f6f22232b3c20"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "5805bc1e5c884dbb989f6f22232b3c20", "module": PL$1, promising: true });
var PL$41/*Promise*/;try{PL$41/*Promise*/ = Promise;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*basics*/;
var PL$7/*errorFun*/;
var PL$8/*errorMsg*/;
var PL$9/*_stringEncodeStr*/;
var PL$10/*stringEncodeStr*/;
var PL$11/*VariableNames*/;
var PL$12/*mixin*/;
var PL$13/*identifierName*/;
var PL$14/*checkIsFunction*/;
var PL$15/*getExtraFromPar*/;
var PL$16/*statementType*/;
PL$3(function(){

  ;
  __requireFun("./basics").then(PL$3(function(PL$6){PL$5/*basics*/ = PL$6;
  PL$7/*errorFun*/ = PL$5/*basics*/["errorFun"];
  PL$8/*errorMsg*/ = PL$5/*basics*/["errorMsg"];
  PL$9/*_stringEncodeStr*/ = PL$5/*basics*/["_stringEncodeStr"];
  PL$10/*stringEncodeStr*/ = PL$5/*basics*/["stringEncodeStr"];
  PL$11/*VariableNames*/ = PL$5/*basics*/["VariableNames"];
  PL$12/*mixin*/ = PL$5/*basics*/["mixin"];
  PL$13/*identifierName*/ = PL$5/*basics*/["identifierName"];
  PL$14/*checkIsFunction*/ = PL$5/*basics*/["checkIsFunction"];
  PL$15/*getExtraFromPar*/ = PL$5/*basics*/["getExtraFromPar"];
  PL$16/*statementType*/ = PL$5/*basics*/["statementType"];
  PL$1.resolve((function(PL$17/*parInstance*/, PL$18/*par*/){
  var PL$19/*f*/;

    ;
    PL$19/*f*/ = (function(PL$18/*par*/){
    
      ;
      this["parseFunction"] = (function(PL$20/*parsed*/){
      var PL$21/*res*/;
var PL$22/*asmRes*/;

        ;
        this["stack"]("isFunction");
        this["isFunction"] = true;
        PL$21/*res*/ = this["_parseFunction"](PL$20/*parsed*/);
        this["unstack"]("isFunction");
        if(this["isAsmFun"](PL$20/*parsed*/)){
          PL$22/*asmRes*/ = this["newResult"]();
          PL$22/*asmRes*/["pushType"](PL$21/*res*/);
          PL$22/*asmRes*/["checkasm"] = true;
          PL$22/*asmRes*/["setParsed"](PL$20/*parsed*/);
          return PL$22/*asmRes*/;
        };
        ;
        return PL$21/*res*/;
        ;});
      this["functionInfo"] = (function(PL$20/*parsed*/){
      var PL$21/*res*/;
var PL$23/*typeNameStr*/;
var PL$24/*type*/;

        ;
        PL$21/*res*/ = {"hasName": false,
"hasReturnType": false,
"returnTypeNameStr": undefined,
"nameStr": undefined};
        if(PL$20/*parsed*/["id"]){
          PL$21/*res*/["hasName"] = true;
          PL$21/*res*/["nameStr"] = PL$13/*identifierName*/(PL$20/*parsed*/["id"]);
        };
        ;
        if(PL$20/*parsed*/["returnTypename"]){
          PL$23/*typeNameStr*/ = PL$13/*identifierName*/(PL$20/*parsed*/["returnTypename"]);
          if(PL$21/*res*/["hasName"]){
            PL$21/*res*/["returnType"] = this["getType"](PL$23/*typeNameStr*/, PL$20/*parsed*/);
            PL$21/*res*/["returnTypeNameStr"] = PL$23/*typeNameStr*/;
            PL$21/*res*/["hasReturnType"] = true;
          }else{
          PL$24/*type*/ = this["getType"](PL$23/*typeNameStr*/, PL$20/*parsed*/, {"dontThrow": true});
          if(PL$24/*type*/){
            PL$21/*res*/["returnType"] = PL$24/*type*/;
            PL$21/*res*/["returnTypeNameStr"] = PL$23/*typeNameStr*/;
            PL$21/*res*/["hasReturnType"] = true;
          }else{
          PL$21/*res*/["hasName"] = true;
          PL$21/*res*/["nameStr"] = PL$23/*typeNameStr*/;
          };
          ;
          };
          ;
        };
        ;
        if(! PL$21/*res*/["hasReturnType"]){
          PL$21/*res*/["returnType"] = this["getType"]("var");
        };
        ;
        if((PL$20/*parsed*/["type"] == "FunctionDeclaration")){
          PL$21/*res*/["declaration"] = true;
          if(PL$21/*res*/["hasName"]){
            PL$21/*res*/["hasExternalName"] = true;
          };
          ;
        };
        ;
        return PL$21/*res*/;
        ;});
      this["_parseFunction"] = (function(PL$18/*par*/, PL$25/*parJsn*/){
      var PL$26/*parGivenPromiseNameStr*/;
var PL$27/*noUntrack*/;
var PL$28/*hasFrameInfo*/;
var PL$29/*runRemote*/;
var PL$30/*runExclusive*/;
var PL$31/*i*/;
var PL$32/*typename*/;
var PL$33/*parParsed*/;
var PL$34/*funClosure*/;
var PL$35/*self*/;
var PL$36/*functionInfo*/;
var PL$37/*hasName*/;
var PL$38/*nameStr*/;
var PL$39/*hasReturnTypeName*/;
var PL$40/*thisFunType*/;
var PL$42/*templateTypesAr*/;
var PL$43/*templateTypes*/;
var PL$44/*typeVarInit*/;
var PL$45/*p*/;
var PL$46/*extraTypesRes*/;
var PL$21/*res*/;
var PL$47/*funDecl*/;
var PL$48/*funRes*/;
var PL$49/*nameRes*/;
var PL$50/*l*/;
var PL$51/*classesRes*/;
var PL$52/*addFront*/;
var PL$53/*b*/;
var PL$54/*extraPar*/;
var PL$55/*block*/;
var PL$56/*localVariablesAr*/;
var PL$57/*varname*/;
var PL$24/*type*/;
var PL$58/*completeFun*/;
var PL$59/*funNameScrewUp*/;
var PL$60/*returnTypePromiseCheck*/;
var PL$61/*handleExtras*/;
var PL$62/*dt*/;
var PL$63/*uniqueNameStr*/;
var PL$64/*remoteClosure*/;
var PL$65/*finalResult*/;

        ;
        PL$25/*parJsn*/ = (PL$25/*parJsn*/ || {});
        PL$26/*parGivenPromiseNameStr*/ = PL$25/*parJsn*/["promiseName"];
        PL$27/*noUntrack*/ = PL$25/*parJsn*/["noUntrack"];
        PL$28/*hasFrameInfo*/ = false;
        PL$29/*runRemote*/ = false;
        PL$30/*runExclusive*/ = false;
        PL$31/*i*/ = 0;
        PL$32/*typename*/;
        PL$33/*parParsed*/ = PL$18/*par*/;
        PL$34/*funClosure*/;
        PL$35/*self*/ = this;
        PL$36/*functionInfo*/ = this["functionInfo"](PL$33/*parParsed*/);
        PL$37/*hasName*/ = PL$36/*functionInfo*/["hasName"];
        PL$38/*nameStr*/ = PL$36/*functionInfo*/["nameStr"];
        PL$39/*hasReturnTypeName*/ = PL$36/*functionInfo*/["hasReturnType"];
        this["_returnType"] = PL$36/*functionInfo*/["returnType"];
        PL$40/*thisFunType*/ = this["getFunctionType"](PL$18/*par*/);
        if((PL$37/*hasName*/ && PL$33/*parParsed*/["useLocalVariableName"])){
          this["addLocalVariable"]({"name": PL$38/*nameStr*/,
"isFunction": true,
"type": PL$40/*thisFunType*/,
"localFunction": true}, PL$33/*parParsed*/);
        };
        ;
        this["stack"]("inheritedAvailable");
        this["stack"]("thisType");
        if(this["isClassObject"]){
          this["inheritedAvailable"] = true;
          this["thisType"] = (this["inheritedSystem"]["type"] || this["getType"]("var"));
        }else{
        this["inheritedAvailable"] = false;
        this["thisType"] = this["getType"]("var");
        };
        ;
        this["runBeforeReturnRes"] = this["newResult"]();
        this["beforeReturnExistsPs"] = new PL$41/*Promise*/();
        this["additionalCodeFrontRes"] = this["newResult"]();
        this["additionalCodeEndRes"] = this["newResult"]();
        this["stack"]("isClassObject");
        this["isClassObject"] = false;
        if((PL$18/*par*/["frame"] && PL$18/*par*/["frame"]["name"])){
          PL$28/*hasFrameInfo*/ = true;
          if((PL$18/*par*/["frame"]["type"] == "frame")){
            PL$29/*runRemote*/ = true;
            PL$18/*par*/["promising"] = true;
            if(this["dynamicCode"]){
              this["error"](PL$18/*par*/, PL$8/*errorMsg*/["functionFrameInDynamicCode"]);
            };
            ;
          }else{
          if((PL$18/*par*/["frame"]["type"] == "exclusive")){
            PL$30/*runExclusive*/ = true;
          };
          };
          ;
        };
        ;
        PL$42/*templateTypesAr*/ = [];
        if((PL$18/*par*/["template"] && PL$18/*par*/["template"]["properties"]["length"])){
          PL$43/*templateTypes*/ = this["getTemplateProperty"](PL$18/*par*/["template"], "types", "ObjectExpression");
          if(PL$43/*templateTypes*/){
            PL$44/*typeVarInit*/ = this["newResult"]();
            for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$43/*templateTypes*/["properties"]["length"]);++PL$31/*i*/){{
              PL$45/*p*/ = PL$43/*templateTypes*/["properties"][PL$31/*i*/];
              PL$32/*typename*/ = PL$13/*identifierName*/(PL$45/*p*/["key"]);
              this["addType"]({"name": PL$32/*typename*/,
"dynamic": true}, PL$45/*p*/["value"]);
              if(! PL$34/*funClosure*/){
                PL$34/*funClosure*/ = this["newResult"]();
                PL$34/*funClosure*/["push"]("(function(){");
              };
              ;
              PL$44/*typeVarInit*/["push"]("var ");
              PL$44/*typeVarInit*/["push"](this["renderType"](PL$32/*typename*/));
              PL$44/*typeVarInit*/["push"](" = ");
              PL$44/*typeVarInit*/["push"](this["expectTypeVar"](this["parseExpression"](PL$45/*p*/["value"])));
              PL$44/*typeVarInit*/["push"](";\n");
              PL$44/*typeVarInit*/["push"]((("var " + this["getVariableName"](PL$32/*typename*/)) + " = "));
              PL$44/*typeVarInit*/["push"](this["renderType"](PL$32/*typename*/));
              PL$44/*typeVarInit*/["push"]("\n;");
              PL$44/*typeVarInit*/["push"]((("var " + this["getConstructorName"](PL$32/*typename*/)) + " = undefined;\n"));
              PL$44/*typeVarInit*/["push"](this["_typeReadyCode"]({"typename": PL$32/*typename*/}));
              PL$42/*templateTypesAr*/["push"](PL$32/*typename*/);}};
            ;
            PL$34/*funClosure*/["push"](PL$44/*typeVarInit*/);
          };
          ;
        };
        ;
        PL$46/*extraTypesRes*/ = this["newResult"]();
        if(PL$34/*funClosure*/){
          PL$34/*funClosure*/["push"]("var communicator = {fun: undefined};\n");
          PL$34/*funClosure*/["push"](PL$46/*extraTypesRes*/);
          PL$34/*funClosure*/["push"]("eval(\"communicator.fun = ");
        };
        ;
        PL$21/*res*/ = this["newResult"]();
        PL$47/*funDecl*/ = this["newResult"]();
        PL$48/*funRes*/ = this["newResult"]();
        PL$31/*i*/ = 0;
        PL$47/*funDecl*/["push"]("function");
        PL$49/*nameRes*/;
        if(PL$37/*hasName*/){
          this["functionName"] = PL$38/*nameStr*/;
          PL$47/*funDecl*/["push"](" ");
          PL$49/*nameRes*/ = this["newResult"]();
          PL$49/*nameRes*/["push"](this["getVariableName"](PL$38/*nameStr*/));
          PL$47/*funDecl*/["push"](PL$49/*nameRes*/);
        };
        ;
        PL$47/*funDecl*/["push"]("(");
        if((PL$18/*par*/["params"] && PL$18/*par*/["params"]["length"])){
          PL$31/*i*/ = 0;
          PL$50/*l*/ = PL$18/*par*/["params"]["length"];
          for(PL$31/*i*/;(PL$31/*i*/ < PL$50/*l*/);++PL$31/*i*/){{
            if(PL$31/*i*/){
              PL$47/*funDecl*/["push"](", ");
            };
            ;
            PL$47/*funDecl*/["push"](this["getVariableName"](PL$13/*identifierName*/(PL$18/*par*/["params"][PL$31/*i*/]["name"])));
            this["addLocalVariable"]({"name": PL$18/*par*/["params"][PL$31/*i*/]["name"],
"typename": (PL$18/*par*/["params"][PL$31/*i*/]["typename"] || "var"),
"parameter": true}, PL$18/*par*/["params"][PL$31/*i*/]);}};
          ;
        };
        ;
        PL$47/*funDecl*/["push"]("){");
        if(this["isAsmFun"](PL$33/*parParsed*/)){
          PL$47/*funDecl*/["push"](this["newLine"]());
          PL$47/*funDecl*/["push"]("\"use asm\";");
          PL$47/*funDecl*/["push"](this["newLine"]());
          this["asmMode"] = true;
        };
        ;
        PL$48/*funRes*/["push"](this["newLine"]());
        PL$51/*classesRes*/ = this["findClasses"](PL$18/*par*/["body"]);
        this["findVariables"](PL$18/*par*/["body"]);
        if(PL$30/*runExclusive*/){
          PL$48/*funRes*/["push"]((("if (!promiseland.profileHas(" + PL$10/*stringEncodeStr*/(PL$18/*par*/["frame"]["name"]["value"])) + ")){"));
          PL$48/*funRes*/["push"](this["newLine"]());
          if(PL$18/*par*/["promising"]){
            PL$48/*funRes*/["push"]((("var p = " + this["newPromiseStr"]()) + ";\n"));
            PL$48/*funRes*/["push"]("p.reject({id: 14, msg: \"function does not execute in this frame.\"});\n");
            PL$48/*funRes*/["push"]("return p;\n");
          }else{
          PL$48/*funRes*/["push"]("return;\n");
          };
          ;
          PL$48/*funRes*/["push"]("};\n");
        };
        ;
        PL$52/*addFront*/ = PL$15/*getExtraFromPar*/(PL$18/*par*/, "addFront");
        if(PL$52/*addFront*/){
          PL$48/*funRes*/["push"](PL$52/*addFront*/);
        };
        ;
        if(PL$18/*par*/["promising"]){
          if(PL$26/*parGivenPromiseNameStr*/){
            this["returnPromise"] = PL$26/*parGivenPromiseNameStr*/;
          }else{
          this["returnPromise"] = this["getUniqueName"]();
          PL$48/*funRes*/["push"](this["declareReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], PL$33/*parParsed*/)),
"parsed": PL$33/*parParsed*/,
"errorFun": this["getWarningFun"](PL$33/*parParsed*/)}));
          };
          ;
          this["tryCatchFunctionStr"] = this["getUniqueName"]();
          PL$48/*funRes*/["push"]((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ "));
          PL$48/*funRes*/["push"](this["runBeforeReturnRes"]);
          PL$48/*funRes*/["push"]((this["returnPromise"] + ".reject(e); }; }; };\n"));
          this["catchFunctionStr"] = this["getUniqueName"]();
          PL$48/*funRes*/["push"]((("var " + this["catchFunctionStr"]) + " = function(e){ "));
          PL$48/*funRes*/["push"](this["runBeforeReturnRes"]);
          PL$48/*funRes*/["push"]((this["returnPromise"] + ".reject(e); };\n"));
          this["promising"] = true;
          PL$21/*res*/["makePromising"]();
        };
        ;
        PL$53/*b*/ = PL$18/*par*/["body"];
        PL$54/*extraPar*/ = {};
        PL$53/*b*/["brackets"] = false;
        PL$54/*extraPar*/["preCode"] = this["additionalCodeFrontRes"];
        PL$54/*extraPar*/["postCode"] = this["newResult"]();
        PL$54/*extraPar*/["postCode"]["push"](this["getReturnCode"]({}));
        PL$54/*extraPar*/["postCode"]["push"](this["additionalCodeEndRes"]);
        PL$55/*block*/ = this["blockCreator"](PL$53/*b*/, PL$54/*extraPar*/);
        PL$56/*localVariablesAr*/ = this["localVariables"]["getArray"]();
        for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$56/*localVariablesAr*/["length"]);++PL$31/*i*/){{
          PL$57/*varname*/ = PL$56/*localVariablesAr*/[PL$31/*i*/]["key"];
          PL$24/*type*/ = this["getVariableType"](PL$57/*varname*/);
          if(PL$56/*localVariablesAr*/[PL$31/*i*/]["value"]["localFunction"]){
          }else{
          if(PL$56/*localVariablesAr*/[PL$31/*i*/]["value"]["parameter"]){
            PL$48/*funRes*/["push"](this["getProcessParameterCode"]({"name": this["getVariableName"](PL$57/*varname*/),
"type": PL$24/*type*/,
"errorFun": this["getWarningFun"](PL$18/*par*/),
"parsed": PL$18/*par*/}));
          }else{
          if(PL$56/*localVariablesAr*/[PL$31/*i*/]["value"]["declaration"]){
            PL$48/*funRes*/["push"](this["getDeclareVariableCode"]({"name": this["getVariableName"](PL$57/*varname*/),
"type": PL$24/*type*/,
"errorFun": this["getWarningFun"](PL$18/*par*/),
"parsed": PL$18/*par*/,
"declaration": PL$56/*localVariablesAr*/[PL$31/*i*/]["value"]["needsDeclaration"]}));
          }else{
          debugger;
          };
          };
          };
          if(! PL$27/*noUntrack*/){
            this["addBeforeReturn"](this["getDestroyVariableCode"]({"name": this["getVariableName"](PL$57/*varname*/),
"type": PL$24/*type*/,
"errorFun": this["getWarningFun"](PL$18/*par*/),
"parsed": PL$18/*par*/}), this["isTrackedClassConRes"](PL$24/*type*/, PL$18/*par*/));
          };
          ;
          this["usedVariablesMap"]["set"](PL$57/*varname*/, false);}};
        ;
        if(this["usedVariablesMap"]["get"]("arguments")){
          PL$48/*funRes*/["push"]((("var " + this["getVariableName"]("arguments")) + " = arguments;\n"));
          this["usedVariablesMap"]["set"]("arguments", false);
        };
        ;
        PL$48/*funRes*/["push"](PL$51/*classesRes*/);
        for(PL$31/*i*/ = 0;(PL$31/*i*/ < this["functionsAr"]["length"]);++PL$31/*i*/){{
          PL$48/*funRes*/["push"](this["functionsAr"][PL$31/*i*/]["res"]);
          PL$48/*funRes*/["push"](";");
          PL$48/*funRes*/["push"](this["newLine"]());}};
        ;
        if(PL$18/*par*/["promising"]){
          if(this["usingThis"]){
            PL$48/*funRes*/["push"]((("var " + this["thisExpression"]) + " = this;\n"));
          };
          ;
          PL$48/*funRes*/["push"]((this["tryCatchFunctionStr"] + "(function(){"));
          PL$48/*funRes*/["push"](this["newLine"]());
        };
        ;
        PL$48/*funRes*/["push"](this["indent"](PL$55/*block*/));
        PL$47/*funDecl*/["push"](PL$48/*funRes*/);
        if(PL$18/*par*/["promising"]){
          PL$47/*funDecl*/["addPost"]("})();\n");
          PL$47/*funDecl*/["addPost"](this["returnReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"parsed": PL$33/*parParsed*/,
"errorFun": this["getWarningFun"](PL$33/*parParsed*/)}));
          PL$47/*funDecl*/["addPost"]("}");
        }else{
        PL$47/*funDecl*/["push"]("}");
        };
        ;
        PL$58/*completeFun*/ = this["makeCompleteStatement"](PL$47/*funDecl*/);
        PL$59/*funNameScrewUp*/ = false;
        if((this["promising"] && PL$39/*hasReturnTypeName*/)){
          PL$60/*returnTypePromiseCheck*/ = this["newResult"]();
          PL$60/*returnTypePromiseCheck*/["push"]("(function(t){");
          PL$60/*returnTypePromiseCheck*/["push"](this["promisingReturnTypeCheck"]({"type": this["_returnType"],
"errorFun": this["getWarningFun"](PL$33/*parParsed*/),
"parsed": PL$33/*parParsed*/}));
          PL$60/*returnTypePromiseCheck*/["push"]("return t;})(");
          PL$60/*returnTypePromiseCheck*/["push"](PL$58/*completeFun*/);
          PL$60/*returnTypePromiseCheck*/["push"](")");
          PL$58/*completeFun*/ = PL$60/*returnTypePromiseCheck*/;
          PL$59/*funNameScrewUp*/ = true;
        };
        ;
        if(PL$34/*funClosure*/){
          PL$61/*handleExtras*/ = (function(PL$62/*dt*/){
          var PL$31/*i*/;

            ;
            if(PL$62/*dt*/["extraTypes"]){
              PL$31/*i*/ = 0;
              for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$62/*dt*/["extraTypes"]["length"]);++PL$31/*i*/){{
                PL$46/*extraTypesRes*/["push"](PL$62/*dt*/["extraTypes"][PL$31/*i*/]["res"]);
                PL$61/*handleExtras*/(PL$62/*dt*/["extraTypes"][PL$31/*i*/]["type"]);}};
              ;
            };
            ;
            ;});
          for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$42/*templateTypesAr*/["length"]);++PL$31/*i*/){{
            PL$62/*dt*/ = this["getType"](PL$42/*templateTypesAr*/[PL$31/*i*/], PL$18/*par*/);
            PL$61/*handleExtras*/(PL$62/*dt*/);}};
          ;
          PL$34/*funClosure*/["push"](PL$58/*completeFun*/, PL$18/*par*/, {"stringEncode": true});
          PL$34/*funClosure*/["push"](";\"); return communicator.fun; })()");
          PL$58/*completeFun*/ = this["makeCompleteStatement"](PL$34/*funClosure*/);
          PL$59/*funNameScrewUp*/ = true;
        };
        ;
        PL$63/*uniqueNameStr*/;
        if(PL$29/*runRemote*/){
          PL$64/*remoteClosure*/ = this["newResult"]();
          PL$63/*uniqueNameStr*/ = this["getUniqueName"]();
          PL$64/*remoteClosure*/["push"]("(function(f){\n");
          PL$64/*remoteClosure*/["push"](("promiseland.registerRemote(" + PL$10/*stringEncodeStr*/(PL$18/*par*/["frame"]["name"]["value"])));
          PL$64/*remoteClosure*/["push"](((((", " + PL$10/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$10/*stringEncodeStr*/(PL$63/*uniqueNameStr*/)) + ", f, "));
          PL$64/*remoteClosure*/["push"](this["renderType"](PL$40/*thisFunType*/, PL$33/*parParsed*/));
          PL$64/*remoteClosure*/["push"](");\n");
          PL$64/*remoteClosure*/["push"]((("if (promiseland.profileHas(" + PL$10/*stringEncodeStr*/(PL$18/*par*/["frame"]["name"]["value"])) + ")){\n"));
          PL$64/*remoteClosure*/["push"]("return f;\n");
          PL$64/*remoteClosure*/["push"]("}else{\n");
          PL$64/*remoteClosure*/["push"]("return function(){\n");
          PL$64/*remoteClosure*/["push"]((((("return promiseland.remoteExec(" + PL$10/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$10/*stringEncodeStr*/(PL$63/*uniqueNameStr*/)) + ", arguments);\n"));
          PL$64/*remoteClosure*/["push"]("}\n");
          PL$64/*remoteClosure*/["push"]("};\n");
          PL$64/*remoteClosure*/["push"]("})(");
          PL$64/*remoteClosure*/["push"](PL$58/*completeFun*/);
          PL$64/*remoteClosure*/["push"](")");
          PL$21/*res*/["push"](PL$64/*remoteClosure*/);
          PL$59/*funNameScrewUp*/ = true;
        }else{
        PL$21/*res*/["push"](PL$58/*completeFun*/);
        };
        ;
        PL$21/*res*/["setType"](PL$40/*thisFunType*/);
        this["unstack"]("isClassObject");
        this["unstack"]("inheritedAvailable");
        this["unstack"]("thisType");
        PL$65/*finalResult*/ = this["newResult"]();
        if(((PL$59/*funNameScrewUp*/ && PL$37/*hasName*/) && PL$36/*functionInfo*/["declaration"])){
          PL$65/*finalResult*/["push"]("var ");
          PL$65/*finalResult*/["push"](this["getVariableName"](PL$38/*nameStr*/));
          PL$65/*finalResult*/["push"](" = ");
          PL$49/*nameRes*/["replace"]("");
        };
        ;
        PL$65/*finalResult*/["push"](this["makeCompleteStatement"](PL$21/*res*/));
        PL$65/*finalResult*/["setType"](PL$40/*thisFunType*/);
        return PL$65/*finalResult*/;
        ;});
      this["expFunctionExpression"] = (function(PL$66/*value*/, PL$67/*declaration*/){
      var PL$68/*cp*/;
var PL$69/*funName*/;
var PL$48/*funRes*/;
var PL$70/*uv*/;
var PL$71/*name*/;
var PL$21/*res*/;

        ;
        if(! PL$67/*declaration*/){
          PL$66/*value*/["useLocalVariableName"] = true;
        };
        ;
        PL$68/*cp*/ = this["newInstance"](PL$66/*value*/, {"dynamicCode": (this["dynamicCode"] || this["isFunction"]),
"asmMode": this["asmMode"]});
        PL$69/*funName*/ = PL$68/*cp*/["getFunctionName"]();
        PL$48/*funRes*/ = PL$68/*cp*/["getFunctionRes"]();
        PL$70/*uv*/ = PL$68/*cp*/["_getUsedVairablesMap"]();
        PL$71/*name*/;
        PL$70/*uv*/["forEach"]((function(PL$66/*value*/, PL$71/*name*/){
        
          ;
          if((PL$66/*value*/ === true)){
            this["_addUsedVariable"](PL$71/*name*/);
          };
          ;
          ;}), this);
        PL$21/*res*/;
        if(((PL$69/*funName*/ && PL$48/*funRes*/) && PL$67/*declaration*/)){
          if(this["asmMode"]){
            PL$66/*value*/["hoist"] = false;
            this["addFunction"](PL$48/*funRes*/, PL$69/*funName*/, PL$66/*value*/);
          }else{
          PL$66/*value*/["hoist"] = true;
          this["addFunction"](PL$48/*funRes*/, PL$69/*funName*/, PL$66/*value*/);
          if(PL$67/*declaration*/){
            PL$21/*res*/ = this["newResult"]((("/* function " + PL$69/*funName*/) + " (){} - hoisted */"));
            PL$21/*res*/["setType"](PL$16/*statementType*/);
          }else{
          PL$21/*res*/ = this["newResult"](this["getVariableName"](PL$69/*funName*/));
          PL$21/*res*/["setType"](PL$48/*funRes*/["getType"]());
          };
          ;
          return PL$21/*res*/;
          };
          ;
        };
        ;
        PL$21/*res*/ = this["newResult"]();
        if(! PL$67/*declaration*/){
          PL$21/*res*/["push"]("(");
        };
        ;
        PL$21/*res*/["pushType"]((PL$48/*funRes*/ || PL$68/*cp*/["getResult"]()));
        if(! PL$67/*declaration*/){
          PL$21/*res*/["push"](")");
        };
        ;
        return PL$21/*res*/;
        ;});
      this["expFunctionDeclaration"] = (function(PL$66/*value*/){
      
        ;
        return this["expFunctionExpression"](PL$66/*value*/, true);
        ;});
      this["expMemberFunction"] = (function(PL$66/*value*/){
      
        ;
        return this["expFunctionExpression"](PL$66/*value*/);
        ;});
      this["functionsAr"] = [];
      this["addFunction"] = (function(PL$21/*res*/, PL$71/*name*/, PL$20/*parsed*/){
      
        ;
        this["resolveFunctionType"]({"name": PL$13/*identifierName*/(PL$71/*name*/),
"type": PL$21/*res*/["getType"]()}, PL$20/*parsed*/);
        if(PL$20/*parsed*/["hoist"]){
          this["functionsAr"]["push"]({"res": PL$21/*res*/,
"name": PL$71/*name*/});
        };
        ;
        ;});
      ;});
    PL$19/*f*/["apply"](PL$17/*parInstance*/, [PL$18/*par*/]);
    ;})); return;
  PL$1.resolve(); return;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();