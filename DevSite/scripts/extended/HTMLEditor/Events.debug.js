// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Public License.
// See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL.
// All other rights reserved.

Type.registerNamespace("Sys.Extended.UI.HTMLEditor");

Sys.Extended.UI.HTMLEditor.ActiveModeChangedArgs = function(oldMode, newMode, editPanel)     
{     
  if (arguments.length != 3) throw Error.parameterCount();     
  
  //Calling the base class constructor     
  Sys.Extended.UI.HTMLEditor.ActiveModeChangedArgs.initializeBase(this);     
  this._oldMode = oldMode;     
  this._newMode = newMode;     
  this._editPanel = editPanel;     
}     
  
Sys.Extended.UI.HTMLEditor.ActiveModeChangedArgs.prototype =     
{     
  get_oldMode : function()     
  {     
    return this._oldMode;     
  },       
  get_newMode : function()     
  {     
    return this._newMode;     
  },
  get_editPanel : function()     
  {     
    return this._editPanel;     
  }     
}     
  
Sys.Extended.UI.HTMLEditor.ActiveModeChangedArgs.registerClass('Sys.Extended.UI.HTMLEditor.ActiveModeChangedArgs', Sys.EventArgs);
