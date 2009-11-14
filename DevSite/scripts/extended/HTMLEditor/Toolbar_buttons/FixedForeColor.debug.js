// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.

Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedForeColor = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedForeColor.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedForeColor.prototype = {
    setColor : function(color) {
        this._designPanel._execCommand("forecolor", false, color);
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedForeColor.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedForeColor", Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedColorButton);

