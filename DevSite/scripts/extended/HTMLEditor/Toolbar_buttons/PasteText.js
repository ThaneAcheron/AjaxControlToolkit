// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");Sys.Extended.UI.HTMLEditor.ToolbarButton.PasteText=function(a){Sys.Extended.UI.HTMLEditor.ToolbarButton.PasteText.initializeBase(this,[a])};Sys.Extended.UI.HTMLEditor.ToolbarButton.PasteText.prototype={callMethod:function(){if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.PasteText.callBaseMethod(this,"callMethod"))return false;var a=this._designPanel;if(Sys.Extended.UI.HTMLEditor.isIE){a._saveContent();a.openWait();setTimeout(function(){a._paste(false);a.closeWait()},0)}else{var b=a._getSelection(),d=a._createRange(b),c=String.format(Sys.Extended.UI.Resources.HTMLEditor_toolbar_button_Use_verb,Sys.Extended.UI.HTMLEditor.isSafari&&navigator.userAgent.indexOf("mac")!=-1?"Apple-V":"Ctrl-V"),e=String.format(Sys.Extended.UI.Resources.HTMLEditor_toolbar_button_OnPastePlainText,c);alert(e);setTimeout(function(){a._removeAllRanges(b);a._selectRange(b,d)},0);a.isPlainText=true}}};Sys.Extended.UI.HTMLEditor.ToolbarButton.PasteText.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.PasteText",Sys.Extended.UI.HTMLEditor.ToolbarButton.MethodButton);