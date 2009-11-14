// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.

Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.OrderedList = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.OrderedList.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.OrderedList.prototype = {
    callMethod : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.OrderedList.callBaseMethod(this, "callMethod")) return false;
        this._designPanel._execCommand("InsertOrderedList");
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.OrderedList.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.OrderedList", Sys.Extended.UI.HTMLEditor.ToolbarButton.MethodButton);

