!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.shevyjs=e():t.shevyjs=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const i={majorSecond:[1.802,1.602,1.424,1.266,1.125,1],minorThird:[2.488,2.074,1.728,1.44,1.2,1],majorThird:[3.052,2.441,1.953,1.563,1.25,1],perfectFourth:[4.209,3.157,2.369,1.777,1.333,1],augmentedFourth:[5.653,3.998,2.827,1.999,1.414,1]},o={baseFontSize:"16px",baseLineHeight:1.5,baseFontScale:[3,2.5,2,1.5,1.25,1],addMarginBottom:!0,proximity:!1,proximityFactor:.85},r=["h1","h2","h3","h4","h5","h6"],s=t=>parseFloat(t),a=t=>{const e=t.match(/px|r?em$/);if(!e)throw new Error("Unsupported font unit: Shevy only supports px, em, or rem.");return e[0]},c=t=>{if(Array.isArray(t))return(t=>t.length<=6?t:t.slice(0,6))(t);if(i.hasOwnProperty(t))return i[t];throw new Error(`No Font Scale Preset Found for "${t}", the presets available are: "${Object.keys(i)}"`)};function u(t,e){const{baseFontSize:n}=t;return`${s(n)*e}${a(n)}`}function h(t,e){const{lineHeightSpacing:n}=t,i=u(t,e),o=s(i),r=n(),a=s(r);let c=0,h=1;if(o<=a)c=a/o;else{for(;s(n(h))<o;)h+=.5;c=s(n(h))/o}return c}function f(t,e,n){if(!n)return;const{baseSpacing:i}=t,o=i(),r=a(o);if("em"===r){const n=u(t,e),i=s(n);return`${s(o)/i}${r}`}return o}n.d(e,"default",(function(){return p}));class p{constructor(t){const e={...o,...t},{baseFontSize:n,baseLineHeight:i,baseFontScale:s,addMarginBottom:p,proximity:l,proximityFactor:b}=e;this.baseFontSize=n,this.baseFontUnit=a(n),this.baseLineHeight=i,this.baseFontScale=c(s),this.addMarginBottom=p,this.proximity=l,this.proximityFactor=b,this.lineHeightSpacing=this.lineHeightSpacing.bind(this),this.baseSpacing=this.baseSpacing.bind(this),this.baseFontScale.forEach((t,e)=>{this[r[e]]={fontSize:u(this,t),lineHeight:h(this,t),marginBottom:f(this,t,p)}}),this.body={fontSize:this.baseFontSize,lineHeight:this.baseLineHeight},this.content={fontSize:this.baseFontSize,lineHeight:this.baseLineHeight,marginBottom:p?this.baseSpacing():void 0}}lineHeightSpacing(t=1){const{baseFontSize:e,baseLineHeight:n}=this;return`${s(e)*n*t}${a(e)}`}baseSpacing(t=1){const{baseFontSize:e,baseLineHeight:n,proximity:i,proximityFactor:o}=this;let r=s(e)*n*t;return i&&(r*=o),`${r}${a(e)}`}}}])}));
//# sourceMappingURL=index.umd.js.map