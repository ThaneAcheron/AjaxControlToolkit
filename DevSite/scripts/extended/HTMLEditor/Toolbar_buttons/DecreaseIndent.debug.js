// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.

Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.DecreaseIndent = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.DecreaseIndent.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.DecreaseIndent.prototype = {
    callMethod : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.DecreaseIndent.callBaseMethod(this, "callMethod")) return false;
        this._designPanel._execCommand("Outdent");
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.DecreaseIndent.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.DecreaseIndent", Sys.Extended.UI.HTMLEditor.ToolbarButton.MethodButton);

