// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorSelector=function(a){Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorSelector.initializeBase(this,[a])};Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorSelector.prototype={callMethod:function(){if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorSelector.callBaseMethod(this,"callMethod"))return false},setColor:function(a){Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorSelector.callBaseMethod(this,"setColor",[a]);this._designPanel._execCommand("forecolor",false,a)}};Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorSelector.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorSelector",Sys.Extended.UI.HTMLEditor.ToolbarButton.ColorSelector);