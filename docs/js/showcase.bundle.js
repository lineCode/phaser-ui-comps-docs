!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="docs/js/",o(o.s=0)}([
/*!*************************************!*\
  !*** multi ./examples/src/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,o){e.exports=o(/*! C:\WORK\Citadels\npm\phaser-ui-comps-docs\examples\src\index.js */1)},
/*!*******************************!*\
  !*** ./examples/src/index.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,o){"use strict";var n,r=o(/*! ./WindowTest */2),s=(n=r)&&n.__esModule?n:{default:n};var a={type:Phaser.AUTO,parent:"example",backgroundColor:"#ffffff",width:800,height:600,scene:{preload:function(){this.load.json("window_config","jsons/WindowTest.json"),this.load.multiatlas("window_atlas","atlases/WindowTest_images.json","atlases/")},create:function(){var e=this.add.ui_component(l.cache.json.get("window_config"),["window_atlas"]);(new s.default).appendClip(e)}},plugins:{global:[PhaserComps.Plugin.DefaultCfg]}},l=new Phaser.Game(a)},
/*!************************************!*\
  !*** ./examples/src/WindowTest.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();var r=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.setText("title","WOW SUCH TITLE!"),e._firstTab=new PhaserComps.UIComponents.UIButtonRadio(e,"tab_1","Buttons","buttons"),e._firstTab.on(PhaserComps.UIComponents.UIButtonRadio.EVENT_SELECT,e.onTabSelect,e),new PhaserComps.UIComponents.UIButtonRadio(e,"tab_2","Scrollbars","scroll",e._firstTab),new PhaserComps.UIComponents.UIButtonRadio(e,"tab_3","Progressbars","progress",e._firstTab),e.lastTab=new PhaserComps.UIComponents.UIButtonRadio(e,"tab_4","Other stuff","other",e._firstTab),e.btn_check=new PhaserComps.UIComponents.UIButtonSelect(e,"btn_check_last_tab","Enable last tab"),e.btn_check.on(PhaserComps.UIComponents.UIButtonSelect.EVENT_CLICK,e.onCheckLastTab,e),e.btn_check.select=!0,new PhaserComps.UIComponents.UIButton(e,"btn_1","Some button").on(PhaserComps.UIComponents.UIButton.EVENT_CLICK,function(){e.setText("status","You clicked some button")},e),new PhaserComps.UIComponents.UIButton(e,"btn_2","Other button").on(PhaserComps.UIComponents.UIButton.EVENT_CLICK,function(){e.setText("status","You clicked other button")},e),new PhaserComps.UIComponents.UIButton(e,"btn_3","Last button").enable=!1,new PhaserComps.UIComponents.UIScrollPanel(e,"txt_scrolling","scroll_bar_1","DIMENSIONS",!0);var o=new PhaserComps.UIComponents.UIScrollBar(e,"scroll_bar_2",!1);o.setValueBounds(50,250,20),o.on(PhaserComps.UIComponents.UIScrollBar.EVENT_CHANGE,e.onScrollBar2,e);var n=new PhaserComps.UIComponents.UIScrollBar(e,"scroll_bar_progress",!1);return n.on(PhaserComps.UIComponents.UIScrollBar.EVENT_CHANGE,e.onScrollBarProgress,e),e.progressBar=new PhaserComps.UIComponents.UIProgressBar(e,"progress_bar_1"),e.progressBar.value=n.value,e.progressBar2=new PhaserComps.UIComponents.UIProgressBar(e,"progress_bar_2"),e.progressBar2.value=n.value,e._firstTab.select=!0,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,PhaserComps.UIComponents.UIComponentPrototype),n(t,[{key:"onScrollBarProgress",value:function(e){this.progressBar.value=e,this.progressBar2.value=e}},{key:"onTabSelect",value:function(e){console.log("selected tab value:",e),this.doState()}},{key:"onCheckLastTab",value:function(){this.lastTab.enable=this.btn_check.select}},{key:"getStateId",value:function(){return this._firstTab?this._firstTab.valueSelected:"buttons"}},{key:"onScrollBar2",value:function(e){this.setText("txt_bar_value","Bar value: "+e)}}]),t}();t.default=r}]);