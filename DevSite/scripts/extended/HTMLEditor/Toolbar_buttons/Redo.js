// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo=function(a){Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo.initializeBase(this,[a])};Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo.prototype={callMethod:function(){if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo.callBaseMethod(this,"callMethod"))return false;this._designPanel.redo()}};Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo",Sys.Extended.UI.HTMLEditor.ToolbarButton.MethodButton);