// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton=function(b){var a=this;Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.initializeBase(a,[b]);a._onclick_option$delegate=Function.createDelegate(a,a._onclick_option);a._onchange$delegate=Function.createDelegate(a,a._onchange)};Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.prototype={initialize:function(){var a=this,c=a.get_element().id;Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.callBaseMethod(a,"initialize");a._select=$get(c+"_select");$addHandler(a._select,"change",a._onchange$delegate);for(var b=0;b<a._select.options.length;b++){var d=a._select.options[b];$addHandler(d,"click",a._onclick_option$delegate)}},dispose:function(){var a=this;for(var b=0;b<a._select.options.length;b++){var c=a._select.options[b];$removeHandler(c,"click",a._onclick_option$delegate)}$removeHandler(a._select,"change",a._onchange$delegate);Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.callBaseMethod(a,"dispose")},isImage:function(){return false},callMethod:function(){return true},_onclick_option:function(b){if(!this.isEnable())return false;var a=b.target;a.parentNode.value=a.value;Sys.Extended.UI.HTMLEditor._stopEvent(b);if(!Sys.Extended.UI.HTMLEditor.isSafari)return false;this.callMethod(a.parentNode,b);return true},_onchange:function(a){if(!this.isEnable())return false;var b=a.target;Sys.Extended.UI.HTMLEditor._stopEvent(a);this.callMethod(b,a);return true}};Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton",Sys.Extended.UI.HTMLEditor.ToolbarButton.CommonButton);