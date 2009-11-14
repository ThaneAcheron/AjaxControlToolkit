// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.Popups");Sys.Extended.UI.HTMLEditor.Popups.Popup=function(b){var a=this;Sys.Extended.UI.HTMLEditor.Popups.Popup.initializeBase(a,[b]);a._iframe=null;a._top=0;a._left=0;a._doc=null;a._initialContent="";a._cssPath="";a._autoDimensions=true;a._registeredFields=[];a._registeredHandlers=[];a._app_onload$delegate=Function.createDelegate(a,a._app_onload);a.isOpened=false;a.isLoaded=false;a.isLoading=false};Sys.Extended.UI.HTMLEditor.Popups.Popup.prototype={getDocument:function(){return this._doc},getPopupMediator:function(){if(this._iframe.contentWindow&&this._iframe.contentWindow.popupMediator)return this._iframe.contentWindow.popupMediator;else return null},get_registeredFields:function(){return this._registeredFields},set_registeredFields:function(value){this._registeredFields=eval(value)},get_registeredHandlers:function(){return this._registeredHandlers},set_registeredHandlers:function(value){this._registeredHandlers=eval(value)},get_initialContent:function(){return this._initialContent},set_initialContent:function(a){this._initialContent=a},get_cssPath:function(){return this._cssPath},set_cssPath:function(a){this._cssPath=a},get_autoDimensions:function(){return this._autoDimensions},set_autoDimensions:function(a){this._autoDimensions=a},get_iframe:function(){return this._iframe},set_iframe:function(a){this._iframe=a},checkCorrectLoaded:function(c){var a=this,b=a;if(b.isLoaded&&(b._iframe.style.height=="0px"||b._iframe.style.width=="0px"))a.isLoaded=false;if(!a.isLoaded){!a.isLoading&&a.reload();typeof c!="undefined"&&setTimeout(c,10);return false}return true},_baseOpen:function(b,e,d){var f="undefined",a=this,c=a;if(!a.checkCorrectLoaded(function(){c._baseOpen(b,e,d)}))return;var g=a.get_element();if(typeof d!=f)a._left=parseInt(d);if(typeof e!=f)a._top=parseInt(e);g.style.top=a._top+"px";g.style.left=a._left+"px";setTimeout(function(){typeof b=="function"&&c._onDocumentLoaded(b);c.isOpened=true},0)},open:function(a,c,b){this._baseOpen(a,c,b)},close:function(a){var b=this.get_element();this.isOpened=false;b.style.top="-2000px";b.style.left="-2000px";typeof a=="function"&&a()},reload:function(){var a=this;a.isLoading=true;var c=a.get_element(),d=c.parentNode;document.body.appendChild(c);d.appendChild(a.get_element());a._doc=a._iframe.contentWindow.document;a._doc.open();var b=new Sys.StringBuilder;b.append('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"><html><head>');a._cssPath.length>0&&b.append('<link rel="stylesheet" href="'+a._cssPath+'" media="all" />');b.append("<script>var __loaded__ = false;</sc"+"ript></head><body style='margin:0px; padding:0px; border-width:0px;' onload='__loaded__ = true;'>");a._autoDimensions&&b.append("<table cellspacing='0' cellpadding='0' border='0'><tr><td>");b.append(a._initialContent);a._autoDimensions&&b.append("</td></tr></table>");b.append("</body></html>");a._doc.write(b.toString());a._doc.close();a.isLoaded=false;a._afterReload()},_afterReload:function(){var e=true,g="TEXTAREA",d=false,c=this,b=c._iframe.contentWindow,a=c;c.isLoaded=b.__loaded__;if(!(a._doc.body&&a._doc.body.innerHTML))c.isLoaded=d;if(!c.isLoaded){setTimeout(function(){a._afterReload()},10);return}c.isLoaded=d;b.popupMediator={};b.popupMediator.registeredFields=c._registeredFields;b.popupMediator.registeredHandlers=c._registeredHandlers;b.popupMediator.get_callMethodByName=function(e){for(var c=b.popupMediator.registeredHandlers,a=0;a<c.length;a++){var d=c[a];if(d.name==e)return d.callMethod}return null};b.popupMediator.set_callMethodByName=function(f,e){for(var c=b.popupMediator.registeredHandlers,a=0;a<c.length;a++){var d=c[a];if(d.name==f)d.callMethod=e}};b.popupMediator.getField=function(e){for(var c=b.popupMediator.registeredFields,a=0;a<c.length;a++){var d=c[a];if(d.name==e)return b.document.getElementById(d.clientID)}return null};b.Sys=Sys;for(var f=0;f<c._registeredHandlers.length;f++)$find(c._registeredHandlers[f].clientID).activate(b.document.getElementById(c._registeredHandlers[f].clientID));if(Sys.Extended.UI.HTMLEditor.isIE)a._doc.onselectstart=function(){var c=a._iframe.contentWindow.event,b=c.srcElement.tagName.toUpperCase();if(b=="INPUT"||b==g)return e;return d};else{a._doc.onmousedown=function(b){var a=b.target.tagName.toUpperCase();if(a=="INPUT"||a==g||a=="SELECT")return e;if(Sys.Extended.UI.HTMLEditor.isSafari)if(a=="TABLE"||a=="TR"||a=="TD"||a=="DIV")return e;return d};for(var h=a._doc.getElementsByTagName("input"),f=0;f<h.length;f++)h[f].setAttribute("autocomplete","off")}if(c._autoDimensions){a._iframe.style.height="1000px";a._iframe.style.width="1000px";setTimeout(function(){a._iframe.style.height=a._doc.body.firstChild.offsetHeight+"px";a._iframe.style.width=a._doc.body.firstChild.offsetWidth+"px";a.isLoaded=e;a.isLoading=d},0)}else{a.isLoaded=e;a.isLoading=d}},_onDocumentLoaded:function(b){var a=this,c=a;if(!a.isLoaded){setTimeout(function(){c._onDocumentLoaded(b)},10);return}a.isLoaded=true;b(a._iframe.contentWindow)},initialize:function(){this.__appLoaded__=false;Sys.Extended.UI.HTMLEditor.Popups.Popup.callBaseMethod(this,"initialize");Sys.Application.add_load(this._app_onload$delegate)},dispose:function(){var a=this;Sys.Application.remove_load(a._app_onload$delegate);a.isOpened&&a.close();Sys.Extended.UI.HTMLEditor.Popups.Popup.callBaseMethod(a,"dispose")},_app_onload:function(){var a=this;if(a.__appLoaded__)return;a.__appLoaded__=true;var b=a.get_element();if(Sys.Extended.UI.HTMLEditor.isReallyVisible(b)){a._parentNode_=b.parentNode;a.reload()}}};Sys.Extended.UI.HTMLEditor.Popups.Popup.registerClass("Sys.Extended.UI.HTMLEditor.Popups.Popup",Sys.UI.Control);