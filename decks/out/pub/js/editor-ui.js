(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var humane=require("humane-js").create({timeout:600});window.onGeneratorLoaded=function(e){function t(){g=L.contentWindow;var e=g&&g.$;if(e&&!e.editorLoaded){var t=g.document;t.addEventListener("dragover",function(e){c(e.clientX,e.clientY,!0),e.preventDefault()}),t.addEventListener("drop",function(e){e.preventDefault()}),pRef=g.pubRef||{};var i=pRef.relPath||"";v=e('<link rel="stylesheet" href="'+i+'/pub/css/pub-preview.css">'),e("head").append(v),v.get(0).disabled=!0,n();var a=e('<script src="'+i+'/pub/js/pub-preview.js"></script>');e("body").append(a),e.editorLoaded=!0,clearInterval(E)}}function n(){var e=v&&v.get(0);e&&(e.disabled?(e.disabled=!1,g.addEventListener("click",i,!0)):(e.disabled=!0,g.removeEventListener("click",i,!0)))}function i(t){for(var n,i=t.target;i&&"HTML"!==i.nodeName&&!i.getAttribute("data-render-html");)i=i.parentNode;i&&(n=i.getAttribute("data-render-html"))&&(d(e.fragment$[n]),t.preventDefault())}function a(t,n,i){d(t?e.fragment$[t+i]:e.fragment$[m.binding])}function d(e){l(),e?(m.$name.text(e._href),r(e._holdUpdates?e._holdText:e._hdr+e._txt),m.binding=e._href):(m.$name.text(""),r(""),m.binding="")}function r(e){var t=m.$edit.clone().val(e);m.$edit.replaceWith(t),m.$edit=t,m.$edit.on("keyup",o)}function o(){m.binding&&"hold"===e.clientUpdateFragmentText(m.binding,m.$edit.val())&&(m.holding=!0)}function l(){m.binding&&m.holding&&(e.clientUpdateFragmentText(m.binding,m.$edit.val(),!0),m.holding=!1)}function c(e,t,n){var i=x?e/b.clientWidth:(n?t:t-25)/(b.clientHeight-25),a=n?f+100*i:100*i;a>=0&&u(a)}function u(e){var t=!1;-1===e?(t=!0,e=s(10,f||Number(localStorage.editorSize)||50)):e%=100,(t||f!==e)&&(e&&(localStorage.editorSize=f=e),x?($(".left.col").css({width:e+"%",height:"100%"}),$(".right.col").css({width:100-e+"%",height:"100%"}),$(".handle").css({left:e+"%",top:"0"})):($(".top.row").css({height:e+"%",width:"100%"}),$(".bottom.row").css({height:100-e+"%",width:"100%"}),$(".handle").css({left:"0",top:e/100*(b.clientHeight-25)+25+"px"})))}function s(e,t){return e>t?e:t}var f,v,g,h=e.opts,p=(e.util,h.log),b=$(".outer").get(0),m={$name:$(".name"),$edit:$("textarea.editor"),$save:$(".savebutton"),binding:""},w=$("iframe.preview"),L=w.get(0),x=!0,T="pane-handle-drag",E=setInterval(t,150);e.on("nav",a),e.on("loaded",a),e.on("notify",function(e){p(e),humane.log(e)}),$(window).on("beforeunload",function(){p("beforeunload"),e.clientSaveHoldText(),e.clientSaveUnThrottled()}),$(".editbutton").click(n),h.staticHost&&$(".savebutton").removeClass("hide").click(e.clientSave),$(".handle").attr("draggable","true").get(0).addEventListener("dragstart",function(e){e.dataTransfer.setData("Text",T)}),document.addEventListener("dragover",function(e){c(e.clientX,e.clientY,!1),e.preventDefault()}),document.addEventListener("drop",function(e){e.preventDefault()}),u(-1)};
},{"humane-js":2}],2:[function(require,module,exports){
!function(t,e,i){"undefined"!=typeof module?module.exports=i(t,e):"function"==typeof define&&"object"==typeof define.amd?define(i):e[t]=i(t,e)}("humane",this,function(t,e){var i=window,n=document,s={on:function(t,e,n){"addEventListener"in i?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},off:function(t,e,n){"removeEventListener"in i?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},bind:function(t,e){return function(){t.apply(e,arguments)}},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},config:function(t,e){return null!=t?t:e},transSupport:!1,useFilter:/msie [678]/i.test(navigator.userAgent),_checkTransition:function(){var t=n.createElement("div"),e={webkit:"webkit",Moz:"",O:"o",ms:"MS"};for(var i in e)i+"Transition"in t.style&&(this.vendorPrefix=e[i],this.transSupport=!0)}};s._checkTransition();var o=function(t){t||(t={}),this.queue=[],this.baseCls=t.baseCls||"humane",this.addnCls=t.addnCls||"",this.timeout="timeout"in t?t.timeout:2500,this.waitForMove=t.waitForMove||!1,this.clickToClose=t.clickToClose||!1,this.timeoutAfterMove=t.timeoutAfterMove||!1,this.container=t.container;try{this._setupEl()}catch(e){s.on(i,"load",s.bind(this._setupEl,this))}};return o.prototype={constructor:o,_setupEl:function(){var t=n.createElement("div");if(t.style.display="none",!this.container){if(!n.body)throw"document.body is null";this.container=n.body}this.container.appendChild(t),this.el=t,this.removeEvent=s.bind(function(){var t=s.config(this.currentMsg.timeoutAfterMove,this.timeoutAfterMove);t?setTimeout(s.bind(this.remove,this),t):this.remove()},this),this.transEvent=s.bind(this._afterAnimation,this),this._run()},_afterTimeout:function(){s.config(this.currentMsg.waitForMove,this.waitForMove)?this.removeEventsSet||(s.on(n.body,"mousemove",this.removeEvent),s.on(n.body,"click",this.removeEvent),s.on(n.body,"keypress",this.removeEvent),s.on(n.body,"touchstart",this.removeEvent),this.removeEventsSet=!0):this.remove()},_run:function(){if(!this._animating&&this.queue.length&&this.el){this._animating=!0,this.currentTimer&&(clearTimeout(this.currentTimer),this.currentTimer=null);var t=this.queue.shift(),e=s.config(t.clickToClose,this.clickToClose);e&&(s.on(this.el,"click",this.removeEvent),s.on(this.el,"touchstart",this.removeEvent));var i=s.config(t.timeout,this.timeout);i>0&&(this.currentTimer=setTimeout(s.bind(this._afterTimeout,this),i)),s.isArray(t.html)&&(t.html="<ul><li>"+t.html.join("<li>")+"</ul>"),this.el.innerHTML=t.html,this.currentMsg=t,this.el.className=this.baseCls,s.transSupport?(this.el.style.display="block",setTimeout(s.bind(this._showMsg,this),50)):this._showMsg()}},_setOpacity:function(t){if(s.useFilter)try{this.el.filters.item("DXImageTransform.Microsoft.Alpha").Opacity=100*t}catch(e){}else this.el.style.opacity=String(t)},_showMsg:function(){var t=s.config(this.currentMsg.addnCls,this.addnCls);if(s.transSupport)this.el.className=this.baseCls+" "+t+" "+this.baseCls+"-animate";else{var e=0;this.el.className=this.baseCls+" "+t+" "+this.baseCls+"-js-animate",this._setOpacity(0),this.el.style.display="block";var i=this,n=setInterval(function(){1>e?(e+=.1,e>1&&(e=1),i._setOpacity(e)):clearInterval(n)},30)}},_hideMsg:function(){var t=s.config(this.currentMsg.addnCls,this.addnCls);if(s.transSupport)this.el.className=this.baseCls+" "+t,s.on(this.el,s.vendorPrefix?s.vendorPrefix+"TransitionEnd":"transitionend",this.transEvent);else var e=1,i=this,n=setInterval(function(){e>0?(e-=.1,0>e&&(e=0),i._setOpacity(e)):(i.el.className=i.baseCls+" "+t,clearInterval(n),i._afterAnimation())},30)},_afterAnimation:function(){s.transSupport&&s.off(this.el,s.vendorPrefix?s.vendorPrefix+"TransitionEnd":"transitionend",this.transEvent),this.currentMsg.cb&&this.currentMsg.cb(),this.el.style.display="none",this._animating=!1,this._run()},remove:function(t){var e="function"==typeof t?t:null;s.off(n.body,"mousemove",this.removeEvent),s.off(n.body,"click",this.removeEvent),s.off(n.body,"keypress",this.removeEvent),s.off(n.body,"touchstart",this.removeEvent),s.off(this.el,"click",this.removeEvent),s.off(this.el,"touchstart",this.removeEvent),this.removeEventsSet=!1,e&&this.currentMsg&&(this.currentMsg.cb=e),this._animating?this._hideMsg():e&&e()},log:function(t,e,i,n){var s={};if(n)for(var o in n)s[o]=n[o];if("function"==typeof e)i=e;else if(e)for(var o in e)s[o]=e[o];return s.html=t,i&&(s.cb=i),this.queue.push(s),this._run(),this},spawn:function(t){var e=this;return function(i,n,s){return e.log.call(e,i,n,s,t),e}},create:function(t){return new o(t)}},new o});
},{}]},{},[1])

