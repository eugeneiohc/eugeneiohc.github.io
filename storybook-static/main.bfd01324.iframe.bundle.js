(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{483:function(module,exports,__webpack_require__){__webpack_require__(484),__webpack_require__(645),__webpack_require__(646),__webpack_require__(841),__webpack_require__(842),__webpack_require__(848),__webpack_require__(849),__webpack_require__(847),__webpack_require__(843),__webpack_require__(850),__webpack_require__(844),__webpack_require__(845),__webpack_require__(846),module.exports=__webpack_require__(839)},551:function(module,exports){},646:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(209)},839:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(209).configure)([__webpack_require__(840)],module,!1)}).call(this,__webpack_require__(203)(module))},840:function(module,exports,__webpack_require__){var map={"./Box/Box.stories.tsx":851};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=840},846:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject);var _templateObject,client_api=__webpack_require__(858),esm=__webpack_require__(4),client=__webpack_require__(209),taggedTemplateLiteral=__webpack_require__(462),emotion_element_99289b21_browser_esm=(__webpack_require__(0),__webpack_require__(54)),emotion_react_browser_esm=__webpack_require__(300),objectSpread2=__webpack_require__(51),colors={white:"#FFFFFF",black:"#000000",gray20:"#333333",gray40:"#666666",blue80:"#61dafb"},baseFontStyle={color:colors.black,fontSize:16,fontFamily:"'Ubuntu'"},theme={colors:colors,textStyles:{default:Object(objectSpread2.a)({},baseFontStyle),sm:Object(objectSpread2.a)(Object(objectSpread2.a)({},baseFontStyle),{},{fontSize:12}),lg:Object(objectSpread2.a)(Object(objectSpread2.a)({},baseFontStyle),{},{fontSize:20}),code:Object(objectSpread2.a)(Object(objectSpread2.a)({},baseFontStyle),{},{fontFamily:"'Courier New'"}),link:Object(objectSpread2.a)(Object(objectSpread2.a)({},baseFontStyle),{},{color:colors.blue80})}},jsx_runtime=__webpack_require__(80),ThemeProvider_ThemeProvider=function ThemeProvider(_ref){var children=_ref.children;return Object(jsx_runtime.jsxs)(emotion_element_99289b21_browser_esm.c,{theme:theme,children:[Object(jsx_runtime.jsx)(emotion_react_browser_esm.a,{styles:Object(emotion_react_browser_esm.b)(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n        @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');\n        body {\n          padding: 0;\n          margin: 0;\n        }\n        body * {\n          box-sizing: border-box;\n        }\n        h1,\n        h2,\n        h3,\n        h4,\n        h5 {\n          margin: 0;\n        }\n      "])))}),children]})};try{ThemeProvider_ThemeProvider.displayName="ThemeProvider",ThemeProvider_ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider_ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/components/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object(client.addDecorator)((function(storyFn){return Object(jsx_runtime.jsx)(ThemeProvider_ThemeProvider,{children:storyFn()})})),Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},851:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicExample",(function(){return Box_stories_BasicExample}));var objectSpread2=__webpack_require__(51),objectWithoutProperties=(__webpack_require__(0),__webpack_require__(463)),jsx_runtime=__webpack_require__(80),_excluded=["as","width","height","spacing","p","px","py","pt","pl","pr","pb","m","mx","my","mt","ml","mr","mb","display","flex"],isDef=function isDef(value){return void 0!==value},Box_Box=function Box(_ref){var _ref2,_ref3,_ref4,_ref5,_ref6,_ref7,_ref8,_ref9,_ref$as=_ref.as,Component=void 0===_ref$as?"div":_ref$as,width=_ref.width,height=_ref.height,spacing=_ref.spacing,_ref$p=_ref.p,p=void 0===_ref$p?0:_ref$p,px=_ref.px,py=_ref.py,pt=_ref.pt,pl=_ref.pl,pr=_ref.pr,pb=_ref.pb,_ref$m=_ref.m,m=void 0===_ref$m?0:_ref$m,mx=_ref.mx,my=_ref.my,mt=_ref.mt,ml=_ref.ml,mr=_ref.mr,mb=_ref.mb,display=_ref.display,flex=_ref.flex,props=Object(objectWithoutProperties.a)(_ref,_excluded);return Object(jsx_runtime.jsx)(Component,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{css:{width:width,height:height,gap:spacing,padding:isDef(p)||isDef(px)||isDef(py)||isDef(pt)||isDef(pl)||isDef(pr)||isDef(pb)?"".concat(null!==(_ref2=null!=pt?pt:py)&&void 0!==_ref2?_ref2:p,"px ").concat(null!==(_ref3=null!=pr?pr:px)&&void 0!==_ref3?_ref3:p,"px ").concat(null!==(_ref4=null!=pb?pb:py)&&void 0!==_ref4?_ref4:p,"px ").concat(null!==(_ref5=null!=pl?pl:px)&&void 0!==_ref5?_ref5:p,"px "):void 0,margin:isDef(m)||isDef(mx)||isDef(my)||isDef(mt)||isDef(ml)||isDef(mr)||isDef(mb)?"".concat(null!==(_ref6=null!=mt?mt:my)&&void 0!==_ref6?_ref6:m,"px ").concat(null!==(_ref7=null!=mr?mr:mx)&&void 0!==_ref7?_ref7:m,"px ").concat(null!==(_ref8=null!=mb?mb:my)&&void 0!==_ref8?_ref8:m,"px ").concat(null!==(_ref9=null!=ml?ml:mx)&&void 0!==_ref9?_ref9:m,"px "):void 0,display:display,flex:flex}}))};try{isDef.displayName="isDef",isDef.__docgenInfo={description:"",displayName:"isDef",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Box/Box.tsx#isDef"]={docgenInfo:isDef.__docgenInfo,name:"isDef",path:"src/components/Box/Box.tsx#isDef"})}catch(__react_docgen_typescript_loader_error){}try{Box_Box.displayName="Box",Box_Box.__docgenInfo={description:"",displayName:"Box",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"string | number"}},p:{defaultValue:{value:"0"},description:"",name:"p",required:!1,type:{name:"string | number"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"string | number"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"string | number"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"string | number"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"string | number"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"string | number"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"string | number"}},m:{defaultValue:{value:"0"},description:"",name:"m",required:!1,type:{name:"string | number"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"string | number"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"string | number"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"string | number"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Box/Box.tsx#Box"]={docgenInfo:Box_Box.__docgenInfo,name:"Box",path:"src/components/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Box",component:Box_Box,args:{width:240,height:240,p:16,pb:48}};var Box_stories_BasicExample=function BasicExample(args){return Object(jsx_runtime.jsx)(Box_Box,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{css:{border:"1px solid #CCC",backgroundColor:"#EEE"},children:Object(jsx_runtime.jsx)("div",{css:{width:"100%",height:"100%",backgroundColor:"#DDD",border:"1px solid #999"}})}))};Box_stories_BasicExample.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <Box {...args} css = {{ border: '1px solid #CCC', backgroundColor: '#EEE' }}>\n    <div css = {{ width: '100%', height: '100%', backgroundColor: '#DDD', border: '1px solid #999' }}/>\n  </Box>\n)"}},Box_stories_BasicExample.parameters)}},[[483,2,3]]]);